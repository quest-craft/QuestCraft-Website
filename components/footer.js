export const Footer = () => (
    <footer className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 max-w-6xl mx-auto">
            <hr className="my-10 border-gray-200 dark:border-gray-700" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm text-gray-400">© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>

                <div className="flex mt-3 -mx-2 sm:mt-0">
                    <a href="/privacy-policy" className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300">
                        Privacy
                    </a>
                </div>
            </div>
        </div>
    </footer>
);
