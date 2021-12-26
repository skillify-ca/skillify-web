import Link from "next/link";
import Navbar from "../../Navbar";
import SkillCard from "../../stories/SkillCard";
import { Button } from "../../ui/Button";

const ExplorePreview = ({ unitTitle, level }) => {
    return <><div className="grid items-stretch grid-cols-1 sm:grid-cols-2 bg-white shadow-lg rounded-xl">
        <div className="space-y-8 p-4 sm:p-8">
            <div className="flex flex-col space-y-4">
                <p className="text-4xl font-bold text-blue-900 capitalize">
                    {" "}
                    Explore
                </p>
                <Link href={`/explore/${unitTitle}/${level}`}>
                    <Button label="Start Interactive Lesson" backgroundColor="blue" textColor="white" />
                </Link>
            </div>
        </div>

    </div>
    </>
}


export default ExplorePreview;