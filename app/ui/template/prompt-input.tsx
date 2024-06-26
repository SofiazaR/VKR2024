'use client';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useState, } from 'react';



export default function Prompt({ placeholder }: { placeholder: string }) {
  
  const genAI = new GoogleGenerativeAI("AIzaSyBEN1pF8pt94fSkVyY1Ug7XC_rGPRNM2fU");
  const [promptText, setPromptText] = useState<string>(''); // Состояние для текста в основной textarea
  const [previewText, setPreviewText] = useState<string>(''); // Состояние для текста в textarea с id="htmlInput"
  const [isHtmlInputVisible, setIsHtmlInputVisible] = useState<boolean>(true); // Состояние для отображения/скрытия textarea с id="htmlInput"

  function run(prompt: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    model.generateContent(prompt).then(result => {
      const response = result.response;
      console.log(response.text());
      const htmlCode = extractHtmlCode(response.text());
      setPreviewText(htmlCode); // Обновляем состояние для textarea с id="htmlInput"
      updateLivePreview(htmlCode); // Обновляем содержимое iframe
    });
  }
  function extractHtmlCode(inputText: string): string {
    const regex = /```html\n([\s\S]+?)\n```/; // Регулярное выражение для поиска текста между ```html и ```
    const match = inputText.match(regex);
    return match ? match[1] : ''; // Возвращает найденный HTML-код или пустую строку, если ничего не найдено
  }
  
  // Извлечение HTML-кода из promptText
  const extractedHtmlCode = extractHtmlCode(promptText);
  
  // Возвращаемые значения изменены на "Сгенерировать" и "Ошибка: htmlCode пустой"
  
  function updateLivePreviewInNewWindow(htmlCode) {
    // Проверяем, что htmlCode не пустой
    if (htmlCode.trim() !== '') {
      // Открываем новое окно
      const newWindow = window.open();
      
      // Пишем содержимое htmlCode в новое окно
      newWindow.document.open();
      newWindow.document.write(htmlCode);
      newWindow.document.close();
    } else {
      console.error('Ошибка: htmlCode пустой');
    }
  }
  

  function updateLivePreview(htmlCode: string) {
    const iframe = document.getElementById('preview') as HTMLIFrameElement;
    iframe.srcdoc = htmlCode;
  }

  function toggleHtmlInputVisibility() {
    setIsHtmlInputVisible(!isHtmlInputVisible);
  }

  return (
    <div className="col-span-full">
      <label htmlFor="search" className="sr-only">
        Prompt
      </label>
      
      <div className="mt-2">
      <div className="pb-1">
      <div className="flex flex-row flex-nowrap gap-4">
  <div className="basis-4/5">
  <textarea
  className="block w-full h-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  placeholder={placeholder}
  value={promptText}
  onChange={(e) => setPromptText(e.target.value)}
></textarea>

    </div>
  <div className="basis-1">
  <button
  className="flex items-center gap-5 self-start rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base"
  onClick={() => run("Создай сайт на русском языке с использованием HTML и tilwindcss. Сайт должен содержать следующие элементы:Хедер с логотипом и навигацией.Футер с контактной информацией и ссылками на социальные сети. Основной контент, включающий текстовую информацию и изображения. Страница должна быть адаптивной и хорошо выглядеть как на десктопе, так и на мобильных устройствах. Убедитесь, что сайт соответствует принципам юзабилити Нильсена." + promptText)}
>
  Сгенерировать
</button>
</div>
<div className="basis-1">
<button
  className="flex items-center justify-center gap-2 self-start rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base whitespace-nowrap"
  onClick={toggleHtmlInputVisibility}
>
  <p>{isHtmlInputVisible ? "Скрыть код" : "Показать код"}</p>
</button>



          </div>
          <div className="basis-1">
          <button className="flex items-center gap-5 self-start rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base"
 onClick={() => updateLivePreviewInNewWindow(previewText.replace(/^```html\n/, '').replace(/```$/, ''))}>Открыть</button>
         </div>
          
         <div className="basis-1">
          <button
  className="flex items-center justify-center gap-2 self-start rounded-lg bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-400 md:text-base whitespace-nowrap"
>
<BookmarkIcon className="w-6" />
</button>
          </div>
          </div>  

          
      </div>
      <div>
      <div className={`flex-basis: auto ${isHtmlInputVisible ? '' : 'hidden'}`}>
            <textarea
              className="block w-full h-screen rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="htmlInput"
              value={previewText.replace(/^```html\n/, '').replace(/```$/, '')} // Убираем ```html в начале и ``` в конце
              onChange={(e) => {
                setPreviewText(e.target.value);
                updateLivePreview(e.target.value); // Обновляем содержимое iframe при изменении текста в textarea
              }}
              style={{ display: isHtmlInputVisible ? 'block' : 'none' }} // Добавляем стиль для отображения/скрытия textarea
      />
      </div>
      <div className="basis-1"> </div>
      <div className={`basis-1/2 ${isHtmlInputVisible ? 'hidden' : ''}`}>
            <iframe
              id='preview'
              sandbox="allow-scripts"
              className={`block w-full h-screen rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            />
          </div>
    </div>
      </div>
    </div>
     
  );
}
