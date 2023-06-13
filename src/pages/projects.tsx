import {NextPage} from "next";
import Footer from "@/components/Footer/Footer";

const Projects: NextPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <div className="mb-32 grid text-center lg:mb-0 lg:text-left">
                <h1>Projects 1</h1>
            </div>
            <div className="mb-32 grid text-center lg:mb-0 lg:text-left">
                <h1>Projects 2</h1>
            </div>

            <Footer/>
        </main>
    )
}
export default Projects