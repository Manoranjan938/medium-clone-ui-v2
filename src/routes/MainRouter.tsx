import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";

const MainRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}></Route>),
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
