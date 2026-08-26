export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  servicesNeeded: string[];
  areaSqm: number;
  finishingTier: 'standard' | 'premium' | 'luxury';
  location: string;
  notes: string;
  timeline: string;
}
