
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center">
      <Image
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1920"
        alt="Woman in black top using Surface laptop"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
        data-ai-hint="woman coding"
        priority
      />
      <div className="relative z-10 p-4 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)] text-white">
          We build Digital products that power business
        </h1>
        <p className="mt-4 max-w-[700px] mx-auto text-lg text-gray-200 md:text-xl [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)]">
          Our goal is to develop innovative web and mobile applications that empower our clients with a distinct competitive advantage.
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="mouse">
          <div className="scroller"></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
