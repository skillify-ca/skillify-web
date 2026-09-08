// (services)/layout.tsx
'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Hero } from '../../components/landingPage/Hero'
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

