# 🌐 ICT TZG Professional Website

[![GitHub Stars](https://img.shields.io/github/stars/cali1997/TZG_WEB?style=social)](https://github.com/cali1997/TZG_WEB)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://docker.com)
[![React](https://img.shields.io/badge/react-18.x-blue)](https://reactjs.org)

Een moderne, professionele freelance ICT-services website met elegant glasmorphism design, gebouwd met React, TypeScript en Tailwind CSS. De website biedt een volledig admin dashboard voor prijsbeheer en is volledig gecontaineriseerd met Docker.

## 📸 Preview

![ICT TZG Professional Website](https://via.placeholder.com/800x400/1e293b/3b82f6?text=ICT+TZG+Professional+Website)

## ✨ Features

- 🎨 **Professional glasmorphism design** - Moderne, zakelijke visuele ervaring
- 📱 **Volledig responsive design** - Werkt perfect op alle apparaten  
- 🔐 **Admin dashboard** - Eenvoudig prijzen en instellingen beheren
- 🚀 **Snelle performance** - Gebouwd met Vite voor optimale snelheid
- 🐳 **Docker ready** - Eenvoudig deployment en development
- 💼 **Professionele diensten showcase** - ICT, netwerk, reparaties en meer
- ✨ **Subtle animations** - Elegante fade-in en hover effecten
- 🎯 **Professional color scheme** - Zakelijke blauw/grijs kleurenpalet

## 🚀 Snel Starten

### Methode 1: Git Clone (Aanbevolen)

```bash
# 1. Clone de repository
git clone https://github.com/cali1997/TZG_WEB.git

# 2. Ga naar de project directory
cd TZG_WEB

# 3. Start met Docker (automatisch build + run)
npm run docker:prod
```

**✅ Klaar! Website draait op [http://localhost:3000](http://localhost:3000)**

### Methode 2: Download ZIP

1. **Download**: Klik op de groene "Code" knop → "Download ZIP"
2. **Extract**: Pak het ZIP bestand uit
3. **Open terminal**: Navigeer naar de uitgepakte folder
4. **Start**: Voer `npm run docker:prod` uit

### Methode 3: Lokale Development

```bash
# Vereisten: Node.js 18+ en npm
git clone https://github.com/cali1997/TZG_WEB.git
cd TZG_WEB
npm install
npm run dev
```

## 🐳 Docker Commando's

| Commando | Beschrijving | Poort |
|----------|-------------|-------|
| `npm run docker:prod` | **🔥 Productie** (nginx + optimized build) | 3000 |
| `npm run docker:dev` | **⚡ Development** (hot reload) | 5173 |
| `npm run docker:down` | Stop alle containers | - |
| `npm run docker:logs` | Bekijk container logs | - |
| `npm run docker:build` | Build alleen de image | - |
| `npm run docker:stop` | Stop en verwijder container | - |

## 🧪 Testen

### 1. Basis Functionaliteit Test
```bash
# Start de website
npm run docker:prod

# Test in browser: http://localhost:3000
# ✅ Controlleer of Matrix animatie draait
# ✅ Klik op service kaarten
# ✅ Test responsiviteit (F12 → device toolbar)
```

### 2. Admin Dashboard Test
```bash
# 1. Ga naar http://localhost:3000
# 2. Klik "Admin" knop (rechtsboven)
# 3. Log in met admin credentials
# 4. Test prijzen wijzigen
# 5. Test instellingen wijzigen
```

### 3. Development Test
```bash
# Start development modus
npm run docker:dev

# Test hot reload: http://localhost:5173
# Wijzig een bestand → automatische refresh
```

### 4. Mobile Test
```bash
# Open http://localhost:3000
# F12 → Toggle device toolbar
# Test verschillende schermformaten:
# - iPhone (375px)
# - iPad (768px) 
# - Desktop (1200px+)
```

## 📋 Vereisten

### Voor Docker (Aanbevolen)
- ✅ **Docker Desktop** geïnstalleerd ([Download hier](https://www.docker.com/products/docker-desktop))
- ✅ **Git** geïnstalleerd ([Download hier](https://git-scm.com/))

### Voor Lokale Development
- ✅ **Node.js 18+** ([Download hier](https://nodejs.org/))
- ✅ **npm** (komt mee met Node.js)
- ✅ **Git** voor cloning

## 🏗️ Project Architectuur

```
TZG_WEB/
├── 📁 src/
│   ├── 📁 components/          # React componenten
│   │   ├── AdminDashboard.tsx   # Admin prijsbeheer
│   │   ├── AdminLogin.tsx       # Admin authenticatie  
│   │   ├── AdminSettings.tsx    # Bedrijfsinstellingen
│   │   ├── MatrixBackground.tsx # Animatie achtergrond
│   │   └── ServiceDetail.tsx    # Service detail pagina's
│   ├── 📁 data/                # Data & configuratie
│   │   ├── services.ts          # ICT diensten & prijzen
│   │   └── settings.ts          # Bedrijfsinformatie
│   ├── 📁 lib/                 # Utilities
│   │   └── auth.ts             # Admin authenticatie
│   └── 📁 assets/              # Media bestanden
├── 🐳 Dockerfile              # Productie image (Nginx)
├── 🐳 Dockerfile.dev          # Development image  
├── 🐳 docker-compose.yml      # Container orchestratie
├── ⚙️ nginx.conf              # Webserver configuratie
├── 📦 package.json            # Dependencies & scripts
└── 📖 README.md               # Deze documentatie
```

## 🔧 Technologie Stack

| Categorie | Technologie | Versie | Beschrijving |
|-----------|-------------|--------|-------------|
| **Frontend** | React | 18.x | UI framework |
| **Language** | TypeScript | 5.x | Type-safe JavaScript |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS |
| **Build** | Vite | 5.x | Lightning-fast bundler |
| **Icons** | Lucide React | Latest | Beautiful icon library |
| **Server** | Nginx | Alpine | Production web server |
| **Container** | Docker | Latest | Containerization platform |

## 🎯 Gebruik Cases

### Voor Developers
- 🔍 **Code Referentie**: Moderne React/TypeScript patterns
- 🎨 **UI Inspiratie**: Matrix-stijl design implementatie  
- 🐳 **Docker Learning**: Production-ready containerization
- 📱 **Responsive Design**: Mobile-first development

### Voor Business
- 💼 **ICT Service Website**: Ready-to-use freelancer website
- 🎛️ **Admin Dashboard**: Easy content management
- 🚀 **Quick Deployment**: One-command production setup
- 📈 **SEO Ready**: Optimized for search engines

## 🌟 Features

- ✅ **Responsive design** - Werkt perfect op alle apparaten
- ✅ **Matrix-stijl animatie achtergrond** - Unieke visuele ervaring
- ✅ **Admin dashboard** - Eenvoudig prijzen en instellingen beheren
- ✅ **Service detail pagina's** - Gedetailleerde dienst informatie
- ✅ **Contact informatie** - Direct contact via email/telefoon
- ✅ **Volledig containerized** - Docker production-ready
- ✅ **TypeScript** - Type-safe development
- ✅ **SEO geoptimaliseerd** - Meta tags en structured data

## 🔐 Admin Systeem

### Toegang
1. Ga naar [http://localhost:3000](http://localhost:3000)
2. Klik op **"Admin"** knop (rechtsboven)
3. Voer admin credentials in
4. Access tot dashboard en instellingen

### Mogelijkheden
- ✏️ **Prijzen wijzigen** per ICT dienst
- 🏢 **Bedrijfsinfo aanpassen** (naam, tagline, beschrijving)
- 📧 **Contact gegevens** updaten  
- ⚙️ **Website instellingen** beheren

## 🌍 Deployment Opties

### 1. Lokaal Development
```bash
npm run docker:dev    # http://localhost:5173 (hot reload)
```

### 2. Lokaal Productie
```bash
npm run docker:prod   # http://localhost:3000 (optimized)
```

### 3. Cloud Deployment
```bash
# Bouw production image
docker build -t ict-tzg-website .

# Tag voor registry
docker tag ict-tzg-website your-registry/ict-tzg-website

# Push naar cloud (AWS/Azure/GCP)
docker push your-registry/ict-tzg-website
```

## 🤝 Bijdragen

Wil je bijdragen aan dit project?

1. **Fork** de repository
2. **Clone** je fork: `git clone https://github.com/jouw-username/TZG_WEB.git`
3. **Maak een branch**: `git checkout -b feature/nieuwe-feature`
4. **Commit je changes**: `git commit -m 'Add nieuwe feature'`
5. **Push naar branch**: `git push origin feature/nieuwe-feature`
6. **Open een Pull Request**

## 🐛 Troubleshooting

### Docker problemen
```bash
# Docker daemon niet gestart?
# → Start Docker Desktop handmatig

# Poort 3000 al in gebruik?
docker ps                    # Check lopende containers
docker stop $(docker ps -q) # Stop alle containers

# Image opnieuw bouwen
docker system prune -a       # Schoon alles op
npm run docker:build         # Bouw opnieuw
```

### Development problemen
```bash
# Node modules issues?
rm -rf node_modules package-lock.json
npm install

# TypeScript errors?
npm run typecheck

# Vite build fails?
npm run build
```

## 📞 Support & Contact

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/cali1997/TZG_WEB/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/cali1997/TZG_WEB/discussions)
- 📧 **Direct Contact**: info@icttzg.nl
- 🌐 **Website**: [icttzg.nl](https://icttzg.nl)

## 📄 Licentie

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 🙏 Credits & Dankbetuigingen

- **Design Inspiratie**: Matrix film trilogie
- **Icons**: [Lucide React](https://lucide.dev/) voor prachtige iconen
- **Fonts**: System fonts voor optimale performance
- **Container Platform**: Docker voor betrouwbare deployment
- **Build Tool**: Vite voor lightning-fast development

---

<div align="center">

**⭐ Vond je dit project nuttig? Geef het een ster op GitHub!**

[![GitHub Stars](https://img.shields.io/github/stars/cali1997/TZG_WEB?style=social)](https://github.com/cali1997/TZG_WEB/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/cali1997/TZG_WEB?style=social)](https://github.com/cali1997/TZG_WEB/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/cali1997/TZG_WEB)](https://github.com/cali1997/TZG_WEB/issues)

**Gemaakt met ❤️ door ICT TZG - Technisch Zone Garandeert**

[Website](https://icttzg.nl) • [Email](mailto:info@icttzg.nl) • [GitHub](https://github.com/cali1997)

</div>