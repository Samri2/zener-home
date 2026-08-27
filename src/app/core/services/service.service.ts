import { Injectable } from '@angular/core';
import { ServiceItem } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: ServiceItem[] = [
    {
      id: 'interior-finishing',
      title: 'Turnkey Interior Finishing Construction',
      titleAm: 'የተሟላ የውስጥ ፊኒሺንግ ግንባታ',
      icon: 'bi-gem',
      category: 'Finishing Construction',
      shortDesc: 'Comprehensive execution from gypsum coffered ceilings, ambient lighting, Italian tile installation to architectural painting.',
      shortDescAm: 'ከጂፕሰም ጣሪያ፣ ከዘመናዊ መብራቶች፣ ከሴራሚክ እና እብነበረድ ወለል እስከ ግድግዳ ቀለም የተሟላ የፊኒሺንግ ስራ።',
      details: [
        'Gypsum board false ceilings, perimeter LED light coves & magnetic tracks',
        'Porcelain, granite, and marble floor and wall tiling',
        'Silicone acrylic interior & exterior paint finishes, stucco, and decorative textures',
        'Plumbing fixture fitting, luxury sanitary installations & electrical rewiring'
      ],
      detailsAm: [
        'የጂፕሰም ቦርድ ጣሪያ፣ የኤልኢዲ መብራት ስራዎችና የትራክ ላይቲንግ',
        'የሴራሚክ፣ የግራናይት እና የእብነበረድ ወለል ንጣፍ',
        'የውስጥና የውጪ ቀለሞች፣ የግራናይት ቀለም እና የጌጥ ፕላስተር',
        'የሳኒተሪ እና የቧንቧ እቃዎች ገጠማ እንዲሁም የኤሌክትሪክ ዝርጋታ'
      ],
      image: '/images/media/photo-03.jpg'
    },
    {
      id: 'custom-furniture',
      title: 'Bespoke Woodwork & Custom Furniture',
      titleAm: 'ዘመናዊ የእንጨትና የፈርኒቸር ስራ',
      icon: 'bi-tools',
      category: 'Joinery & Cabinetry',
      shortDesc: 'Precision manufacturing of luxury kitchen cabinetry, media TV units, built-in wardrobes, and handcrafted furniture.',
      shortDescAm: 'ጥራት ያላቸው የወጥ ቤት ካቢኔቶች፣ የሳሎን ቲቪ ግድግዳዎች፣ የልብስ ቁምሳጥኖች እና የቤት እቃዎች ማምረት።',
      details: [
        'Modular kitchen cabinetry with quartz stone worktops & Blum soft-close fittings',
        'Architectural TV wall units with WPC acoustic fluted slats & ambient LED lighting',
        'Floor-to-ceiling built-in wardrobes, walk-in closets & smoked glass sliding doors',
        'Handcrafted dining sets, executive desks, and luxury bedroom king suites'
      ],
      detailsAm: [
        'ዘመናዊ የወጥ ቤት ካቢኔት ከኳርትዝ እብነበረድና የጀርመን መገጣጠሚያዎች ጋር',
        'የሳሎን ቲቪ ግድግዳዎች ከደብሊውፒሲ እና ከኤልኢዲ መብራቶች ጋር',
        'የተገጠሙ የልብስ ቁምሳጥኖች እና የመስታወት ተንሸራታች በሮች',
        'የመመገቢያ ጠረጴዛዎች፣ የቢሮ ዴስኮች እና የቅንጦት መኝታ አልጋዎች'
      ],
      image: '/images/media/photo-28.jpg'
    },
    {
      id: 'architectural-design',
      title: '3D Spatial Planning & Architectural Visualization',
      titleAm: 'የ3D ዲዛይን እና የቦታ እቅድ ዝግጅት',
      icon: 'bi-bounding-box-circles',
      category: 'Design & Engineering',
      shortDesc: 'Photorealistic 3D interior renders, material moodboards, exact spatial layouts, and detailed Bill of Quantities (BOQ).',
      shortDescAm: 'እውነተኛውን የቦታ ውበት የሚያሳዩ የ3D ዲዛይን ምስሎች፣ የቁሳቁስ መረጣ እና ዝርዝር የበጀት ሰነድ (BOQ) ዝግጅት።',
      details: [
        'High-resolution 3D photorealistic visualization & virtual walkthroughs',
        'Detailed electrical layout, switching diagrams & lighting fixture schemes',
        'Comprehensive material specification schedule & itemized Bill of Quantities (BOQ)',
        'On-site engineering supervision and milestone compliance monitoring'
      ],
      detailsAm: [
        'ከፍተኛ ጥራት ያለው የ3D ዲዛይን እና የቪዲዮ እይታ',
        'የኤሌክትሪክና የመብራት ዝርዝር የንድፍ ፕላን',
        'የቁሳቁስ መረጃ ዝርዝር እና ትክክለኛ የበጀት ሰነድ (BOQ)',
        'የሳይት ኢንጂነሪንግ ቁጥጥር እና የጥራት ክትትል'
      ],
      image: '/images/media/photo-47.jpg'
    },
    {
      id: 'facade-cladding',
      title: 'Exterior Facade Cladding & Balconies',
      titleAm: 'የውጪ ግድግዳ እና የበረንዳ ማስዋቢያ ስራዎች',
      icon: 'bi-building-gear',
      category: 'Exterior Architecture',
      shortDesc: 'Modern exterior stone cladding, aluminum composite panels (ACP), tempered glass balustrades, and weatherproofing.',
      shortDescAm: 'የተፈጥሮ ድንጋይ ክላዲንግ፣ የአሉሚኒየም ኮምፖሳይት፣ የበረንዳ መስታወት እና የውሃ መከላከያ ስራዎች።',
      details: [
        'Natural split-face stone cladding & thermal facade insulation',
        'Aluminum composite paneling (ACP) and laser-cut geometric architectural screens',
        'Tempered laminated glass balconies & stainless steel handrails',
        'Outdoor terrace pergolas, waterproof decking & architectural facade lighting'
      ],
      detailsAm: [
        'የተፈጥሮ ድንጋይ ግድግዳ እና የሙቀት መከላከያ ስራዎች',
        'የአሉሚኒየም ኮምፖሳይት እና በሌዘር የተቆረጡ የጌጥ ስክሪኖች',
        'የበረንዳ መስታወት እና የብረት ደህንነት መከላከያዎች',
        'የቴራስ ፐርጎላ፣ የውሃ መከላከያ ንጣፍ እና የውጪ መብራቶች'
      ],
      image: '/images/media/photo-50.jpg'
    }
  ];

  getServices(): ServiceItem[] {
    return this.services;
  }

  getServiceById(id: string): ServiceItem | undefined {
    return this.services.find(s => s.id === id);
  }
}
