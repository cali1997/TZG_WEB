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
  tagline: 'Technisch Zone Gegarandeerd',
  description: 'Freelance diensten voor al uw ICT, netwerk en reparatie behoeften',
  email: 'ict.tzg@gmail.com',
  phone: '+31687136638',
  phoneDisplay: '+31 6 87 13 66 38'
};
