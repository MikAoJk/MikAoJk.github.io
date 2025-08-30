import Image from 'next/image'
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
            <h1 className="text-5xl md:text-8xl font-bold py-15 text-center mb-4">
                Home
            </h1>
            <div
                className="relative flex place-items-center">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
                    src="/1603092514073.jpeg"
                    alt="image of me"
                    width={300}
                    height={37}
                    priority
                />
            </div>

            <div className="text-xl mb-16 grid text-center mt-6 px-8 py-8 bg-white/80 dark:bg-slate-900/70 shadow-xl rounded-2xl backdrop-blur-md border border-slate-200 dark:border-slate-700 max-w-lg w-full">
                <p className="mb-4 font-semibold text-gray-800 dark:text-slate-100">Hello, I&apos;m Joakim Taule Kartveit</p>
                <ul className="list-none list-inside text-gray-700 dark:text-slate-200 space-y-2">
                    <li>👨‍👩‍👧‍👦 A dad and husband</li>
                    <li>
                        💻 Working as a developer at
                        <a
                            className="font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-teal-300 transition-colors ml-1"
                            href="https://nav.no"
                            target="_blank" rel="noopener noreferrer"
                        >
                            NAV
                        </a>
                        <br />
                    </li>
                    <li>📍 Based in Norway, Kristiansand.</li>
                    <li>⚽ I like to play soccer sometimes</li>
                    <li>💻 Current OS is Ubuntu</li>
                    <li>🦄 Love Open Source Software</li>
                    <li>
                        📧 How to reach me:{" "}
                        <a
                            className="font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-teal-300 transition-colors"
                            href={`mailto:joakimkartveit@gmail.com`}
                        >
                            joakimkartveit@gmail.com
                        </a>
                    </li>
                </ul>
            </div>

            <Footer/>
        </main>
    )
}
