import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import {NextPage} from "next";
import React from "react";

const About: NextPage = () => {
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

            <div className="text-xl mb-16 grid text-center lg:mb-0 lg:text-left">
                <p>Hello, I&apos;m Joakim Taule Kartveit</p>
                <p>I&apos;m working as a developer at</p>
                <a className="font-medium hover:underline" href="https://nav.no"
                >NAV</a>
                <p>I&apos;m based in Norway, Kristiansand.</p>
                <p>I like to play soccer sometimes</p>
                <p>Current OS is Linux</p>
                <p>Love Open Source Software</p>
                <p>How to reach me at: {" "}
                    <a href={`mailto:joakimkartveit@gmail.com`}
                    >joakimkartveit@gmail.com </a>
                </p>
            </div>

            <Footer/>
        </main>
    )
}
export default About
