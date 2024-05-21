import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex h-20 items-center justify-center rounded-md bg-orange-600 p-4 md:h-40">
  <div className="flex flex-col items-center space-y-1">
    <div className="w-12 h-12">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C11.45 2 11 2.45 11 3V4.07C8.05 4.56 6 7.03 6 10V16C6 17.1 6.9 18 8 18H9V19C9 20.66 10.34 22 12 22C13.66 22 15 20.66 15 19V18H16C17.1 18 18 17.1 18 16V10C18 7.03 15.95 4.56 13 4.07V3C13 2.45 12.55 2 12 2ZM10 19V18H14V19C14 19.55 13.55 20 13 20H11C10.45 20 10 19.55 10 19ZM8 16V10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10V16H8ZM9.5 11.5C9.78 11.5 10 11.72 10 12C10 12.28 9.78 12.5 9.5 12.5C9.22 12.5 9 12.28 9 12C9 11.72 9.22 11.5 9.5 11.5ZM14.5 11.5C14.78 11.5 15 11.72 15 12C15 12.28 14.78 12.5 14.5 12.5C14.22 12.5 14 12.28 14 12C14 11.72 14.22 11.5 14.5 11.5ZM13 8H11V9H13V8Z" fill="white"/>
      </svg>
    </div>
    <span className="text-white text-sm md:text-base font-bold">AIWebBuilder</span>
  </div>
</div>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
        action={async () => {
          'use server';
          await signOut();
        }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Выйти</div>
          </button>
        </form>
      </div>
    </div>
  );
}
