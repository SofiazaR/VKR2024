
import { lusitana } from '@/app/ui/fonts';

 
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Избранное',
};

export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      Избранное
      </h1>
      <div className=" sm:grid-cols-2 lg:grid-cols-4">
      <p>На данный момент ничего не добавленно</p>
      </div>
    </main>
  );
}