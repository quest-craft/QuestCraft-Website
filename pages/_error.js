function Error() {
    return (
        <div class="container p-6 py-10 max-w-6xl text-center mx-auto">
            <div class="mx-auto">
                <div class="flex flex-col items-center">
                    <img src="/image/nopage.png" class="w-1/2 py-5" />
                    <p class="text-xl font-semibold">Steve lost his way while loading your page</p>
                    <p>Please try again another time</p>
                </div>
            </div>
        </div>
    );
}

export default Error;
