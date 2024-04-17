/* eslint-disable @typescript-eslint/no-explicit-any */
import toast, { Toaster } from "react-hot-toast";
import AnimationWrapper from "../../shared/PageAnimation";
import { AuthPageType } from "../../shared/types/AuthType";

import googleIcon from "../../assets/imgs/google.png";
import InputBox from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { emailRegex, passwordRegex } from "../../shared/constants/constant";
import { Auth } from "../../services/apis/AuthAPIS";
import { useDispatch } from "react-redux";
import { loadAuthDetails } from "../../store/slices/Auth.slice";
import { storeInLocalStorage } from "../../utils/LocalStorage";

const UserAuth = ({ type }: AuthPageType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: MouseEvent) => {
    const serverRoute = type === "sign-in" ? "/signin" : "/signup";
    e.preventDefault();

    const form = new FormData();
    // add formElement while working on it
    const formData: any = {};
    for (const [key, value] of form.entries()) {
      formData[key] = value;
    }

    const { fullname, email, password } = formData;

    if (fullname) {
      if (fullname.length < 3) {
        return toast.error("fullname must be grater than 3.");
      }
    }

    if (!email.length) {
      return toast.error("email should not be empty.");
    }

    if (!emailRegex.test(email)) {
      return toast.error("email not valid.");
    }

    if (!passwordRegex.test(password)) {
      return toast.error("Invalid password.");
    }

    makeAuthentication(serverRoute, formData);
  };

  const makeAuthentication = async (route: any, reqData: any) => {
    const { data } = await Auth(route, reqData);
    storeInLocalStorage("user", JSON.stringify(data));
    dispatch(loadAuthDetails(data));
    navigate("/");
  };

  return (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <Toaster />
        <form id="formElement" className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type == "sign-in" ? "Welcome back" : "Join us today"}
          </h1>
          {type !== "sign-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full name"
              icon="fi-rr-user"
            />
          ) : null}
          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-rr-envelope"
          />
          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button
            className="btn-dark center mt-14"
            type="submit"
            onClick={handleSubmit}
          >
            {type.replace("-", " ")}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>
          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} alt="" className="w-5" />
            continue with google
          </button>

          {type === "sign-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-black text-xl ml-1">
                Join us today
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already member?{" "}
              <Link to="/signin" className="underline text-black text-xl ml-1">
                Sign in here
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuth;
