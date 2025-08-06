'use server';

import {
  generateServiceDescription,
  type GenerateServiceDescriptionInput,
} from '@/ai/flows/generate-service-description';
import { z } from 'zod';

const GenerateServiceDescriptionActionSchema = z.object({
  serviceName: z.string().min(3, 'Service name must be at least 3 characters.'),
  serviceDetails: z.string().min(10, 'Service details must be at least 10 characters.'),
});

export async function generateDescriptionAction(
  prevState: { description: string; error: string },
  formData: FormData
) {
  try {
    const validatedData = GenerateServiceDescriptionActionSchema.parse({
      serviceName: formData.get('serviceName'),
      serviceDetails: formData.get('serviceDetails'),
    });

    const result = await generateServiceDescription(
      validatedData as GenerateServiceDescriptionInput
    );
    return { description: result.serviceDescription, error: '' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        description: '',
        error: error.errors.map(e => e.message).join(', '),
      };
    }
    console.error(error);
    return {
      description: '',
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
