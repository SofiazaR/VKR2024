'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CreateTemplateBusiness, CreateTemplateBlog } from '@/app/ui/template/button';
import { lusitana } from '@/app/ui/fonts';

export default function Template() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <main className="flex flex-col items-start md:h-screen"> 
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
    Выбор шаблона для генерации
      </h1>
      

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
              <Image
      src="/blog.png"
      alt="content"
      className="object-cover object-center h-full w-full"
      width={2115} 
      height={1266} 
    />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Блог</h2>
              <p className="text-base leading-relaxed mt-2">Это стильный и функциональный шаблон для создания красивого блога, идеально подходящий как для профессионалов, так и для любителей, желающих поделиться своим опытом и вдохновить других.
С помощью шаблона вы сможете легко создать привлекательный блог с адаптивным дизайном, разместить фото своих работ, поделиться знаниями и привлечь новых клиентов.</p>
              <CreateTemplateBlog />
            </div>

            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
              <Image
      src="/buisness.png"
      alt="content"
      className="object-cover object-center h-full w-full"
      width={2115} 
      height={1266} 
    />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Бизнес</h2>
              <p className="text-base leading-relaxed mt-2">Включает главные страницы (Главная, О нас, Услуги, Контакты), а также опциональные разделы (Блог, Галерея), меню для удобной навигации и привлекательный внешний вид.</p>
              <CreateTemplateBusiness />
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}