import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import PromptShine from '@/app/ui/template/prompt-input';
 
export const metadata: Metadata = {
  title: 'Создать по выбранному шаблону',
};
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Шаблоны', href: '/home/template' },
          {
            label: 'Shine',
            href: '/home/template/shine',
            active: true,
          },
        ]}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <PromptShine placeholder="Введите информацию по вашему проекту..." />
      </div>
    </main>
  );
}