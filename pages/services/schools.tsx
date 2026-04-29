import React from "react";
import Credentials from "../../components/landingPage/Credentials";
import WhoItsFor from "../../components/landingPage/WhoItsFor";
import ServicesLayout from "./layout";


const TESTIMONIALS = [
    {
        quote: "Vithushan ran a coding workshop for our hackathon for students between grade 7 and 12. He had the students engaged and asking questions the entire time!",
        name: "Aggash S",
        school: "Aravanai Charity",
        outcome: "Zero‑prep classroom workshop",
        img: "",
        border: "border-charmander",
    },
    {
        quote: "The AI workshop was a huge hit and the highlight of our conference! Vithushan demystified AI in a way that actually made sense for non-technical students.",
        name: "Keerthana R",
        school: "CTPA Organization",
        outcome: "Finally understood AI",
        img: "",
        border: "border-rattata",
    },
];

const SERVICES = [
    {
        step: "01",
        title: "Coding Workshop for Elementary Students",
        grades: "Grades 3 to 8",
        duration: "60 minutes",
        capacity: "Up to 30 students",
        format: "Onsite or Online",
        outcome: "Students leave knowing they can build something real.",
        description:
            "A hands-on, beginner-friendly coding session that introduces students to programming through activities they actually enjoy. No prior experience needed from students or teachers. Everything is prepared and facilitated by Vithushan so your class just shows up and participates.",
        border: "border-charmander",
    },
    {
        step: "02",
        title: "Intro to AI and Technology Workshop",
        grades: "Grades 6 to 12",
        duration: "60 to 90 minutes",
        capacity: "Up to 30 students",
        format: "Onsite or Online",
        outcome: "Students understand what AI actually is and how it works.",
        description:
            "An engaging session that demystifies artificial intelligence for students who use it every day but have never looked under the hood. We cover how AI learns, where it gets things wrong, and what it means for the careers they are heading toward. Curriculum-aligned for science and technology courses.",
        border: "border-rattata",
    },
    {
        step: "03",
        title: "Technology Strategy for School Boards",
        grades: "For administrators and curriculum leads",
        duration: "Flexible",
        capacity: "Small group advisory",
        format: "Onsite or Online",
        outcome: "A clear plan for how your school approaches technology.",
        description:
            "A working session for administrators and curriculum leads who are figuring out how to bring coding, AI, and technology into their schools in a way that is practical and sustainable. Built on real experience shipping products at Spotify, Meta, and Duolingo — not a sales pitch for a platform.",
        border: "border-pikachu-500",
    },
];

const STATS = [
    { value: "100+", label: "Students taught" },
    { value: "5.0", label: "Average rating" },
    { value: "Gr. 3-12", label: "Grade range" },
    { value: "Online + Onsite", label: "Delivery format" },
];

