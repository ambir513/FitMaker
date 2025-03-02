
function ErrorBoundary() {
    return (
        <div className="text-center flex flex-col justify-center items-center p-10 gap-5 w-full h-screen">
            <h1 className="text-5xl ">404 Not found Page</h1>
            <p className="text-red-500 text-2xl">Oops! Something went wrong 😞</p>
        </div>
    );
}

export default ErrorBoundary