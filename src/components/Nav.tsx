'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Moon, Sun, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ContractList } from '@/types/contract'

const contacts: ContractList[] = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/natthaphong-thepphithak/',
    label: 'Natthaphong Thepphithak',
    color: 'text-blue-600 dark:text-blue-500',
  },
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/@aujung8420',
    label: "AuJung's YouTube",
    color: 'text-red-500 dark:text-red-400',
  },
  {
    icon: FaTiktok,
    href: 'https://www.tiktok.com/@aujungzz',
    label: "AuJung's TikTok",
    color: 'text-pink-500 dark:text-pink-400',
  },
  {
    icon: Mail,
    href: 'mailto:natthaphong.thepphithak@gmail.com',
    label: 'natthaphong.thepphithak@gmail.com',
    color: 'text-blue-500 dark:text-blue-400',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/aujungz',
    label: "AuJung's GitHub",
    color: 'text-gray-800 dark:text-gray-200',
  },
]

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

  const renderContacts = () =>
    contacts.map(({ icon: Icon, href, color, label }, index) => (
      <div key={index} className="relative group">
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 group-hover:scale-110"
              aria-label={label}
            >
              <Icon
                className={`h-5 w-5 ${color} transition-transform duration-300 group-hover:scale-110`}
              />
            </a>
          </TooltipTrigger>
          <TooltipContent className="bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 font-medium px-3 py-1.5 rounded">
            {label}
          </TooltipContent>
        </Tooltip>
      </div>
    ))

  if (!mounted) return null

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md'
            : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center">
        <div className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-800/50 px-3 py-1 rounded-full shadow-sm">
          {renderContacts()}
          <div className="w-px h-6 mx-1 bg-gray-200 dark:bg-gray-700"></div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110"
            aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
