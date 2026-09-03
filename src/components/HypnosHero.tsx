// src/components/HypnosHero.tsx
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface HypnosHeroProps {
  logo?: string;
  navItems?: NavItem[];
  languageOptions?: string[];
  currentLanguage?: string;
  contactLabel?: string;
  contactHref?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  onLanguageChange?: (lang: string) => void;
}

export default function HypnosHero({
  logo = "hypnos",
  navItems = [
    { label: "Plataforma", href: "/plataforma" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Tecnología", href: "/tecnologia" },
    { label: "Recursos", href: "/recursos" },
  ],
  languageOptions = ["ES", "EN"],
  currentLanguage = "ES",
  contactLabel = "Contacto",
  contactHref = "/contacto",
  title = "Más allá de los\nlímites de tu\nimaginación",
  description = "Transformamos cada proceso físico y digital en una experiencia fluida, precisa y con un diseño de alta gama que redefine el movimiento.",
  ctaLabel = "Conoce más",
  ctaHref = "/nosotros",
  onCtaClick,
  onLanguageChange,
}: HypnosHeroProps) {
  return (
    <section className="relative w-full min-h-screen bg-[#09090b] text-[#f4f4f5] overflow-hidden flex flex-col justify-between selection:bg-white/20">
      {/* Hero background image */}
      <Image
        src="/images/eq_hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_50%] pointer-events-none select-none"
      />
      {/* Legibility overlay — keeps text at design-system contrast */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#09090b]/30 to-[#09090b] md:from-[#09090b]/65 md:via-[#09090b]/40 md:to-[#09090b]/80" />

      {/* Subtle background glow mimicking Apple high-end minimalism */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-6 border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-2 h-2 bg-[#09090b] rounded-2xs" />
            </div>
            <span className="text-white text-base font-normal tracking-wider uppercase">
              {logo}
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[#a1a1aa] text-sm hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Language & Contact */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              {languageOptions.map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange?.(lang)}
                  className={`text-xs tracking-wider transition-colors ${
                    lang === currentLanguage
                      ? "text-white font-medium"
                      : "text-[#a1a1aa] hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link
              href={contactHref}
              className="text-xs tracking-wider uppercase text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/10"
            >
              {contactLabel}
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 my-auto py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            {/* Left Column - Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-[-0.03em] whitespace-pre-line">
                {title}
              </h1>
            </motion.div>

            {/* Right Column - Description & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-start gap-8 lg:pb-2"
            >
              <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed whitespace-pre-line font-light">
                {description}
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href={ctaHref}
                  onClick={onCtaClick}
                  className="inline-flex items-center gap-3 bg-white text-[#09090b] text-sm font-medium px-7 py-3.5 rounded-full transition-all shadow-lg hover:bg-[#f4f4f5]"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="w-full h-[1px] bg-white/[0.08]" />
    </section>
  );
}
