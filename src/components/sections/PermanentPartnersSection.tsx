import Image from 'next/image';

export default function PermanentPartnersSection() {
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
        <div className="mt-12 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Strategic Alliance"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="collaboration handshake"
          />
        </div>
      </div>
    </section>
  );
}
