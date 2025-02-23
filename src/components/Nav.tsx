'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Moon, Sun, Github } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    setMounted(true)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Add padding to body to prevent overlap
    document.body.style.paddingTop = '4rem' // Matches h-16 (16 = 4rem)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.paddingTop = '' // Cleanup
    }
  }, [handleScroll])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  if (!mounted) return null

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? 'bg-transparent backdrop-blur-md translate-y-0 opacity-100'
            : 'translate-y-[-10px] opacity-90'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex-shrink-0">
          AuJung
        </span>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Github className="h-5 w-5 text-gray-900 dark:text-gray-100" />
          </a>
          <Button
            variant="default"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
