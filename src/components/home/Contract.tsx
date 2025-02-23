import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, Linkedin, Youtube, Music } from 'lucide-react'
import Link from 'next/link'
import { ContractList } from '@/types/contract'

const contacts: ContractList[] = [
  {
    icon: Mail,
    href: 'mailto:natthaphong.thepphithak@gmail.com',
    label: 'natthaphong.thepphithak@gmail.com',
    color: 'text-blue-500 dark:text-blue-400',
  },
  {
    icon: Phone,
    label: '+66 95-530-1640',
    color: 'text-green-500 dark:text-green-400',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/natthaphong-thepphithak',
    label: 'LinkedIn',
    color: 'text-blue-600 dark:text-blue-500',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@yourchannel',
    label: 'YouTube',
    color: 'text-red-500 dark:text-red-400',
  },
  {
    icon: Music,
    href: 'https://www.tiktok.com/@yourtiktok',
    label: 'TikTok',
    color: 'text-pink-500 dark:text-pink-400',
  },
]

export default function Contact() {
  return (
    <Card>
      <CardContent className="p-6 space-y-4 flex flex-col">
        {contacts.map(({ icon: Icon, href, label, color }, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Ensure `Icon` is rendered as a component */}
            <Icon className={`w-5 h-5 ${color}`} />
            {href ? (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:underline"
              >
                {label}
              </Link>
            ) : (
              <span className="text-lg text-gray-700 dark:text-gray-300">
                {label}
              </span>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
