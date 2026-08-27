export interface Project {
  id: string;
  title: string;
  titleAm: string;
  category: 'residential' | 'apartment' | 'commercial' | 'hospitality';
  categoryLabel: string;
  categoryLabelAm: string;
  location: string;
  locationAm: string;
  scope: string;
  scopeAm: string;
  year: string;
  description: string;
  descriptionAm: string;
  featured: boolean;
  image: string;
  gallery: string[];
  features: string[];
  featuresAm: string[];
  video?: string;
}
