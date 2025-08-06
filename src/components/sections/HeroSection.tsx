import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
        data-ai-hint="technology abstract"
        priority
      />
      <div className="relative z-10 p-4 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Driving Innovation with Synergy Tech Solutions
        </h1>
        <p className="mt-4 max-w-[700px] mx-auto text-lg text-gray-200 md:text-xl">
          We architect and engineer scalable, secure, and cutting-edge software solutions to propel your business forward.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link href="#services">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
