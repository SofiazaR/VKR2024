
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Search from '@/app/ui/prompt-input';
import Output from '@/app/ui/preview';
 
export const metadata: Metadata = {
  title: 'Generate',
};
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      Generate
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Search placeholder="Что вы хотите сгенерировать..." />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Output placeholder="---" />
      </div>
    </main>
  );
}