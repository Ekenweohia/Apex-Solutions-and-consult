'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateDescriptionAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const initialState = {
  description: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" /> Generate Description
        </>
      )}
    </Button>
  );
}

export default function AIGenerationSection() {
  const [state, formAction] = useFormState(generateDescriptionAction, initialState);

  return (
    <section id="ai-generator" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            AI-Powered Content
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Use our generative AI to craft the perfect service description.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Service Details</CardTitle>
              <CardDescription>
                Provide some information about the service, and our AI will do the rest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div>
                  <Label htmlFor="serviceName">Service Name</Label>
                  <Input
                    id="serviceName"
                    name="serviceName"
                    placeholder="e.g., Enterprise SEO Audit"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="serviceDetails">Service Details</Label>
                  <Textarea
                    id="serviceDetails"
                    name="serviceDetails"
                    placeholder="Describe the key features, benefits, and target audience of the service..."
                    required
                    rows={5}
                  />
                </div>
                <SubmitButton />
                {state?.error && (
                  <p className="text-sm font-medium text-destructive">{state.error}</p>
                )}
              </form>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Bot /> Generated Description
              </CardTitle>
              <CardDescription>
                The AI-generated content will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="prose prose-sm max-w-none w-full h-full rounded-md border bg-muted/50 p-4 min-h-[150px]">
                {state?.description || (
                  <span className="text-muted-foreground">
                    Waiting for input...
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
