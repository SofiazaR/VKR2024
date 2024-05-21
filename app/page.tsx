import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-orange-600 p-4 md:h-52 md:justify-start md:items-end md:p-8">
        <div className="flex items-center space-x-4 mb-4 md:mb-6">
          <div className="w-16 h-16">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C11.45 2 11 2.45 11 3V4.07C8.05 4.56 6 7.03 6 10V16C6 17.1 6.9 18 8 18H9V19C9 20.66 10.34 22 12 22C13.66 22 15 20.66 15 19V18H16C17.1 18 18 17.1 18 16V10C18 7.03 15.95 4.56 13 4.07V3C13 2.45 12.55 2 12 2ZM10 19V18H14V19C14 19.55 13.55 20 13 20H11C10.45 20 10 19.55 10 19ZM8 16V10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10V16H8ZM9.5 11.5C9.78 11.5 10 11.72 10 12C10 12.28 9.78 12.5 9.5 12.5C9.22 12.5 9 12.28 9 12C9 11.72 9.22 11.5 9.5 11.5ZM14.5 11.5C14.78 11.5 15 11.72 15 12C15 12.28 14.78 12.5 14.5 12.5C14.22 12.5 14 12.28 14 12C14 11.72 14.22 11.5 14.5 11.5ZM13 8H11V9H13V8Z" fill="white"/>
            </svg>
          </div>
          <span className="text-white text-2xl md:text-4xl font-bold">AIWebBuilder</span>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Создавайте потрясающие веб-сайты с помощью искусственного интеллекта, бесплатно!</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base"
          >
            <span>Войти</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hello.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
