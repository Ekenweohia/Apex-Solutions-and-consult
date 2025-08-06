'use server';

/**
 * @fileOverview Generates service descriptions using AI.
 *
 * - generateServiceDescription - A function that generates a service description.
 * - GenerateServiceDescriptionInput - The input type for the generateServiceDescription function.
 * - GenerateServiceDescriptionOutput - The return type for the generateServiceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceDescriptionInputSchema = z.object({
  serviceName: z.string().describe('The name of the service.'),
  serviceDetails: z
    .string()
    .describe('Detailed information about the service.'),
});
export type GenerateServiceDescriptionInput = z.infer<
  typeof GenerateServiceDescriptionInputSchema
>;

const GenerateServiceDescriptionOutputSchema = z.object({
  serviceDescription: z
    .string()
    .describe('A clear and concise description of the service.'),
});
export type GenerateServiceDescriptionOutput = z.infer<
  typeof GenerateServiceDescriptionOutputSchema
>;

export async function generateServiceDescription(
  input: GenerateServiceDescriptionInput
): Promise<GenerateServiceDescriptionOutput> {
  return generateServiceDescriptionFlow(input);
}

const generateServiceDescriptionPrompt = ai.definePrompt({
  name: 'generateServiceDescriptionPrompt',
  input: {schema: GenerateServiceDescriptionInputSchema},
  output: {schema: GenerateServiceDescriptionOutputSchema},
  prompt: `You are an expert marketing writer. Generate a clear and concise service description based on the service name and details provided.

Service Name: {{{serviceName}}}
Service Details: {{{serviceDetails}}}

Service Description:`,
});

const generateServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionFlow',
    inputSchema: GenerateServiceDescriptionInputSchema,
    outputSchema: GenerateServiceDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateServiceDescriptionPrompt(input);
    return output!;
  }
);
