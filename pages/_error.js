function Error() {
    return (
        <div className="container p-6 py-10 max-w-6xl text-center mx-auto">
            <div className="mx-auto">
                <div className="flex flex-col items-center">
                    <img src="/image/nopage.png" className="w-1/2 py-5" />
                    <p className="text-xl font-semibold">Steve lost his way while loading your page</p>
                    <p>Please try again another time</p>
                </div>
            </div>
        </div>
    );
}

export default Error;
