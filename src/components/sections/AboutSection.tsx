'use client';

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, School, Briefcase } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const fullText = `Apex Solutions and Consult is a forward-thinking IT consulting firm dedicated to empowering and accelerating the growth of commercial enterprises. We partner with businesses of all sizes to deliver innovative, technology-driven solutions that enhance efficiency, strengthen online presence, and drive sustainable success.

Our expertise spans a wide range of services, including IT consulting, mobile and web application development, enterprise software solutions, UI/UX design, and comprehensive QA & testing. We pride ourselves on creating intuitive, user-friendly interfaces that make our software seamless to navigate and highly effective for end users.

Beyond technology development, we leverage social media strategies to boost brand visibility and create meaningful connections between businesses and their target audiences. Through our educational and training programs, we equip business teams—particularly in the small-scale sector—with practical skills and insights to fuel growth and competitiveness in today’s digital marketplace.

At Apex Solutions and Consult, we don’t just provide services; we build partnerships that help transform visions into measurable results.`;

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortText = fullText.split('\n\n')[0];

  return (
    <section id="about" className="relative py-12 sm:py-16">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              WHO WE ARE
            </h2>
            <p className="mt-4 text-muted-foreground whitespace-pre-line">
              {isExpanded ? fullText : shortText}
            </p>
            <Button
              variant="link"
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-0"
            >
              {isExpanded ? 'Read Less' : 'Read More...'}
            </Button>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
