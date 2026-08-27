import { Injectable } from '@angular/core';
import { ServiceItem } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: ServiceItem[] = [
    {
      id: 'finishing-construction',
      title: 'Turnkey Finishing Construction Works',
      titleAm: 'የፊኒሺንግ ኮንስትራክሽን ስራዎች',
      shortDesc: 'Comprehensive commercial & residential interior and exterior finishing, false ceilings, lighting, tiling, and painting.',
      shortDescAm: 'የመኖሪያ እና የንግድ ህንፃዎች የውስጥና የውጪ ፊኒሺንግ፣ የጂፕሰም ጣሪያ፣ መብራቶች፣ የወለል ንጣፍ እና የቀለም ስራ።',
      icon: 'bi-building-fill-gear',
      category: 'finishing',
      details: [
        'Gypsum board false ceilings, recessed coffers, acoustic baffles, and laser-cut lattice insets',
        'Architectural lighting design: LED cove strips, track spotlights, chandeliers, and smart dimming',
        'Luxury porcelain, marble, granite, terrazzo, and parquet flooring installations',
        'Interior & exterior paint systems, Venetian stucco plaster, and weatherproof silicone coatings',
        'Frameless glass balustrades, aluminum composite panel (ACP) facade cladding, and partitions'
      ],
      detailsAm: [
        'የጂፕሰም ቦርድ ጣሪያ፣ የድምፅ መከላከያ እና የሌዘር ቅርጽ ስራዎች',
        'የኤልኢዲ መብራት ዲዛይን፣ ስፖትላይቶች እና ሻንደሊየሮች',
        'የሴራሚክ፣ የግራናይት፣ የእብነበረድ እና የፓርኬት ወለል ንጣፍ',
        'የውስጥና የውጪ ቀለም፣ ስቱኮ ፕላስተር እና የአየር ንብረት መከላከያ ቀለሞች',
        'የመስታወት በረንዳዎች፣ የአሉሚኒየም ክላዲንግ እና የክፍል መለያዮች'
      ],
      image: '/images/pages/page-07.jpg'
    },
    {
      id: 'custom-furniture-manufacturing',
      title: 'Bespoke Custom Furniture & Woodworks',
      titleAm: 'የፈርኒቸር እና የጥራት የእንጨት ስራዎች',
      shortDesc: 'Precision woodcraft, luxury kitchen cabinetry, executive office desks, bedroom suites, and wall units.',
      shortDescAm: 'ዘመናዊ የወጥ ቤት ካቢኔቶች፣ የመኝታ ቤት አልጋዎች፣ የሳሎን ቲቪ ግድግዳዎች እና የቢሮ ጠረጴዛዎች ማምረት።',
      icon: 'bi-hammer',
      category: 'furniture',
      details: [
        'Custom modular kitchen systems with soft-close German hardware, quartz & granite counters',
        'Bespoke TV media console walls with acoustic fluted timber slats and hidden wiring',
        'Master bedroom furniture: Platform beds, integrated headboards, walk-in closets, and vanities',
        'Executive corporate office desks, boardroom conference tables, and reception lobbies',
        'Luxury hardwood dining tables, ergonomic designer chairs, and custom entryway consoles'
      ],
      detailsAm: [
        'ዘመናዊ የወጥ ቤት ካቢኔት ከኳርትዝ እና ግራናይት ጋር',
        'የሳሎን ቲቪ ግድግዳ የእንጨት ጌጦች ከኤልኢዲ መብራት ጋር',
        'የመኝታ ክፍል አልጋዎች፣ የልብስ ቁምሳጥኖች እና የመዋቢያ ጠረጴዛዎች',
        'የቢሮ ጠረጴዛዎች፣ የስብሰባ አዳራሽ ፈርኒቸር እና የሪሴፕሽን ዴስኮች',
        'የመመገቢያ ጠረጴዛዎች እና ምቹ የእንጨት ወንበሮች'
      ],
      image: '/images/pages/page-02.jpg'
    },
    {
      id: 'interior-3d-design',
      title: '3D Spatial Planning & Architectural Design',
      titleAm: 'የውስጥ እና የውጪ 3D ዲዛይን ዝግጅት',
      shortDesc: 'Realistic 3D photo-visualizations, floorplans, lighting layout blueprints, and turnkey construction management.',
      shortDescAm: 'እውነተኛውን የቦታ እይታ የሚያሳዩ የ3D ፎቶዎች፣ የንድፍ ካርታዎች እና የቁሳቁስ መረጣ።',
      icon: 'bi-aspect-ratio',
      category: 'design',
      details: [
        'Photorealistic 3D rendering for residential villas, apartments, hotels, and retail shops',
        'Architectural spatial planning, functional furniture layouts, and ergonomic traffic flows',
        'Comprehensive material moodboards, texture curation, and color palette schemes',
        'Detailed construction finishing blueprints: Electrical, plumbing, ceiling, and tiling schedules',
        'On-site technical supervision ensuring 100% fidelity from 3D model to real execution'
      ],
      detailsAm: [
        'ለቪላዎች፣ አፓርትመንቶች፣ ሆቴሎች እና ሱቆች የ3D ዲዛይን ማዘጋጀት',
        'የቦታ አጠቃቀም ፕላን እና የዕቃዎች አቀማመጥ',
        'የቀለማት እና የቁሳቁስ ምርጫ ማስተካከል',
        'የኤሌክትሪክ፣ የቧንቧ እና የጣሪያ ፊኒሺንግ ንድፍ ዝግጅት',
        'ዲዛይኑ በትክክል በተግባር እንዲተገበር የቅርብ ምህንድስና ቁጥጥር'
      ],
      image: '/images/pages/page-11.jpg'
    }
  ];

  getServices(): ServiceItem[] {
    return this.services;
  }

  getServiceById(id: string): ServiceItem | undefined {
    return this.services.find(s => s.id === id);
  }
}
