import {NextPage} from "next";
import Footer from "@/components/Footer/Footer";
import {ProjectCard} from "@/components/ProjectCard/ProjectCard";


const Projects: NextPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-5xl md:text-8xl font-bold py-15 text-center md:text-left mb-8">
                Projects
            </h1>
            <div className="grid grid-cols-1 max-w-xl mx-auto pt-15 space-y-2 mb-16">
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
        desc: "A simple site that gets a random icpc-2 diagnosis code",
    },
    {
        title: "quote-generator",
        gitHubLink: "https://github.com/MikAoJk//quote-generator/",
        desc: "A simple website that creates different quotes",
    },
    {
        title: "teamsykmelding-pik-2",
        gitHubLink: "https://github.com/navikt/teamsykmelding-pik-2",
        desc: "Team sykmelding paragraf i kode application written in tust",
    },
]

export default Projects
