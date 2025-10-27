import { ArrowLeft, Edit2 } from 'lucide-react';
import { Service } from '../data/services';
import { SiteSettings } from '../data/settings';
import { MatrixBackground } from './MatrixBackground';

interface ServiceDetailProps {
  service: Service;
  settings: SiteSettings;
  onBack: () => void;
  onEditPrices: () => void;
  isAdmin: boolean;
}

export function ServiceDetail({ service, settings, onBack, onEditPrices, isAdmin }: ServiceDetailProps) {
  const IconComponent = service.icon;

  return (
    <div className="min-h-screen relative">
      <MatrixBackground />
      <header className="bg-black/30 backdrop-blur-sm text-white py-8 relative z-10">
        <div className="container mx-auto px-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-green-300 hover:text-green-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Terug naar diensten
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-green-600 w-20 h-20 rounded-xl flex items-center justify-center">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2 text-green-400">{service.title}</h1>
                <p className="text-xl text-green-200">{service.description}</p>
              </div>
            </div>

            {isAdmin && (
              <button
                onClick={onEditPrices}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg transition-colors"
              >
                <Edit2 className="w-5 h-5" />
                Prijzen bewerken
              </button>
            )}
          </div>
        </div>
      </header>

      <section className="py-20 relative z-10 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-400 mb-12 text-center">
              Prijzen & Diensten
            </h2>

            <div className="space-y-6">
              {service.prices.map((priceItem, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-600 hover:border-green-400 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-400 mb-2">
                        {priceItem.name}
                      </h3>
                      <p className="text-green-200 leading-relaxed">
                        {priceItem.description}
                      </p>
                    </div>
                    <div className="ml-8 text-right">
                      <div className="text-3xl font-bold text-emerald-400">
                        {priceItem.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-black/40 backdrop-blur-sm border border-green-600 rounded-xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Vraag een offerte aan
              </h3>
              <p className="text-green-200 mb-6">
                Neem contact op voor een persoonlijke offerte op maat voor uw specifieke situatie.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${settings.email}`}
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Stuur een email
                </a>
                <a
                  href={`tel:${settings.phone}`}
                  className="inline-block bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Bel direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
