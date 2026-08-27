import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'site-01-residential-villa',
      title: 'Project Site 1 - Luxury Residential Villa Finishing',
      titleAm: 'ፕሮጀክት ሳይት 1 - የቅንጦት ቪላ የተሟላ ፊኒሺንግ',
      category: 'residential',
      categoryLabel: 'Residential Villa',
      categoryLabelAm: 'የመኖሪያ ቪላ',
      location: 'Addis Ababa',
      locationAm: 'አዲስ አበባ',
      scope: 'Turnkey Architectural Gypsum Ceilings, Electrical Cove Lights, Modern Doors & Wall Finishes',
      scopeAm: 'የተሟላ የጂፕሰም ጣሪያ፣ የኤሌክትሪክ መብራቶች፣ ዘመናዊ በሮች እና የቀለም ስራ',
      year: '2024-2025',
      description: 'Comprehensive high-end residential interior finishing showcasing multi-tier gypsum false ceilings, concealed 3000K warm LED channels, custom interior woodwork, and smooth level-5 wall plastering.',
      descriptionAm: 'ለቪላ የተሰራ ከፍተኛ ጥራት ያለው የውስጥ ፊኒሺንግ፤ ባለብዙ ደረጃ የጂፕሰም ጣሪያዎች፣ የሞቀ ኤልኢዲ መብራቶች፣ የእንጨት በሮች እና የጸዳ የቀለም ፊኒሺንግ።',
      featured: true,
      image: '/images/projects/site-01/photo-01.jpg',
      gallery: [
        '/images/projects/site-01/photo-01.jpg',
        '/images/projects/site-01/photo-02.jpg',
        '/images/projects/site-01/photo-03.jpg',
        '/images/projects/site-01/photo-04.jpg',
        '/images/projects/site-01/photo-05.jpg'
      ],
      features: [
        'Multi-tiered geometric gypsum coffered false ceilings',
        'Concealed perimeter LED cove illumination with smart switches',
        'Solid engineered hardwood internal door installations',
        'Flawless level-5 smooth wall skimming and durable acrylic paint'
      ],
      featuresAm: [
        'ባለብዙ ደረጃ ቅርፅ ያላቸው የጂፕሰም ጣሪያዎች',
        'የተሰወሩ የኤልኢዲ መብራቶች ከዘመናዊ ማብሪያዎች ጋር',
        'ጥራት ያላቸው የእንጨት በሮች ገጠማ',
        'ልስላሴ ያለው የደረጃ 5 ግድግዳ ቀለም ፊኒሽ'
      ]
    },
    {
      id: 'site-02-contemporary-residence',
      title: 'Project Site 2 - Contemporary Villa Interior Transformation',
      titleAm: 'ፕሮጀክት ሳይት 2 - ዘመናዊ ቪላ የውስጥ ዲዛይን እና ፊኒሺንግ',
      category: 'residential',
      categoryLabel: 'Modern Residence',
      categoryLabelAm: 'ዘመናዊ ቪላ',
      location: 'Addis Ababa Corridor',
      locationAm: 'አዲስ አበባ',
      scope: 'Living Room TV Acoustic Wall, False Ceilings, Porcelain Tiling, Master Suites',
      scopeAm: 'የሳሎን ቲቪ ግድግዳ፣ የጣሪያ ስራ፣ የሴራሚክ ንጣፍ እና ዋና መኝታ ቤት',
      year: '2024',
      description: 'Full interior finishing execution including vertical timber slat TV feature walls, polished large-format porcelain floor tiling, designer lighting schemes, and contemporary bedroom cabinetry.',
      descriptionAm: 'የሳሎን ቲቪ ግድግዳ የእንጨት ስራ፣ ትላልቅ የሚያብረቀርቁ የፖርሲሊን ወለሎች፣ ዘመናዊ የጣሪያ መብራቶች እና የመኝታ ክፍል ፊኒሺንግ።',
      featured: true,
      image: '/images/projects/site-02/photo-01.jpg',
      gallery: [
        '/images/projects/site-02/photo-01.jpg',
        '/images/projects/site-02/photo-02.jpg',
        '/images/projects/site-02/photo-03.jpg',
        '/images/projects/site-02/photo-04.jpg',
        '/images/projects/site-02/photo-05.jpg'
      ],
      features: [
        'Acoustic fluted timber TV media wall with floating console base',
        'Laser-leveled 60x120cm polished porcelain floor tiling',
        'Custom master bedroom built-in sliding wardrobe enclosures',
        'Multi-circuit architectural downlighting arrangements'
      ],
      featuresAm: [
        'ድምጽ የሚቀንስ የቲቪ ግድግዳ የእንጨት ስራ ከተንሳፋፊ ካቢኔት ጋር',
        'በሌዘር የተስተካከለ 60x120 ሳ.ሜ የፖርሲሊን ወለል ንጣፍ',
        'የመኝታ ክፍል የተገጠመ ተንሸራታች የልብስ ቁምሳጥን',
        'ዘመናዊ የጣሪያ ስፖትላይት መብራቶች'
      ]
    },
    {
      id: 'site-03-luxury-duplex',
      title: 'Project Site 3 - Luxury Villa & Duplex Finishing',
      titleAm: 'ፕሮጀክት ሳይት 3 - የቅንጦት ዱፕሌክስ ቪላ ፊኒሺንግ',
      category: 'residential',
      categoryLabel: 'Luxury Duplex Villa',
      categoryLabelAm: 'ባለ ሁለት ፎቅ ቪላ',
      location: 'Bole Bulbula Site',
      locationAm: 'ቦሌ ቡልቡላ ሳይት',
      scope: 'Staircase Cladding, Glass Balustrades, Gypsum Ceilings, Custom Kitchen',
      scopeAm: 'የደረጃ ፊኒሺንግ፣ የመስታወት መከላከያዎች፣ የጣሪያ ስራ እና ኩሽና',
      year: '2024-2025',
      description: 'Sophisticated duplex residence featuring cantilevered timber floating stairs with tempered glass railings, open-concept kitchen cabinetry, and seamless indoor-outdoor living finishes.',
      descriptionAm: 'የተሟላ ባለ ሁለት ፎቅ ቪላ ፊኒሺንግ፤ የመስታወት ደረጃ መከላከያዎች፣ ዘመናዊ ክፍት የወጥ ቤት ካቢኔቶች እና ውብ የሳሎን ጣሪያ።',
      featured: true,
      image: '/images/projects/site-03/photo-01.jpg',
      gallery: [
        '/images/projects/site-03/photo-01.jpg',
        '/images/projects/site-03/photo-02.jpg',
        '/images/projects/site-03/photo-03.jpg',
        '/images/projects/site-03/photo-04.jpg'
      ],
      features: [
        'Frameless 12mm tempered safety glass staircase balustrades',
        'Solid hardwood step treads with embedded step riser LEDs',
        'Integrated modular kitchen with quartz waterfall countertops',
        'Seamless room-to-room threshold-free floor transitions'
      ],
      featuresAm: [
        '12 ሚ.ሜ የጸና የመስታወት ደረጃ መከላከያ',
        'ከስር የበራ መብራት ያላቸው የተፈጥሮ እንጨት ደረጃዎች',
        'ዘመናዊ የወጥ ቤት ካቢኔት ከኳርትዝ እብነበረድ ጋር',
        'ያለ መለያየት ወጥ የሆነ የክፍሎች የወለል ንጣፍ'
      ]
    },
    {
      id: 'site-06-grand-residence',
      title: 'Project Site 6 - Grand Multi-Level Residence',
      titleAm: 'ፕሮጀክት ሳይት 6 - ባለብዙ ፎቅ ታላቅ ቪላ ፊኒሺንግ',
      category: 'residential',
      categoryLabel: 'Grand Residence',
      categoryLabelAm: 'ታላቅ የመኖሪያ ቪላ',
      location: 'Lebu / Jema Area, Addis Ababa',
      locationAm: 'ሌቡ / ጀማ አካባቢ፣ አዲስ አበባ',
      scope: 'Exterior Facade Cladding, Balconies, Magnetic Track Lights, Living Room Millwork',
      scopeAm: 'የውጪ ግድግዳ ማስዋብ፣ በረንዳዎች፣ መግነጢሳዊ መብራቶች እና የእንጨት ስራዎች',
      year: '2024',
      description: 'Modern multi-story private residence boasting architectural exterior facade treatments, magnetic track lighting grids, and built-in millwork cabinetry throughout.',
      descriptionAm: 'ባለብዙ ፎቅ ዘመናዊ ቪላ፤ የውጪ ግድግዳ ፊኒሺንግ፣ ዘመናዊ መግነጢሳዊ የጣሪያ መብራቶች እና የተሟሉ የእንጨት ካቢኔቶች።',
      featured: true,
      image: '/images/projects/site-06/photo-01.jpg',
      gallery: [
        '/images/projects/site-06/photo-01.jpg',
        '/images/projects/site-06/photo-02.jpg',
        '/images/projects/site-06/photo-03.jpg',
        '/images/projects/site-06/photo-04.jpg'
      ],
      features: [
        'Architectural magnetic track rail lighting system',
        'Heavy-duty aluminum window frames with thermal breaks',
        'Integrated multi-zone living and dining false ceiling drops',
        'Exterior weatherproof stone texture silicone coatings'
      ],
      featuresAm: [
        'ዘመናዊ መግነጢሳዊ የጣሪያ መብራቶች ስርዓት',
        'የአየርና የውሃ መከላከያ ያላቸው ጠንካራ የአሉሚኒየም መስኮቶች',
        'የሳሎን እና የመመገቢያ ክፍል የጣሪያ ጌጦች',
        'የአየር ሁኔታን የሚቋቋም የውጪ ድንጋይ ቀለም'
      ]
    },
    {
      id: 'site-07-executive-villa',
      title: 'Project Site 7 - Executive Villa & Master Suite Finishing',
      titleAm: 'ፕሮጀክት ሳይት 7 - የኤግዚክዩቲቭ ቪላ እና የመኝታ ክፍሎች ፊኒሺንግ',
      category: 'residential',
      categoryLabel: 'Executive Residence',
      categoryLabelAm: 'የመኖሪያ ቪላ',
      location: 'Addis Ababa Suburban Estate',
      locationAm: 'አዲስ አበባ',
      scope: 'Master Bedroom Fluted Wood Walls, Floating Vanities, Gypsum Profiles',
      scopeAm: 'የመኝታ ክፍል የእንጨት ግድግዳ፣ ተንሳፋፊ ኮሞዲኖዎች እና የጣሪያ ስራ',
      year: '2024-2025',
      description: 'Refined executive finishing execution showcasing master bedroom custom vertical fluted wood accent walls, cantilevered floating nightstands, and spa-style bathroom vanities.',
      descriptionAm: 'ለዋና መኝታ ክፍል የተሰራ ውብ የእንጨት ግድግዳ ዲዛይን፤ ተንሳፋፊ ኮሞዲኖዎች፣ የጣሪያ ጌጦች እና ዘመናዊ የመታጠቢያ ቤት ካቢኔቶች።',
      featured: false,
      image: '/images/projects/site-07/photo-01.jpg',
      gallery: [
        '/images/projects/site-07/photo-01.jpg',
        '/images/projects/site-07/photo-02.jpg',
        '/images/projects/site-07/photo-03.jpg',
        '/images/projects/site-07/photo-04.jpg',
        '/images/projects/site-07/photo-05.jpg',
        '/images/projects/site-07/photo-06.jpg'
      ],
      features: [
        'Floor-to-ceiling fluted wood master bedroom headboard wall',
        'Cantilevered bedside storage modules with warm halo LEDs',
        'Recessed curtain pockets with concealed perimeter lighting',
        'Custom bathroom floating quartz top vanities'
      ],
      featuresAm: [
        'ከጣሪያ እስከ ወለል የሚደርስ የመኝታ ክፍል የእንጨት ግድግዳ',
        'ተንሳፋፊ ኮሞዲኖዎች ከኤልኢዲ መብራት ጋር',
        'መጋረጃ መደበቂያ ክፍተቶች ከጣሪያ መብራት ጋር',
        'የመታጠቢያ ቤት ተንሳፋፊ ካቢኔቶች'
      ]
    },
    {
      id: 'site-08-flagship-villa-estate',
      title: 'Project Site 8 - Flagship Modern Villa Complex',
      titleAm: 'ፕሮጀክት ሳይት 8 - ዋና የቅንጦት ቪላ ኮምፕሌክስ ፊኒሺንግ',
      category: 'residential',
      categoryLabel: 'Flagship Villa Complex',
      categoryLabelAm: 'ዋና የቅንጦት ቪላ',
      location: 'Addis Ababa Landmark Site',
      locationAm: 'አዲስ አበባ',
      scope: 'Full Turnkey Villa Finishing: Gypsum, Lighting, Kitchen, Doors, Balustrades, Pergolas',
      scopeAm: 'ሙሉ የተሟላ ፊኒሺንግ: ጂፕሰም፣ መብራት፣ ኩሽና፣ በሮች፣ በረንዳዎችና ፐርጎላ',
      year: '2024-2025',
      description: 'Our flagship 9-photo project site showcasing complete end-to-end craftsmanship: multi-tiered coffered ceilings, architectural timber wall panels, luxury modular kitchens, bespoke interior doors, and outdoor terrace pergolas.',
      descriptionAm: 'ባለ 9 ፎቶ የተሟላ የቪላ ፊኒሺንግ ፕሮጀክት፤ የጂፕሰም ጣሪያ፣ የእንጨት ግድግዳዎች፣ ዘመናዊ ኩሽና፣ የተመረጡ በሮች እና የቴራስ ፐርጎላ።',
      featured: true,
      image: '/images/projects/site-08/photo-01.jpg',
      gallery: [
        '/images/projects/site-08/photo-01.jpg',
        '/images/projects/site-08/photo-02.jpg',
        '/images/projects/site-08/photo-03.jpg',
        '/images/projects/site-08/photo-04.jpg',
        '/images/projects/site-08/photo-05.jpg',
        '/images/projects/site-08/photo-06.jpg',
        '/images/projects/site-08/photo-07.jpg',
        '/images/projects/site-08/photo-08.jpg',
        '/images/projects/site-08/photo-09.jpg'
      ],
      features: [
        'Complete end-to-end turnkey architectural delivery',
        'State-of-the-art modular kitchen with quartz waterfall counters',
        'Bespoke solid hardwood internal door packages throughout',
        'Outdoor composite timber pergola terrace lounge structure'
      ],
      featuresAm: [
        'ከንድፍ እስከ ርክክብ የተሟላ የቪላ ፊኒሺንግ',
        'ዘመናዊ የወጥ ቤት ካቢኔት ከኳርትዝ ደሴት ጋር',
        'በሁሉም ክፍሎች የተገጠሙ ጠንካራ የተፈጥሮ እንጨት በሮች',
        'የቴራስ ፐርጎላ የውጪ ማረፊያ ስፍራ'
      ]
    },
    {
      id: 'site-09-apartment-finishing',
      title: 'Project Site 9 - Modern Apartment Interior Finishing',
      titleAm: 'ፕሮጀክት ሳይት 9 - ዘመናዊ አፓርትመንት የውስጥ ፊኒሺንግ',
      category: 'apartment',
      categoryLabel: 'Apartment Finishing',
      categoryLabelAm: 'አፓርትመንት ፊኒሺንግ',
      location: 'Addisu Gebeya / Gullele Site',
      locationAm: 'አዲሱ ገበያ / ጉለሌ ሳይት',
      scope: 'Multi-Unit Apartment Interior Skimming, Gypsum, Kitchen, Tile Laying',
      scopeAm: 'የአፓርትመንት ቤቶች ጂፕሰም፣ ኩሽና፣ ቀለም እና የወለል ንጣፍ',
      year: '2023-2024',
      description: 'Turnkey residential apartment unit transformation with high-durability acrylic wall finishes, modular cabinetry, porcelain tiled floors, and clean ceiling perimeter LED arrays.',
      descriptionAm: 'ለአፓርትመንት ቤቶች የተሰራ ጥራት ያለው ፊኒሺንግ፤ ቆሻሻ የሚቋቋም ቀለም፣ የወጥ ቤት ካቢኔቶች፣ የወለል ንጣፍ እና የጣሪያ መብራቶች።',
      featured: false,
      image: '/images/projects/site-09/photo-01.jpg',
      gallery: [
        '/images/projects/site-09/photo-01.jpg',
        '/images/projects/site-09/photo-02.jpg'
      ],
      features: [
        'Durable multi-family residential interior specifications',
        'Compact high-efficiency modular kitchen layout',
        'Sound-isolated partition walls and acoustic ceiling drops'
      ],
      featuresAm: [
        'ለአፓርትመንት ተስማሚ የሆነ ጥራት ያለው ፊኒሺንግ',
        'ቦታ ቆጣቢ ዘመናዊ የወጥ ቤት ካቢኔት',
        'ድምጽ የሚቀንሱ የክፍል መለያዎችና የጣሪያ ስራዎች'
      ]
    },
    {
      id: 'site-10-terrace-finishing',
      title: 'Project Site 10 - Rooftop Terrace & Pergola Living',
      titleAm: 'ፕሮጀክት ሳይት 10 - የጣሪያ ቴራስ እና ፐርጎላ ማረፊያ',
      category: 'residential',
      categoryLabel: 'Outdoor & Pergola',
      categoryLabelAm: 'የውጪ ቴራስ እና ፐርጎላ',
      location: 'Bulbula Mazoria Rooftop',
      locationAm: 'ቡልቡላ ማዞሪያ',
      scope: 'Rooftop Pergola Lounge, Weatherproof Timber Slats, Outdoor Kitchen Counter, Ambient Lighting',
      scopeAm: 'የቴራስ ፐርጎላ፣ የአየር ሁኔታ የሚቋቋም እንጨት፣ የውጪ ማረፊያ እና መብራት',
      year: '2024-2025',
      description: 'Luxury rooftop terrace transformation combining weather-resistant composite timber pergola structures, integrated outdoor kitchen counter, ambient string and step lighting, and panoramic relaxation seating.',
      descriptionAm: 'የጣሪያ ቴራስ ማረፊያ ቦታ፤ ዝናብና ፀሐይ የሚቋቋም የእንጨት ፐርጎላ፣ የውጪ ባር ጠረጴዛ እና የሚያምሩ የሌሊት መብራቶች ያሉት።',
      featured: true,
      image: '/images/projects/site-10/photo-01.jpg',
      gallery: [
        '/images/projects/site-10/photo-01.jpg',
        '/images/projects/site-10/photo-02.jpg'
      ],
      features: [
        'Weatherproof UV-stabilized composite timber pergola slats',
        'Outdoor entertainment barbecue and beverage counter',
        'Integrated waterproof IP67 LED deck and step illumination'
      ],
      featuresAm: [
        'ዝናብና ፀሐይ የሚቋቋም የፐርጎላ ጣሪያ ስራ',
        'የውጪ ባርቤኪው እና የመጠጥ ማስተናገጃ ጠረጴዛ',
        'የውሃ መከላከያ ያላቸው የቴራስ መብራቶች'
      ]
    },
    {
      id: 'ebc-headquarters-atrium',
      title: 'Ethiopian Broadcasting Corporation (EBC) - Grand Lobby & Atrium',
      titleAm: 'የኢትዮጵያ ብሮድካስቲንግ ኮርፖሬሽን (ኢቢሲ) - ዋና ሎቢ እና አትሪየም',
      category: 'commercial',
      categoryLabel: 'Institutional / Commercial',
      categoryLabelAm: 'መንግስታዊ / የንግድ ህንፃ',
      location: 'EBC Headquarters, Addis Ababa',
      locationAm: 'ኢቢሲ ዋና መስሪያ ቤት፣ አዲስ አበባ',
      scope: 'Grand Lobby Atrium Finishing, Column Architectural Cladding, Corporate Reception, Ceiling Baffles',
      scopeAm: 'የዋናው ሎቢ ፊኒሺንግ፣ የአምዶች የእንጨት ማስዋብ፣ የሪሴፕሽን አዳራሽ እና የጣሪያ ባፍሎች',
      year: '2024-2025',
      description: 'Institutional-grade lobby and atrium finishing for EBC, integrating high-capacity architectural lighting, streamlined corporate reception desks, and expansive wood slat column displays.',
      descriptionAm: 'ለኢቢሲ የተሰራ ሰፊ የሎቢና የአትሪየም ፊኒሺንግ ስራ፤ ዘመናዊ መብራቶች፣ የኮርፖሬት ሪሴፕሽን እና የሚያማምሩ የእንጨት ስራዎች።',
      featured: true,
      image: '/images/projects/ebc/photo-01.jpg',
      gallery: [
        '/images/projects/ebc/photo-01.jpg',
        '/images/projects/ebc/photo-02.jpg',
        '/images/projects/ebc/photo-03.jpg',
        '/images/projects/ebc/photo-04.jpg'
      ],
      features: [
        'Architectural wood-wrapped circular structural columns',
        'Commercial high-traffic polished flooring installation',
        'Acoustic linear ceiling baffles with integrated LED linear luminaires',
        'Executive reception desk with backlit corporate emblem'
      ],
      featuresAm: [
        'በእንጨት የተዋቡ ትላልቅ የሎቢ አምዶች',
        'ብዙ ሰዎችን የሚያስተናግድ ጠንካራ የሚያብረቀርቅ ወለል',
        'የድምጽ ማስተካከያ ያላቸው የጣሪያ የእንጨት ባፍሎች ከመብራት ጋር',
        'የበራ የድርጅቱ ስም ያለበት የሪሴፕሽን ጠረጴዛ'
      ]
    },
    {
      id: 'menanda-hotel-ballroom',
      title: 'Menanda Hotel Bishoftu - Grand Ballroom & Facade',
      titleAm: 'መናንዳ ሆቴል ቢሾፍቱ - ታላቁ የሰርግ አዳራሽ እና የውጪ ፊኒሺንግ',
      category: 'hospitality',
      categoryLabel: 'Hotel & Hospitality',
      categoryLabelAm: 'ሆቴል እና መስተንግዶ',
      location: 'Bishoftu (Debre Zeit)',
      locationAm: 'ቢሾፍቱ (ደብረዘይት)',
      scope: 'Ballroom Coffered Timber Ceiling, Chandeliers, Multi-Story Hotel Facade',
      scopeAm: 'የዋናው አዳራሽ የእንጨት ጣሪያ፣ ሻንደሊየሮች እና የሆቴሉ የውጪ ገፅታ',
      year: '2023-2024',
      description: 'Turnkey hotel finishing for Menanda Hotel in Bishoftu, including grand ballroom timber coffered ceilings, acoustic wall paneling, and multi-story commercial exterior rendering.',
      descriptionAm: 'በቢሾፍቱ የሚገኘው የመናንዳ ሆቴል የተሟላ ፊኒሺንግ፤ የታላቁ አዳራሽ የእንጨት ጣሪያ፣ ሻንደሊየሮች እና የውጪ ገፅታ ግንባታ።',
      featured: true,
      image: '/images/pages/page-08.jpg',
      gallery: [
        '/images/pages/page-08.jpg',
        '/images/pages/page-09.jpg'
      ],
      features: [
        'Ornate timber coffered ceiling in main banquet ballroom',
        'Acoustically engineered wooden wall paneling for crystal sound clarity',
        'Multi-story commercial exterior rendering and weatherproofing'
      ],
      featuresAm: [
        'የዋናው አዳራሽ የእንጨት ኮፈርድ ጣሪያ',
        'ለድምጽ ጥራት የተዘጋጀ የግድግዳ የእንጨት ስራ',
        'ባለብዙ ፎቅ የሆቴል የውጪ ፊኒሺንግ'
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
