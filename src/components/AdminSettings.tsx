import { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { SiteSettings } from '../data/settings';

interface AdminSettingsProps {
  settings: SiteSettings;
  onBack: () => void;
  onSave: (updatedSettings: SiteSettings) => void;
}

export function AdminSettings({ settings, onBack, onSave }: AdminSettingsProps) {
  const [editedSettings, setEditedSettings] = useState<SiteSettings>({ ...settings });

  const handleChange = (field: keyof SiteSettings, value: string) => {
    setEditedSettings({ ...editedSettings, [field]: value });
  };

  const handleSave = () => {
    onSave(editedSettings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Terug
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Website Instellingen</h1>
              <p className="text-xl text-slate-300">Beheer alle website gegevens</p>
            </div>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg transition-colors"
            >
              <Save className="w-5 h-5" />
              Opslaan
            </button>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Bedrijfsinformatie</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      value={editedSettings.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="ICT TZG"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Tagline
                    </label>
                    <input
                      type="text"
                      value={editedSettings.tagline}
                      onChange={(e) => handleChange('tagline', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Technisch Zone Garandeert"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Omschrijving
                    </label>
                    <textarea
                      value={editedSettings.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Freelance diensten voor al uw ICT, netwerk en reparatie behoeften"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contactgegevens</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={editedSettings.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="info@ictfreelancer.nl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefoonnummer (voor links)
                    </label>
                    <input
                      type="tel"
                      value={editedSettings.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="+31612345678"
                    />
                    <p className="text-sm text-slate-500 mt-1">Zonder spaties, bijv: +31612345678</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefoonnummer (weergave)
                    </label>
                    <input
                      type="text"
                      value={editedSettings.phoneDisplay}
                      onChange={(e) => handleChange('phoneDisplay', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="+31 6 12 34 56 78"
                    />
                    <p className="text-sm text-slate-500 mt-1">Hoe het nummer wordt getoond op de website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
