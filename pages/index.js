import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//import all components from the components folder
import { Nav, Footer } from "../components";

export default function Home() {
    return (
        <body class="bg-white dark:bg-gray-900">
            <Head>
                <title>QuestCraft | Home</title>
                <meta name="description" content="QuestCraft, utilizing Vivecraft and Pojlib, a standalone port of Minecraft: Java Edition to Oculus Quest Headsets." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="QuestCraft | Home" />
                <meta property="og:description" content="QuestCraft, utilizing Vivecraft and Pojlib, a standalone port of Minecraft: Java Edition to Oculus Quest Headsets." />
                <meta property="og:url" content="https://questcraft.org/" />
                <meta property="og:site_name" content="QuestCraft" />
                <link rel="canonical" href="https://questcraft.org/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="twitter:url" content="https://questcraft.org/" />
                <meta name="twitter:title" content="QuestCraft | Home" />
                <meta name="twitter:description" content="QuestCraft, utilizing Vivecraft and Pojlib, a standalone port of Minecraft: Java Edition to Oculus Quest Headsets." />
                <meta name="twitter:card" content="summary" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div class="container px-6 py-10 mx-auto text-center">
                <div class="mx-auto">
                    <h1 class="text-3xl font-bold text-gray-800 dark:text-white lg:text-6xl">Welcome to QuestCraft</h1>
                    <p class="mt-6 text-gray-500 text-xl dark:text-gray-300">QuestCraft, utilizing Vivecraft and Pojlib, is a standalone port of Minecraft: Java Edition to Oculus Quest Headsets.</p>
                    <div class="space-x-4">
                        <a href="https://sidequestvr.com/app/7150/" class="px-8 py-3 mt-6 inline-flex items-center justify-center text-xl font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                            <img src="/image/mark.webp" class="w-8" />
                            <p class="mx-2">
                                Get on <span class="font-semibold">SideQuest</span>
                            </p>
                        </a>
                        <a href="https://github.com/QuestCraftPlusPlus/QuestCraft/releases" class="px-8 py-3 mt-6 inline-flex items-center justify-center text-xl font-medium leading-5 text-center text-gray-800 capitalize bg-gray-200 rounded-lg hover:bg-gray-100 lg:mx-0 lg:w-auto focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27.7px">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                    fill="currentColor"
                                />
                            </svg>
                            <p class="mx-2">
                                Get on <span class="font-semibold">GitHub</span>
                            </p>
                        </a>
                    </div>

                    <p class="mt-3 text-sm text-gray-400 ">A compatible Quest device required</p>
                </div>

                <div class="flex justify-center mt-10">
                    <img class="object-cover w-full h-80 rounded-xl " src="/image/mc-w-shader.png" />
                </div>
            </div>
            <section>
                <div class="container px-6 mx-auto ">
                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                        {/* blocks */}
                        <div class="flex flex-col items-center p-6 space-y-3 text-center  rounded-xl bg-gray-50 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-20 text-blue-600">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                    fill="currentcolor"
                                />
                            </svg>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Open Source</h1>

                            <p class="text-gray-500 dark:text-gray-300 font-medium text-xl">Everything that is used in QuestCraft is open source and available on GitHub.</p>
                        </div>

                        <div class="flex flex-col items-center p-6 space-y-3 text-center  rounded-xl bg-gray-50 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-20 text-blue-600">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
                                    fill="currentcolor"
                                />
                            </svg>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Multiplayer</h1>

                            <p class="text-gray-500 dark:text-gray-300 font-medium text-xl">Supports your favorite Minecraft servers the same way as the desktop.</p>
                        </div>

                        <div class="flex flex-col items-center p-6 space-y-3 text-center  rounded-xl bg-gray-50 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-20 text-blue-600">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" fill="currentcolor" />
                            </svg>

                            <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Updates</h1>

                            <p class="text-gray-500 dark:text-gray-300 font-medium text-xl">Constantly updated to stay up to date with the current Minecraft: Java Edition version.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </body>
    );
}
