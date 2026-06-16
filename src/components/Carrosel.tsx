"use client"

import Image from "next/image"

import React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Caminhos absolutos apontando para public/carrossel/
const carrosselImagens = [
  { src: "/carrossel/01-banner.png", alt: "Produtos" },
  { src: "/carrossel/2-banner.png", alt: "Pinceis" },
  { src: "/carrossel/3-banner.png", alt: "Kits" },
]

export default function Carrossel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="w-full">

      {/* Mobile: apenas banner 1 */}
      <div className="md:hidden relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="/carrossel/01-banner.png"
          alt="Produtos"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Desktop e Tablet: carrossel completo */}
      <div className="hidden md:block">
        <Carousel
          plugins={[plugin.current]}
          className="w-full relative"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.reset()}
        >
          <CarouselContent>
            {carrosselImagens.map((imagem, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[550px] overflow-hidden">
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200" />
        </Carousel>
      </div>

    </section>
  )
}