import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Code, Cpu, LineChart, Milestone, Smartphone, Building, HeartPulse, ShoppingCart, GraduationCap, LandPlot, Bot } from 'lucide-react';
import Image from 'next/image';
import PartnersSection from './PartnersSection';
import PermanentPartnersSection from './PermanentPartnersSection';

const services = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Enterprise Software Development',
    description: 'Our experienced technologists follow industry best practices and standardized development procedures to deliver reliable, high-performance enterprise software. We write clean, well-structured code that is easy to maintain, track, and scale, ensuring your solution meets expectations and supports long-term growth.',
    image: {
      src: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
      alt: "Enterprise Software Development",
      aiHint: "enterprise software"
    }
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App development',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
    image: {
        src: "https://cdn.pixabay.com/photo/2018/11/28/11/03/coffee-3843382_1280.jpg",
        alt: "Mobile App Development",
        aiHint: "mobile development"
    }
  },
  
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: 'Training',
    description: 'With extensive experience delivering projects for businesses, government organizations, and individuals, we offer holistic, interactive IT training and consultancy. Our programs equip teams and professionals with the skills and insights to optimize processes, improve efficiency, and achieve their goals.',
    image: {
        src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
        alt: "Tech Training",
        aiHint: "Tech Training"
    }
  },
  {
    icon: <Milestone className="h-10 w-10 text-primary" />,
    title: 'UX / UI Design',
    description: 'At Apex Solutions and Consult, we design with your target users in mind, crafting experiences that are both intuitive and engaging. Our approach ensures seamless functionality across all devices, delivering interfaces that are visually appealing, easy to navigate, and optimized for the best possible user experience.',
    image: {
        src: "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
        alt: "UX / UI Design",
        aiHint: "ui design"
    }
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'QA & Testing',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
    image: {
        src: "https://cdn.pixabay.com/photo/2022/10/04/21/25/xr-7499160_1280.jpg",
        alt: "QA & Testing",
        aiHint: "quality assurance"
    }
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'IT Consulting',
    description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
    image: {
        src: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
        alt: "IT Consulting",
        aiHint: "it consulting"
    }
  },
];

const technologies = [
    { name: 'React', description: 'Modern frontend library for UI development.' },
    { name: 'Next.js', description: 'The React framework for production.' },
    { name: 'Node.js', description: 'JavaScript runtime for backend services.' },
    { name: 'Python', description: 'Versatile language for AI, and web.' },
    { name: 'TypeScript', description: 'JavaScript with syntax for types.' },
    { name: 'PostgreSQL', description: 'A powerful, open source object-relational database system.' },
    { name: 'Docker', description: 'Containerization platform for building and running applications.' },
    { name: 'AWS', description: 'Comprehensive and broadly adopted cloud platform.' },
];

const industries = [
    { icon: <Building className="h-8 w-8 text-primary" />, name: 'FinTech', description: 'Secure and scalable financial solutions.' },
    { icon: <HeartPulse className="h-8 w-8 text-primary" />, name: 'Healthcare', description: 'HIPAA-compliant software for the medical field.' },
    { icon: <ShoppingCart className="h-8 w-8 text-primary" />, name: 'E-commerce', description: 'Engaging and high-conversion online stores.' },
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, name: 'EdTech', description: 'Innovative platforms for modern learning.' },
    { icon: <LandPlot className="h-8 w-8 text-primary" />, name: 'Real Estate', description: 'Solutions for property management and sales.' },
    { icon: <Bot className="h-8 w-8 text-primary" />, name: 'AI Solutions', description: 'Integrating AI to automate and innovate.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            WHAT WE OFFER
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            We have a team of experienced experts and developers who knows exactly what you need to transform your requirements into cutting edge business software. Our multi-platform solutions are targeted towards helping you optimize your business process. We build products on all mobile user platforms (Android, iOS, Windows), and our designs deliver high-end and cross-device usability. Looking for ways to optimize your business processes? Give us your business requirements, while we offer you the best-fit software solution.
          </p>
        </div>
        <Tabs defaultValue="service" className="mt-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto h-auto bg-muted dark:bg-zinc-800 rounded-lg p-1 shadow-inner">
                <TabsTrigger value="service" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">Service</TabsTrigger>
                <TabsTrigger value="technology" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">Technology</TabsTrigger>
                <TabsTrigger value="industry" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-lg">Industry</TabsTrigger>
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
                    <CardFooter>
                         <Image 
                            src={service.image.src}
                            alt={service.image.alt}
                            width={1280}
                            height={720}
                            className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                            data-ai-hint={service.image.aiHint}
                        />
                    </CardFooter>
                    </Card>
                ))}
                </div>
            </TabsContent>
            <TabsContent value="technology">
                <div className="py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {technologies.map((tech) => (
                            <Card key={tech.name} className="text-center">
                                <CardHeader>
                                    <CardTitle className="font-headline">{tech.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{tech.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="industry">
                <div className="py-12">
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {industries.map((industry) => (
                            <Card key={industry.name} className="flex flex-col items-center justify-start text-center p-6 h-full pt-6">
                                <div className="mb-4">{industry.icon}</div>
                                <h3 className="text-lg font-bold font-headline">{industry.name}</h3>
                                <p className="text-muted-foreground mt-2">{industry.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </TabsContent>
        </Tabs>

        <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-headline">Our mission</h3>
            <p className="mt-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
        </div>
        <PartnersSection />
        <PermanentPartnersSection />
      </div>
    </section>
  );
}
