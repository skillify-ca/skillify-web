import Link from "next/link";
import Navbar from "../components/Navbar";

const Courses = () => {
    return <div className="heropattern-pixeldots-gray-100 min-h-screen bg-gray-200">
        <Navbar />
        <h1 className="text-5xl font-bold text-center p-4">Courses</h1>

        <Link href={"/math/practiceTracker"}>
            <div className="bg-white p-4 m-4 text-xl flex items-center rounded-lg bg-gradient-to-b from-blue-500 text-white to-blue-700 hover:to-blue-500 shadow-lg space-x-4">
                <img src="/images/courses/math.png" className="w-16" />
                <p>Math Fundamentals</p></div>
        </Link>
        <Link href={"/coding"}>

            <div className="bg-white p-4 m-4 text-xl flex items-center rounded-lg bg-gradient-to-b from-blue-500 text-white to-blue-700 shadow-lg hover:to-blue-500 space-x-4">
                <img src="/images/courses/coding.jpg" className="w-16" />

                <p>Coding</p></div>
        </Link>
        <Link href={"/finance/practiceTracker"}>

            <div className="bg-white p-4 m-4 text-xl flex items-center rounded-lg bg-gradient-to-b from-blue-500 text-white to-blue-700 shadow-lg hover:to-blue-500 space-x-4">
                <img src="/images/skills/finance.png" className="w-16" />
                <p>Financial Literacy</p></div>
        </Link>
    </div>
}

export default Courses;