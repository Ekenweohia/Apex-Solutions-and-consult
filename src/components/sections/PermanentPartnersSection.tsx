import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const permanentPartners = [
  { name: 'Google', logoUrl: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088003_1280.png' },
  { name: 'Microsoft', logoUrl: 'https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png' },
  { name: 'Meta', logoUrl: 'https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_1280.png' },
  { name: 'Innovate Inc.', logoUrl: 'https://placehold.co/160x70.png' },
];

export default function PermanentPartnersSection() {
  return (
    <section id="permanent-partners" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Our Strategic Alliances
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We collaborate with industry leaders to deliver cutting-edge solutions.
          </p>
        </div>
        <div className="mt-12">
          <TooltipProvider>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {permanentPartners.map((partner) => (
                <Tooltip key={partner.name}>
                  <TooltipTrigger asChild>
                    <Card className="flex items-center justify-center p-6 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                      <Image
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        width={160}
                        height={70}
                        style={{ objectFit: 'contain' }}
                        className="grayscale hover:grayscale-0 transition-all duration-300"
                        data-ai-hint="company logo"
                      />
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{partner.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
