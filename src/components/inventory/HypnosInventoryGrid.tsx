// src/components/inventory/HypnosInventoryGrid.tsx
"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Zap, Gauge, Timer } from "lucide-react";

import { formatPrice, type Vehicle } from "@/lib/vehicles";

const spring = { type: "spring", stiffness: 300, damping: 30 } as const;

interface HypnosInventoryGridProps {
  vehicles: Vehicle[];
}

export default function HypnosInventoryGrid({
  vehicles,
}: HypnosInventoryGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="border border-dashed border-white/[0.12] rounded-3xl py-24 px-8 text-center space-y-2">
        <p className="text-white font-light text-lg">Sin resultados</p>
        <p className="text-[#a1a1aa] text-sm font-light">
          Ajusta los filtros para ver más unidades del inventario.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="popLayout">
        {vehicles.map((vehicle) => (
          <motion.article
            key={vehicle.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={spring}
            className="group relative bg-[#121216] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-colors flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden bg-neutral-900">
              <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent z-10 opacity-60" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={vehicle.image}
                alt={`${vehicle.brand} ${vehicle.name}`}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-3 left-3 z-20 text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md text-white/90 px-2.5 py-1 rounded-full border border-white/10">
                {vehicle.category}
              </span>
              <span className="absolute top-3 right-3 z-20 text-xs font-light text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {vehicle.year}
              </span>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-wider text-[#a1a1aa]">
                  {vehicle.brand}
                </p>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-light text-white tracking-tight">
                    {vehicle.name}
                  </h3>
                  <span className="text-sm font-light text-white whitespace-nowrap">
                    {formatPrice(vehicle.price)}
                  </span>
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.08]">
                <Spec icon={<Zap className="w-3 h-3" />} label="Potencia" value={vehicle.specs.power} />
                <Spec
                  icon={<Gauge className="w-3 h-3" />}
                  label="0-100"
                  value={vehicle.specs.acceleration}
                  className="border-x border-white/[0.08] px-2"
                />
                <Spec icon={<Timer className="w-3 h-3" />} label="Máx" value={vehicle.specs.topSpeed} />
              </div>

              {/* Action */}
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-between w-full text-xs uppercase tracking-wider text-white bg-white/[0.05] hover:bg-white/[0.1] px-4 py-3 rounded-xl transition-colors border border-white/10 group-hover:border-white/20"
              >
                <span>Consultar unidad</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

function Spec({
  icon,
  label,
  value,
  className = "",
}: {
  icon: ReactNode;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-[10px] uppercase tracking-wider text-[#a1a1aa] flex items-center gap-1">
        {icon} {label}
      </span>
      <span className="text-xs font-medium text-white">{value}</span>
    </div>
  );
}
