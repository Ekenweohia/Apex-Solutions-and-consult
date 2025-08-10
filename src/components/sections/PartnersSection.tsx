'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

const partners = [
  { name: 'Google', logoUrl: 'https://cdn.pixabay.com/photo/2015/09/14/15/51/google-939112_1280.png' },
  { name: 'Microsoft', logoUrl: 'https://cdn.pixabay.com/photo/2021/09/26/13/16/microsoft-6657393_1280.png' },
  { name: 'Amazon', logoUrl: 'https://cdn.pixabay.com/photo/2021/08/13/11/17/amazon-6542735_1280.png' },
  { name: 'Meta', logoUrl: 'https://cdn.pixabay.com/photo/2021/10/29/16/11/meta-6752339_1280.png' },
  { name: 'Netflix', logoUrl: 'https://cdn.pixabay.com/photo/2021/08/25/19/22/netflix-6574345_1280.png' },
  { name: 'Spotify', logoUrl: 'https://cdn.pixabay.com/photo/2021/08/23/13/12/spotify-6567793_1280.png' },
  { name: 'Salesforce', logoUrl: 'https://cdn.pixabay.com/photo/2016/01/16/22/27/salesforce-1144212_1280.png' },
  { name: 'Slack', logoUrl: 'https://cdn.pixabay.com/photo/2017/01/18/16/22/slack-1990074_1280.png' },
];

export default function PartnersSection() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section id="partners" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Trusted by Companies Worldwide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We've helped build and scale solutions for some of the most innovative companies.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="p-4">
                    <div className="flex items-center justify-center p-6 bg-secondary rounded-lg h-28">
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={160}
                        height={70}
                        style={{ objectFit: 'contain' }}
                        className="grayscale hover:grayscale-0 transition-all"
                        data-ai-hint="company logo"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
