import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error-page/ErrorPage";
import Login from "../pages/login/Login";

const Route = createBrowserRouter([
    {
        path: `/`,
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: `/`,
                element:<Home></Home>
            },
            {
                path: `/login`,
                element:<Login></Login>
            }
        ]
    }
]) 

export default Route;