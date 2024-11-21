export const prerender = false;
import type { APIRoute } from 'astro';
import z from 'zod';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const PARSED_ERROR_MESSAGE = 'Please use valid form field values';
const RESEND_ERROR_MESSAGE = 'Something went wrong. Please try again.';

const bodySchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1)
});

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();
	const { name, email, message } = body;

	const parsed = bodySchema.safeParse({ name, email, message });

	if (parsed.error) {
		return new Response(
			JSON.stringify({
				message: PARSED_ERROR_MESSAGE,
				error: parsed.error
			}),
			{ status: 400 }
		);
	}

	const { error } = await resend.emails.send({
		from: 'Jamin Roberts <hello@outfoxweb.com>',
		to: 'hello@outfoxweb.com',
		subject: `New contact from ${name}`,
		html: `<p><strong>Message:</strong>
        </p> ${message}</p>
        <br>
        <p><strong>Email:</strong> ${email}</p>`,
		text: `Message: ${message} Email: ${email}`
	});

	if (error) {
		return new Response(
			JSON.stringify({
				message: RESEND_ERROR_MESSAGE,
				error: error
			}),
			{ status: 400 }
		);
	}

	return new Response(
		JSON.stringify({
			message: 'Successful submission'
		}),
		{ status: 200, statusText: 'OK' }
	);
};
