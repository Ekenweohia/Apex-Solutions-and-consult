import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
        data-ai-hint="abstract technology"
        priority
      />
      <div className="relative z-10 p-4 max-w-4xl animate-fade-in-up">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          We build Digital products that power business
        </h1>
        <p className="mt-4 max-w-[700px] mx-auto text-lg text-gray-200 md:text-xl">
          Our aim is building innovate web and mobile application for our client to give them competitive advantage.
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
