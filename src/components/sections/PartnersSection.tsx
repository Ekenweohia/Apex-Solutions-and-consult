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
  { name: 'Google', logoUrl: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088003_1280.png' },
  { name: 'Microsoft', logoUrl: 'https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80658_1280.png' },
  { name: 'Honda', logoUrl: 'https://cdn.pixabay.com/photo/2016/08/15/18/18/honda-1596081_1280.png' },
  { name: 'Meta', logoUrl: 'https://cdn.pixabay.com/photo/2021/12/06/13/45/meta-6850393_1280.png' },
  { name: 'Netflix', logoUrl: 'https://cdn.pixabay.com/photo/2022/08/24/20/20/netflix-7408710_1280.png' },
  { name: 'Yahoo', logoUrl: 'https://cdn.pixabay.com/photo/2013/01/29/22/53/yahoo-76684_1280.png' },
  { name: 'PayPal', logoUrl: 'https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png' },
  { name: 'PixaBay', logoUrl: 'https://cdn.pixabay.com/photo/2015/03/05/22/52/logo-661013_1280.png' },
];

export default function PartnersSection() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section id="partners" className="py-12 sm:py-16 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
