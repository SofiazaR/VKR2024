'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CreateTemplateBase, CreateTemplateShine } from '@/app/ui/template/button';

export default function Template() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <main className="flex flex-col items-start md:h-screen"> 
      <h1 className="p-4 text-2xl font-bold">Выбор шаблона для генерации</h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://tailwindtemplates.co/_next/image?url=https%3A%2F%2Fapi.tailwindtemplates.co%2Fpublic%2Ffile%2Fshine-tailwind.jpg&w=2048&q=100"/>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shine</h2>
              <p className="text-base leading-relaxed mt-2">Шаблон специально разработан для бизнес-сайтов, стартапов, SaaS и веб-приложений. Благодаря всем необходимым элементам и разделам этот одностраничный шаблон поможет вам в создании вашего проекта.</p>
              <CreateTemplateShine />
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://tailwindtemplates.co/_next/image?url=https%3A%2F%2Fapi.tailwindtemplates.co%2Fpublic%2Ffile%2Fbase-tailwind-css.jpeg&w=2048&q=100"/>
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Base</h2>
              <p className="text-base leading-relaxed mt-2">Если вам нужен отличный стартовый шаблон для бизнес-сайтов, Base станет идеальным выбором для вас!</p>
              <CreateTemplateBase />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}