
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <button className="flex items-center gap-5 self-start rounded-lg  px-6 py-3  text-gray-900 transition-colors  md:text-base block w-full h-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> Сайт агенства недвижимости "Новостройка". </button>
      </div>
    </main>
  );
}