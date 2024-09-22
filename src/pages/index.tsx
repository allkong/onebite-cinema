import { ReactNode } from 'react';
import SearchableLayout from '@/components/searchable-layout';

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>ONEBITE NEXT</h1>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
