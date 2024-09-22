import Link from 'next/link';
import { ReactNode } from 'react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className='max-w-[800px] px-5 mx-auto'>
      <header className='py-6'>
        <Link href={'/'}>
          <p className='text-xl font-bold text-red-600'>ONEBITE CINEMA</p>
        </Link>
      </header>
      {children}
    </div>
  );
}
