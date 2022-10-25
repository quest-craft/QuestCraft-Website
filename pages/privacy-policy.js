import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
            <div class="container px-6 py-10 mx-auto max-w-6xl">
                We have recently moved to Vercel for our web-host, because of this we are writing a new privacy policy. Vercel privacy policy can be found{" "}
                <a class="text-blue-600" href="https://vercel.com/legal/privacy-policy">
                    here
                </a>
                . Until we have finished writing our new privacy policy, please contact us at mail@questcraft.org or at our Discord server{" "}
                <a class="text-blue-600" href="https://discord.com/invite/zVkMXSY78D">
                    here
                </a>
                .
            </div>
        </body>
    );
}
