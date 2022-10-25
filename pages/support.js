import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Support() {
    return (
        <>
            <Head>
                <title>QuestCraft | Support</title>
                <meta name="description" content="QuestCraft commonly asked questions answered." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="QuestCraft | Support" />
                <meta property="og:description" content="QuestCraft commonly asked questions answered." />
                <meta property="og:url" content="https://questcraft.org/" />
                <meta property="og:site_name" content="QuestCraft" />
                <link rel="canonical" href="https://questcraft.org/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="twitter:url" content="https://questcraft.org/" />
                <meta name="twitter:title" content="QuestCraft | Support" />
                <meta name="twitter:description" content="QuestCraft commonly asked questions answered." />
                <meta name="twitter:card" content="summary" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section class="bg-white dark:bg-gray-900">
                <div class="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 class="text-4xl font-semibold text-center text-gray-800 dark:text-white">Frequently asked questions</h1>

                    <div class="mt-12 space-y-8">
                        <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <div class="flex items-center justify-between w-full p-8">
                                <h1 class="font-semibold text-gray-700 dark:text-white">How can I install QuestCraft</h1>
                            </div>

                            <hr class="border-gray-200 dark:border-gray-700" />

                            <p class="px-8 py-2 text-sm text-gray-500 dark:text-gray-300">
                                Here is a tutorial posted on our YouTube channel explaining on how to install and run QuestCraft. To download QuestCraft, you can use SideQuest available at
                                <a class="text-blue-600 font-medium px-1" href="https://sidequestvr.com/app/7150">
                                    SideQuest Website
                                </a>
                                or for manual install use GitHub available at
                                <a class="text-blue-600 font-medium px-1" href="https://github.com/QuestCraftPlusPlus/QuestCraft/releases">
                                    Our GitHub Repository
                                </a>
                                .
                                <div class="py-2">
                                    <iframe class="w-full" height="400" src="https://www.youtube.com/embed/_jU8oDQblW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </p>
                        </div>

                        <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <div class="flex items-center justify-between w-full p-8">
                                <h1 class="font-semibold text-gray-700 dark:text-white">Do I need a java account to play?</h1>
                            </div>

                            <hr class="border-gray-200 dark:border-gray-700" />

                            <p class="px-8 py-2 text-sm text-gray-500 dark:text-gray-300">Yes, you need a java account to play QuestCraft. You will need to purchase it from the Minecraft website and sign in with the account you bought it on.</p>
                        </div>

                        <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <div class="flex items-center justify-between w-full p-8">
                                <h1 class="font-semibold text-gray-700 dark:text-white">Is QuestCraft multiplayer?</h1>
                            </div>

                            <hr class="border-gray-200 dark:border-gray-700" />

                            <p class="px-8 py-2 text-sm text-gray-500 dark:text-gray-300">QuestCraft supports multiplayer features allowing you to play on servers but it is not recommended to play on public servers as the AntiCheat can tag you for using QuestCraft.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
