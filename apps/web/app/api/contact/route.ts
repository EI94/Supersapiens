import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    // Validazione dei dati
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    // Invio email a te
    const { data, error } = await resend.emails.send({
      from: 'Supersapiens Contact Form <noreply@supersapiens.ai>',
      to: ['pierpaolo.laurito@gmail.com'],
      subject: `Nuovo contatto da ${name} - Supersapiens`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0c7ff2 0%, #3d98f4 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
              🚀 Nuovo Contatto da Supersapiens
            </h1>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #111418; margin: 0 0 20px 0; font-size: 18px;">Dettagli del Contatto:</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #60758a;">Nome:</strong>
              <span style="color: #111418; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #60758a;">Email:</strong>
              <span style="color: #111418; margin-left: 10px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #60758a;">Messaggio:</strong>
              <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 8px; border-left: 4px solid #0c7ff2;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #111418; border-radius: 8px;">
            <p style="color: #60758a; margin: 0; font-size: 14px;">
              Questo messaggio è stato inviato dal form di contatto di Supersapiens
            </p>
            <p style="color: #60758a; margin: 5px 0 0 0; font-size: 12px;">
              Data: ${new Date().toLocaleString('it-IT')}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Errore Resend:', error);
      return NextResponse.json(
        { error: 'Errore nell\'invio dell\'email' },
        { status: 500 }
      );
    }

    // Email di conferma all'utente
    await resend.emails.send({
      from: 'Supersapiens Team <noreply@supersapiens.ai>',
      to: [email],
      subject: 'Grazie per averci contattato - Supersapiens',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0c7ff2 0%, #3d98f4 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              Grazie ${name}! 🎉
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
              Il tuo messaggio è stato ricevuto
            </p>
          </div>
          
          <div style="padding: 25px; text-align: center;">
            <h2 style="color: #111418; margin: 0 0 20px 0; font-size: 20px;">
              Il tuo viaggio AI inizia ora! 🚀
            </h2>
            
            <p style="color: #60758a; line-height: 1.6; margin-bottom: 25px;">
              Abbiamo ricevuto il tuo messaggio e il nostro team di esperti AI lo esaminerà attentamente. 
              Ti risponderemo entro 24 ore con informazioni personalizzate su come possiamo aiutarti 
              a trasformare il tuo business con l'intelligenza artificiale.
            </p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #0c7ff2;">
              <h3 style="color: #111418; margin: 0 0 10px 0; font-size: 16px;">Nel frattempo:</h3>
              <ul style="color: #60758a; text-align: left; margin: 0; padding-left: 20px;">
                <li>Esplora i nostri <a href="https://supersapiens.ai/case-studies" style="color: #0c7ff2;">case studies</a></li>
                <li>Scopri il nostro <a href="https://supersapiens.ai/crew" style="color: #0c7ff2;">team di esperti</a></li>
                <li>Leggi i nostri <a href="https://supersapiens.ai/signals" style="color: #0c7ff2;">insights AI</a></li>
              </ul>
            </div>
            
            <p style="color: #111418; font-weight: 500; margin: 25px 0;">
              "Generative AI Gets the Hype — You Get the Cape" 🦸‍♂️
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #111418; border-radius: 8px;">
            <p style="color: #60758a; margin: 0; font-size: 14px;">
              Team Supersapiens - I tuoi partner per il successo AI
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email inviata con successo!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Errore API:', error);
    return NextResponse.json(
      { error: 'Errore interno del server' },
      { status: 500 }
    );
  }
} 