'use client' 

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)


  return (
    <header className="relative w-full h-24 md:h-28 bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-36 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
  <Image
    src="/logo/logo.png"
    alt="Logo da empresa"
    width={120}
    height={120}
    className="h-16 md:h-20 w-auto object-contain"
  />

  <h1 className="text-base md:text-lg font-bold text-[#8f584e] whitespace-nowrap">
    Bella Flor
  </h1>
</div>


        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-[#C88E82] transition-colors">
            Home
          </Link>
          <Link href="/produtos" className="text-sm font-medium text-slate-600 hover:text-[#C88E82] transition-colors">
            Produtos
          </Link>
          <Link href="/contato" className="text-sm font-medium text-slate-600 hover:text-[#C88E82] transition-colors">
            Contato
          </Link>
        </nav>
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-600 hover:text-[#C88E82] transition-colors focus:outline-none"
        aria-label={ isOpen ? "Fechar menu" : "Abrir menu"}>
          { isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
        {/* menu mobile renderização condicional*/}
        { isOpen && (
          <nav className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4 z-40 items-center justify-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Produtos
          </Link>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contato
          </Link>
        </nav>
        ) }

    </header>
  );
}
