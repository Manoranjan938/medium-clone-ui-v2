import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "../pages/Home";
import NotFound from "../pages/404";
import UserAuth from "../pages/Auth";

const MainRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="signin" element={<UserAuth type="sign-in" />} />
        <Route path="signup" element={<UserAuth type="sign-up" />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
