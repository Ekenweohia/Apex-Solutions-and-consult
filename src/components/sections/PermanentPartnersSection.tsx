import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const permanentPartners = [
  { name: 'Google', logoUrl: 'https://cdn.pixabay.com/photo/2022/08/24/23/12/apple-7408883_1280.png' },
  { name: 'Microsoft', logoUrl: 'https://cdn.pixabay.com/photo/2017/02/15/00/48/logo-2067396_1280.png' },
  { name: 'Meta', logoUrl: 'https://cdn.pixabay.com/photo/2022/04/07/06/07/flower-7116878_1280.png' },
  { name: 'New Balance', logoUrl: 'https://cdn.pixabay.com/photo/2022/04/04/03/08/ng-7110292_1280.png' },
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
                    <Card className="flex items-center justify-center p-6 transition-transform duration-300 hover:scale-110 hover:shadow-lg border-0 shadow-none">
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
