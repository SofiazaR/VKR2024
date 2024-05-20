import { ArrowRightCircleIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';

export function CreateTemplateBase() {
  return (
    <Link
      href="/home/template/base"
     className="text-indigo-500 inline-flex items-center cursor-pointer mt-3">
      <span className="hidden md:block">Создать по шаблону</span>{' '}
      <ArrowRightCircleIcon className="h-5 md:ml-4" />
    </Link>
  );
}
export function CreateTemplateShine() {
  return (
    <Link
      href="/home/template/shine"
     className="text-indigo-500 inline-flex items-center cursor-pointer mt-3">
      <span className="hidden md:block">Создать по шаблону</span>{' '}
      <ArrowRightCircleIcon className="h-5 md:ml-4" />
    </Link>
  );
}

