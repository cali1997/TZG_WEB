import { ArrowLeft, Edit2, Mail, Phone, MessageCircle } from 'lucide-react';
import { Service } from '../data/services';
import { SiteSettings } from '../data/settings';
import { ProfessionalBackground } from './ProfessionalBackground';

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
      <ProfessionalBackground />
      <header className="bg-white/10 backdrop-blur-md text-white py-8 relative z-10 border-b border-white/20">
        <div className="container mx-auto px-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Terug naar diensten
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-blue-600 w-20 h-20 rounded-xl flex items-center justify-center shadow-lg">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2 text-white">{service.title}</h1>
                <p className="text-xl text-gray-200">{service.description}</p>
              </div>
            </div>

            {isAdmin && (
              <button
                onClick={onEditPrices}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors shadow-lg"
              >
                <Edit2 className="w-5 h-5" />
                Prijzen bewerken
              </button>
            )}
          </div>
        </div>
      </header>

      <section className="py-20 relative z-10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Prijzen & Diensten
            </h2>

            <div className="space-y-6">
              {service.prices.map((priceItem, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {priceItem.name}
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {priceItem.description}
                      </p>
                    </div>
                    <div className="ml-8 text-right">
                      <div className="text-3xl font-bold text-blue-400">
                        {priceItem.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                Vraag een offerte aan
              </h3>
              <p className="text-gray-200 mb-6">
                Neem contact op voor een persoonlijke offerte op maat voor uw specifieke situatie.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href={`mailto:${settings.email}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Stuur email
                </a>
                <a
                  href={`tel:${settings.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Bel direct
                </a>
                <a
                  href={`https://wa.me/${settings.phone.replace(/[^0-9]/g, '')}?text=Hallo%20ICT%20TZG,%20ik%20wil%20graag%20meer%20informatie%20over%20${service.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
