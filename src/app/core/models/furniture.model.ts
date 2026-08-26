export interface FurnitureItem {
  id: string;
  name: string;
  nameAm: string;
  category: 'living' | 'bedroom' | 'dining' | 'office' | 'custom';
  categoryLabel: string;
  categoryLabelAm: string;
  dimensions: string;
  woodType: string;
  finish: string;
  priceNote: string;
  priceNoteAm: string;
  description: string;
  descriptionAm: string;
  image: string;
  featured: boolean;
  leadTime: string;
}
