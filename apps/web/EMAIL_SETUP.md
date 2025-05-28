# 📧 Configurazione Sistema Email - Supersapiens

## Setup Resend per l'invio di email

### 1. Registrazione su Resend

1. Vai su [resend.com](https://resend.com)
2. Crea un account gratuito
3. Verifica la tua email

### 2. Configurazione Dominio (Opzionale ma Consigliato)

Per un aspetto più professionale, configura un dominio personalizzato:

1. Nel dashboard Resend, vai su "Domains"
2. Aggiungi il tuo dominio (es. `supersapiens.ai`)
3. Configura i record DNS come indicato
4. Verifica il dominio

### 3. Ottenere l'API Key

1. Nel dashboard Resend, vai su "API Keys"
2. Clicca "Create API Key"
3. Dai un nome (es. "Supersapiens Contact Form")
4. Seleziona i permessi necessari (Send emails)
5. Copia la chiave API generata

### 4. Configurazione Environment Variables

Crea un file `.env.local` nella directory `apps/web/` con:

```bash
# Resend API Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**⚠️ IMPORTANTE:** Non committare mai il file `.env.local` nel repository!

### 5. Configurazione Produzione (Vercel)

Nel dashboard Vercel:

1. Vai nelle impostazioni del progetto
2. Sezione "Environment Variables"
3. Aggiungi:
   - `RESEND_API_KEY`: la tua API key di Resend
   - `NEXT_PUBLIC_APP_URL`: il tuo dominio di produzione

### 6. Test del Sistema

1. Avvia il server di sviluppo: `npm run dev`
2. Vai su `/contacts`
3. Compila e invia il form
4. Controlla:
   - La tua email (pierpaolo.laurito@gmail.com)
   - L'email di conferma dell'utente

## 📋 Funzionalità Implementate

### Email a Te (pierpaolo.laurito@gmail.com)

- ✅ Notifica immediata di nuovo contatto
- ✅ Design professionale con branding Supersapiens
- ✅ Tutti i dettagli del contatto (nome, email, messaggio)
- ✅ Timestamp del messaggio

### Email di Conferma all'Utente

- ✅ Conferma automatica di ricezione
- ✅ Messaggio di benvenuto personalizzato
- ✅ Link alle risorse del sito
- ✅ Branding coerente con il sito

### Validazioni e Sicurezza

- ✅ Validazione email lato client e server
- ✅ Campi obbligatori
- ✅ Gestione errori completa
- ✅ Loading states per UX migliore
- ✅ Rate limiting automatico di Resend

## 🎨 Personalizzazioni Email

Le email sono completamente personalizzabili nel file:
`apps/web/app/api/contact/route.ts`

### Template Email Notifica

- Header con gradiente brand
- Sezione dettagli contatto
- Footer con timestamp

### Template Email Conferma

- Messaggio di benvenuto personalizzato
- Call-to-action per esplorare il sito
- Tagline aziendale
- Design responsive

## 🚀 Deployment

Il sistema è pronto per il deployment su Vercel:

1. Configura le environment variables
2. Deploy il progetto
3. Testa il form in produzione

## 📊 Monitoraggio

Resend fornisce:

- Dashboard con statistiche invii
- Log degli errori
- Metriche di deliverability
- Webhook per eventi avanzati

## 🔧 Troubleshooting

### Email non arrivano

1. Controlla l'API key in `.env.local`
2. Verifica i log del server (`npm run dev`)
3. Controlla la dashboard Resend per errori
4. Verifica che il dominio sia configurato correttamente

### Errori di validazione

- Controlla che tutti i campi siano compilati
- Verifica il formato email
- Controlla la console del browser per errori

### Rate Limiting

Resend ha limiti gratuiti:

- 100 email/giorno (piano gratuito)
- 3,000 email/mese (piano gratuito)

Per volumi maggiori, considera l'upgrade al piano a pagamento.

## 📞 Supporto

Per problemi con Resend:

- [Documentazione ufficiale](https://resend.com/docs)
- [Support Resend](https://resend.com/support)

Per problemi con l'implementazione:

- Controlla i log del server
- Verifica la configurazione delle environment variables
- Testa l'endpoint API direttamente
