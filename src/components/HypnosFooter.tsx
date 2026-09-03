// src/components/HypnosFooter.tsx
import Link from "next/link";

export default function HypnosFooter() {
  return (
    <footer className="w-full bg-[#09090b] text-[#f4f4f5] py-20 px-6 md:px-12 lg:px-16 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#09090b] rounded-2xs" />
            </div>
            <span className="text-white text-sm font-normal tracking-wider uppercase">
              Hypnos
            </span>
          </div>
          <p className="text-[#a1a1aa] text-sm font-light leading-relaxed pr-4">
            Plataforma de alta tecnología enfocada en experiencias digitales fluidas, rendimiento supremo y diseño minimalista.
          </p>
          <p className="text-[#a1a1aa]/60 text-xs font-light pt-2">
            © {new Date().getFullYear()} Hypnos. Todos los derechos reservados.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <h4 className="text-white text-xs uppercase tracking-[0.15em] font-medium">
            Navegación
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/plataforma" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Plataforma
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/tecnologia" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Tecnología
              </Link>
            </li>
            <li>
              <Link href="/recursos" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Recursos
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Privacy */}
        <div className="space-y-4">
          <h4 className="text-white text-xs uppercase tracking-[0.15em] font-medium">
            Legal
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/privacidad" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link href="/seguridad" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Seguridad de Datos
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Connect & Social */}
        <div className="space-y-4">
          <h4 className="text-white text-xs uppercase tracking-[0.15em] font-medium">
            Conecta
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/contacto" className="text-[#a1a1aa] hover:text-white text-sm transition-colors font-light">
                Soporte Técnico
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
