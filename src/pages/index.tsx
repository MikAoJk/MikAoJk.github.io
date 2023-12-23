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
                    width={300}
                    height={37}
                    priority
                />
            </div>

            <div className="text-xl mb-16 grid text-center">
                <p>Hello, I&apos;m Joakim Taule Kartveit <br/>
                    I&apos;m a dad and husband <br/>
                    I&apos;m working as a developer at &#160;
                    <a className="font-medium hover:underline" href="https://nav.no"
                    >NAV</a> <br/>
                    I&apos;m based in Norway, Kristiansand. <br/>
                    I like to play soccer sometimes <br/>
                    Current OS is Linux <br/>
                    Love Open Source Software <br/>
                    How to reach me at: {" "}
                    <a href={`mailto:joakimkartveit@gmail.com`}
                    >joakimkartveit@gmail.com </a>
                </p>
            </div>

            <Footer/>
        </main>
    )
}
