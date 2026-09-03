// src/components/HypnosCarListings.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Gauge, Calendar, Zap } from "lucide-react";

interface Car {
  id: string;
  name: string;
  category: "Supercar" | "Gran Turismo" | "Electric";
  year: number;
  price: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  image: string;
}

const CARS: Car[] = [
  {
    id: "car-1",
    name: "Porsche 911 GT3 RS",
    category: "Supercar",
    year: 2026,
    price: "$345,000",
    specs: { power: "518 hp", acceleration: "3.0s 0-100", topSpeed: "296 km/h" },
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "car-2",
    name: "Ferrari Roma Spider",
    category: "Gran Turismo",
    year: 2025,
    price: "$285,000",
    specs: { power: "612 hp", acceleration: "3.4s 0-100", topSpeed: "320 km/h" },
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "car-3",
    name: "Aston Martin Vantage",
    category: "Supercar",
    year: 2026,
    price: "$210,000",
    specs: { power: "656 hp", acceleration: "3.4s 0-100", topSpeed: "325 km/h" },
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "car-4",
    name: "Rimac Nevera Hypercar",
    category: "Electric",
    year: 2026,
    price: "$2,100,000",
    specs: { power: "1,914 hp", acceleration: "1.8s 0-100", topSpeed: "412 km/h" },
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HypnosCarListings() {
  const [filter, setFilter] = useState<string>("All");

  const filteredCars = filter === "All"
    ? CARS
    : CARS.filter(car => car.category === filter);

  return (
    <section id="inventory" className="w-full bg-[#09090b] text-[#f4f4f5] py-28 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a1a1aa]">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Inventario Exclusivo
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-[-0.02em] text-white">
              Piezas de ingeniería excepcional.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.08]">
            {["All", "Supercar", "Gran Turismo", "Electric"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`text-xs px-5 py-2.5 rounded-full transition-all tracking-wider ${
                  filter === category
                    ? "bg-white text-[#09090b] font-medium shadow-sm"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                {category === "All" ? "Todos" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={car.id}
                className="group relative bg-[#121216] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                {/* Car Image Container */}
                <div className="relative w-full h-72 md:h-80 overflow-hidden bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent z-10 opacity-60" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full border border-white/10">
                      {car.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-sm font-light text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                      {car.year}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl md:text-2xl font-light text-white tracking-tight">
                        {car.name}
                      </h3>
                      <span className="text-lg font-light text-white tracking-wide">
                        {car.price}
                      </span>
                    </div>
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/[0.08]">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#a1a1aa] flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Potencia
                      </span>
                      <span className="text-sm font-medium text-white">{car.specs.power}</span>
                    </div>
                    <div className="flex flex-col gap-1 border-x border-white/[0.08] px-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#a1a1aa] flex items-center gap-1">
                        <Gauge className="w-3 h-3" /> 0-100
                      </span>
                      <span className="text-sm font-medium text-white">{car.specs.acceleration}</span>
                    </div>
                    <div className="flex flex-col gap-1 pl-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#a1a1aa] flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Máx
                      </span>
                      <span className="text-sm font-medium text-white">{car.specs.topSpeed}</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-between w-full text-xs uppercase tracking-wider text-white bg-white/[0.05] hover:bg-white/[0.1] px-5 py-3 rounded-xl transition-all border border-white/10 group-hover:border-white/20"
                    >
                      <span>Consultar unidad</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
