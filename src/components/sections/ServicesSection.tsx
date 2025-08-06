import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Cloud, ShieldCheck, BarChart3, Bot } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: 'Cloud Computing',
    description: 'Scalable and secure cloud infrastructure to power your applications and data with unparalleled efficiency and flexibility.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive cybersecurity solutions, from threat detection to incident response.',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: 'Data Analytics',
    description: 'Unlock the power of your data with advanced analytics and business intelligence to make informed decisions.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Core Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We provide a wide range of technology solutions to fit your business needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
            >
              <CardHeader className="items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
