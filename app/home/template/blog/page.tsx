
import Breadcrumbs from '@/app/ui/template/breadcrumbs';
import { Metadata } from 'next';
import PromptBlog from '@/app/ui/template/prompt-input';

 
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
            label: 'Блог',
            href: '/home/template/blog',
            active: true,
          },
        ]}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <PromptBlog placeholder="Введите информацию по вашему проекту..." />
      </div>
    </main>
  );
}