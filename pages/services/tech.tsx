import React from "react";
import Credentials from "../../components/landingPage/Credentials";
import WhoItsFor from "../../components/landingPage/WhoItsFor";
import ServicesLayout from "./layout";

const SERVICES = [
  {
    step: "01",
    title: "Technology Advisor",
    price: "$250 / hr",
    outcome: "Make the right tech decisions before they get expensive.",
    description:
      "Which tools should you use? Should you build or buy? Is your current setup going to fall apart as you grow? These are the questions that cost businesses and investors the most when they get them wrong. I will work through your situation together and you will leave with a clear direction.",
    tag: "For founders making technology decisions",
    border: "border-charmander",
  },
  {
    step: "02",
    title: "Build Your Website or App",
    price: "$150 / hr",
    outcome: "A real product, built by someone who has done it at scale.",
    description:
      "You have the idea. You just need someone to build it. I will help you scope the work, build it properly, and make sure you understand how it works when we are done.",
    border: "border-rattata",
    tag: "For founders and creators who need a digital product",
  },
  {
    step: "03",
    title: "Fix Your Website or App",
    price: "$150 / hr",
    outcome: "Stop being blocked by broken code you didn't write.",
    description:
      "You built something with AI tools and got pretty far. Now it's broken, half-finished, or just not doing what you need it to do. I will dig in, figure out what's wrong, and get it working so you can get back to running your business.",
    border: "border-pikachu",
    tag: "For founders and creators with a broken app",
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
    border: "border-pikachu",
  },
];

export default function TechPage() {
  return (
    <div className="w-full bg-white">

      <WhoItsFor copyType={"tech"} />

      {/* SERVICES */}
      <div id="stage" className="flex flex-col items-center justify-center w-full p-8 sm:p-12 bg-slate-100">
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

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI NOTE */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-slate-200">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A Fractional CTO In Your Corner</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Make the right technical decisions and lay a strong foundation for your business to scale.
            Bad technical advice can lead to wasted time, money, and even lost customers. I've helped non-technical founders turn their ideas into successful digital products in various industries including real estate, edtech, crypto and e-commerce.
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


      <Credentials title="Advisor" />

      {/* FINAL CTA */}
      <div className="flex flex-col items-center justify-center w-full p-8 sm:p-16 bg-murkrow text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Not sure where to start? That is fine.</h2>
        <p className="text-gray-400 max-w-md mb-8">
          Most founders come in knowing something is wrong but not exactly what.
          Book a free intro call and we will figure it out together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://calendly.com/vithushan19/intro"
            target="_blank"
            referrerPolicy="no-referrer"
            className="bg-linear-to-b px-8 font-bold border-b-4 rounded-lg py-3
              bg-orange-400 hover:bg-orange-500 border-orange-600
              active:border-b-2 cursor-pointer text-white text-center"
          >
            Free 30-min intro call
          </a>
          </div>

      </div>

      {/* Bottom CTA */}
      <div className="text-center py-8 bg-gray-100 sticky bottom-0">
        Got an idea you want to build? We'll help you scope it, design it, and ship it.{" "}
        <a href="https://calendly.com/vithushan19/intro" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">
          Let's talk →
        </a>
      </div>

    </div>
  );
}

TechPage.getLayout = function getLayout(page) {
  return <ServicesLayout>{page}</ServicesLayout>;
};