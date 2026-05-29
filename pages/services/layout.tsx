// (services)/layout.tsx
'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NavbarV3 from '../../components/landingPage/NavbarV3'
import { serviceConfig } from '../../lib/landingPage/serverConfig'

export default function ServicesLayout({ children }) {
  const pathname = usePathname()
  const { name } = serviceConfig[pathname] ?? { color: '#F97316' }

  return (
    <div className="hero-shell"> {/* fixed structure, never re-renders */}
      <div className="hero-bg" />
      <NavbarV3 currentPage={name} />
      <Hero currentPage={name} />

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}            // triggers animation on route change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >

          {children}  {/* page-specific copy goes here */}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function getHeroContent(currentPage) {

  if (currentPage === "tutoring") {
    const subHeadline = "K-12 Tutoring · Math · Coding · Science · English"
    const titleDefault = "Your child is capable."
    const titleHighlight = "Unlock their potential."
    const description = "Every student deserves a great teacher and personalized attention. Skillify helps your child build confidence, and teaches the material a way that is engaging and sticks."
    const buttonPrimaryText = "See tutoring options"
    const buttonSecondaryText = "Free 30-min intro call"
    const primaryColour = "charmander"
    const primaryColourHover = "hover:bg-orange-500"
    const primaryColourBorder = "border-orange-800"

    return {
      subHeadline,
      titleDefault,
      titleHighlight,
      description,
      buttonPrimaryText,
      buttonSecondaryText,
      primaryColour,
      primaryColourHover,
      primaryColourBorder
    }
  }

  if (currentPage === "tech") {
    const subHeadline = "App Development · Tech Strategy · Advisory"
    const titleDefault = "Technical advice"
    const titleHighlight = "for business founders."
    const description = " Whether your tech is buggy and slow, or you're building something new, having a real engineer in your corner will save you time and money."
    const buttonPrimaryText = "See what we can build"
    const buttonSecondaryText = "Free 30-min intro call"
    const primaryColour = "charmander"
    const primaryColourHover = "hover:bg-orange-500"
    const primaryColourBorder = "border-orange-800"

    return {
      subHeadline,
      titleDefault,
      titleHighlight,
      description,
      buttonPrimaryText,
      buttonSecondaryText,
      primaryColour,
      primaryColourHover,
      primaryColourBorder
    }
  }

  if (currentPage === "schools") {
    const subHeadline = "Coding Workshops · AI Education and Ethics · School Board Advisory"
    const titleDefault = "Bring a software engineer"
    const titleHighlight = "into your class."
    const description = "Curriculum-aligned coding and technology workshops for grades 3 to 12, facilitated by an expert software engineer. Available onsite or online across the GTA."
    const buttonPrimaryText = "See workshop options"
    const buttonSecondaryText = "Get in touch"
    const primaryColour = "charmander"
    const primaryColourHover = "hover:bg-orange-500"
    const primaryColourBorder = "border-orange-800"

    return {
      subHeadline,
      titleDefault,
      titleHighlight,
      description,
      buttonPrimaryText,
      buttonSecondaryText,
      primaryColour,
      primaryColourHover,
      primaryColourBorder
    }
  }

  if (currentPage == "career") {

    const subHeadline = "Career Coaching · Interview Prep · Salary Negotiation"
    const titleDefault = "You're qualified. Make sure"
    const titleHighlight = "everyone can see it."
    const description = "Learn valuable skills, ace your techincal and behavioural interviews, then land a job offer. Skillify gives you the coaching and prep to succeed at every stage."
    const buttonPrimaryText = "Find your path"
    const buttonSecondaryText = "Free 30-min intro call"
    const primaryColour = "charmander"
    const primaryColourHover = "hover:bg-orange-500"
    const primaryColourBorder = "border-orange-800"

    return {
      subHeadline,
      titleDefault,
      titleHighlight,
      description,
      buttonPrimaryText,
      buttonSecondaryText,
      primaryColour,
      primaryColourHover,
      primaryColourBorder
    }
  }


  const subHeadline = "Coaching · Tutoring · Tech Advising"
  const titleDefault = "Close your skill gaps."
  const titleHighlight = "Achieve your goals."
  const description = "You've been figuring it out alone for too long. Learn in-demand skills from someone who's already been where you're trying to go."
  const buttonPrimaryText = "Find your path"
  const buttonSecondaryText = "Free 30-min intro call"
  const primaryColour = "charmander"
  const primaryColourHover = "hover:bg-orange-500"
  const primaryColourBorder = "border-orange-800"

  return {
    subHeadline,
    titleDefault,
    titleHighlight,
    description,
    buttonPrimaryText,
    buttonSecondaryText,
    primaryColour,
    primaryColourHover,
    primaryColourBorder
  }
}

function HeroText({ currentPage, visible }: { currentPage: string, visible: boolean }) {

  const content = getHeroContent(currentPage)


  return (
    <div className="flex flex-col justify-center md:text-center lg:text-left min-h-[500px]">

      <p style={fadeStyle(visible, 0)} className={`text-sm uppercase tracking-widest font-semibold mb-4 text-${content.primaryColour}`}>
        {content.subHeadline}
      </p>

      <h1 style={fadeStyle(visible, 50)} className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        {content.titleDefault}{" "}
        <span className={`text-${content.primaryColour}`}>{content.titleHighlight}</span>
      </h1>

      <p style={fadeStyle(visible, 100)} className="my-4 text-base text-gray-500 sm:text-lg md:text-xl max-w-xl">
        {content.description}
      </p>

      <div style={fadeStyle(visible, 150)} className="flex flex-col sm:flex-row gap-3 mt-2">
        <a
          href="#stage"
          className={`max-w-full bg-linear-to-b px-6 font-bold border-b-4 rounded-lg py-3
          bg-${content.primaryColour} ${content.primaryColourHover} ${content.primaryColourBorder}
          active:border-b-2 cursor-pointer text-white text-center`}
        >
          {content.buttonPrimaryText}
        </a>
        <a
          href="mailto:vithushan19@gmail.com?subject=Free intro call"
          className="max-w-full px-6 font-bold border-b-4 border-gray-300 rounded-lg py-3
          bg-white hover:bg-gray-50 active:border-b-2 cursor-pointer text-gray-700 text-center"
        >
          {content.buttonSecondaryText}
        </a>
      </div>

      <div style={fadeStyle(visible, 200)} className="flex items-start gap-2 mt-6 max-w-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 shrink-0 mt-0.5 text-${content.primaryColour}`}>
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
        <p className="text-sm text-gray-500">
          Covered by the{" "}
          <span className="font-semibold text-gray-700">Skillify Guarantee</span>
          {" "}- full refund within the first two weeks.
        </p>
      </div>

    </div>
  )
}

function fadeStyle(visible: boolean, delayMs: number): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(10px)',
    transition: `opacity 0.25s ease ${delayMs}ms, transform 0.25s ease ${delayMs}ms`,
  }
}


export function Hero({ currentPage }: { currentPage: string }) {
  const [displayPage, setDisplayPage] = useState(currentPage)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (currentPage === displayPage) return

    // Fade out
    setVisible(false)

    const timer = setTimeout(() => {
      // Swap content while invisible
      setDisplayPage(currentPage)
      // Fade in
      setVisible(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [currentPage])


  return (
    <div className="flex flex-col items-center w-full bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
        <div className="p-8 lg:p-16 flex flex-col justify-center md:text-center lg:text-left">

          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <HeroText currentPage={currentPage} visible={visible} />
          </motion.div>
        </div>

        <div>
          <img
            className="object-cover w-full h-full md:h-160"
            src="/images/landingPage/tutoring-hero.png"
            alt="Skillify student session"
          />
        </div>
      </div>
    </div>
  )
}