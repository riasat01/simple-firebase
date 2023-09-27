import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center space-y-4">
            <h1>Something went wrong</h1>
            <Link to={`/`}>Go to home</Link>
        </div>
    );
};

export default ErrorPage;