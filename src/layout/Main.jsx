import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Main = () => {
    return (
        <>
            <h1>This is main layout</h1>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;