import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'

export default function MyImage() {
  return (
    <Card className="p-2">
      <Image
        src="/my-img.jpg"
        alt="My Image"
        width={400}
        height={200}
        style={{ width: '100%', height: 'auto' }}
      />
    </Card>
  )
}
