import {NextPage} from "next";
import Footer from "@/components/Footer/Footer";
import {ProjectCard} from "@/components/ProjectCard/ProjectCard";
import React from "react";


const Projects: NextPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
            <h1 className="text-5xl md:text-8xl font-bold py-15 text-center mb-4">
                Projects
            </h1>
            <div
                className="text-center mb-8 md:max-w-lg p-6 rounded-lg">
                {projects.map((projects, idx) => (
                    <>
                        <ProjectCard
                            key={idx}
                            title={projects.title}
                            gitHubLink={projects.gitHubLink}
                            desc={projects.desc}
                        />
                    </>
                ))}
                <p>The rest of my personal projects can be found here:
                    <a href={"https://github.com/MikAoJk?tab=repositories"} className="text-blue-600 dark:text-blue-500 hover:underline">
                        {"GitHub repositories"}
                    </a>
                </p>
             </div>
            <Footer/>
        </main>
    );
}

const projects = [
    {
        title: "norwegian-organization-number-validator",
        gitHubLink: "https://github.com/MikAoJk/norwegian-organization-number-validator",
        desc: "A simple validator for, validation a norwegian organization number",
    },
    {
        title: "norwegian-social-security-number-validator",
        gitHubLink: "https://github.com/MikAoJk/norwegian-social-security-number-validator",
        desc: "A simple validator for validation a norwegian social security numbers (FNR, DNR)",
    },
    {
        title: "random-diagnosis-code",
        gitHubLink: "https://github.com/MikAoJk/random-diagnosis-code",
        desc: "A simple site that gets a random ICPC-2 diagnosis codes",
    },
    {
        title: "norwegian-holidays-typescript",
        gitHubLink: "https://github.com/MikAoJk/norwegian-holidays-typescript",
        desc: "A simple website that shows current year norwegian holidays",
    },
    {
        title: "scoreboard",
        gitHubLink: "https://github.com/MikAoJk/scoreboard",
        desc: "A simple scoreboard",
    },
    {
        title: "rust-crud-rest-api",
        gitHubLink: "https://github.com/MikAoJk/rust-crud-rest-api",
        desc: "Simple CRUD Rest API in Rust",
    },
  {
        title: "knarreviktoppen",
        gitHubLink: "https://github.com/MikAoJk/knarreviktoppen",
        desc: "Knarreviktoppen velforenings website",
    },
    {
        title: "kotlin-ktor-crud-rest-api",
        gitHubLink: "https://github.com/MikAoJk/kotlin-ktor-crud-rest-api",
        desc: "Simple CRUD Rest API in Kotlin",
    },
]

export default Projects
