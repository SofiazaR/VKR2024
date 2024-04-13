import Form from '@/app/ui/prompts/create-form';
import Breadcrumbs from '@/app/ui/prompts/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Запросы',
};
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Запросы', href: '/home/prompts' },
          {
            label: 'Создать запрос',
            href: '/home/prompts/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}