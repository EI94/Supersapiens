# Supersapiens Site

> **Generative AI Gets the Hype — You Get the Cape.**

Un monorepo production-ready per il sito web Supersapiens, costruito con le tecnologie più moderne per un'esperienza AI-First.

## 🚀 Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS 3 + tailwind-animate
- **Animazioni**: Framer Motion v11
- **Contenuti**: MDX 2 + Contentlayer
- **SEO**: next-seo + JSON-LD schema
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **Package Manager**: PNPM (workspace)
- **Deploy**: Vercel
- **CI/CD**: GitHub Actions

## 📁 Struttura del Progetto

```
/ (repo root)
┣ apps/web/                 ← Next.js app
┃ ┣ app/
┃ ┃ ┣ layout.tsx           ← Global layout + metadata
┃ ┃ ┣ page.tsx             ← Homepage con HomeHero
┃ ┃ ┣ (services)/page.tsx
┃ ┃ ┣ (manifesto)/page.tsx
┃ ┃ ┣ (cases)/page.tsx
┃ ┃ ┣ (playground)/page.tsx
┃ ┃ ┣ (signals)/[slug]/page.tsx
┃ ┃ ┣ (signals)/page.tsx
┃ ┃ ┣ (crew)/page.tsx
┃ ┃ ┗ (contact)/page.tsx
┃ ┣ components/
┃ ┃ ┣ TopNav.tsx
┃ ┃ ┣ HomeHero.tsx         ← Componente hero principale
┃ ┃ ┣ ChallengeBlock.tsx
┃ ┃ ┣ ServiceCard.tsx
┃ ┃ ┣ CTAButton.tsx
┃ ┃ ┗ Footer.tsx
┃ ┣ content/
┃ ┃ ┣ manifesto.mdx        ← Otto linee del manifesto
┃ ┃ ┗ signals/
┃ ┃   ┗ 2025-05-28-welcome.mdx
┃ ┣ lib/
┃ ┃ ┣ utils.ts             ← Utility functions
┃ ┃ ┣ framer-variants.ts   ← Animazioni Framer Motion
┃ ┃ ┗ schema.ts            ← JSON-LD helpers
┃ ┣ __tests__/             ← Test files
┃ ┗ public/
┃   ┣ images/
┃   ┗ og-images/
┣ packages/ui/              ← Design system (futuro)
┣ .github/workflows/ci.yml  ← CI/CD pipeline
┗ README.md
```

## 🛠️ Setup e Sviluppo

### Prerequisiti

- Node.js 18+
- PNPM 8+

### Installazione

```bash
# Clona il repository
git clone https://github.com/supersapiens/supersapiens-site.git
cd supersapiens-site

# Installa le dipendenze
pnpm install

# Setup git hooks
pnpm prepare
```

### Sviluppo

```bash
# Avvia il server di sviluppo
pnpm dev

# Build per produzione
pnpm build

# Avvia il server di produzione
pnpm start

# Linting e formatting
pnpm lint
pnpm lint:fix
pnpm format

# Testing
pnpm test
pnpm test:watch
pnpm test:coverage

# Type checking
pnpm type-check
```

## 🎨 Design System

Il progetto utilizza un design system basato su:

- **Colori**: Schema dark con accent verde (#22c55e)
- **Typography**: Inter (sans-serif) + JetBrains Mono (monospace)
- **Spacing**: Sistema basato su Tailwind CSS
- **Animazioni**: Framer Motion con varianti predefinite

### Variabili CSS

```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --accent: 142 76% 36%;
  --accent-light: 142 76% 56%;
  /* ... altre variabili */
}
```

## 📝 Contenuti

### Manifesto

Il manifesto Supersapiens è definito in `content/manifesto.mdx` con otto linee fondamentali (0-7).

### Signals (Blog)

I post del blog sono in `content/signals/` in formato MDX con frontmatter:

```yaml
---
title: "Titolo del post"
date: "2025-05-28"
description: "Descrizione del post"
image: "/images/signals/hero.jpg"
tags: ["AI-First", "Regenerative Reboot"]
published: true
---
```

## 🧪 Testing

Il progetto include test per:

- **Componenti React**: Testing Library + Vitest
- **Utility functions**: Unit tests
- **Integrazione**: E2E tests (futuro)

```bash
# Esegui tutti i test
pnpm test

# Test in modalità watch
pnpm test:watch

# Coverage report
pnpm test:coverage
```

## 🚀 Deploy

### Vercel (Raccomandato)

Il progetto è configurato per il deploy automatico su Vercel:

1. Connetti il repository a Vercel
2. Configura le variabili d'ambiente
3. Il deploy avviene automaticamente su push al branch `main`

### Variabili d'Ambiente

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://supersapiens.it
VERCEL_TOKEN=your_vercel_token
```

## 📊 SEO e Performance

- **Metadata**: Configurazione completa con next-seo
- **Open Graph**: Immagini e meta tag ottimizzati
- **JSON-LD**: Schema markup per Organization, FAQ, Article
- **Sitemap**: Generazione automatica
- **Performance**: Ottimizzazioni Next.js 14

## 🔧 Configurazioni

### ESLint

```json
{
  "extends": ["next/core-web-vitals", "@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### Prettier

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## 🤝 Contribuire

1. Fork del repository
2. Crea un branch feature (`git checkout -b feature/amazing-feature`)
3. Commit delle modifiche (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è proprietario di Supersapiens. Tutti i diritti riservati.

## 🆘 Supporto

Per domande o supporto:

- **Email**: hello@supersapiens.it
- **LinkedIn**: [Supersapiens](https://linkedin.com/company/supersapiens)
- **Twitter**: [@supersapiens_ai](https://twitter.com/supersapiens_ai)

---

**Generative AI Gets the Hype — You Get the Cape.** 🦸‍♂️ 