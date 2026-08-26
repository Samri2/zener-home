import { Injectable } from '@angular/core';
import { FurnitureItem } from '../models/furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private furnitureItems: FurnitureItem[] = [
    {
      id: 'modern-luxury-tv-unit',
      name: 'Zenith Fluted Wall TV Console Unit',
      nameAm: 'ዜኒዝ ዘመናዊ የቲቪ ግድግዳ ካቢኔት',
      category: 'living',
      categoryLabel: 'Living Room',
      categoryLabelAm: 'ሳሎን',
      dimensions: '320cm (W) x 240cm (H) x 40cm (D)',
      woodType: 'Natural Teak & High-Density MDF with Charcoal Slat Finish',
      finish: 'Matte Polyurethane & Integrated Warm LED Strip Lighting',
      priceNote: 'Custom fabricated per room dimensions.',
      priceNoteAm: 'እንደ ክፍሉ መጠን በልዩ ሁኔታ የሚሰራ።',
      description: 'Architectural living room media wall featuring vertical acoustic wood slats, concealed cable management channels, integrated floating drawers with Blum soft-close runners, and ambient backlit shelving.',
      descriptionAm: 'ለሳሎን የሚሆን ውብ የቲቪ ግድግዳ፤ ድምጽ የሚቀንሱ የእንጨት ዲዛይኖች፣ የተሰወሩ የሽቦ መስመሮች፣ ተንሳፋፊ መሳቢያዎች እና የውስጥ የኤልኢዲ መብራቶች ያሉት።',
      image: '/images/pages/page-06.jpg',
      featured: true,
      leadTime: '10 - 15 business days'
    },
    {
      id: 'luxury-master-bedroom-suite',
      name: 'Elysian King Bedframe & Fluted Headboard',
      nameAm: 'ኤሊሲያን የቅንጦት ባለከፍተኛ መኝታ አልጋ',
      category: 'bedroom',
      categoryLabel: 'Bedroom Suite',
      categoryLabelAm: 'መኝታ ቤት',
      dimensions: '200cm x 200cm Bed + 340cm Wide Accent Headboard',
      woodType: 'Solid Walnut & Premium Upholstery',
      finish: 'Natural Satin Lacquer & Warm LED Backlighting',
      priceNote: 'Includes frame, wall headboard, and dual floating nightstands.',
      priceNoteAm: 'አልጋውን፣ የግድግዳ ጌጡን እና ሁለት ተንሳፋፊ ኮሞዲኖዎችን ያካትታል።',
      description: 'Opulent king-size bed suite featuring an expansive floor-to-ceiling upholstered and timber fluted headboard, cantilevered bedside floating tables, and solid internal framing.',
      descriptionAm: 'የተሟላ የቅንጦት ኪንግ ሳይዝ አልጋ፤ ከጣሪያ እስከ ወለል የሚደርስ የእንጨትና የጨርቅ ጌጥ፣ ተንሳፋፊ ኮሞዲኖዎች እና ጠንካራ የእንጨት አሰራር።',
      image: '/images/pages/page-04.jpg',
      featured: true,
      leadTime: '14 - 20 business days'
    },
    {
      id: 'modern-island-kitchen-cabinetry',
      name: 'Artisan Modern Kitchen Cabinetry System',
      nameAm: 'ዘመናዊ የወጥ ቤት ካቢኔት እና ኳርትዝ እብነበረድ',
      category: 'custom',
      categoryLabel: 'Kitchen & Cabinetry',
      categoryLabelAm: 'ወጥ ቤት እና ካቢኔቶች',
      dimensions: 'Custom modular fit to architectural blueprints',
      woodType: 'Moisture Resistant HDF & Quartz Solid Surface',
      finish: 'Super Matte Finish with Integrated Aluminum Profiles',
      priceNote: 'Priced per linear meter based on hardware and stone selection.',
      priceNoteAm: 'እንደ ርዝመቱ መጠን እና እንደ ተመረጠው እብነበረድ ዋጋ ይሰላል።',
      description: 'Engineered modular kitchen with quartz counters, lift-up upper cabinet doors, pull-out larders, and scratch-resistant matte facades tailored for luxury residences.',
      descriptionAm: 'የውሃና እርጥበት መከላከያ ያላቸው ጥራት ያላቸው የወጥ ቤት ካቢኔቶች፤ ኳርትዝ እብነበረድ፣ ዘመናዊ መሳቢያዎች እና የሚያማምሩ ቀለሞች።',
      image: '/images/pages/page-07.jpg',
      featured: true,
      leadTime: '20 - 30 business days'
    },
    {
      id: 'reception-counter-desk',
      name: 'Bespoke Executive Curved Reception Desk',
      nameAm: 'ዘመናዊ የሪሴፕሽን እና የቢሮ ጠረጴዛ',
      category: 'office',
      categoryLabel: 'Executive Office & Reception',
      categoryLabelAm: 'ቢሮ እና ሪሴፕሽን',
      dimensions: '280cm (L) x 110cm (W) x 115cm (H)',
      woodType: 'Solid Hardwood & High Gloss Curved Fascia',
      finish: 'Warm LED Undermount Illumination & Polished Top',
      priceNote: 'Custom fabricated for commercial and corporate lobbies.',
      priceNoteAm: 'ለቢሮዎች እና ለንግድ ተቋማት የሚዘጋጅ።',
      description: 'Commanding executive reception workstation with built-in led illumination, wire grommets, internal shelving, and transaction tops.',
      descriptionAm: 'ለሆቴል፣ ስፓና ለኮርፖሬት ቢሮዎች የሚሆን ውብ የሪሴፕሽን ጠረጴዛ ከኤልኢዲ መብራት ጋር።',
      image: '/images/pages/page-10.jpg',
      featured: true,
      leadTime: '12 - 18 business days'
    },
    {
      id: 'scandinavian-dining-set',
      name: 'Solid Wood Modern Dining Table & Bench Set',
      nameAm: 'የተሟላ የመመገቢያ ጠረጴዛና ቤንች',
      category: 'dining',
      categoryLabel: 'Dining Room',
      categoryLabelAm: 'የመመገቢያ ክፍል',
      dimensions: '220cm (L) x 95cm (W) x 75cm (H)',
      woodType: 'Solid Natural Hardwood with Designer Bench & Chairs',
      finish: 'Matte Protective Wood Stain & Natural Oil Topcoat',
      priceNote: 'Includes table, matching bench, and ergonomic chairs.',
      priceNoteAm: 'ጠረጴዛውን፣ ተስማሚ ቤንች እና ወንበሮችን ያጠቃልላል።',
      description: 'Handcrafted solid hardwood dining centerpiece with organic natural wood grains and modern matching dining benches.',
      descriptionAm: 'ከተፈጥሮ ጠንካራ እንጨት የተሰራ የመመገቢያ ጠረጴዛ ከውብ መቀመጫ ቤንች ጋር።',
      image: '/images/pages/page-02.jpg',
      featured: true,
      leadTime: '14 - 21 business days'
    },
    {
      id: 'laser-cut-ceiling-system',
      name: 'CNC Laser-Cut Geometric Arabesque Ceiling Panel',
      nameAm: 'በሲኤንሲ ሌዘር የተቆረጠ የጣሪያ ጌጥ ከመብራት ጋር',
      category: 'custom',
      categoryLabel: 'Architectural Woodcraft',
      categoryLabelAm: 'የእንጨት እና የጣሪያ ጥበብ',
      dimensions: 'Configured per ceiling cove span',
      woodType: 'Multi-layer Architectural Wood Composite',
      finish: 'Backlit Warm Ambient LED Diffuser Panel',
      priceNote: 'Fabricated per ceiling square meter specifications.',
      priceNoteAm: 'እንደ ጣሪያው ስፋት መጠን በልዩ ሁኔታ የሚሰራ።',
      description: 'Precision CNC-routed geometric architectural ceiling insets that provide dazzling indirect ambient illumination for luxury living and reception halls.',
      descriptionAm: 'በከፍተኛ የሌዘር ቴክኖሎጂ የተቀረጸ የጣሪያ ጌጥ፤ ለሳሎን እና ለቪላዎች ልዩ ውበት የሚሰጥ።',
      image: '/images/pages/page-15.jpg',
      featured: true,
      leadTime: '10 - 15 business days'
    }
  ];

  getFurnitureItems(): FurnitureItem[] {
    return this.furnitureItems;
  }

  getFeaturedFurniture(): FurnitureItem[] {
    return this.furnitureItems.filter(f => f.featured);
  }

  getFurnitureById(id: string): FurnitureItem | undefined {
    return this.furnitureItems.find(f => f.id === id);
  }

  getFurnitureByCategory(category: string): FurnitureItem[] {
    if (category === 'all') return this.furnitureItems;
    return this.furnitureItems.filter(f => f.category === category);
  }
}
