# 🚀 Deployment Supersapiens su Vercel

## Repository GitHub
Il progetto è ora disponibile su: **https://github.com/EI94/Supersapiens.git**

## Configurazione Vercel

### 1. Importa il Repository
1. Vai su [vercel.com](https://vercel.com)
2. Clicca "New Project"
3. Importa da GitHub: `EI94/Supersapiens`

### 2. Configurazioni Build
```
Framework Preset: Next.js
Root Directory: apps/web
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### 3. Variabili d'Ambiente
Aggiungi queste variabili nelle impostazioni Vercel:

```
RESEND_API_KEY=re_D59RbeGk_KtioyxbEMgxsph9T3sHDfqPA
NEXT_PUBLIC_SITE_URL=https://supersapiens.vercel.app
```

### 4. Configurazione Dominio
- Il sito sarà disponibile su: `supersapiens.vercel.app`
- Puoi configurare un dominio personalizzato nelle impostazioni

### 5. Funzionalità Implementate
✅ **Homepage** - Hero section con servizi e newsletter  
✅ **Services** - Sistema tabs con 4 servizi principali  
✅ **Manifesto** - Filosofia aziendale in 7 sezioni  
✅ **Case Studies** - Filtri interattivi e griglia progetti  
✅ **Playground** - Video player e contenuti platform  
✅ **Signals** - Blog con layout masonry e sidebar  
✅ **Contacts** - Form funzionante con email automatiche  
✅ **Crew** - Pagina team con foto e valori  

### 6. Sistema Email
- **API Endpoint**: `/api/contact`
- **Provider**: Resend
- **Notifiche**: pierpaolo.laurito@gmail.com
- **Conferme**: Email automatiche agli utenti

### 7. Performance
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animazioni**: Framer Motion
- **Fonts**: Inter + Newsreader
- **SEO**: Metadata completi per ogni pagina

### 8. Monitoraggio
Vercel fornisce automaticamente:
- Analytics delle performance
- Logs delle funzioni serverless
- Monitoring degli errori
- Web Vitals

## 🎯 Pronto per il Deploy!
Il progetto è completamente configurato e pronto per essere deployato su Vercel in pochi click. 