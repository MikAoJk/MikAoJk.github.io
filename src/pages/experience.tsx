import {NextPage} from "next";
import Footer from "@/components/Footer/Footer";
import {ExperienceCard} from "@/components/ExperienceCard/ExperienceCard";

const Experience: NextPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <h1 className="text-5xl md:text-8xl font-bold py-15 text-center mb-8">
                Experience
            </h1>
            <div className="mb-8">
                {experience.map((experience, idx) => (
                    <>
                        <ExperienceCard
                            key={idx}
                            title={experience.title}
                            desc={experience.desc}
                            fromDate={experience.fromDate}
                            toDate={experience.toDate}
                            company={experience.company}
                            companyLink={experience.companyLink}
                        />
                    </>
                ))}
            </div>
            <Footer/>
        </main>
    );
}

const experience = [
    {
        title: "Senior backend developer",
        company: "Arbeids- og velferdsdirektoratet",
        fromDate: "2022-02-01",
        toDate: "",
        companyLink: "https://nav.no",
        desc: "Java/kotlin developer " +
            "Product development in an interdisciplinary product team " +
            "Technical responsibility for solutions (products) and continuous improvements",
    },
    {
        title: "Software Developer",
        company: "Edigard AS",
        fromDate: "2020-07-01",
        toDate: "2022-01-31",
        companyLink: "https://orbyt.tech/",
        desc: "Java developer, technical responsibility for solutions (products) and continuous improvements",
    },
    {
        title: "Senior backend developer",
        company: "Arbeids- og velferdsdirektoratet",
        fromDate: "2018-01-01",
        toDate: "2020-06-31",
        companyLink: "https://nav.no",
        desc: "Java/kotlin developer " +
            "Product development in an interdisciplinary product team " +
            "Technical responsibility for solutions (products) and continuous improvements",
    },
    {
        title: "Application Development Analyst",
        company: "Accenture",
        fromDate: "2014-08-01",
        toDate: "2017-12-31",
        companyLink: "https://www.accenture.com",
        desc: "Java developer, Technical responsibility for solutions (products) and continuous improvements",
    },
]

export default Experience
