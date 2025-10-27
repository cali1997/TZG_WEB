export interface SiteSettings {
  companyName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  phoneDisplay: string;
}

export const defaultSettings: SiteSettings = {
  companyName: 'ICT TZG',
  tagline: 'Technisch Zone Garandeert',
  description: 'Freelance diensten voor al uw ICT, netwerk en reparatie behoeften',
  email: 'info@ictfreelancer.nl',
  phone: '+31612345678',
  phoneDisplay: '+31 6 12 34 56 78'
};
