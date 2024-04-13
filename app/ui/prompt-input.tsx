'use client';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from 'react';

// Access your API key (see "Set up your API key" above)


export default function Prompt({ placeholder }: { placeholder: string }) {
  
  const genAI = new GoogleGenerativeAI("AIzaSyBEN1pF8pt94fSkVyY1Ug7XC_rGPRNM2fU");
  const [promptText, setPromptText] = useState<string>(''); // Состояние для текста в основной textarea
  const [previewText, setPreviewText] = useState<string>(''); // Состояние для текста в textarea с id="htmlInput"
  const [isHtmlInputVisible, setIsHtmlInputVisible] = useState<boolean>(true); // Состояние для отображения/скрытия textarea с id="htmlInput"

  function run(prompt: string) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    model.generateContent(prompt).then(result => {
      const response = result.response;
      const htmlCode = response.text().replace(/^```html\n/, '').replace(/```$/, '');
      setPreviewText(htmlCode); // Обновляем состояние для textarea с id="htmlInput"
      updateLivePreview(htmlCode); // Обновляем содержимое iframe
    });
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
        className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        rows={1}
        value={promptText}
        onChange={(e) => setPromptText(e.target.value)}
      ></textarea>
    </div>
  <div className="basis-1/4">
  <button
  className="min-height:60px block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  onClick={() => run("Напиши сайт на русском языке используя html код и tilwindcss сайт должен содержать хидер и футор адаптируй сайт соблюдай эвристики нильсена " + promptText)}
>
  Сгенерировать
</button>
</div>
<div className="basis-1/40">
<button
            className="min-height:60px block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onClick={toggleHtmlInputVisibility}
            
          >
            {isHtmlInputVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            )}
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
