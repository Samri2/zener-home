import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'am';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  readonly currentLang = signal<Language>('en');

  readonly isAmharic = computed(() => this.currentLang() === 'am');

  private translations: Record<string, { en: string; am: string }> = {
    // Brand & Header
    'brand.name': { en: 'ZENER HOME', am: 'ዚነር ሆም' },
    'brand.legal': { en: 'Zener Home P.L.C.', am: 'ዚነር ሆም ኃ/የተ/የግ/ማ' },
    'brand.tagline': { en: 'Finishing Construction & Furniture', am: 'የፊኒሺንግ ኮንስትራክሽን እና የቤት ዕቃዎች' },
    'brand.positioning': { 
      en: 'Turnkey interior design solutions & finishing construction for luxury residences, hotels, and commercial spaces.', 
      am: 'ለውብ መኖሪያ ቤቶች፣ ሆቴሎች እና የንግድ ተቋማት የተሟላ የውስጥ ዲዛይንና የፊኒሺንግ ግንባታ አገልግሎት።' 
    },
    
    // Navigation
    'nav.home': { en: 'Home', am: 'ዋና ገጽ' },
    'nav.services': { en: 'Services', am: 'አገልግሎቶች' },
    'nav.projects': { en: 'Projects', am: 'ፕሮጀክቶች' },
    'nav.furniture': { en: 'Furniture', am: 'የቤት ዕቃዎች' },
    'nav.about': { en: 'About Us', am: 'ስለ እኛ' },
    'nav.testimonials': { en: 'Testimonials', am: 'ምስክርነት' },
    'nav.contact': { en: 'Get in Touch', am: 'ያግኙን' },
    'nav.callUs': { en: 'Call Now', am: 'አሁኑኑ ይደውሉ' },
    
    // Hero Section
    'hero.badge': { en: 'Licensed Category 51212 Finishing Contractor', am: 'ፈቃድ ያለው የፊኒሺንግ ስራዎች ተቋራጭ (ደረጃ 51212)' },
    'hero.title': { en: 'Mastering Luxury Spaces with Timeless Precision', am: 'አስደናቂ እና ዘመናዊ የፊኒሺንግ ስራዎች ጥበብ' },
    'hero.subtitle': { 
      en: 'Specializing in turnkey interior design, high-end finishing construction, and bespoke custom furniture across Addis Ababa and beyond.', 
      am: 'በአዲስ አበባ እና በመላው ሀገሪቱ ጥራት ያላቸው የውስጥና የውጪ ፊኒሺንግ፣ የንድፍ እና የፈርኒቸር ስራዎችን በታማኝነት እናስረክባለን።' 
    },
    'hero.cta.contact': { en: 'Get in Touch', am: 'ያነጋግሩን' },
    'hero.cta.portfolio': { en: 'Explore Completed Works', am: 'የተጠናቀቁ ስራዎችን ይመልከቱ' },
    'hero.stats.exp': { en: '8+ Years', am: '8+ ዓመታት' },
    'hero.stats.expLabel': { en: 'Finishing Excellence', am: 'የስራ ልምድ' },
    'hero.stats.projects': { en: '10+ Landmark', am: '10+ ዋና ዋና' },
    'hero.stats.projectsLabel': { en: 'Finished Projects', am: 'የተጠናቀቁ ፕሮጀክቶች' },
    'hero.stats.turnkey': { en: '100% Turnkey', am: '100% ሙሉ' },
    'hero.stats.turnkeyLabel': { en: 'Design to Handover', am: 'ከንድፍ እስከ ርክክብ' },
    'hero.stats.budget': { en: 'Guaranteed', am: 'የተረጋገጠ' },
    'hero.stats.budgetLabel': { en: 'Budget & Timeline Respect', am: 'የጊዜና የበጀት ቁርጠኝነት' },

    // Services
    'services.badge': { en: 'Core Expertise', am: 'ዋና አገልግሎቶቻችን' },
    'services.title': { en: 'Integrated Design, Finishing & Furniture Solutions', am: 'የተሟሉ የዲዛይን፣ የፊኒሺንግ እና የፈርኒቸር ስራዎች' },
    'services.subtitle': { 
      en: 'We provide end-to-end turnkey transformation from architectural 3D visualization to handcrafted furniture and on-site finishing execution.', 
      am: 'ከ3D ዲዛይን ጀምሮ እስከ ቦታው ድረስ ያለውን የፊኒሺንግ ስራ እና ጥራት ያላቸው የቤት እቃዎችን በማሟላት እናስረክባለን።' 
    },

    // Process
    'process.title': { en: 'Our Turnkey Execution Process', am: 'ስራችንን የምንመራበት ሂደት' },
    'process.step1.title': { en: '1. Consultation & Assessment', am: '1. የመጀመሪያ ውይይት እና ምልከታ' },
    'process.step1.desc': { en: 'On-site site inspection, client requirements gathering, and initial budget alignment.', am: 'የቦታው ቅኝት፣ ፍላጎቶችዎን መለየት እና የመጀመሪያ በጀት ውይይት።' },
    'process.step2.title': { en: '2. 3D Architectural Design', am: '2. የ3D ዲዛይን ዝግጅት' },
    'process.step2.desc': { en: 'Realistic 3D visual renders, floorplans, moodboards, and material specifications.', am: 'እውነተኛውን የቦታ እይታ የሚያሳዩ የ3D ዲዛይን እና የቁሳቁስ መረጣ።' },
    'process.step3.title': { en: '3. Precision Craft & Finishing', am: '3. የፊኒሺንግ እና የማምረት ስራ' },
    'process.step3.desc': { en: 'Workshop furniture fabrication and on-site expert finishing installation under strict supervision.', am: 'በባለሙያዎች የሚከናወን የቦታው ፊኒሺንግ እና የፈርኒቸር ማምረት።' },
    'process.step4.title': { en: '4. Final Inspection & Handover', am: '4. ፍተሻ እና ቁልፍ ርክክብ' },
    'process.step4.desc': { en: 'Quality assurance walkthrough, final detailing, and timely turnkey key delivery.', am: 'የጥራት ፍተሻ እና የተሟላ ስራ በጊዜ ማስረከብ።' },

    // Trust & License
    'trust.badge': { en: 'Verified & Certified', am: 'ህጋዊ እና የተረጋገጠ' },
    'trust.title': { en: 'Licensed by Addis Ababa City Administration Trade Bureau', am: 'በአዲስ አበባ ከተማ አስተዳደር ንግድ ቢሮ ፈቃድ የተሰጠው' },
    'trust.desc': { 
      en: 'Zener Home P.L.C. operates as a fully licensed Construction Completing/Finishing Contractor (Category 51212) under General Manager Fikadu Worku Belete. We provide guaranteed peace of mind, formal contracts, and strict regulatory compliance.', 
      am: 'ዚነር ሆም ኃ/የተ/የግ/ማ በስራ አስኪያጅ ፍቃዱ ወርቁ በለጠ የሚመራ እና በደረጃ 51212 የተመዘገበ ህጋዊ የፊኒሺንግ ስራዎች ተቋራጭ ነው።' 
    },
    'trust.licenseNo': { en: 'Business License No: 2931566', am: 'የንግድ ፈቃድ ቁጥር: 2931566' },
    'trust.location': { en: 'Subcity: Nifas Silk Lafto / Lebu Area, Addis Ababa', am: 'አድራሻ: ንፋስ ስልክ ላፍቶ ክ/ከተማ / ሌቡ፣ አዲስ አበባ' },

    // Testimonials
    'testimonials.badge': { en: 'Client Trust & Satisfaction', am: 'የደንበኞቻችን ምስክርነት' },
    'testimonials.title': { en: 'What Our Esteemed Clients Say', am: 'ከደንበኞቻችን የተሰጡ አስተያየቶች' },
    'testimonials.subtitle': { 
      en: 'Real feedback from residential villa owners, hotel managers, and corporate partners across our finished landmark projects.', 
      am: 'በአዲስ አበባ እና በቢሾፍቱ በተጠናቀቁ ቪላዎች፣ ሆቴሎች እና ተቋማት የሰሩ ደንበኞቻችን የሰጡት እውነተኛ አስተያየት።' 
    },

    // Contact & CTA
    'contact.title': { en: 'Ready to Transform Your Space?', am: 'የእርስዎን ህልም ቤት ወይም ህንፃ መገንባት ይፈልጋሉ?' },
    'contact.subtitle': { en: 'Speak directly with our project engineers or visit our office in Lebu, Addis Ababa.', am: 'ከኢንጂነሮቻችን ጋር በቀጥታ ይወያዩ ወይም ሌቡ የሚገኘውን ቢሮአችንን ይጎብኙ።' },
    'contact.phone1': { en: '0910 900 931', am: '0910 900 931' },
    'contact.phone2': { en: '0922 166 213', am: '0922 166 213' },
    'contact.email': { en: 'Zenerfinishingzf@gmail.com', am: 'Zenerfinishingzf@gmail.com' },
    'contact.address': { en: 'Addis Ababa, Nifas Silk Lafto Subcity, Lebu Area', am: 'አዲስ አበባ፣ ንፋስ ስልክ ላፍቶ ክ/ከተማ፣ ሌቡ አካባቢ' },
    
    // Quick Buttons
    'btn.chatWhatsapp': { en: 'Chat on WhatsApp', am: 'በዋትስአፕ ይጻፉልን' },
    'btn.viewProject': { en: 'View Project Details', am: 'የፕሮጀክት ዝርዝር' },
    'btn.orderFurniture': { en: 'Inquire / Custom Order', am: 'ለማዘዝ / ዋጋ ለመጠየቅ' },
    'btn.contactUs': { en: 'Get in Touch', am: 'ያግኙን' },
    'btn.close': { en: 'Close', am: 'ዝጋ' }
  };

  t(key: string): string {
    const entry = this.translations[key];
    if (!entry) return key;
    return this.currentLang() === 'am' ? entry.am : entry.en;
  }

  setLang(lang: Language): void {
    this.currentLang.set(lang);
  }

  toggleLang(): void {
    this.currentLang.set(this.currentLang() === 'en' ? 'am' : 'en');
  }
}
