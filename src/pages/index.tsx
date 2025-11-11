import Image from 'next/image'
import Footer from "@/components/Footer/Footer";
import { InfoAboutMeCard } from "@/components/InfoAboutMeCard/InfoAboutMeCard";

import React from "react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
            <h1 className="text-5xl md:text-8xl font-bold py-15 text-center mb-4">
                Home
            </h1>
            <div
                className="relative flex place-items-center">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4"
                    src="/1603092514073.jpeg"
                    alt="image of me"
                    width={300}
                    height={37}
                    priority
                />
            </div>
            
   <div className="text-center mb-8 md:max-w-lg p-6 rounded-lg">
               
            <InfoAboutMeCard
                name="Joakim Taule Kartveit"
                location="Norway, Kristiansand"
                details={
                    <ul className="max-w-md list-none list-inside">
                        <li>A dad and husband</li>
                        <li>Working as a developer at
                            <a className="font-medium hover:underline space-x-1" href="https://nav.no"
                            > Nav</a> <br/></li>
                        <li>I like to play soccer,in my free time and do some strength training</li>
                        <li>Current OS is Ubuntu</li>
                        <li>Love Open Source Software</li>
                        <li>How to reach me: {" "}
                            <a className="text-blue-600 dark:text-blue-500 hover:underline"
                               href={`mailto:joakimkartveit@gmail.com`}
                            >joakimkartveit@gmail.com </a></li>
                    </ul>
                }
            />
       </div>

            <Footer/>
        </main>
    )
}
