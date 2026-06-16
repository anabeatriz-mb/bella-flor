import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-36 py-6 md:py-8 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-center md:text-left text-xs text-slate-400">
        <p>&copy; {currentYear} Bella Flor. Todos os direitos reservados.</p>
        <p className="text-slate-300">Feito com carinho.</p>
      </div>
    </footer>
  );
}