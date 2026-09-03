// src/components/HypnosAbout.tsx
"use client";

import { motion } from "motion/react";

export default function HypnosAbout() {
  return (
    <section className="relative w-full bg-[#09090b] text-[#f4f4f5] py-28 md:py-40 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* Section Subtitle */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a1a1aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Nosotros
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-light tracking-[-0.02em] text-white leading-[1.2]">
            Diseñado con precisión milimétrica para quienes buscan redefinir el estándar de la industria.
          </h2>

          {/* One-column body text content */}
          <div className="space-y-6 text-[#a1a1aa] text-base md:text-lg font-light leading-relaxed">
            <p>
              En Hypnos concebimos la ingeniería y el diseño como un solo elemento indivisible. Creemos firmemente que cada interacción digital debe sentirse tan natural como el movimiento físico, eliminando fricciones innecesarias y elevando la experiencia del usuario a su máxima expresión minimalista.
            </p>
            <p>
              Nuestro enfoque combina metodologías de desarrollo rigurosas basadas en tecnologías modernas como Next.js, arquitecturas seguras con Firebase y un rigor estético inspirado en las directrices de diseño más depuradas del mundo. Cada componente es construido meticulosamente para perdurar, escalar y ofrecer rendimiento impecable bajo cualquier circunstancia.
            </p>
            <p>
              A través de una cultura de constante evolución técnica, acompañamos a marcas y creadores ambiciosos en la transición hacia ecosistemas digitales rápidos, intuitivos y visualmente memorables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
