import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorPage from "../pages/error/ErrorPage";
import MainLayout from "../layout/MainLayout";
const Home = lazy(() => import("../pages/home/Home"))
const Chart = lazy(() => import("../pages/chart/Chart"))

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
                {
                    path: "/chart",
                    element: <Chart />
                }
            ]
        }
    ]
)

export default router