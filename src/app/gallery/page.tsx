// src/app/gallery/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import HypnosInventory from "@/components/inventory/HypnosInventory";
import HypnosFooter from "@/components/HypnosFooter";

export const metadata: Metadata = {
  title: "Gallery — Hypnos",
  description:
    "Inventario completo de superdeportivos y vehículos de alta gama Hypnos, con búsqueda y filtros avanzados.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <header className="w-full px-6 md:px-12 lg:px-16 py-6 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-2 h-2 bg-[#09090b] rounded-[2px]" />
            </div>
            <span className="text-white text-base font-normal tracking-wider uppercase">
              hypnos
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#a1a1aa] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Inicio</span>
          </Link>
        </div>
      </header>

      <HypnosInventory />
      <HypnosFooter />
    </main>
  );
}
