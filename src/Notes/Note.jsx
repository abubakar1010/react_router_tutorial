

const Note = () => {
    return (
        <>
            <div>
                <h1 className=" text-3xl font-medium  text-green-300 opacity-70 my-4 text-center hover:underline hover:scale-105 duration-1000">All Notes is here from This documentation tutorial</h1>

                <ul className=" list-decimal">
                    <li className=" text-lg" >{`useRouterError provides the error that was thrown. When the user navigates to routes that don't exist you'll get an error response with a "Not Found" statusText. and more but not here now.`}
                        <p>
                        <span className=" text-red-400"> Exceptions: </span>  Instead of infinite spinners, unresponsive pages, or blank screens
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Note;