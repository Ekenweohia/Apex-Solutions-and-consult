import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, School, Briefcase } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="sticky top-0 flex h-screen items-center justify-center">
              <Image
                  src="/logo.png"
                  alt="Apex Solution and Consult Logo"
                  width={1000}
                  height={1000}
                  className="opacity-50 logo-spin"
              />
          </div>
      </div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              WHO WE ARE
            </h2>
            <p className="mt-4 text-muted-foreground">
            Apex Solution and Consult is an IT consulting business geared towards growing commercial enterprise. 
            We are specialized in promoting all kinds of businesses. From our consultative services, mobile app/ software development, 
            we help to remunerate your business career. 
            Our ux/UI designs are friendly thereby causing ease of usage for our software. 
            We create awareness for business enterprises through our social media platforms.  
            Our educational services help train business teams with knowledge on how to grow small scale businesses.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold">WE BUILD WIREFRAMES</h3>
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
                    <h3 className="font-bold">WE BUILD PWA</h3>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <School className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold">WE PROVIDE TRAINING</h3>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold">GENERAL IT CONSULTANCY</h3>
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
              src="https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg"
              alt="Team working on code"
              width={600}
              height={400}
              className="rounded-lg shadow-lg col-span-2"
              data-ai-hint="planning project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
