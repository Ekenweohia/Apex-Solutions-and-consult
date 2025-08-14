'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="/logo.png" alt="Apex Solutions and Consult Logo" width={36} height={36} className="hidden md:block logo-spin dark:invert-0 invert" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            This is copyright of Apex Solutions and Consult © {year}.
          </p>
        </div>
      </div>
    </footer>
  );
}
