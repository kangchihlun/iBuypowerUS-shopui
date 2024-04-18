import { useServer } from 'next/server';

export async function submitForm(formData) {
  // Your server-side logic here (e.g., database interaction)
  const response = await fetch('/api/submit-data', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }

  return { message: 'Form submitted successfully!' };
}