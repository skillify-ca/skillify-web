import React from "react";
import Credentials from "../components/landingPage/Credentials";
import NavbarV3 from "../components/landingPage/NavbarV3";
import WhoItsFor from "../components/landingPage/WhoItsFor";

const SERVICES = [
  {
    step: "01",
    title: "Technology Advisor",
    price: "$500 / hr",
    outcome: "Make the right tech decisions before they get expensive.",
    description:
      "Which tools should you use? Should you build or buy? Is your current setup going to fall apart as you grow? These are the questions that cost businesses and investors the most when they get them wrong. We will work through your situation together and you will leave with a clear direction.",
    tag: "For founders making technology decisions",
    border: "border-charmander",
  },
  {
    step: "02",
    title: "Build Your Website or App",
    price: "$150 / hr",
    outcome: "A real product, built by someone who has done it at scale.",
    description:
      "You have the idea. You just need someone to build it. We scope the work together, build it properly, and make sure you understand how it works when we are done.",
    border: "border-rattata",
    tag: "For founders who need a digital product",
  },
  {
    step: "03",
    title: "Fix Your Website or App",
    price: "$150 / hr",
    outcome: "Stop being blocked by broken code you didn't write.",
    description:
      "You built something with AI tools and got pretty far. Now it's broken, half-finished, or just not doing what you need it to do. I will dig in, figure out what's wrong, and get it working so you can get back to running your business.",
    border: "border-pikachu-500",
    tag: "For founders with a broken or stuck app",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Vithushan helped train one of my employees to maintain my website. We went from being completely dependent on outside help to handling it ourselves.",
    name: "Rahul M",
    school: "Founder",
    outcome: "Employee empowerment",
    img: "",
    border: "border-charmander",
  },
  {
    quote:
      "Vithushan gave me invaluable advice on how to set up the technical strategy for my company. I finally felt like I knew what I was doing and why.",
    name: "Bhavin P",
    school: "Founder",
    outcome: "Clear technical strategy from day one",
    img: "",
    border: "border-rattata",
  },
  {
    quote:
      "Vithushan built a health-tech app for me and taught me how to make updates to it. My startup wouldn't have a digital product without his support.",
    name: "Sarangan S",
    school: "Founder",
    outcome: "Shipped a real product",
    img: "",
    border: "border-pikachu-500",
  },
];

export default function TechPage() {
  return (
    <div className="w-full bg-white">

      <NavbarV3 currentPage="tech" />

      {/* HERO */}
      <div className="flex flex-col items-center w-full bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
          <div className="p-8 lg:p-16 flex flex-col justify-center md:text-center lg:text-left">

            <p className="text-sm uppercase tracking-widest text-charmander font-semibold mb-4">
              App Development · Tech Strategy · Advisory
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Technical advice{" "}
              <span className="text-charmander">
                for great business founders.
              </span>
            </h1>

            <p className="my-4 text-base text-gray-500 sm:text-lg md:text-xl max-w-xl">
              Whether your app is broken, your tech stack is a mess, or you just
              need someone you trust to point you in the right direction, Skillify
              gives you a real engineer in your corner without the agency price tag.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="#services"
                className="max-w-full bg-gradient-to-b px-6 font-bold border-b-4 rounded-lg py-3
                  bg-orange-400 hover:bg-orange-500 border-orange-600
                  active:border-b-2 cursor-pointer text-white text-center"
              >
                See what we can build
              </a>
              <a
                href="mailto:vithushan19@gmail.com?subject=Free intro call for tech services"
                className="max-w-full px-6 font-bold border-b-4 border-gray-300 rounded-lg py-3
                  bg-white hover:bg-gray-50 active:border-b-2 cursor-pointer text-gray-700 text-center"
              >
                Free 15-min intro call
              </a>
            </div>

            <div className="flex items-start gap-2 mt-6 max-w-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-charmander shrink-0 mt-0.5">
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-500">
                Covered by the{" "}
                <span className="font-semibold text-gray-700">Skillify Guarantee</span>
                {" "}- full refund within the first two weeks.
              </p>
            </div>
          </div>

          <div>
            <img
              className="object-cover w-full h-full md:h-160"
              src="/images/landingPage/tutoring-hero.png"
              alt="Skillify tech session"
            />
          </div>
        </div>
      </div>

      <WhoItsFor copyType={"tech"} />

      {/* SERVICES */}
      <div id="services" className="flex flex-col items-center justify-center w-full p-8 sm:p-12 bg-slate-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          What we can do together
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-lg">
          Three ways to work together depending on where you are stuck.
          Not sure which one fits? The intro call will sort that out.
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
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{service.title}</h3>
                  </div>
                  <span className="text-lg font-bold text-charmander shrink-0">{service.price}</span>
                </div>

                <p className="text-sm font-semibold text-gray-700 mb-2 italic">
                  "{service.outcome}"
                </p>
                <p className="text-sm text-gray-500 flex-1">{service.description}</p>

                <a
                  href={`mailto:vithushan19@gmail.com?subject=Book: ${service.title}`}
                  className="mt-4 self-start bg-gradient-to-b px-5 py-2 font-bold border-b-4 rounded-lg
                    bg-orange-400 hover:bg-orange-500 border-orange-600
                    active:border-b-2 cursor-pointer text-white text-sm"
                >
                  Book this session
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI NOTE */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-slate-200">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A bad tech decision costs more than a good one</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Most businesses overpay for tools they don't need, build things
            that don't scale, or get locked into developers they can't replace. One
            advisory session at{" "}
            <span className="font-bold text-gray-900">$100</span> can save you from
            a decision that costs ten times that to undo. Getting the right person
            involved early is almost always the cheaper path.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="flex flex-col justify-center p-4 bg-murkrow sm:p-8">
        <p className="text-3xl font-semibold text-center text-white">What founders say</p>
        <p className="text-center text-gray-400 mt-1 mb-8">
          Businesses that were exactly where you are now.
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
                  <img key={i} src="/images/landingPage/star.svg" className="hue-rotate-45 w-4 h-4" alt="star" />
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


      <Credentials />

      {/* FINAL CTA */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-murkrow text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Not sure where to start? That is fine.</h2>
        <p className="text-gray-400 max-w-md mb-8">
          Most founders come in knowing something is wrong but not exactly what.
          Book a free intro call and we will figure it out together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:vithushan19@gmail.com?subject=Book a tech session"
            className="bg-gradient-to-b px-8 font-bold border-b-4 rounded-lg py-3
              bg-orange-400 hover:bg-orange-500 border-orange-600
              active:border-b-2 cursor-pointer text-white text-center"
          >
            Book your first session
          </a>
          <a
            href="mailto:vithushan19@gmail.com?subject=Free intro call for tech services"
            className="px-8 font-bold border-b-4 border-gray-600 rounded-lg py-3
              bg-transparent hover:bg-gray-800 active:border-b-2
              cursor-pointer text-white text-center border-2"
          >
            Free 15-min intro call
          </a>
        </div>

        <div className="flex items-center gap-2 mt-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-charmander shrink-0">
            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">Skillify Guarantee</span>
            {" "}- full refund within the first two weeks. No questions asked.
          </p>
        </div>
      </div>

    </div>
  );
}

TechPage.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};