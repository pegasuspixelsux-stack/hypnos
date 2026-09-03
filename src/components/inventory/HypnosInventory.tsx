// src/components/inventory/HypnosInventory.tsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { SlidersHorizontal, X } from "lucide-react";

import { VEHICLES } from "@/lib/vehicles";
import { DEFAULT_FILTERS, applyFilters, type Filters } from "./filters";
import HypnosFilterSidebar from "./HypnosFilterSidebar";
import HypnosInventoryGrid from "./HypnosInventoryGrid";

const spring = { type: "spring", stiffness: 300, damping: 30 } as const;

export default function HypnosInventory() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const results = useMemo(() => applyFilters(VEHICLES, filters), [filters]);

  return (
    <section className="w-full bg-[#09090b] text-[#f4f4f5] px-6 md:px-12 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a1a1aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Gallery
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-[-0.02em] text-white">
            Inventario completo.
          </h1>
          <p className="text-[#a1a1aa] text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Explora la colección Hypnos con filtros avanzados por categoría,
            precio y año de fabricación.
          </p>
        </div>

        {/* Mobile filter toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          className="lg:hidden min-h-[44px] w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-white bg-white/[0.05] border border-white/10 rounded-xl px-4"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
          <span>{mobileOpen ? "Ocultar filtros" : "Mostrar filtros"}</span>
        </button>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sidebar */}
          <div
            className={`lg:col-span-4 ${mobileOpen ? "block" : "hidden lg:block"}`}
          >
            <HypnosFilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={() => setFilters(DEFAULT_FILTERS)}
              resultCount={results.length}
            />
          </div>

          {/* Grid */}
          <div className="lg:col-span-8">
            <motion.p
              layout
              transition={spring}
              className="text-xs uppercase tracking-wider text-[#a1a1aa] mb-6"
            >
              {results.length} de {VEHICLES.length} unidades
            </motion.p>
            <HypnosInventoryGrid vehicles={results} />
          </div>
        </div>
      </div>
    </section>
  );
}
