import { useState, useEffect } from 'react';
import { Lock, Settings } from 'lucide-react';
import { services as initialServices, Service } from './data/services';
import { defaultSettings, SiteSettings } from './data/settings';
import { ServiceDetail } from './components/ServiceDetail';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminSettings } from './components/AdminSettings';
import { MatrixBackground } from './components/MatrixBackground';
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
      <MatrixBackground />
      <header className="bg-black/30 backdrop-blur-sm text-white relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-end gap-3">
            {isAdmin && (
              <button
                onClick={() => setView('admin-settings')}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
              >
                <Settings className="w-4 h-4" />
                Instellingen
              </button>
            )}
            {isAdmin ? (
              <button
                onClick={handleAdminLogout}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
              >
                <Lock className="w-4 h-4" />
                Uitloggen
              </button>
            ) : (
              <button
                onClick={() => setView('admin-login')}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
              >
                <Lock className="w-4 h-4" />
                Admin
              </button>
            )}
          </div>
        </div>
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-5xl font-bold leading-tight text-green-400">
                {settings.companyName}
              </h1>
              <span className="text-2xl text-green-500">|</span>
              <p className="text-xl text-green-300">
                {settings.tagline}
              </p>
            </div>
            <p className="text-xl text-green-200 mb-8">
              {settings.description}
            </p>
            <a
              href="#contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </header>

      <section className="py-20 relative z-10 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-400 mb-4">Mijn Diensten</h2>
            <p className="text-lg text-green-200 max-w-2xl mx-auto">
              Professionele ICT oplossingen op maat voor particulieren en bedrijven
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="bg-black/70 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 border border-green-900 hover:border-green-500 group text-left w-full"
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-green-200 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-green-500 font-semibold group-hover:text-green-400">
                  Bekijk prijzen →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-green-400 mb-12 text-center">
              Waarom voor mij kiezen?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2">Ervaren Professional</h3>
                  <p className="text-green-200">Jarenlange ervaring in de ICT sector</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2">Snelle Service</h3>
                  <p className="text-green-200">Efficiënte oplossingen zonder wachttijd</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2">Betaalbare Prijzen</h3>
                  <p className="text-green-200">Transparante en faire tarieven</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2">Flexibel & Betrouwbaar</h3>
                  <p className="text-green-200">Werken op locatie of remote mogelijk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black/30 backdrop-blur-sm text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-green-400">
              Klaar om te starten?
            </h2>
            <p className="text-xl text-green-200 mb-10">
              Neem contact op voor een vrijblijvende offerte of advies
            </p>

            <div className="bg-slate-800 rounded-xl p-8 border border-green-700">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">Email</h3>
                  <a href={`mailto:${settings.email}`} className="text-xl text-emerald-400 hover:text-emerald-300 transition-colors">
                    {settings.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-green-400 mb-2">Telefoon</h3>
                  <a href={`tel:${settings.phone}`} className="text-xl text-emerald-400 hover:text-emerald-300 transition-colors">
                    {settings.phoneDisplay}
                  </a>
                </div>

                <div className="pt-6 border-t border-green-700">
                  <p className="text-green-300">
                    Beschikbaar voor opdrachten in heel Nederland
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black/30 text-green-400 py-8 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} ICT Freelancer. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
