'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CreateTemplateBase, CreateTemplateBlog } from '@/app/ui/template/button';

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
              <img alt="content" className="object-cover object-center h-full w-full" src="https://sun9-53.userapi.com/impg/331JT3SjcnBaPp-4_gvDRVSFUkIvCooQqpabOQ/aa-Eo2sLst4.jpg?size=2115x1266&quality=95&sign=8b462a66d800d110c38d844ae7302da5&type=album" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Блог</h2>
              <p className="text-base leading-relaxed mt-2">Это стильный и функциональный шаблон для создания красивого блога, идеально подходящий как для профессионалов, так и для любителей, желающих поделиться своим опытом и вдохновить других.
С помощью шаблона вы сможете легко создать привлекательный блог с адаптивным дизайном, разместить фото своих работ, поделиться знаниями и привлечь новых клиентов.</p>
              <CreateTemplateBlog />
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}