export default function SchoolsPage() {
    return (
        <div className="w-full bg-white">

            {/* STATS BAR */}
            <div className="w-full bg-slate-200 py-8 px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center text-center">
                            <p className="text-2xl font-extrabold text-charmander">{stat.value}</p>
                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <WhoItsFor copyType={"schools"} />

            {/* SERVICES */}
            <div id="stage" className="flex flex-col items-center justify-center w-full p-8 sm:p-12 bg-slate-100">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    Workshop options
                </h2>
                <p className="text-gray-500 text-center mb-10 max-w-lg">
                    Each session is prepared and facilitated by Vithushan. Your teachers
                    do not need to prepare anything technical in advance.
                </p>

                <div className="flex flex-col gap-6 w-full max-w-3xl">
                    {SERVICES.map((service) => (
                        <div
                            key={service.step}
                            className={`flex flex-col sm:flex-row bg-white border-t-8 shadow-xl rounded-xl overflow-hidden ${service.border}`}
                        >
                            <div className="flex items-center justify-center bg-gray-50 p-6 sm:p-8 sm:w-24 shrink-0">
                                <span className="text-3xl font-extrabold text-gray-200">{service.step}</span>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                    <div>
                                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                                            {service.grades}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mt-1">{service.title}</h3>
                                    </div>
                                </div>

                                {/* Workshop specs */}
                                <div className="flex flex-wrap gap-3 mb-3">
                                    {[service.duration, service.capacity, service.format].map((spec) => (
                                        <span
                                            key={spec}
                                            className="text-xs bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounded-full"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm font-semibold text-gray-700 mb-2 italic">
                                    "{service.outcome}"
                                </p>
                                <p className="text-sm text-gray-500 flex-1">{service.description}</p>

                                <a
                                    href={`mailto:vithushan19@gmail.com?subject=Workshop inquiry: ${service.title}`}
                                    className="mt-4 self-start bg-linear-to-b px-5 py-2 font-bold border-b-4 rounded-lg
                    bg-orange-400 hover:bg-orange-500 border-orange-600
                    active:border-b-2 cursor-pointer text-white text-sm"
                                >
                                    Inquire about this workshop
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* HOW IT WORKS */}
            <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-slate-300">
                <h2 className="text-3xl font-bold text-black text-center mb-10">
                    How booking works
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-4xl">
                    {[
                        { n: "01", title: "Get in touch", body: "Send an email with your grade level, preferred dates, and whether you need onsite or online." },
                        { n: "02", title: "We confirm the details", body: "Vithushan will respond within 24 hours to confirm the session format and any curriculum requirements." },
                        { n: "03", title: "No prep needed from you", body: "All materials and facilitation are handled. Your job is to show up with your students." },
                        { n: "04", title: "Your students build something", body: "Every session ends with students having made something real they can show their families." },
                    ].map((step) => (
                        <div key={step.n} className="flex flex-col bg-slate-800 rounded-xl p-6">
                            <span className="text-3xl font-extrabold text-gray-600 mb-3">{step.n}</span>
                            <p className="font-bold text-white mb-2">{step.title}</p>
                            <p className="text-sm text-gray-400">{step.body}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TESTIMONIALS */}
            <div className="flex flex-col justify-center p-4 bg-murkrow sm:p-8">
                <p className="text-3xl font-semibold text-center text-white">What founders say</p>
                <p className="text-center text-gray-400 mt-1 mb-8">
                    Business owners who were exactly where you are now.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.name}
                            className={`flex flex-col h-full p-4 bg-white border-t-8 shadow-xl w-full sm:w-96 rounded-xl ${t.border}`}
                        >
                            <span className="text-xs uppercase tracking-widest font-bold text-charmander mb-3">
                                🏆 {t.outcome}
                            </span>

                            <p className="sm:h-24 text-gray-700">{t.quote}</p>

                            <div className="flex py-3">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src="/images/landingPage/star.svg" className=" w-4 h-4" alt="star" />
                                ))}
                            </div>

                            <div className="grid grid-cols-6 py-3">
                                {t.img && <img src={t.img} alt={t.name} className="rounded-full w-10 h-10 object-cover mr-4" />}
                                <div className="flex flex-col justify-center col-span-5">
                                    <p className="text-lg font-bold">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.school}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* WHY SKILLIFY vs A LARGE PROGRAM */}
            <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-slate-200">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    Why a real engineer?
                </h2>
                <p className="text-gray-500 text-center max-w-2xl mt-2 text-lg leading-relaxed">
                    Large STEM programs run the same workshop in every school. Skillify
                    sessions are adapted to your grade, your curriculum unit, and the
                    actual questions your students ask on the day. Your class gets
                    someone who has shipped real products at Spotify, Meta, and Duolingo
                    and can answer the question every student eventually asks: "but does
                    this actually matter in real life?"
                </p>
            </div>

            <Credentials />

            {/* FINAL CTA */}
            <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-murkrow text-center">
                <h2 className="text-3xl font-bold text-white mb-3">Ready to book a workshop?</h2>
                <p className="text-gray-400 max-w-md mb-8">
                    Reach out with your grade level and preferred dates. Sessions fill up
                    quickly near the end of the semester so earlier is better.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="mailto:vithushan19@gmail.com?subject=School workshop inquiry"
                        className="bg-linear-to-b px-8 font-bold border-b-4 rounded-lg py-3
              bg-orange-400 hover:bg-orange-500 border-orange-600
              active:border-b-2 cursor-pointer text-white text-center"
                    >
                        Book a workshop
                    </a>
                    <a
                        href="mailto:vithushan19@gmail.com?subject=School workshop question"
                        className="px-8 font-bold border-b-4 border-gray-600 rounded-lg py-3
              bg-transparent hover:bg-gray-800 active:border-b-2
              cursor-pointer text-white text-center border-2"
                    >
                        Ask a question first
                    </a>
                </div>

                <p className="text-gray-500 text-sm mt-8 max-w-sm">
                    For school board inquiries or multi-school programs, email directly at{" "}
                    <a href="mailto:vithushan19@gmail.com" className="text-charmander underline">
                        vithushan19@gmail.com
                    </a>
                </p>
            </div>

        </div>
    );
}

SchoolsPage.getLayout = function getLayout(page) {
    return <ServicesLayout>{page}</ServicesLayout>;
};