import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Code, Cpu, LineChart, Milestone, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Enterprise Software Development',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App development',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'IT Consulting',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
  },
    {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Dedicated Development Team',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
  },
  {
    icon: <Milestone className="h-10 w-10 text-primary" />,
    title: 'UX / UI Design',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'QA & Testing',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
  },
];

const PlaceholderContent = ({title}: {title: string}) => (
    <div className="text-center text-muted-foreground py-16">
        <p>Content for {title} coming soon.</p>
    </div>
)


export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            WHAT WE OFFER
          </h2>
        </div>
        <Tabs defaultValue="service" className="mt-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
                <TabsTrigger value="service">service</TabsTrigger>
                <TabsTrigger value="technology">technology</TabsTrigger>
                <TabsTrigger value="industry">industry</TabsTrigger>
            </TabsList>
            <TabsContent value="service">
                <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Card
                    key={index}
                    className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
                    >
                    <CardHeader className="items-center text-center">
                        <div className="mb-4">{service.icon}</div>
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                        <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </TabsContent>
            <TabsContent value="technology"><PlaceholderContent title="Technology" /></TabsContent>
            <TabsContent value="industry"><PlaceholderContent title="Industry" /></TabsContent>
        </Tabs>

        <div className="mt-24 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-headline">Our mission</h3>
            <p className="mt-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
        </div>
      </div>
    </section>
  );
}
