// src/components/inventory/filters.ts
import {
  PRICE_MAX,
  VEHICLE_CATEGORIES,
  type Vehicle,
  type VehicleCategory,
} from "@/lib/vehicles";

export interface Filters {
  query: string;
  categories: VehicleCategory[];
  maxPrice: number;
  years: number[];
}

export const DEFAULT_FILTERS: Filters = {
  query: "",
  categories: [],
  maxPrice: PRICE_MAX,
  years: [],
};

export function isDefault(filters: Filters): boolean {
  return (
    filters.query.trim() === "" &&
    filters.categories.length === 0 &&
    filters.years.length === 0 &&
    filters.maxPrice >= PRICE_MAX
  );
}

export function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export function applyFilters(vehicles: Vehicle[], filters: Filters): Vehicle[] {
  const query = filters.query.trim().toLowerCase();

  return vehicles.filter((vehicle) => {
    if (query) {
      const haystack = `${vehicle.brand} ${vehicle.name}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(vehicle.category)
    ) {
      return false;
    }
    if (filters.years.length > 0 && !filters.years.includes(vehicle.year)) {
      return false;
    }
    if (filters.maxPrice < PRICE_MAX && vehicle.price > filters.maxPrice) {
      return false;
    }
    return true;
  });
}

// Re-exported for convenience in components that render the controls.
export { VEHICLE_CATEGORIES };
