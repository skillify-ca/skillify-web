import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import FloatingAstronaut from "./FloatingAstronaut";

export default function Header404() {
  useEffect(() => {
    gsap.to(".hover", {
      duration: 3,
      x: gsap.utils.random(5, 10),
      y: gsap.utils.random(10, 100),
      rotation: gsap.utils.random(-20, 20),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  });

  return (
    (<section>
      <div className={`section-contain margintop-lg`}>
        <h1 className={""}>404</h1>
        <h2 className={""}>Lost in space?</h2>
        <Link href="/">

          <button className="btn btnprimary">Go back home</button>

        </Link>
        <br />
      </div>
      <div className={`hover `}>
        <FloatingAstronaut />
      </div>
    </section>)
  );
}
