import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              WHO WE ARE
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold">WE BUILD WIREFRAME</h3>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold">WE BUILD UI/UX</h3>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="https://placehold.co/600x400.png"
              alt="Team working on code"
              width={600}
              height={400}
              className="rounded-lg shadow-lg col-span-2"
              data-ai-hint="code editor"
            />
             <Image 
              src="https://placehold.co/300x200.png"
              alt="Close up of code on a screen"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
              data-ai-hint="code screen"
            />
             <Image 
              src="https://placehold.co/300x200.png"
              alt="Team collaborating around a laptop"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
              data-ai-hint="collaboration meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
