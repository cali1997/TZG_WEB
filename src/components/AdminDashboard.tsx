import { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Service } from '../data/services';

interface AdminDashboardProps {
  service: Service;
  onBack: () => void;
  onSave: (updatedService: Service) => void;
}

export function AdminDashboard({ service, onBack, onSave }: AdminDashboardProps) {
  const [editedService, setEditedService] = useState<Service>(JSON.parse(JSON.stringify(service)));

  const handlePriceChange = (index: number, field: 'name' | 'price' | 'description', value: string) => {
    const newPrices = [...editedService.prices];
    newPrices[index] = { ...newPrices[index], [field]: value };
    setEditedService({ ...editedService, prices: newPrices });
  };

  const handleSave = () => {
    onSave(editedService);
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
              <h1 className="text-4xl font-bold mb-2">Prijzen bewerken</h1>
              <p className="text-xl text-slate-300">{service.title}</p>
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
          <div className="max-w-4xl mx-auto space-y-6">
            {editedService.prices.map((priceItem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Naam van dienst
                    </label>
                    <input
                      type="text"
                      value={priceItem.name}
                      onChange={(e) => handlePriceChange(index, 'name', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Prijs
                    </label>
                    <input
                      type="text"
                      value={priceItem.price}
                      onChange={(e) => handlePriceChange(index, 'price', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Omschrijving
                    </label>
                    <textarea
                      value={priceItem.description}
                      onChange={(e) => handlePriceChange(index, 'description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
