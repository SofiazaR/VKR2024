import View from '@/app/ui/favorite/create-form';
import Breadcrumbs from '@/app/ui/favorite/breadcrumbs';
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
          { label: 'Избранное', href: '/home/favorite' },
          {
            label: 'Изменить',
            href: '/home/favorite/view',
            active: true,
          },
        ]}
      />
      <View customers={customers} />
    </main>
  );
}