'use client'

import React, { useState, useMemo, JSX } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FolderRoot,
  Github,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { Project, LinkTypeKey } from '@/types/project'
import { projects } from '@/data/projects'

// Define known link types as a constant object for consistent ordering and control
const LINK_TYPES = {
  github: {
    key: 'github',
    icon: Github,
    getLabel: (name: string) => `GitHub repository for ${name}`,
  },
  youtube: {
    key: 'youtube',
    icon: Youtube,
    getLabel: (name: string) => `YouTube demo for ${name}`,
  },
} as const

const ITEMS_PER_PAGE = 1
const MAX_VISIBLE_PAGES = 5 // Maximum number of page buttons to show at once

export default function PaginatedProjectList() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return projects.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Planned':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
    }
  }

  // Helper function to render external links in a consistent order
  const renderExternalLinks = (project: Project) => {
    if (!project.links) return null

    const linkElements: JSX.Element[] = []
    const linkOrder: LinkTypeKey[] = ['github', 'youtube']

    linkOrder.forEach(type => {
      const url = project.links?.[type]
      if (url) {
        const linkConfig = LINK_TYPES[type]
        const Icon = linkConfig.icon
        linkElements.push(
          <Link
            key={type}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            aria-label={linkConfig.getLabel(project.name)}
          >
            <Icon className="h-5 w-5" />
          </Link>,
        )
      }
    })

    return linkElements.length > 0 ? (
      <div className="flex gap-2">{linkElements}</div>
    ) : null
  }

  // Helper function to generate pagination buttons
  const renderPagination = () => {
    const pageButtons: JSX.Element[] = []

    // Calculate the range of pages to show
    const halfRange = Math.floor(MAX_VISIBLE_PAGES / 2)
    let startPage = Math.max(1, currentPage - halfRange)
    let endPage = Math.min(totalPages, currentPage + halfRange)

    // Adjust start and end if near the edges
    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
      if (currentPage <= halfRange) {
        endPage = Math.min(totalPages, MAX_VISIBLE_PAGES)
      } else if (currentPage > totalPages - halfRange) {
        startPage = Math.max(1, totalPages - MAX_VISIBLE_PAGES + 1)
      }
    }

    // First page button
    pageButtons.push(
      <Button
        key="first"
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
        className="dark:border-gray-700 dark:text-gray-100"
        aria-label="First page"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>,
    )

    // Previous page button
    pageButtons.push(
      <Button
        key="prev"
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="dark:border-gray-700 dark:text-gray-100"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>,
    )

    // Ellipsis before if needed
    if (startPage > 1) {
      pageButtons.push(
        <span key="start-ellipsis" className="text-gray-700 dark:text-gray-300">
          ...
        </span>,
      )
    }

    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          variant={currentPage === i ? 'default' : 'outline'}
          size="sm"
          onClick={() => handlePageChange(i)}
          className={
            currentPage === i
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'dark:border-gray-700 dark:text-gray-100'
          }
          aria-label={`Page ${i}`}
        >
          {i}
        </Button>,
      )
    }

    // Ellipsis after if needed
    if (endPage < totalPages) {
      pageButtons.push(
        <span key="end-ellipsis" className="text-gray-700 dark:text-gray-300">
          ...
        </span>,
      )
    }

    // Next page button
    pageButtons.push(
      <Button
        key="next"
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="dark:border-gray-700 dark:text-gray-100"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>,
    )

    // Last page button
    pageButtons.push(
      <Button
        key="last"
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
        className="dark:border-gray-700 dark:text-gray-100"
        aria-label="Last page"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>,
    )

    return (
      <div className="flex items-center gap-2 flex-wrap justify-center">
        {pageButtons}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold flex items-center gap-2 text-blue-700 dark:text-blue-400">
          <FolderRoot className="w-5 h-5 text-blue-600" />
          My Projects
        </h2>
        {/* project count */}
        <p className="text-gray-700 dark:text-gray-300">
          Showing {currentPage} of {totalPages} pages
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {paginatedProjects.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.name}
              </h3>
              {renderExternalLinks(project)}
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge-tech">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <span
                className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                  project.status,
                )}`}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4 pt-4">
        {totalPages > 1 && renderPagination()}
      </CardFooter>
    </Card>
  )
}
