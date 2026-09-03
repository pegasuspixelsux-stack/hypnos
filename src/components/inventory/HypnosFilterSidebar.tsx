// src/components/inventory/HypnosFilterSidebar.tsx
"use client";

import { motion } from "motion/react";
import { Search, RotateCcw } from "lucide-react";

import {
  PRICE_MIN,
  PRICE_MAX,
  VEHICLE_CATEGORIES,
  VEHICLE_YEARS,
  formatPrice,
} from "@/lib/vehicles";
import { isDefault, toggle, type Filters } from "./filters";

const spring = { type: "spring", stiffness: 300, damping: 30 } as const;

interface HypnosFilterSidebarProps {
  filters: Filters;
  onChange: (next: Filters) => void;
  onReset: () => void;
  resultCount: number;
}

export default function HypnosFilterSidebar({
  filters,
  onChange,
  onReset,
  resultCount,
}: HypnosFilterSidebarProps) {
  const atMax = filters.maxPrice >= PRICE_MAX;
  const dirty = !isDefault(filters);

  return (
    <div className="lg:sticky lg:top-8 space-y-8 bg-[#121216] border border-white/[0.08] rounded-3xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm uppercase tracking-[0.15em] text-white font-medium">
          Filtros
        </h2>
        <span className="text-xs text-[#a1a1aa]">
          {resultCount} {resultCount === 1 ? "unidad" : "unidades"}
        </span>
      </div>

      {/* Search */}
      <div className="space-y-3">
        <label
          htmlFor="inventory-search"
          className="text-xs uppercase tracking-wider text-[#a1a1aa]"
        >
          Búsqueda
        </label>
        <div className="relative">
          <Search className="w-4 h-4 text-[#a1a1aa] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="inventory-search"
            type="text"
            value={filters.query}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
            placeholder="Marca o modelo…"
            className="w-full min-h-[44px] bg-[#09090b] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>
      </div>

      {/* Category */}
      <fieldset className="space-y-3">
        <legend className="text-xs uppercase tracking-wider text-[#a1a1aa]">
          Categoría
        </legend>
        <div className="flex flex-wrap gap-2">
          {VEHICLE_CATEGORIES.map((category) => {
            const active = filters.categories.includes(category);
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  onChange({
                    ...filters,
                    categories: toggle(filters.categories, category),
                  })
                }
                className={`min-h-[44px] px-4 text-xs tracking-wider rounded-full border transition-colors ${
                  active
                    ? "bg-white text-[#09090b] font-medium border-white"
                    : "bg-white/[0.03] text-[#a1a1aa] border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Price */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">
            Precio máximo
          </span>
          <span className="text-white font-medium">
            {formatPrice(filters.maxPrice)}
            {atMax ? "+" : ""}
          </span>
        </div>
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={50_000}
          value={filters.maxPrice}
          onChange={(e) =>
            onChange({ ...filters, maxPrice: Number(e.target.value) })
          }
          aria-label="Precio máximo"
          className="w-full accent-white bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-[#a1a1aa]/70">
          <span>{formatPrice(PRICE_MIN)}</span>
          <span>{formatPrice(PRICE_MAX)}+</span>
        </div>
      </div>

      {/* Year */}
      <fieldset className="space-y-3">
        <legend className="text-xs uppercase tracking-wider text-[#a1a1aa]">
          Año
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {VEHICLE_YEARS.map((year) => {
            const active = filters.years.includes(year);
            return (
              <button
                key={year}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  onChange({ ...filters, years: toggle(filters.years, year) })
                }
                className={`min-h-[44px] text-xs tracking-wider rounded-xl border transition-colors ${
                  active
                    ? "bg-white text-[#09090b] font-medium border-white"
                    : "bg-white/[0.03] text-[#a1a1aa] border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Reset */}
      <motion.button
        type="button"
        onClick={onReset}
        disabled={!dirty}
        whileTap={dirty ? { scale: 0.96 } : undefined}
        transition={spring}
        className={`w-full min-h-[44px] inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider rounded-xl border transition-colors ${
          dirty
            ? "text-white bg-white/[0.05] border-white/10 hover:bg-white/[0.1] hover:border-white/20 cursor-pointer"
            : "text-[#a1a1aa]/40 border-white/[0.05] cursor-not-allowed"
        }`}
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Restablecer filtros</span>
      </motion.button>
    </div>
  );
}
