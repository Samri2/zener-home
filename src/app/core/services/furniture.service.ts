import { Injectable } from '@angular/core';
import { FurnitureItem } from '../models/furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private furnitureItems: FurnitureItem[] = [
    {
      id: 'dining-salon-furniture-set',
      name: 'Modern Solid Wood Dining Table & Salon Furniture Set',
      nameAm: 'ዘመናዊ የመመገቢያ ጠረጴዛ እና የሳሎን ፈርኒቸር',
      category: 'dining',
      categoryLabel: 'Dining & Salon Furniture',
      categoryLabelAm: 'መመገቢያና ሳሎን ፈርኒቸር',
      dimensions: 'Table: 220cm x 95cm x 75cm / Salon Credenza: 240cm x 50cm x 45cm',
      woodType: 'Solid Natural Wanza / Oak Hardwood with Moisture-Proof Core',
      finish: 'Hand-Rubbed Protective Natural Wood Oil & Matte Polyurethane',
      priceNote: 'Custom tailored to room layout, includes 8 chairs & matching credenza.',
      priceNoteAm: 'እንደ ክፍሉ ስፋት የሚዘጋጅ፤ 8 ወንበሮችንና ተስማሚ የሳሎን ካቢኔትን ያካትታል።',
      description: 'Handcrafted solid timber dining table set and luxury salon living room furniture, featuring rich natural wood grain finishes, matching ergonomic dining chairs, low-profile credenzas, and contemporary styling.',
      descriptionAm: 'ከተፈጥሮ ጠንካራ እንጨት የተሰራ ውብ የመመገቢያ ጠረጴዛ እና የሳሎን እቃዎች፤ ምቹ ወንበሮች፣ የሳሎን ካቢኔቶች እና ዘመናዊ አሰራር።',
      image: '/images/furniture/furniture-01.jpg',
      gallery: [
        '/images/furniture/furniture-01.jpg',
        '/images/furniture/furniture-02.jpg',
        '/images/furniture/furniture-03.jpg',
        '/images/furniture/furniture-04.jpg'
      ],
      features: [
        'Solid natural hardwood dining tabletop with organic edge details',
        'Reinforced joinery designed for lifelong durability',
        'Coordinated salon living room credenza with smooth push-to-open doors',
        'Scratch-resistant and heat-resistant natural satin protective topcoat'
      ],
      featuresAm: [
        'የተፈጥሮ ጠንካራ እንጨት የመመገቢያ ጠረጴዛ ከውብ ቅርፅ ጋር',
        'ለረጅም ዓመታት የሚያገለግል አስተማማኝ የእንጨት አገጣጥም',
        'ተስማሚ የሳሎን ካቢኔት ከእጀታ አልባ ለስላሳ መክፈቻ ጋር',
        'ጭረትና ሙቀት የሚቋቋም የላይኛው የእንጨት ፊኒሽ'
      ],
      featured: true,
      leadTime: '10 - 15 business days'
    },
    {
      id: 'luxury-salon-sofas',
      name: 'Artisan Living Room Sofas & Lounge Seating',
      nameAm: 'የቅንጦት ሳሎን ሶፋዎች እና የመቀመጫ እቃዎች',
      category: 'living',
      categoryLabel: 'Living Room Sofas',
      categoryLabelAm: 'የሳሎን ሶፋዎች',
      dimensions: 'Sectional / 3-Seater: 290cm x 110cm x 85cm',
      woodType: 'Solid Kiln-Dried Hardwood Frame with High-Density 45D Memory Foam',
      finish: 'Stain-Resistant Textured Bouclé / Velvet Upholstery',
      priceNote: 'Customizable fabric color, cushion softness, and seating configuration.',
      priceNoteAm: 'የጨርቁ አይነት፣ ቀለም እና የሶፋው መጠን እንደ ምርጫዎ የሚዘጋጅ።',
      description: 'Premium handcrafted living room sofas with curved modular silhouettes, high-density 45D orthopedic foam cushioning, durable stain-resistant upholstery, and solid hardwood internal frames.',
      descriptionAm: 'ጥራት ያላቸው የሳሎን ሶፋዎች፤ የማይዝል ስፖንጅ፣ ቆሻሻ የሚቋቋም የተመረጠ ጨርቅ፣ ጠንካራ የእንጨት ፍሬም እና ለሳሎን ልዩ ውበት የሚሰጥ ዲዛይን።',
      image: '/images/furniture/furniture-05.jpg',
      gallery: [
        '/images/furniture/furniture-05.jpg',
        '/images/furniture/furniture-06.jpg'
      ],
      features: [
        'Ergonomic curved styling for contemporary luxury living spaces',
        'High-density resilient foam that maintains shape and posture support',
        'Heavy-duty internal kiln-dried hardwood framing with reinforced springs',
        'Stain-resistant and pet-friendly fabric options'
      ],
      featuresAm: [
        'ምቹ እና ማራኪ የሆነ ዘመናዊ የሳሎን ሶፋ ቅርጽ',
        'ቅርጹን የማይለውጥ ጥራት ያለው ስፖንጅ',
        'ጠንካራ የተፈጥሮ እንጨት የውስጥ ፍሬም እና ስፕሪንግ',
        'ቆሻሻ የማይዝ እና ለማጽዳት ቀላል የሆነ ጨርቅ'
      ],
      featured: true,
      leadTime: '12 - 18 business days'
    },
    {
      id: 'tv-wall-units-consoles',
      name: 'Zenith Architectural TV Wall Units & Media Consoles',
      nameAm: 'ዜኒዝ ዘመናዊ የቲቪ ግድግዳ እና ተንሳፋፊ ካቢኔቶች',
      category: 'living',
      categoryLabel: 'TV & Media Wall Units',
      categoryLabelAm: 'የቲቪ ግድግዳ እና ካቢኔት',
      dimensions: '300cm (W) x 260cm (H) x 40cm (D) - Custom Fit',
      woodType: 'Natural Teak, High-Density Marine MDF & Acoustic Fluted Slats',
      finish: 'Matte Scratch-Proof Lacquer with Integrated Warm 3000K LED Strips',
      priceNote: 'Tailored to room wall dimensions with integrated power/HDMI ports.',
      priceNoteAm: 'እንደ ሳሎንዎ ግድግዳ ስፋትና ለሽቦዎች በሚሆን የተሰወረ ቦታ የሚሰራ።',
      description: 'Custom-built wall-mounted TV entertainment units featuring vertical acoustic fluted timber slats, cantilevered floating consoles, hidden cable management, and integrated warm LED backlighting.',
      descriptionAm: 'ከግድግዳ ላይ የሚገጠሙ ዘመናዊ የቲቪ ማስቀመጫዎች፤ ድምፅ የሚቀንሱ የእንጨት ሰረዞች፣ ተንሳፋፊ መሳቢያዎች፣ የተሰወሩ የሽቦ መስመሮች እና የኤልኢዲ መብራት።',
      image: '/images/furniture/furniture-07.jpg',
      gallery: [
        '/images/furniture/furniture-07.jpg',
        '/images/furniture/furniture-08.jpg',
        '/images/furniture/furniture-09.jpg',
        '/images/furniture/furniture-13.jpg'
      ],
      features: [
        'Acoustic sound-dampening fluted timber wall cladding',
        'Reinforced cantilevered floating credenza supporting large screen displays',
        'Hidden cable ducting for clean zero-wire visual presentation',
        'Warm perimeter LED illumination with concealed dimmer touch switches'
      ],
      featuresAm: [
        'ድምፅ የሚቀንሱ ውብ የቁም የእንጨት ሰረዞች ግድግዳ',
        'ትላልቅ የቲቪ ስክሪኖችን የሚሸከም ጠንካራ ተንሳፋፊ ካቢኔት',
        'ሽቦዎች እንዳይታዩ የተዘጋጀ የተሰወረ የኬብል ማስተላለፊያ',
        'የሚያምር የሞቀ ኤልኢዲ መብራት ከንክኪ ማብሪያ ጋር'
      ],
      featured: true,
      leadTime: '10 - 15 business days'
    },
    {
      id: 'dressing-storage-wardrobe',
      name: 'Bespoke Dressing Storage & Bedroom Wardrobe System',
      nameAm: 'የመኝታ ክፍል መዋቢያ እና የልብስ ማስቀመጫ ካቢኔት',
      category: 'bedroom',
      categoryLabel: 'Dressing Storage & Wardrobe',
      categoryLabelAm: 'የመዋቢያ እና የልብስ ማስቀመጫ',
      dimensions: '160cm (W) x 200cm (H) x 50cm (D) / Modular Custom Fit',
      woodType: 'High-Gloss Lacquered Moisture-Proof Core & Smoked Aluminum Accents',
      finish: 'Velvet-Lined Drawers & Touch-Dimmer Halo LED Mirror',
      priceNote: 'Includes cosmetic organizer drawers, vanity mirror & storage stool.',
      priceNoteAm: 'ለመዋቢያ እቃዎች የተከፋፈሉ መሳቢያዎችን፣ መስታወትና ወንበርን ያካትታል።',
      description: 'Comprehensive bedroom dressing storage and wardrobe units with multi-compartment drawers, partitioned cosmetic/jewelry organizers, halo vanity mirror integration, and high-capacity closet storage.',
      descriptionAm: 'ለመኝታ ቤት የሚሆን የተሟላ የመዋቢያ እና የልብስ ማስቀመጫ ካቢኔት፤ የተከፋፈሉ መሳቢያዎች፣ የመዋቢያ መስታወት እና ሰፊ የልብስ መደርደሪያዎች።',
      image: '/images/furniture/furniture-10.jpg',
      gallery: [
        '/images/furniture/furniture-10.jpg'
      ],
      features: [
        'Touch-dimmable halo LED vanity mirror for perfect illumination',
        'Velvet-lined partitioned drawers for watches, perfumes, and jewelry',
        'Modular wardrobe shelving with dedicated footwear and apparel racks',
        'Upholstered vanity seating stool with internal hidden storage'
      ],
      featuresAm: [
        'የንክኪ መቆጣጠሪያ ያለው የሚያበራ የመዋቢያ መስታወት',
        'ለሰዓት፣ ለሽቶና ለጌጣጌጥ የተከፋፈሉ የቬልቬት መሳቢያዎች',
        'ለልብስና ለጫማ የሚሆኑ የተሟሉ ዘመናዊ መደርደሪያዎች',
        'የመቀመጫ እና የዕቃ ማስቀመጫ ወንበርን ያካተተ'
      ],
      featured: true,
      leadTime: '10 - 14 business days'
    },
    {
      id: 'modular-kitchen-cabinets',
      name: 'Artisan Custom Modular Kitchen Cabinetry Systems',
      nameAm: 'ዘመናዊ የወጥ ቤት ካቢኔቶች እና ኳርትዝ እብነበረድ',
      category: 'custom',
      categoryLabel: 'Kitchen Cabinetry',
      categoryLabelAm: 'የወጥ ቤት ካቢኔቶች',
      dimensions: 'Custom modular configuration per kitchen architectural blueprints',
      woodType: 'Marine-Grade Moisture Resistant HDF & Engineered Quartz Solid Surfaces',
      finish: 'Super-Matte Anti-Fingerprint Coating & Aluminum Gola Profile Handles',
      priceNote: 'Priced per linear meter based on quartz stone selection and hardware.',
      priceNoteAm: 'እንደ ርዝመቱ መጠን እና እንደ ተመረጠው እብነበረድ ዋጋ ይሰላል።',
      description: 'Premium turnkey modular kitchen cabinets with quartz stone worktops, moisture-resistant marine HDF cores, soft-close German hinges, tall pantry larders, built-in appliance housings, and under-cabinet LED illumination.',
      descriptionAm: 'የውሃና እርጥበት መከላከያ ያላቸው ጥራት ያላቸው የወጥ ቤት ካቢኔቶች፤ ኳርትዝ እብነበረድ፣ ለስላሳ መሳቢያዎች፣ የዕቃ ማስቀመጫ ቁምሳጥን እና የኤልኢዲ መብራቶች።',
      image: '/images/furniture/furniture-11.jpg',
      gallery: [
        '/images/furniture/furniture-11.jpg',
        '/images/furniture/furniture-14.jpg',
        '/images/furniture/furniture-15.jpg',
        '/images/furniture/furniture-18.jpg',
        '/images/furniture/furniture-19.jpg'
      ],
      features: [
        'Seamless stain-proof and heat-resistant quartz stone countertops',
        'Full-extension pantry pullout larders and tandem box drawer systems',
        'Moisture-resistant marine HDF structure built to withstand kitchen humidity',
        'Dedicated enclosures for built-in ovens, microwaves, dishwashers, and sinks'
      ],
      featuresAm: [
        'ሙቀትና ቆሻሻ የሚቋቋም የኳርትዝ እብነበረድ ጠረጴዛ',
        'ብዙ እቃዎችን የሚይዙ ተስፈንጣሪ ዘመናዊ የወጥ ቤት መሳቢያዎች',
        'እርጥበትና ውሃ የሚቋቋም ጠንካራ የካቢኔት እቃ',
        'ለኦቨን፣ ማይክሮዌቭ እና ማቀዝቀዣ የተዘጋጁ የተሰወሩ ክፍተቶች'
      ],
      featured: true,
      leadTime: '15 - 25 business days'
    },
    {
      id: 'modern-wood-doors',
      name: 'Handcrafted Modern Wood Interior & Entrance Doors',
      nameAm: 'በልዩ ጥራት የተሰሩ ዘመናዊ የእንጨት በሮች',
      category: 'custom',
      categoryLabel: 'Modern Wood Doors',
      categoryLabelAm: 'ዘመናዊ የእንጨት በሮች',
      dimensions: 'Standard: 90cm/120cm (W) x 210cm/240cm (H) or Custom Fit',
      woodType: 'Solid Natural Hardwood with Engineered Stabilizer Core',
      finish: 'Weatherproof UV-Resistant Wood Stain & Premium Satin Seal',
      priceNote: 'Includes door frame, architraves, heavy-duty hinges & lockset.',
      priceNoteAm: 'የበር ፍሬም፣ መቃን፣ ጠንካራ ማንጠልጠያ እና የቁልፍ እጀታዎችን ያካትታል።',
      description: 'Custom-engineered solid hardwood interior and main entrance doors with contemporary architectural paneling, weather-resistant acoustic seals, heavy-duty hinges, and luxury door hardware.',
      descriptionAm: 'ከጠንካራ የተፈጥሮ እንጨት የተሰሩ ዘመናዊ የውስጥና የውጪ በሮች፤ ውብ ቅርጽ፣ ድምጽና አየር መከላከያ እና አስተማማኝ የቁልፍ እጀታዎች ያሏቸው።',
      image: '/images/furniture/furniture-12.jpg',
      gallery: [
        '/images/furniture/furniture-12.jpg'
      ],
      features: [
        'Multi-layer engineered core prevents warping and contraction',
        'Acoustic perimeter rubber seals for soundproofing and climate control',
        'Architectural groove and fluted veneer panel styling',
        'Heavy-duty stainless steel ball-bearing hinges and German locksets'
      ],
      featuresAm: [
        'የማይጣመም እና የማይሰነጠቅ ጠንካራ የእንጨት አሰራር',
        'ድምጽ እና አየር መከላከያ ያላቸው የጎማ ማሸጊያዎች',
        'ዘመናዊ የሰረዝ እና የእንጨት ጌጥ ዲዛይን',
        'ከፍተኛ ጥራት ያላቸው የብረት ማንጠልጠያዎች እና ቁልፎች'
      ],
      featured: true,
      leadTime: '8 - 14 business days'
    },
    {
      id: 'bespoke-tables-collection',
      name: 'Bespoke Living Room Tables & Dining Surfaces',
      nameAm: 'የሳሎን የቡና ጠረጴዛዎች፣ የመመገቢያ እና የጎን ጠረጴዛዎች',
      category: 'dining',
      categoryLabel: 'Tables & Surfaces',
      categoryLabelAm: 'ጠረጴዛዎች',
      dimensions: 'Dining: 200cm x 90cm / Coffee Table: 120cm x 70cm / Side: 50cm dia',
      woodType: 'Solid Natural Timber & Quartz / Marble Inset Surfaces',
      finish: 'Matte Natural Oil Seal & Scratch-Resistant Clear Coat',
      priceNote: 'Available individually or as a coordinated living/dining package.',
      priceNoteAm: 'በነጠላ ወይም ከተሟላ የሳሎን እቃዎች ጋር የሚቀርብ።',
      description: 'Artisan collection of solid timber coffee tables, central dining tables, and accent side tables featuring sculpted geometric bases, natural grain textures, and waterproof matte protective lacquers.',
      descriptionAm: 'ለሳሎንና ለመመገቢያ ክፍል የሚሆኑ ውብ የእንጨት ጠረጴዛዎች፤ የቡና ጠረጴዛ፣ የመመገቢያ ጠረጴዛ እና የጎን ጠረጴዛዎች በጠንካራ የተፈጥሮ እንጨት የተሰሩ።',
      image: '/images/furniture/furniture-16.jpg',
      gallery: [
        '/images/furniture/furniture-16.jpg',
        '/images/furniture/furniture-17.jpg',
        '/images/furniture/furniture-20.jpg'
      ],
      features: [
        'Hand-selected natural hardwood grain with organic variations',
        'Sculpted geometric base designs ensuring stability and legroom',
        'Water-resistant matte seal preventing cup ring marks and spills',
        'Smooth rounded chamfered edge safety profiling'
      ],
      featuresAm: [
        'ውብ የተፈጥሮ የእንጨት ቅርፅ እና ቀለም',
        'ጠንካራ የእግር አሰራር እና ለቀላል አቀማመጥ ምቹ',
        'የውሃ እና የፈሳሽ ምልክት የማይዝ ልዩ ፊኒሽ',
        'ለደህንነት የተስተካከሉ ለስላሳ የጠረጴዛ ጠርዞች'
      ],
      featured: true,
      leadTime: '7 - 12 business days'
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
