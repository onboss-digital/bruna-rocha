'use client'

import { Youtube, Instagram, Music } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
// Usaremos a tipografia do projeto padrão para o subtítulo (mesmo estilo de "Cantora Gospel")

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  const platforms = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '/youtube.png',
      url: 'https://www.youtube.com/watch?v=7rkXNW5LLcY',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '/instagram.png',
      url: 'https://www.instagram.com/bruna_rocha_oficial',
    },
    {
      id: 'spotify',
      name: 'Spotify',
      icon: '/spotify.png',
      url: 'https://open.spotify.com/intl-pt/artist/0YXWhZ8L0f3q5TiMaGU7qc?si=w_Psyt5RR6qCGn650G_sTQ',
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
                    src="/bru.jpg"
                    alt="Bruna Rocha"
                    fill
                    className="object-cover"
                    priority
                    onLoad={() => setImageLoaded(true)}
                  />
                {/* Musical notes animation */}
                <div className="notes-container pointer-events-none" aria-hidden>
                  <span className="note n1">♪</span>
                  <span className="note n2">♪</span>
                  <span className="note n3">♪</span>
                  <span className="note n4">♪</span>
                  <span className="note n5">♪</span>
                </div>
                </div>
              </div>
            </div>

            {/* Header Text - Refined Typography Hierarchy */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight flex items-center justify-center">
                <span>Bruna Rocha</span>
                <span className="ml-0 inline-flex items-center justify-center w-10 h-10 overflow-visible" style={{ marginLeft: -8, transform: 'translateY(2px)' }}>
                  <Image src="/Instagram-Verified.png" alt="Verified" width={40} height={40} style={{ objectFit: 'contain' }} />
                </span>
              </h1>
              <p className="text-emerald-400/90 text-xs font-semibold uppercase tracking-widest mb-4 opacity-80">
                Cantora Gospel
              </p>
              <p className="text-emerald-400/90 text-xs font-semibold uppercase tracking-widest mb-4 opacity-80">
                Acompanhe o Lançamento do novo Single em todas as plataformas digitais.
              </p>
              {/* Capa do novo single (public/capa.*) */}
              <div className="mt-6 flex justify-center">
                <a
                  href="https://www.youtube.com/@brunarochaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Abrir no YouTube"
                  className="w-64 md:w-80 rounded-2xl overflow-hidden shadow-2xl transform-gpu transition-transform duration-700 hover:scale-105 animate-release block"
                >
                  <Image src="/capa-ao-caminho.jpg" alt="Capa do single" width={800} height={800} className="w-full h-auto object-cover" />
                </a>
              </div>
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
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-sm text-white font-medium text-sm transition-all duration-300 ${isHovered ? 'shadow-xl scale-101' : 'shadow-md'}`}
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg">
                      <img src={platform.icon} alt={`${platform.name} logo`} className="w-full h-full object-contain" />
                    </span>
                    <span className="flex-1 text-left">{platform.name}</span>
                    <span className="text-xs opacity-70">Abrir</span>
                  </a>
                )
              })}
            </div>

            {/* Spiritual Signature - Reduced Prominence */}
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-gray-500/70 text-xs leading-relaxed tracking-wide">
               © Bruna Rocha — Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
