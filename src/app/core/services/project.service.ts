import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'bulbula-mazoria-villa',
      title: 'Bulbula Mazoria Site Residential Villa',
      titleAm: 'ቡልቡላ ማዞሪያ የመኖሪያ ቪላ',
      category: 'residential',
      categoryLabel: 'Residential Villa',
      categoryLabelAm: 'የመኖሪያ ቪላ',
      location: 'Bulbula Mazoria, Addis Ababa',
      locationAm: 'ቡልቡላ ማዞሪያ፣ አዲስ አበባ',
      scope: 'Turnkey Architectural Finishing, Custom Pergola Terrace, Luxury Living Room & Lighting',
      scopeAm: 'ሙሉ የውስጥና ውጪ ፊኒሺንግ፣ የቴራስ ፐርጎላ፣ የሳሎን ጌጥና መብራት',
      year: '2024-2025',
      description: 'A multi-story contemporary luxury villa featuring high-ceiling gypsum craftsmanship, architectural LED cove illumination, modern terrace pergola seating, and premium wood/stone accents.',
      descriptionAm: 'ዘመናዊ ባለ ብዙ ፎቅ ቪላ፤ የጂፕሰም ቦርድ ጣሪያ ስራዎች፣ የኤልኢዲ መብራት ዲዛይን፣ የሚያምር የቴራስ ፐርጎላ እና ጥራት ያላቸው የድንጋይና የእንጨት ጌጦች ያሉት።',
      featured: true,
      image: '/images/pages/page-06.jpg',
      gallery: [
        '/images/pages/page-06.jpg',
        '/images/pages/page-07.jpg',
        '/images/pages/page-01.jpg'
      ],
      features: [
        'Multi-tiered false ceiling with ambient warm lighting',
        'Custom outdoor terrace pergola with composite timber slats',
        'Open-concept designer kitchen with quartz countertops',
        'Luxury porcelain flooring and architectural acoustic wall paneling'
      ],
      featuresAm: [
        'ባለብዙ ደረጃ የጂፕሰም ጣሪያ ከዘመናዊ መብራቶች ጋር',
        'የቴራስ ፐርጎላ እና የውጪ ማረፊያ ቦታ',
        'ዘመናዊ ክፍት የወጥ ቤት ዲዛይን ከኳርትዝ ካቢኔቶች ጋር',
        'የፖርሲሊን ወለል ንጣፍ እና የግድግዳ አኮስቲክ ፓነሎች'
      ]
    },
    {
      id: 'bole-bulbula-residential',
      title: 'Bole BulBula Residential',
      titleAm: 'ቦሌ ቡልቡላ የመኖሪያ ህንፃ',
      category: 'residential',
      categoryLabel: 'Luxury Residential',
      categoryLabelAm: 'ዘመናዊ መኖሪያ ቤት',
      location: 'Bole Bulbula, Addis Ababa',
      locationAm: 'ቦሌ ቡልቡላ፣ አዲስ አበባ',
      scope: 'Exterior Facade Cladding, Glass Balconies, Master Suite Finishing',
      scopeAm: 'የውጪ ግድግዳ ማስዋብ፣ የመስታወት በረንዳዎች እና ዋና መኝታ ክፍል ፊኒሺንግ',
      year: '2024',
      description: 'Sophisticated residential build highlighting contrasting facade textures, modern steel/glass balcony railings, warm wooden ceilings, and turnkey interior electrical styling.',
      descriptionAm: 'ዘመናዊ የውጪ እና የውስጥ ፊኒሺንግ፤ ልዩ የግድግዳ ቀለሞች፣ የመስታወት በረንዳዎች እና የተሟላ የኤሌክትሪክና የመብራት ዝርጋታ።',
      featured: true,
      image: '/images/pages/page-03.jpg',
      gallery: [
        '/images/pages/page-03.jpg'
      ],
      features: [
        'Precision aluminum composite facade panels',
        'Seamless glass and stainless steel safety railings',
        'Integrated multi-zone ceiling spotlights'
      ],
      featuresAm: [
        'የአሉሚኒየም እና የኮምፖሳይት የውጪ ግድግዳ ስራ',
        'የመስታወት እና የብረት በረንዳዎች',
        'የተቀናጁ የጣሪያ ስፖትላይት መብራቶች'
      ]
    },
    {
      id: 'chichinia-residential',
      title: 'Chichinia Area Residential',
      titleAm: 'ቺቺኒያ አካባቢ የመኖሪያ ቪላ',
      category: 'residential',
      categoryLabel: 'Modern Villa',
      categoryLabelAm: 'ዘመናዊ ቪላ',
      location: 'Chichinia, Addis Ababa',
      locationAm: 'ቺቺኒያ፣ አዲስ አበባ',
      scope: 'Structural Finishing, Modern Master Bedroom Suite, Double Height Chandelier Ceiling',
      scopeAm: 'የግንባታ ፊኒሺንግ፣ የዋና መኝታ ክፍል እና የሻንደሊየር ጣሪያ ስራ',
      year: '2023-2024',
      description: 'High-end residential finishing featuring double-height ceiling voids with statement crystal chandeliers, custom fluted headboard accent walls, and built-in closet cabinetry.',
      descriptionAm: 'ከፍተኛ ደረጃ ያለው የመኖሪያ ቤት ፊኒሺንግ፤ ባለ ሁለት ፎቅ ከፍታ ያለው የሳሎን ጣሪያ ከክሪስታል ሻንደሊየር ጋር እና የተሟላ የመኝታ ክፍል ዲዛይን።',
      featured: true,
      image: '/images/pages/page-04.jpg',
      gallery: [
        '/images/pages/page-04.jpg'
      ],
      features: [
        'Fluted timber master bedroom feature wall',
        'Double-height foyer ceiling with recessed perimeter LED strip',
        'Custom built-in sliding wardrobe system'
      ],
      featuresAm: [
        'የመኝታ ክፍል የእንጨት ዲዛይን ግድግዳ',
        'ባለከፍተኛ ጣሪያ የኤልኢዲ መብራት ስራ',
        'ዘመናዊ የተገጠመ የልብስ ቁምሳጥን'
      ]
    },
    {
      id: 'menanda-hotel-bishoftu',
      title: 'Menanda Hotel, Bishoftu (Debre Zeit)',
      titleAm: 'መናንዳ ሆቴል፣ ቢሾፍቱ (ደብረ ዘይት)',
      category: 'hospitality',
      categoryLabel: 'Hotel & Hospitality',
      categoryLabelAm: 'ሆቴል እና መስተንግዶ',
      location: 'Bishoftu (Debre Zeit), Oromia',
      locationAm: 'ቢሾፍቱ (ደብረዘይት)',
      scope: 'Multi-Story Facade Finishing, Grand Ballroom, Banquet Ceiling & Banquet Woodworks',
      scopeAm: 'የሙሉ ህንፃ የውጪ ፊኒሺንግ፣ ታላቁ የሰርግና የስብሰባ አዳራሽ፣ የጣሪያ ጌጦች እና የእንጨት ስራዎች',
      year: '2023',
      description: 'Full-scale finishing for Menanda Hotel in Bishoftu, including grand conference hall timber ceilings, ornate chandeliers, acoustic wooden wall paneling, and exterior facade detailing.',
      descriptionAm: 'በቢሾፍቱ ከተማ የሚገኘው የመናንዳ ሆቴል የተሟላ የፊኒሺንግ ስራ፤ የኮንፈረንስ አዳራሽ የእንጨት ጣሪያ፣ ሻንደሊየሮች እና የውጪ ገፅታ ግንባታ።',
      featured: true,
      image: '/images/pages/page-08.jpg',
      gallery: [
        '/images/pages/page-08.jpg',
        '/images/pages/page-09.jpg'
      ],
      features: [
        'Ornate timber coffered ceiling in main ballroom',
        'Acoustically engineered wall paneling for banquet hall',
        'Multi-story commercial exterior facade finishing'
      ],
      featuresAm: [
        'የዋናው አዳራሽ የእንጨት ኮፈርድ ጣሪያ',
        'ለድምጽ ጥራት የተዘጋጀ የግድግዳ የእንጨት ስራ',
        'ባለብዙ ፎቅ የሆቴል የውጪ ፊኒሺንግ'
      ]
    },
    {
      id: 'mahi-spa-salon',
      title: 'Mahi Spa & Beauty Salon',
      titleAm: 'ማሂ ስፓ እና የውበት ሳሎን',
      category: 'commercial',
      categoryLabel: 'Commercial / Spa Interior',
      categoryLabelAm: 'የንግድ ተቋም / ስፓ እና ሳሎን',
      location: 'Addis Ababa',
      locationAm: 'አዲስ አበባ',
      scope: 'Bespoke Reception Desk, Ambient Treatment Rooms, Styling Stations, Custom Wood Shelving',
      scopeAm: 'የሪሴፕሽን ጠረጴዛ፣ የማሳጅና የስፓ ክፍሎች፣ የውበት ሳሎን ወንበሮች እና የእንጨት መደርደሪያዎች',
      year: '2024',
      description: 'A soothing and luxurious beauty destination interior with ergonomic custom reception counters, warm ambient accent lighting, live-edge wood displays, and private treatment suites.',
      descriptionAm: 'ምቹ እና ማራኪ የስፓና የውበት ሳሎን የውስጥ ዲዛይን፤ የተዋበ የሪሴፕሽን ጠረጴዛ፣ ጸጥታ የሰፈነባቸው የማሳጅ ክፍሎች እና የእንጨት እቃዎች።',
      featured: true,
      image: '/images/pages/page-10.jpg',
      gallery: [
        '/images/pages/page-10.jpg'
      ],
      features: [
        'Custom curved wood and solid surface reception desk',
        'Warm mood lighting tailored for relaxation therapies',
        'Built-in product display shelving units'
      ],
      featuresAm: [
        'ዘመናዊ ቅርፅ ያለው የእንጨት ሪሴፕሽን ዴስክ',
        'ለመዝናናት ምቹ የሆነ የተረጋጋ የመብራት ስርዓት',
        'የውበት ምርቶች መደርደሪያ ካቢኔቶች'
      ]
    },
    {
      id: 'ebc-headquarters',
      title: 'Ethiopian Broadcasting Corporation (EBC)',
      titleAm: 'የኢትዮጵያ ብሮድካስቲንግ ኮርፖሬሽን (ኢቢሲ)',
      category: 'commercial',
      categoryLabel: 'Institutional / Commercial',
      categoryLabelAm: 'መንግስታዊ / የንግድ ህንፃ',
      location: 'Addis Ababa',
      locationAm: 'አዲስ አበባ',
      scope: 'Large Foyer Finishing, Architectural Column Wraps, Media Display Areas, Reception Lobby',
      scopeAm: 'የዋናው ሎቢ ፊኒሺንግ፣ የአምድ ማስዋቢያዎች፣ የሚዲያ ማሳያ ቦታዎች እና የሪሴፕሽን አዳራሽ',
      year: '2024-2025',
      description: 'Institutional-grade lobby and atrium finishing for EBC, integrating high-capacity architectural lighting, streamlined corporate reception desks, and expansive wood slat displays.',
      descriptionAm: 'ለኢቢሲ የተሰራ ሰፊ የሎቢና የአትሪየም ፊኒሺንግ ስራ፤ ዘመናዊ መብራቶች፣ የኮርፖሬት ሪሴፕሽን እና የሚያማምሩ የእንጨት ስራዎች።',
      featured: true,
      image: '/images/pages/page-11.jpg',
      gallery: [
        '/images/pages/page-11.jpg'
      ],
      features: [
        'Corporate reception counter with integrated LED signage',
        'Heavy-traffic polished floor finishing',
        'Linear acoustic ceiling baffles and downlights'
      ],
      featuresAm: [
        'የተቀናጀ የኤልኢዲ ስም ማሳያ ያለው የሪሴፕሽን ጠረጴዛ',
        'የጸና ከፍተኛ ጥራት ያለው የወለል ንጣፍ',
        'ዘመናዊ የጣሪያ መብራቶችና አኮስቲክ ባፍሎች'
      ]
    },
    {
      id: 'addisu-gebeya-apartment',
      title: 'Addisu Gebeya Site Family Apartment',
      titleAm: 'አዲሱ ገበያ የቤተሰብ አፓርትመንት ህንፃ',
      category: 'apartment',
      categoryLabel: 'Apartment Building',
      categoryLabelAm: 'የአፓርትመንት ህንፃ',
      location: 'Addisu Gebeya, Addis Ababa',
      locationAm: 'አዲሱ ገበያ፣ አዲስ አበባ',
      scope: 'Full Multi-Unit Finishing, Exterior Painting, Staircase Railings, Entrance Gateway',
      scopeAm: 'የሙሉ አፓርትመንት ፊኒሺንግ፣ የውጪ ቀለም፣ ደረጃዎችና የመግቢያ በር ስራዎች',
      year: '2023',
      description: 'Comprehensive finishing for a modern family apartment building in Addisu Gebeya, covering external weather-resistant coatings, customized security gates, and staircase handrails.',
      descriptionAm: 'በአዲሱ ገበያ የሚገኝ ባለብዙ ቤተሰብ አፓርትመንት የተሟላ የፊኒሺንግ ስራ፤ የውጪ ቀለም፣ የደህንነት በሮች እና የደረጃ መወጣጫዎች።',
      featured: true,
      image: '/images/pages/page-05.jpg',
      gallery: [
        '/images/pages/page-05.jpg'
      ],
      features: [
        'Multi-unit residential finishing standard',
        'Durable exterior silicone acrylic facade coating',
        'Heavy gauge metal entrance gate and balustrades'
      ],
      featuresAm: [
        'የአፓርትመንት ቤቶች ጥራት ያለው ፊኒሺንግ',
        'የውጪ የአየር ሁኔታ የሚቋቋም ቀለም',
        'የብረት መግቢያ በር እና የደረጃ መከላከያዎች'
      ]
    },
    {
      id: 'megenagna-luxury-apartment',
      title: 'Megenagna Luxury Apartment',
      titleAm: 'መገናኛ ሉክሰሪ አፓርትመንት ህንፃ',
      category: 'apartment',
      categoryLabel: 'High-Rise Apartment',
      categoryLabelAm: 'ባለከፍተኛ ፎቅ አፓርትመንት',
      location: 'Megenagna, Addis Ababa',
      locationAm: 'መገናኛ፣ አዲስ አበባ',
      scope: 'High-Rise Exterior Finishing, Scaffolding Execution, Balcony Glass, Ceiling Systems',
      scopeAm: 'የባለከፍተኛ ፎቅ ህንፃ ውጪ ፊኒሺንግ፣ የስካፎልዲንግ ስራዎች፣ የበረንዳ መስታወትና የጣሪያ ስርዓት',
      year: '2024-2025',
      description: 'High-rise residential tower finishing in prime Megenagna corridor, demanding specialized exterior access, waterproofing, facade architectural panels, and unit interiors.',
      descriptionAm: 'በመገናኛ የሚገኝ ባለከፍተኛ ፎቅ ዘመናዊ የመኖሪያ ህንፃ የውጪና የውስጥ ፊኒሺንግ፣ የውሃ መከላከያ እና የጣሪያ ስራ።',
      featured: true,
      image: '/images/pages/page-12.jpg',
      gallery: [
        '/images/pages/page-12.jpg'
      ],
      features: [
        'Tower facade engineering & exterior rendering',
        'Weather-sealed double-glazed balcony windows',
        'Turnkey high-rise lobby & corridor finishing'
      ],
      featuresAm: [
        'የከፍተኛ ፎቅ ውጪ ግድግዳ ኢንጂነሪንግ',
        'የውሃና የአየር መከላከያ ያላቸው የበረንዳ መስታወቶች',
        'የመግቢያ ሎቢ እና ኮሪደር ፊኒሺንግ'
      ]
    },
    {
      id: 'tafo-ccd-village',
      title: 'Tafo CCD Village Luxury Villas',
      titleAm: 'ታፎ ሲሲዲ ቪሌጅ ቪላዎች',
      category: 'residential',
      categoryLabel: 'Gated Community Villas',
      categoryLabelAm: 'የቅንጦት ቪላ መንደር',
      location: 'Tafo CCD Village, Addis Ababa Suburbs',
      locationAm: 'ታፎ ሲሲዲ ቪሌጅ',
      scope: 'Classical Portico Finishing, Roman Column Detailing, Landscape & Exterior Painting',
      scopeAm: 'የክላሲካል ቪላ ፊኒሺንግ፣ የሮማን አምዶች ስራ፣ የአትክልት ስፍራና የውጪ ቀለም',
      year: '2023',
      description: 'Refined classical architectural finishes for luxury estate villas at Tafo CCD Village, showcasing grand entrance porticos, Corinthian-inspired columns, and landscaped surrounds.',
      descriptionAm: 'በታፎ ሲሲዲ ቪሌጅ የሚገኙ የቅንጦት ቪላዎች ፊኒሺንግ፤ የታወቁ የሮማን አምዶች፣ ያማሩ በረንዳዎች እና የተሟላ የቀለም ስራ።',
      featured: false,
      image: '/images/pages/page-13.jpg',
      gallery: [
        '/images/pages/page-13.jpg'
      ],
      features: [
        'Grand double-height entrance columns',
        'Warm Tuscan exterior textured plaster',
        'Custom ornamental entrance door woodwork'
      ],
      featuresAm: [
        'ባለከፍተኛ የመግቢያ አምዶች',
        'ውብ የውጪ ፕላስተር እና ቀለም',
        'በልዩ ሁኔታ የተቀረጸ የእንጨት መግቢያ በር'
      ]
    },
    {
      id: 'addis-ababa-villa-set',
      title: 'Addis Ababa Residential Villa Showcase',
      titleAm: 'አዲስ አበባ የመኖሪያ ቪላ ፊኒሺንግ',
      category: 'residential',
      categoryLabel: 'Contemporary Villa',
      categoryLabelAm: 'ዘመናዊ ቪላ',
      location: 'Addis Ababa',
      locationAm: 'አዲስ አበባ',
      scope: 'Laser-Cut Arabesque Ceiling Insets, Stone Cladding Wall, Floating Vanity & Lighting',
      scopeAm: 'የሌዘር ቅርጽ ጣሪያ፣ የድንጋይ ክላዲንግ ግድግዳ፣ ዘመናዊ መብራቶችና የሳሎን እቃዎች',
      year: '2024',
      description: 'An exemplary residential interior featuring custom laser-cut geometric lattice ceiling illumination, natural split-face stone TV wall, and minimalist luxury console cabinetry.',
      descriptionAm: 'በአዲስ አበባ የተሰራ ልዩ ቪላ፤ የሌዘር ቅርጽ ጣሪያ መብራቶች፣ የተፈጥሮ ድንጋይ የቲቪ ግድግዳ እና ዘመናዊ የፈርኒቸር እቃዎች ያሉት።',
      featured: true,
      image: '/images/pages/page-14.jpg',
      gallery: [
        '/images/pages/page-14.jpg',
        '/images/pages/page-15.jpg'
      ],
      features: [
        'Intricate CNC laser-cut geometric ceiling lattice',
        'Natural split-face stone cladding on main foyer wall',
        'Floating console unit with soft close push-to-open drawers'
      ],
      featuresAm: [
        'በሲኤንሲ ሌዘር የተቆረጠ የጣሪያ ጌጥ ከመብራት ጋር',
        'የተፈጥሮ ድንጋይ የሳሎን ግድግዳ ስራ',
        'ዘመናዊ ተንሳፋፊ የቲቪ እና የሳሎን ካቢኔት'
      ]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  getProjectsByCategory(category: string): Project[] {
    if (category === 'all') return this.projects;
    return this.projects.filter(p => p.category === category);
  }
}
