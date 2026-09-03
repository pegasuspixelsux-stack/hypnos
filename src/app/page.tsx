// src/app/page.tsx
import HypnosHero from "@/components/HypnosHero";
import HypnosAbout from "@/components/HypnosAbout";
import HypnosCarListings from "@/components/HypnosCarListings";
import HypnosFinancing from "@/components/HypnosFinancing";
import HypnosContact from "@/components/HypnosContact";
import HypnosFooter from "@/components/HypnosFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <HypnosHero
        title={"La cumbre de la\ningeniería y el\nmovimiento de élite"}
        description="Concesionaria exclusiva de superdeportivos y vehículos de alta gama en Punta del Este. Elegancia, potencia y precisión sin concesiones."
        ctaLabel="Ver inventario"
        ctaHref="#inventory"
      />
      <HypnosAbout />
      <HypnosCarListings />
      <HypnosFinancing />
      <HypnosContact />
      <HypnosFooter />
    </main>
  );
}
