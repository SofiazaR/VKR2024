
import Breadcrumbs from '@/app/ui/template/breadcrumbs';
import { Metadata } from 'next';
import PromptBase from '@/app/ui/prompt-input';

 
export const metadata: Metadata = {
  title: 'Создать по выбранному шаблону',
};
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Шаблоны', href: '/home/template' },
          {
            label: 'Бизнес',
            href: '/home/template/business',
            active: true,
          },
        ]}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <PromptBase placeholder="Введите информацию по вашему проекту..." />
      </div>
    </main>
  );
}