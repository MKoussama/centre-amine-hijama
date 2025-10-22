export type Language = 'fr' | 'ar';

export interface ServicePack {
  name: string;
  price: string;
}

export interface Service {
  icon: string;
  title: string;
  packs: ServicePack[];
}

export interface Feature {
  icon: string;
  gradient: string;
  title: string;
  description: string;
}
