// src/lib/vehicles.ts

export type VehicleCategory = "Supercar" | "Gran Turismo" | "Electric" | "Hypercar";

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  "Supercar",
  "Gran Turismo",
  "Electric",
  "Hypercar",
];

export const VEHICLE_YEARS = [2024, 2025, 2026] as const;

export const PRICE_MIN = 150_000;
export const PRICE_MAX = 3_000_000;

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: VehicleCategory;
  year: number;
  /** Price in USD, numeric for filtering. */
  price: number;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  image: string;
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

export const VEHICLES: Vehicle[] = [
  {
    id: "porsche-911-gt3-rs",
    name: "911 GT3 RS",
    brand: "Porsche",
    category: "Supercar",
    year: 2026,
    price: 345_000,
    specs: { power: "518 hp", acceleration: "3.0s 0-100", topSpeed: "296 km/h" },
    image: img("photo-1614162692292-7ac56d7f7f1e"),
  },
  {
    id: "ferrari-roma-spider",
    name: "Roma Spider",
    brand: "Ferrari",
    category: "Gran Turismo",
    year: 2025,
    price: 285_000,
    specs: { power: "612 hp", acceleration: "3.4s 0-100", topSpeed: "320 km/h" },
    image: img("photo-1583121274602-3e2820c69888"),
  },
  {
    id: "aston-martin-vantage",
    name: "Vantage",
    brand: "Aston Martin",
    category: "Supercar",
    year: 2026,
    price: 210_000,
    specs: { power: "656 hp", acceleration: "3.4s 0-100", topSpeed: "325 km/h" },
    image: img("photo-1603584173870-7f23fdae1b7a"),
  },
  {
    id: "rimac-nevera",
    name: "Nevera",
    brand: "Rimac",
    category: "Hypercar",
    year: 2026,
    price: 2_100_000,
    specs: { power: "1,914 hp", acceleration: "1.8s 0-100", topSpeed: "412 km/h" },
    image: img("photo-1544829099-b9a0c07fad1a"),
  },
  {
    id: "bugatti-chiron",
    name: "Chiron Super Sport",
    brand: "Bugatti",
    category: "Hypercar",
    year: 2024,
    price: 3_300_000,
    specs: { power: "1,578 hp", acceleration: "2.4s 0-100", topSpeed: "440 km/h" },
    image: img("photo-1580273916550-e323be2ae537"),
  },
  {
    id: "lamborghini-revuelto",
    name: "Revuelto",
    brand: "Lamborghini",
    category: "Supercar",
    year: 2026,
    price: 608_000,
    specs: { power: "1,001 hp", acceleration: "2.5s 0-100", topSpeed: "350 km/h" },
    image: img("photo-1592198084033-aade902d1aae"),
  },
  {
    id: "mclaren-750s",
    name: "750S",
    brand: "McLaren",
    category: "Supercar",
    year: 2025,
    price: 331_000,
    specs: { power: "740 hp", acceleration: "2.8s 0-100", topSpeed: "332 km/h" },
    image: img("photo-1621135802920-133df287f89c"),
  },
  {
    id: "koenigsegg-jesko",
    name: "Jesko Absolut",
    brand: "Koenigsegg",
    category: "Hypercar",
    year: 2025,
    price: 3_000_000,
    specs: { power: "1,600 hp", acceleration: "2.5s 0-100", topSpeed: "480 km/h" },
    image: img("photo-1552519507-da3b142c6e3d"),
  },
  {
    id: "lotus-emeya",
    name: "Emeya R",
    brand: "Lotus",
    category: "Electric",
    year: 2026,
    price: 106_000,
    specs: { power: "905 hp", acceleration: "2.8s 0-100", topSpeed: "256 km/h" },
    image: img("photo-1503376780353-7e6692767b70"),
  },
  {
    id: "maserati-mc20",
    name: "MC20 Cielo",
    brand: "Maserati",
    category: "Supercar",
    year: 2025,
    price: 242_000,
    specs: { power: "621 hp", acceleration: "2.9s 0-100", topSpeed: "324 km/h" },
    image: img("photo-1553440569-bcc63803a83d"),
  },
  {
    id: "pagani-utopia",
    name: "Utopia",
    brand: "Pagani",
    category: "Hypercar",
    year: 2026,
    price: 2_500_000,
    specs: { power: "852 hp", acceleration: "2.8s 0-100", topSpeed: "350 km/h" },
    image: img("photo-1600712242805-5f78671b24da"),
  },
  {
    id: "bentley-continental-gt",
    name: "Continental GT Speed",
    brand: "Bentley",
    category: "Gran Turismo",
    year: 2025,
    price: 274_000,
    specs: { power: "771 hp", acceleration: "3.1s 0-100", topSpeed: "335 km/h" },
    image: img("photo-1605559424843-9e4c228bf1c2"),
  },
];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
