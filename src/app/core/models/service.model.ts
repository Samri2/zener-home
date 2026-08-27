export interface ServiceItem {
  id: string;
  title: string;
  titleAm: string;
  shortDesc: string;
  shortDescAm: string;
  icon: string;
  category: 'finishing' | 'furniture' | 'design';
  details: string[];
  detailsAm: string[];
  image: string;
}
