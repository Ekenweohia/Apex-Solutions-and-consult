import { CodeIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <CodeIcon className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            This is copyright of TechSolute © {new Date().getFullYear()}.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
                <p className="font-semibold">Vincent Abodei</p>
                <p>Client Service Coordinator</p>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-left">
                <p className="font-semibold">Ebizimoh Abodei</p>
                <p>Client Service Coordinator</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
