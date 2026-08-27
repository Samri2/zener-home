import { Injectable } from '@angular/core';
import { FurnitureItem } from '../models/furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private furnitureItems: FurnitureItem[] = [
    {
      id: 'zenith-tv-wall-suite',
      name: 'Zenith Fluted Wall TV Media Console Suite',
      nameAm: 'ዜኒዝ ዘመናዊ የቲቪ ግድግዳ እና ተንሳፋፊ ካቢኔት',
      category: 'living',
      categoryLabel: 'Living & Media Wall',
      categoryLabelAm: 'የሳሎን ቲቪ ግድግዳ',
      dimensions: '320cm (W) x 240cm (H) x 40cm (D)',
      woodType: 'Natural Oak, High-Density Marine MDF & Charcoal Acoustic Slats',
      finish: 'Matte Scratch-Resistant Polyurethane & 3000K Warm Ambient LEDs',
      priceNote: 'Custom fabricated to room blueprints with multi-angle layout options.',
      priceNoteAm: 'እንደ ሳሎንዎ ስፋትና ቅርጽ በልዩ ሁኔታ የሚሰራ።',
      description: 'Architectural living room entertainment center featuring charcoal and natural oak acoustic vertical slats, a cantilevered floating low-profile media credenza, push-to-open smooth drawers, and concealed cable management with warm perimeter LED illumination.',
      descriptionAm: 'ለሳሎን የሚሆን ዘመናዊ የቲቪ ግድግዳ ዲዛይን፤ ድምጽ የሚቀንሱ የእንጨት ፓነሎች፣ ተንሳፋፊ መሳቢያዎች፣ የተሰወሩ የሽቦ መስመሮች እና የሞቀ ኤልኢዲ መብራት ያሉት።',
      image: '/images/furniture/furniture-01.jpg',
      gallery: [
        '/images/furniture/furniture-01.jpg',
        '/images/furniture/furniture-02.jpg',
        '/images/furniture/furniture-03.jpg',
        '/images/furniture/furniture-04.jpg'
      ],
      features: [
        'Acoustic sound-dampening vertical timber louvres',
        'Reinforced cantilevered floating base with wire passages',
        'Soft-close push-latch drawers and display niches',
        'Integrated multi-zone warm LED perimeter channels'
      ],
      featuresAm: [
        'ድምፅ የሚቀንሱ ውብ የቁም የእንጨት ሰረዞች',
        'ለሽቦዎች መደበቂያ የተዘጋጀለት ተንሳፋፊ ካቢኔት',
        'ለስላሳ እጀታ አልባ መክፈቻ ያላቸው መሳቢያዎች',
        'የተቀናጀ የሞቀ ኤልኢዲ መብራት ዙሪያ'
      ],
      featured: true,
      leadTime: '10 - 14 business days'
    },
    {
      id: 'artisan-curved-lounge-suite',
      name: 'Artisan Sculptural Sofa & Organic Coffee Table Set',
      nameAm: 'ዘመናዊ ቅርፅ ያለው ሶፋ እና የተፈጥሮ እንጨት የቡና ጠረጴዛ',
      category: 'living',
      categoryLabel: 'Living Room Seating',
      categoryLabelAm: 'ሶፋና የሳሎን መቀመጫ',
      dimensions: 'Sofa: 290cm x 110cm / Coffee Table: 125cm x 75cm',
      woodType: 'Solid Kiln-Dried Hardwood Frame & Bouclé / Velvet Upholstery',
      finish: 'Stain-Resistant High-Resilience Fabric & Natural Hand-Rubbed Oil',
      priceNote: 'Customizable fabric texture, density, and wood stain shades.',
      priceNoteAm: 'የጨርቁ አይነት፣ ቀለም እና የእንጨቱ ቀለም እንደ ምርጫዎ የሚዘጋጅ።',
      description: 'Contemporary sculptural living room seating collection showcasing organic curved ergonomics, heavy-duty solid hardwood internal frames, stain-resistant textured fabric, and paired sculpted solid timber coffee tables.',
      descriptionAm: 'ለሳሎን ልዩ ውበት የሚሰጥ ዘመናዊ ቅርጽ ያለው ሶፋ፤ የተመረጠ ለስላሳ የጨርቅ አሰራር፣ ጠንካራ የተፈጥሮ እንጨት ፍሬም እና ተስማሚ የቡና ጠረጴዛ።',
      image: '/images/furniture/furniture-05.jpg',
      gallery: [
        '/images/furniture/furniture-05.jpg',
        '/images/furniture/furniture-06.jpg'
      ],
      features: [
        'Ergonomic curved silhouette for modern aesthetics',
        'High-density 45D memory foam cushioning',
        'Handcrafted matching solid wood coffee table centerpiece',
        'Stain-resistant and pet-friendly upholstery options'
      ],
      featuresAm: [
        'ምቹ እና ማራኪ የሆነ ዘመናዊ ቅርጽ',
        'የማይዝል ከፍተኛ ጥራት ያለው ስፖንጅ',
        'ከተፈጥሮ እንጨት የተሰራ ተስማሚ የቡና ጠረጴዛ',
        'ቆሻሻ የማይዝ እና ረጅም ጊዜ የሚቆይ ጨርቅ'
      ],
      featured: true,
      leadTime: '12 - 16 business days'
    },
    {
      id: 'elysian-master-bedroom-suite',
      name: 'Elysian King Bedframe & Fluted Master Headboard Suite',
      nameAm: 'ኤሊሲያን የቅንጦት ባለከፍተኛ መኝታ አልጋ እና የልብስ ቁምሳጥን',
      category: 'bedroom',
      categoryLabel: 'Master Bedroom Suite',
      categoryLabelAm: 'የተሟላ መኝታ ክፍል',
      dimensions: 'King Bed: 200cm x 200cm + 340cm Wall Panel / Wardrobe: 300cm x 270cm',
      woodType: 'Solid Hardwood, Moisture-Proof Core & Smoked Glass Facades',
      finish: 'Matte Walnut Lacquer, Velvet Padding & Sensor LED Channels',
      priceNote: 'Includes king bed, fluted headboard panel, floating nightstands & wardrobe.',
      priceNoteAm: 'አልጋውን፣ የግድግዳ ጌጡን፣ ተንሳፋፊ ኮሞዲኖዎችን እና የልብስ ቁምሳጥንን ያጠቃልላል።',
      description: 'Complete luxury master bedroom suite featuring an expansive floor-to-ceiling upholstered and timber fluted headboard accent wall, dual cantilevered nightstands with wireless charging cutouts, and matching floor-to-ceiling smoked glass sliding wardrobes with automated interior sensor lighting.',
      descriptionAm: 'የተሟላ የቅንጦት ኪንግ ሳይዝ አልጋ፤ ከጣሪያ እስከ ወለል የሚደርስ የእንጨትና የጨርቅ ጌጥ፣ የመኝታ መብራቶች፣ ተንሳፋፊ ኮሞዲኖዎች እና ተንሸራታች የጭስ መስታወት የልብስ ቁምሳጥን።',
      image: '/images/furniture/furniture-07.jpg',
      gallery: [
        '/images/furniture/furniture-07.jpg',
        '/images/furniture/furniture-08.jpg',
        '/images/furniture/furniture-09.jpg'
      ],
      features: [
        'Floor-to-ceiling upholstered fluted headboard feature wall',
        'Smoked tempered glass wardrobe doors with motion-activated LEDs',
        'Dual wall-mounted floating nightstands with concealed wire ports',
        'Reinforced orthopedic slat foundation supporting king mattresses'
      ],
      featuresAm: [
        'ከጣሪያ እስከ ወለል የሚደርስ የእንጨትና የጨርቅ ጌጥ ግድግዳ',
        'ሴንሰር መብራት ያላቸው የጭስ መስታወት የልብስ ቁምሳጥን በሮች',
        'ከግድግዳ ጋር የተገጠሙ ሁለት ተንሳፋፊ ኮሞዲኖዎች',
        'ክብደት የሚሸከም ጠንካራ የአልጋ መሰረት'
      ],
      featured: true,
      leadTime: '15 - 22 business days'
    },
    {
      id: 'bespoke-dressing-vanity-suite',
      name: 'Bespoke Dressing Vanity & Boutique Walk-In Organizer',
      nameAm: 'የመኝታ ክፍል መዋቢያ ኮሞዲኖ እና የተሟላ የልብስ መደርደሪያ',
      category: 'bedroom',
      categoryLabel: 'Dressing & Walk-in Storage',
      categoryLabelAm: 'የመዋቢያ እና የልብስ ክፍል',
      dimensions: 'Vanity: 150cm (W) x 180cm (H) / Walk-in Modules: Custom Fit',
      woodType: 'High-Gloss Lacquered Moisture-Proof MDF & Brushed Gold Profiles',
      finish: 'Velvet-Lined Drawers & Touch-Dimmer Halo Backlit Mirror',
      priceNote: 'Custom tailored with matching vanity stool and glass organizers.',
      priceNoteAm: 'ከተስማሚ የመዋቢያ ወንበር እና ጌጣጌጥ መሳቢያዎች ጋር የሚሰራ።',
      description: 'Elegant bedroom vanity and walk-in dressing storage suite featuring a halo touch-dimmable LED smart mirror, partitioned velvet jewelry organizers, dual floating drawers, and custom open-boutique closet modules.',
      descriptionAm: 'የሚያበራ የንክኪ መስታወት ያለው የመዋቢያ ኮሞዲኖ፤ ለጌጣጌጥና ለመዋቢያ እቃዎች የተከፋፈሉ ለስላሳ መሳቢያዎች፣ ተንሳፋፊ ጠረጴዛዎች እና ክፍት የልብስ መደርደሪያዎች።',
      image: '/images/furniture/furniture-10.jpg',
      gallery: [
        '/images/furniture/furniture-10.jpg',
        '/images/furniture/furniture-11.jpg',
        '/images/furniture/furniture-12.jpg',
        '/images/furniture/furniture-16.jpg'
      ],
      features: [
        'Touch-dimmer circular halo LED illuminated cosmetic mirror',
        'Velvet-lined partitioned drawers for watches and accessories',
        'Custom modular walk-in closet shelving with integrated shoe racks',
        'Compact upholstered storage vanity stool included'
      ],
      featuresAm: [
        'የንክኪ መቆጣጠሪያ ያለው የሚያምር የኤልኢዲ የመዋቢያ መስታወት',
        'ለሰዓትና ለጌጣጌጥ የተከፋፈሉ የቬልቬት መሳቢያዎች',
        'ለጫማና ለልብስ የሚሆኑ የተሟሉ ዘመናዊ መደርደሪያዎች',
        'የመቀመጫ እና የዕቃ ማስቀመጫ ወንበርን ያካተተ'
      ],
      featured: true,
      leadTime: '10 - 15 business days'
    },
    {
      id: 'artisan-modular-kitchen-island',
      name: 'Artisan Modular Kitchen Cabinetry & Waterfall Quartz Island',
      nameAm: 'ዘመናዊ የወጥ ቤት ካቢኔት፣ የኳርትዝ ደሴት እና የመመገቢያ ጠረጴዛ',
      category: 'custom',
      categoryLabel: 'Turnkey Kitchen & Dining',
      categoryLabelAm: 'ወጥ ቤት እና መመገቢያ',
      dimensions: 'Custom modular fit to architectural kitchen blueprints',
      woodType: 'Marine-Grade Moisture Resistant HDF & Engineered Quartz Surface',
      finish: 'Super-Matte Anti-Fingerprint Coating & Aluminum Gola Profiles',
      priceNote: 'Priced per linear meter based on quartz thickness and hardware specs.',
      priceNoteAm: 'እንደ ርዝመቱ መጠን እና እንደ ተመረጠው እብነበረድ ዋጋ ይሰላል።',
      description: 'Turnkey engineered modular kitchen solution showcasing a seamless waterfall quartz stone central island, floor-to-ceiling pantry pullouts, integrated appliance housings (oven, hob, microwave), soft-close German Blum hinges, and handcrafted matching solid wood dining table sets.',
      descriptionAm: 'ዘመናዊ የወጥ ቤት ካቢኔት እና የመሃል ኳርትዝ ደሴት፤ የውሃና እርጥበት መከላከያ፣ ለስላሳ መሳቢያዎች፣ የዕቃ ማስቀመጫ ቁምሳጥን እና ከተፈጥሮ እንጨት የተሰራ ተስማሚ የመመገቢያ ጠረጴዛ።',
      image: '/images/furniture/furniture-13.jpg',
      gallery: [
        '/images/furniture/furniture-13.jpg',
        '/images/furniture/furniture-14.jpg',
        '/images/furniture/furniture-15.jpg',
        '/images/furniture/furniture-17.jpg'
      ],
      features: [
        'Stain-resistant, heat-proof quartz waterfall island countertop',
        'Full-extension pantry pullout larders and corner carousel trays',
        'Seamless built-in appliance enclosures with hidden ventilation',
        'Paired solid hardwood 8-seater dining table with bench and chairs'
      ],
      featuresAm: [
        'ሙቀትና ቆሻሻ የሚቋቋም የኳርትዝ እብነበረድ የደሴት ጠረጴዛ',
        'ብዙ እቃዎችን የሚይዙ ተስፈንጣሪ ዘመናዊ የወጥ ቤት ካቢኔቶች',
        'ለኦቨንና ማቀዝቀዣ የተዘጋጁ የተሰወሩ ክፍተቶች',
        'ባለ 8 ሰው የተሟላ የተፈጥሮ እንጨት የመመገቢያ ጠረጴዛና ወንበሮች'
      ],
      featured: true,
      leadTime: '18 - 25 business days'
    },
    {
      id: 'executive-reception-boardroom-suite',
      name: 'Executive Curved Reception Desk & Boardroom Suite',
      nameAm: 'ዘመናዊ የሪሴፕሽን ጠረጴዛ፣ የስብሰባ አዳራሽ እና የስራ አስኪያጅ ቢሮ',
      category: 'office',
      categoryLabel: 'Commercial & Executive Office',
      categoryLabelAm: 'ቢሮ እና ሪሴፕሽን',
      dimensions: 'Reception: 280cm x 115cm / Conference Table: 380cm x 140cm',
      woodType: 'Solid Natural Hardwood, Curved Lacquer Fascia & Steel Splay Legs',
      finish: 'Warm Undermount LED Glow, High-Gloss Polish & Matte Writing Inset',
      priceNote: 'Custom fabricated for corporate headquarters, hotels, and spas.',
      priceNoteAm: 'ለድርጅቶች፣ ለሆቴሎች እና ለስፓ ማዕከላት በልዩ ሁኔታ የሚዘጋጅ።',
      description: 'Commanding commercial workspace suite featuring a grand curved reception counter with ambient floor illumination, a 14-seater solid wood boardroom conference table with motorized pop-up connectivity hubs, and an executive managerial L-shaped workstation.',
      descriptionAm: 'ለቢሮዎችና ለሆቴሎች የሚሆን ውብ የሪሴፕሽን ጠረጴዛ፤ ከስር የበራ ኤልኢዲ መብራት፣ ሰፊ የ14 ሰው የስብሰባ አዳራሽ ጠረጴዛ ከኤሌክትሪክ ማገናኛ ጋር እና የስራ አስኪያጅ ጠረጴዛ።',
      image: '/images/furniture/furniture-18.jpg',
      gallery: [
        '/images/furniture/furniture-18.jpg',
        '/images/furniture/furniture-19.jpg',
        '/images/furniture/furniture-20.jpg'
      ],
      features: [
        'Curved multi-tier front reception counter with warm undermount glow',
        'Boardroom table seating 10-14 with integrated pop-up data/power boxes',
        'Managerial executive desk with lockable storage credenza and cable spine',
        'Heavy-traffic scratch-proof and water-resistant commercial coating'
      ],
      featuresAm: [
        'ውብ ቅርፅ ያለው የሪሴፕሽን ጠረጴዛ ከስር የበራ የኤልኢዲ መብራት ያለው',
        'ከ10-14 ሰዎችን የሚይዝ የስብሰባ ጠረጴዛ ከስልክና ላፕቶፕ ቻርጀር ጋር',
        'የስራ አስኪያጅ ጠረጴዛ ከሰነድ ማስቀመጫ መቆለፊያ መሳቢያዎች ጋር',
        'ጭረትና ውሃ የማይበላሸው ጥራት ያለው የቢሮ እቃዎች ቀለም'
      ],
      featured: true,
      leadTime: '12 - 18 business days'
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
