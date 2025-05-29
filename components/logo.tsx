/* 
Previous code (Scale icon version):

"use client"

import { Scale } from "lucide-react"

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center ${className}`}
    >
      <Scale className="w-1/2 h-1/2 text-amber-900" />
    </div>
  )
}
*/

"use client"

import Image from "next/image"

export default function Logo({ 
  className = "w-40 h-40",
  src = "/LOGO-1.png",
  alt = "Rode Logo"
}: {
  className?: string
  src?: string
  alt?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
