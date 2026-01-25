'use client'

import { Youtube, Instagram, Music } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  const platforms = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com',
      glowColor: 'group-hover/youtube:shadow-red-500/20',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com',
      glowColor: 'group-hover/instagram:shadow-pink-500/20',
    },
    {
      id: 'spotify',
      name: 'Spotify',
      icon: Music,
      url: 'https://www.spotify.com',
      glowColor: 'group-hover/spotify:shadow-emerald-500/20',
    },
  ]

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0f1825] to-[#1a3a3a]" />
        {/* Subtle animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl soft-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl soft-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-md mx-auto px-4 py-8">
        <div className="card-premium rounded-2xl backdrop-blur-xl p-8 relative group overflow-hidden">
          {/* Top glow accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          
          {/* Animated glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-radial pointer-events-none" style={{
            background: 'radial-gradient(circle at 50% -20%, rgba(16, 185, 129, 0.2), transparent 70%)'
          }} />

          <div className="relative z-10">
            {/* Profile Image with Breathing Ring */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-36 h-36">
                {/* Outer animated ring */}
                <div className="absolute inset-0 rounded-full ring-2 ring-emerald-500/40 breathing-ring" />
                
                {/* Circular gradient background like stage lighting */}
                <div className="absolute inset-0 rounded-full opacity-60 bg-gradient-conic from-emerald-500/30 via-teal-500/20 to-emerald-500/30" />
                
                {/* Inner image container */}
                <div className="absolute inset-1.5 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-3xl font-bold">
                      BR
                    </div>
                  )}
                  <Image
                    src="/images/e2-80-9cuma-20pequena-20parte-20registrada-20de-20um-20projeto-20lindo-20que-20nasceu-20no-20cora-o-20de-20deus.jpg"
                    alt="Bruna Rocha"
                    fill
                    className="object-cover"
                    priority
                    onLoadingComplete={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>

            {/* Header Text - Refined Typography Hierarchy */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                Bruna Rocha
              </h1>
              <p className="text-emerald-400/90 text-xs font-semibold uppercase tracking-widest mb-4 opacity-80">
                Cantora Gospel
              </p>
              <p className="text-gray-300/80 text-sm leading-relaxed">
                Louvor e adoração para tocar o coração
              </p>
            </div>

            {/* Platform Buttons - Premium Interactions */}
            <div className="space-y-2.5">
              {platforms.map((platform) => {
                const Icon = platform.icon
                const isHovered = hoveredButton === platform.id
                return (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredButton(platform.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className={`group/${platform.id} w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl
                      bg-gradient-to-br from-white/8 to-white/5 
                      border border-white/12 backdrop-blur-sm
                      text-white font-medium text-sm
                      transition-all duration-500 ease-out
                      hover:border-white/25 hover:bg-white/15 hover:shadow-lg
                      active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                      ${isHovered ? 'shadow-xl' : 'shadow-md'}`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-all duration-500 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                      strokeWidth={1.5}
                    />
                    <span>{platform.name}</span>
                  </a>
                )
              })}
            </div>

            {/* Spiritual Signature - Reduced Prominence */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-gray-500/70 text-xs leading-relaxed tracking-wide">
                Um projeto nascido no coração de Deus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
