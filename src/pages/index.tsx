import Image from 'next/image'
import Footer from "@/components/Footer/Footer";
import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div
                className="relative flex place-items-center">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
                    src="/1603092514073.jpeg"
                    alt="image of me"
                    width={400}
                    height={37}
                    priority
                />
            </div>
            <div className="text-xl mb-16 grid text-center lg:mb-0 lg:text-left">
                <h1>Hello, I&apos;m Joakim Taule Kartveit and this is my website</h1>
            </div>

            <Footer/>
        </main>
    )
}
