import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import UserNaigationMenu from "../UserNavMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  const [userNavPanel, setUserNavPanel] = useState(false);
  const { access_token, profile_img } = useSelector(
    (state: RootState) => state.auth.userDetails,
  );
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchFunc = (e: any) => {
    const query = e.target.value;
    if (e.keyCode === 13 && query.length) {
      navigate(`/search/${query}`);
    }
  };

  const handleUserNavPanel = () => {
    setUserNavPanel((prev) => !prev);
  };

  const handleBlurUserNavPanel = () => {
    setTimeout(() => {
      setUserNavPanel(false);
    }, 1000);
  };

  return (
    <>
      <nav className="navbar z-50">
        <Link to="/" className="flex-none w-10">
          <img src={logo} alt="Logo" className="flex-none w-10" />
        </Link>

        <div
          className={
            "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
            (searchBoxVisibility ? "show" : "hide")
          }
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-gray md:pl-12"
            onKeyDown={handleSearchFunc}
          />
          <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
        </div>
        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <button
            className="md:hidden bg-gray w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => setSearchBoxVisibility((currVal) => !currVal)}
          >
            <i className="fi fi-rr-search text-xl"></i>
          </button>

          <Link to="/editor" className="hidden md:flex gap-2 link">
            <p>Write</p>
            <i className="fi fi-rr-file-edit"></i>
          </Link>

          {access_token ? (
            <>
              <Link to="/dadshboard/notification">
                <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                  <i className="fi fi-rr-bell text-xl mt-1 block"></i>
                </button>
              </Link>

              <div
                className="relative"
                onClick={handleUserNavPanel}
                onBlur={handleBlurUserNavPanel}
              >
                <button className="w-12 h-12 mt-1">
                  <img
                    src={profile_img}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </button>
                {userNavPanel ? <UserNaigationMenu /> : null}
              </div>
            </>
          ) : (
            <>
              <Link className="btn-dark py-2" to="/signin">
                Sign In
              </Link>
              <Link className="btn-light py-2 hidden md:block" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
