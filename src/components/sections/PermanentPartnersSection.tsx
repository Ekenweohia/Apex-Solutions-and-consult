'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

const permanentPartners = [
  { name: 'Partner 1', logoUrl: '/partner1.png' },
  // Add more permanent partners here
  // { name: 'Partner 2', logoUrl: '/partner2.png' },
  // { name: 'Partner 3', logoUrl: '/partner3.png' },
];

export default function PermanentPartnersSection() {
  const plugin = React.useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  return (
    <section id="permanent-partners" className="py-8 sm:py-12">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Strategic Alliances
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We collaborate with industry leaders to deliver cutting-edge solutions.
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
              {permanentPartners.map((partner, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-4 flex items-center justify-center h-28">
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={160}
                      height={70}
                      style={{ objectFit: 'contain' }}
                      className="transition-all"
                      data-ai-hint="company logo"
                    />
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
