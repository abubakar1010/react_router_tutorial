import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()
    return (
        <>
            <div id="error-page">
                <h1>Oops!!</h1>
                <p>Sorry,  an unwanted error has occurred</p>
                <p>
                    {error.statusText || error.massage}
                </p>
            </div>
        </>
    );
};

export default ErrorPage;