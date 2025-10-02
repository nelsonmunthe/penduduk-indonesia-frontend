import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorPage from "../pages/error/ErrorPage";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("../pages/home/Home"))

const router = createBrowserRouter(
    [
        {
            path: "/",
            errorElement: <ErrorPage />,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    path: "/",
                    element: <Home />
                },
            ]
        }
    ]
)

export default router