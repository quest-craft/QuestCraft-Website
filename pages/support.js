import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Support() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 class="text-4xl font-semibold text-center text-gray-800 dark:text-white">Frequently asked questions</h1>

                    <div class="mt-12 space-y-8">
                        <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <div class="flex items-center justify-between w-full p-8">
                                <h1 class="font-semibold text-gray-700 dark:text-white">How can I install QuestCraft</h1>
                            </div>

                            <hr class="border-gray-200 dark:border-gray-700" />

                            <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
                                Here is a tutorial posted on our YouTube channel explaining on how to install and run QuestCraft.
                                <div class="py-2">
                                    <iframe class="w-full" height="400" src="https://www.youtube.com/embed/_jU8oDQblW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
