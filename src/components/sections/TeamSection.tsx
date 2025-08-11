import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    avatarUrl: 'https://images.unsplash.com/photo-1621972659738-598cd8f7c37c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'man portrait',
  },
  {
    name: 'Samantha Lee',
    role: 'Chief Technology Officer',
    avatarUrl: 'https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007_1280.jpg',
    aiHint: 'woman portrait',
  },
  {
    name: 'David Chen',
    role: 'Lead Software Engineer',
    avatarUrl: 'https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'man software engineer',
  },
  {
    name: 'Maria Garcia',
    role: 'Head of UX/UI Design',
    avatarUrl: 'https://images.unsplash.com/photo-1603480434617-8ffac54b476f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'woman designer',
  },
  {
    name: 'James Brown',
    role: 'Senior Project Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1539677612615-3b97a2becb09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'man project manager',
  },
  {
    name: 'Emily White',
    role: 'Marketing Director',
    avatarUrl: 'https://images.unsplash.com/photo-1649735623767-0171afa09536?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aiHint: 'woman marketing',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Leadership
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            The driving force behind our innovation and success.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={member.avatarUrl}
                  alt={`Portrait of ${member.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={member.aiHint}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
