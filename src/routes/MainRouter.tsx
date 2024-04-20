/* eslint-disable react-hooks/exhaustive-deps */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import { Suspense, lazy, useEffect } from "react";
import { getFromLocalStorage } from "../utils/LocalStorage";
import { loadAuthDetails } from "../store/slices/Auth.slice";
import { UserDetails } from "../store/models/Auth.model";
import { useDispatch } from "react-redux";

const LazyHomePage = lazy(() => import("../pages/Home"));
const LazyAuthPage = lazy(() => import("../pages/Auth"));
const LazyNotFoundPage = lazy(() => import("../pages/404"));
const LazyEditorPage = lazy(() => import("../pages/Editor"));

const MainRouter = () => {
  const userData = getFromLocalStorage("user");
  const dispatch = useDispatch();
  const initialData: UserDetails = {
    access_token: "",
    fullname: "",
    profile_img: "",
    username: "",
  };

  useEffect(() => {
    if (userData) {
      dispatch(loadAuthDetails(JSON.parse(userData)));
    } else {
      dispatch(loadAuthDetails(initialData));
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/editor"
          element={
            <Suspense>
              <LazyEditorPage />
            </Suspense>
          }
        />
        <Route path="/" element={<Root />}>
          <Route
            index
            element={
              <Suspense fallback="Loading...">
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route
            path="signin"
            element={
              <Suspense fallback="Loading...">
                <LazyAuthPage type="sign-in" />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense fallback="Loading...">
                <LazyAuthPage type="sign-up" />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback="loading...">
                <LazyNotFoundPage />
              </Suspense>
            }
          />
        </Route>
        ,
      </>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
