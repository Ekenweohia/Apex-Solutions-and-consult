import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'CEO, Innovate Co.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    quote: "Synergy Tech's cloud solutions transformed our operations. Their expertise and support are second to none. We've seen a 200% increase in efficiency.",
  },
  {
    name: 'Mark C.',
    title: 'CTO, Future Gadgets',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    quote: "The cybersecurity audit they performed was incredibly thorough. We feel much more secure thanks to their team. A truly professional and invaluable partner.",
  },
  {
    name: 'Emily R.',
    title: 'Head of Data, Analytics Corp',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman smiling',
    quote: "The insights we've gained from their data analytics platform are game-changing. Synergy Tech helped us unlock the true potential of our data.",
  },
  {
    name: 'David B.',
    title: 'Founder, SecureNet',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man professional',
    quote: "Working with Synergy was a breeze. They understood our vision and delivered a product that exceeded all expectations. Highly recommended!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Real stories from businesses we've helped empower.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-4">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="pt-6">
                      <blockquote className="text-lg italic text-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
