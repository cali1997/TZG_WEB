import { useState } from 'react';
import { Lock } from 'lucide-react';
import { adminLogin, setAdminLoggedIn } from '../lib/auth';
import { ProfessionalBackground } from './ProfessionalBackground';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (adminLogin(email, password)) {
      setAdminLoggedIn(true);
      onLoginSuccess();
    } else {
      setError('Ongeldige inloggegevens');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative">
      <ProfessionalBackground />
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md border border-white/20 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Lock className="w-12 h-12 text-blue-400" />
        </div>

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-400/50 text-red-200 px-4 py-3 rounded-lg backdrop-blur-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Login Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Wachtwoord
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Inloggen
          </button>
        </form>
      </div>
    </div>
  );
}
