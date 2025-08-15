'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail } from 'lucide-react';

const jobOpenings = [
    {
        title: 'Senior Frontend Developer',
        location: 'Tallinn, Estonia (Remote possible)',
        description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building the ‘client-side’ of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.',
    },
    {
        title: 'Lead Backend Engineer (Node.js)',
        location: 'Tallinn, Estonia',
        description: 'Seeking a skilled Backend Engineer with expertise in Node.js to lead our server-side development. The ideal candidate will have a strong background in building scalable, high-performance applications and managing a team of developers.',
    },
    {
        title: 'UX/UI Designer',
        location: 'Helsinki, Finland',
        description: 'Join our creative team as a UX/UI Designer. You will be responsible for creating amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts.',
    },
    {
        title: 'DevOps Engineer',
        location: 'Remote',
        description: 'We are hiring a DevOps Engineer to help us build functional systems that improve customer experience. DevOps Engineer responsibilities include deploying product updates, identifying production issues and implementing integrations that meet our customers\' needs.',
    }
];

export default function CareersPage() {
    const handleApplyClick = (jobTitle: string) => {
        window.location.href = `mailto:careers@apextech-solutions.com?subject=Application for ${encodeURIComponent(jobTitle)}`;
    }

  return (
    <div className="flex flex-col h-full">
        <div className="p-6">
            <h1 className="text-3xl font-headline font-bold">Careers</h1>
            <p className="text-muted-foreground mt-2">
                Join our team of innovators and builders. We're looking for passionate people to help us create the future of technology.
            </p>
        </div>
        <ScrollArea className="flex-grow">
            <div className="p-6 pt-0 space-y-6">
            {jobOpenings.map((job, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>{job.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{job.description}</p>
                    </CardContent>
                    <CardFooter>
                         <Button onClick={() => handleApplyClick(job.title)}>
                            <Mail className="mr-2 h-4 w-4" /> Apply Now
                        </Button>
                    </CardFooter>
                </Card>
            ))}
            {jobOpenings.length === 0 && (
                 <div className="text-center py-12">
                    <p className="text-muted-foreground">There are currently no open positions. Please check back later.</p>
                </div>
            )}
            </div>
        </ScrollArea>
         <div className="p-6 text-center text-sm text-muted-foreground">
            <p>Don't see a role that fits? We're always looking for talented people.</p>
            <a href="mailto:careers@apextech-solutions.com" className="text-primary hover:underline">
                Send us your resume
            </a>
        </div>
    </div>
  );
}
