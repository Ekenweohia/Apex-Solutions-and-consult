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
  { name: 'Partner 1', logoUrl: 'https://placehold.co/160x70.png' },
  { name: 'Partner 2', logoUrl: 'https://placehold.co/160x70.png' },
  { name: 'Partner 3', logoUrl: 'https://placehold.co/160x70.png' },
  { name: 'Partner 4', logoUrl: 'https://placehold.co/160x70.png' },
  { name: 'Partner 5', logoUrl: 'https://placehold.co/160x70.png' },
  { name: 'Partner 6', logoUrl: 'https://placehold.co/160x70.png' },
  { name: 'Partner 7', logoUrl: 'https://placehold.co/160x70.png' },
  { name: 'Partner 8', logoUrl: 'https://placehold.co/160x70.png' },
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
