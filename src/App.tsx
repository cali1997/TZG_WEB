import { useState, useEffect } from 'react';
import { Lock, Settings, Mail, Phone, MessageCircle } from 'lucide-react';
import { services as initialServices, Service } from './data/services';
import { defaultSettings, SiteSettings } from './data/settings';
import { ServiceDetail } from './components/ServiceDetail';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminSettings } from './components/AdminSettings';
import { ProfessionalBackground } from './components/ProfessionalBackground';
import { isAdminLoggedIn, setAdminLoggedIn } from './lib/auth';

type View = 'home' | 'service-detail' | 'admin-login' | 'admin-dashboard' | 'admin-settings';

function App() {
  const [view, setView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminLoggedIn());
  }, []);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setView('service-detail');
  };

  const handleAdminLoginSuccess = () => {
    setIsAdmin(true);
    setView('home');
  };

  const handleAdminLogout = () => {
    setAdminLoggedIn(false);
    setIsAdmin(false);
    setView('home');
  };

  const handleEditPrices = () => {
    setView('admin-dashboard');
  };

  const handleSavePrices = (updatedService: Service) => {
    const updatedServices = services.map(s =>
      s.id === updatedService.id ? updatedService : s
    );
    setServices(updatedServices);
    setSelectedService(updatedService);
    setView('service-detail');
  };

  const handleSaveSettings = (updatedSettings: SiteSettings) => {
    setSettings(updatedSettings);
    setView('home');
  };

  if (view === 'admin-login') {
    return <AdminLogin onLoginSuccess={handleAdminLoginSuccess} />;
  }

  if (view === 'admin-settings') {
    return (
      <AdminSettings
        settings={settings}
        onBack={() => setView('home')}
        onSave={handleSaveSettings}
      />
    );
  }

  if (view === 'admin-dashboard' && selectedService) {
    return (
      <AdminDashboard
        service={selectedService}
        onBack={() => setView('service-detail')}
        onSave={handleSavePrices}
      />
    );
  }

  if (view === 'service-detail' && selectedService) {
    return (
      <ServiceDetail
        service={selectedService}
        settings={settings}
        onBack={() => setView('home')}
        onEditPrices={handleEditPrices}
        isAdmin={isAdmin}
      />
    );
  }

  return (
    <div className="min-h-screen relative">
      <ProfessionalBackground />
      <header className="bg-white/10 backdrop-blur-md text-white relative z-10 border-b border-white/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-end gap-3">
            {isAdmin && (
              <button
                onClick={() => setView('admin-settings')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <Settings className="w-4 h-4" />
                Instellingen
              </button>
            )}
            {isAdmin ? (
              <button
                onClick={handleAdminLogout}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <Lock className="w-4 h-4" />
                Uitloggen
              </button>
            ) : (
              <button
                onClick={() => setView('admin-login')}
                className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 shadow-lg"
              >
                <Lock className="w-4 h-4" />
                Admin
              </button>
            )}
          </div>
        </div>
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-5xl font-bold leading-tight text-white">
                {settings.companyName}
              </h1>
              <span className="text-2xl text-blue-400 animate-float">|</span>
              <p className="text-xl text-blue-200">
                {settings.tagline}
              </p>
            </div>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              {settings.description}
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </header>

      <section className="py-20 relative z-10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mijn Diensten</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Professionele ICT oplossingen op maat voor particulieren en bedrijven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-blue-400/50 group text-left w-full"
              >
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300 border border-blue-400/30">
                  <service.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-blue-400 font-semibold group-hover:text-blue-300">
                  Bekijk prijzen →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

            <section className="py-20 bg-white/10 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Waarom voor mij kiezen?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Ervaren Professional</h3>
                  <p className="text-gray-200">Jarenlange ervaring in de ICT sector</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Snelle Service</h3>
                  <p className="text-gray-200">Efficiënte oplossingen zonder wachttijd</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Betaalbare Prijzen</h3>
                  <p className="text-gray-200">Transparante en faire tarieven</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Flexibel & Betrouwbaar</h3>
                  <p className="text-gray-200">Werken op locatie of remote mogelijk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white/10 backdrop-blur-md text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Klaar om te starten?
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Neem contact op voor een vrijblijvende offerte of advies
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <a href={`mailto:${settings.email}`} className="text-lg text-blue-400 hover:text-blue-300 transition-colors block">
                    {settings.email}
                  </a>
                </div>

                <div className="text-center">
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Telefoon</h3>
                  <a href={`tel:${settings.phone}`} className="text-lg text-green-400 hover:text-green-300 transition-colors block">
                    {settings.phoneDisplay}
                  </a>
                </div>

                <div className="text-center">
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <MessageCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                  <a 
                    href={`https://wa.me/${settings.phone.replace(/[^0-9]/g, '')}?text=Hallo%20ICT%20TZG,%20ik%20heb%20een%20vraag%20over%20uw%20diensten.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-green-400 hover:text-green-300 transition-colors block"
                  >
                    Chat direct
                  </a>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/20 text-center">
                <p className="text-gray-200">
                  Beschikbaar voor opdrachten in heel Nederland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white/5 backdrop-blur-sm text-white py-8 relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} ICT Freelancer.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
