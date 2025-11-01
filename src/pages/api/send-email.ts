import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Inicializa Resend con tu API key desde las variables de entorno
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // 1. Extrae los datos del formulario del body de la petición
    const body = await request.json();
    const { name, email, project_type, message } = body;

    // 2. Valida que los datos existan (opcional pero recomendado)
    if (!name || !email || !project_type || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 3. Envía el email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Email del remitente (usa tu dominio en producción)
      to: ['fernandodj2004@gmail.com'], // Tu email donde recibirás los mensajes
      replyTo: email, // El email del usuario que envió el formulario
      subject: `New Contact Form: ${project_type}`, // Asunto del email
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong style="color: #4F46E5;">Name:</strong> ${name}</p>
            <p><strong style="color: #4F46E5;">Email:</strong> ${email}</p>
            <p><strong style="color: #4F46E5;">Project Type:</strong> ${project_type}</p>
            <div style="margin-top: 15px; padding: 15px; background-color: #f3f4f6; border-radius: 8px;">
              <p style="margin: 0;"><strong style="color: #4F46E5;">Message:</strong></p>
              <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    // 4. Si hay un error al enviar, retorna error
    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: error.message }), 
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 5. Si todo está bien, retorna éxito
    return new Response(
      JSON.stringify({ success: true, data }), 
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    // 6. Manejo de errores generales
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
