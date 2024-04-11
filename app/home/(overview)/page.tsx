
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Prompt from '@/app/ui/prompt-input';
import Output from '@/app/ui/preview';
import Input from '@/app/ui/code-view';
 
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
      <Prompt placeholder="Что вы хотите сгенерировать..." />
      </div>
      <div className="flex flex-row">
      <div className="basis-1/2">
      <Input placeholder="---" />
      </div>
      <div className="basis-1"></div>
      <div className="basis-1/2">
      <Output  />
      </div>
      </div>
    </main>
  );
}