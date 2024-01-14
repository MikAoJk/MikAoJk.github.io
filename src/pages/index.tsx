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
                <p>Hello, I&apos;m Joakim Taule Kartveit</p>
                <ul className="max-w-md list-none list-inside">
                    <li>I&apos;m a dad and husband</li>
                    <li>I&apos;m working as a developer at
                        <a className="font-medium hover:underline space-x-1" href="https://nav.no"
                        > NAV</a> <br/></li>
                    <li>I&apos;m based in Norway, Kristiansand.</li>
                    <li>I like to play soccer sometimes</li>
                    <li>Current OS is Linux</li>
                    <li>Love Open Source Software</li>
                    <li>How to reach me: {" "}
                        <a href={`mailto:joakimkartveit@gmail.com`}
                        >joakimkartveit@gmail.com </a></li>
                </ul>
            </div>

            <Footer/>
        </main>
    )
}
