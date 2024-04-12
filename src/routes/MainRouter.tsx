import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import { Suspense, lazy } from "react";

const LazyHomePage = lazy(() => import("../pages/Home"));
const LazyAuthPage = lazy(() => import("../pages/Auth"));
const LazyNotFoundPage = lazy(() => import("../pages/404"));

const MainRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
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
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
