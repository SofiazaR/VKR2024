import { ArrowRightCircleIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateTemplateBusiness() {
  return (
    <Link
      href="/home/template/business"
     className="text-indigo-500 inline-flex items-center cursor-pointer mt-3">
      <span className="hidden md:block">Создать по шаблону</span>{' '}
      <ArrowRightCircleIcon className="h-5 md:ml-4" />
    </Link>
  );
}
export function CreateTemplateBlog() {
  return (
    <Link
      href="/home/template/blog"
     className="text-indigo-500 inline-flex items-center cursor-pointer mt-3">
      <span className="hidden md:block">Создать по шаблону</span>{' '}
      <ArrowRightCircleIcon className="h-5 md:ml-4" />
    </Link>
  );
}

