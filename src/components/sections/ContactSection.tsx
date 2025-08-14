
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  service: z.string().min(1, { message: 'Please choose a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      service: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const mailtoLink = `mailto:info@apextech-solutions.com?subject=New Quote Request: ${encodeURIComponent(values.service)}&body=${encodeURIComponent(
      `Full Name: ${values.fullName}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    )}`;

    window.open(mailtoLink, '_blank');

    toast({
      title: 'Quote Request Ready!',
      description: "Your email client has been opened to send the request.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-8 sm:py-12 bg-card">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ARE YOU READY TO SAFELY IMPLEMENT YOUR PROJECT?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Fill out the contact form and we'll get back to you immediately.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start md:justify-center">
            <Card>
            <CardContent className="pt-6">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Choose a service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="enterprise-software">Enterprise Software Development</SelectItem>
                                    <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                                    <SelectItem value="it-consulting">IT Consulting</SelectItem>
                                    <SelectItem value="dedicated-team">Dedicated Development Team</SelectItem>
                                    <SelectItem value="ux-ui-design">UX / UI Design</SelectItem>
                                    <SelectItem value="qa-testing">QA & Testing</SelectItem>
                                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                                    <SelectItem value="computer-networking">Computer Networking</SelectItem>
                                    <SelectItem value="cloud-based-solutions">CLOUD-BASED SOLUTIONS</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Send us a message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tell us about your project..." {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Preparing...' : 'GET A QUOTE'}
                        <Send className="ml-2 h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ShieldCheck className="h-5 w-5 text-primary"/>
                            <span>We guarantee 100% confidentiality</span>
                        </div>
                    </div>
                </form>
                </Form>
            </CardContent>
            </Card>
            <div className="space-y-8 flex flex-col items-center text-center">
                <div>
                    <h3 className="text-xl font-bold font-headline mb-4">Contact Information</h3>
                    <div className="space-y-4 text-muted-foreground flex flex-col items-center">
                        <a href="tel:+37253912814" className="flex items-center gap-4 hover:text-primary transition-colors">
                            <Phone className="h-5 w-5 text-primary" />
                            <span>+372 (0) 53912814</span>
                        </a>
                        <a href="tel:+358466596817" className="flex items-center gap-4 hover:text-primary transition-colors">
                            <Phone className="h-5 w-5 text-primary" />
                            <span>+358 (0) 466596817</span>
                        </a>
                         <a href="mailto:info@apextech-solutions.com" className="flex items-center gap-4 hover:text-primary transition-colors">
                            <Mail className="h-5 w-5 text-primary" />
                            <span>info@apextech-solutions.com</span>
                        </a>
                        <a href="https://www.google.com/maps/search/?api=1&query=Aiandi+11%2F3,+12915+Tallinn,+Estonia" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-primary transition-colors">
                            <MapPin className="h-5 w-5 text-primary mt-1" />
                            <span>Aiandi 11/3, Suit 1, 12915 Tallinn, Estonia</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
