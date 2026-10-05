export type DepartmentType = 'glassware' | 'hardware' | 'all';

export interface Product {
  id: string;
  name: string;
  code: string; // e.g. "GPF-50", "SH-102", "GCN-90"
  department: 'glassware' | 'hardware';
  category: string; // matches CategoryInfo.name
  subcategory?: string; // e.g. "Spider without fin", "Spider with fin", etc.
  shortDescription: string;
  description?: string;
  price: number;
  priceFormatted?: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  galleryImages?: string[];
  finish: string[];
  material: string;
  application: string;
  availability: 'In Stock' | 'Direct Supply' | 'Made to Order';
  dimensions?: string;
  glassThickness?: string;
  loadCapacity?: string;
  specifications?: { label: string; value: string }[];
  features?: string[];
  badge?: string;
  inStock: boolean;
}

export interface SubcategoryInfo {
  id: string;
  name: string;
  shortDescription?: string;
  itemCount?: number;
  imageUrl?: string;
  badge?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  department: 'glassware' | 'hardware';
  shortDescription: string;
  itemCount: number;
  imageUrl: string;
  specsSummary?: string;
  badge?: string;
  parentCategory?: string;
  subcategories?: SubcategoryInfo[];
}

export interface CartItem {
  id: string;
  name: string;
  department: 'glassware' | 'hardware';
  category: string;
  finish: string;
  price: number;
  quantity: number;
  imageUrl: string;
  sku: string;
  leadTime?: string;
}

export interface HeroConfig {
  videoUrl: string;
  runwayVh: number;
  lerpDamping: number;
}
