
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Prompt from '@/app/ui/prompt-input';
 
export const metadata: Metadata = {
  title: 'Generate',
};
export default async function Page() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      Сгенерировать
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Prompt placeholder="Что вы хотите сгенерировать..." />
      </div>
    </main>
  );
}
