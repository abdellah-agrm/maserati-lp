import React, { useEffect, useState } from 'react'
import i18n from '../i18n';
import { maseratilogo } from '../assets/images'
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  const [isEng, setIsEng] = useState(true);
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  // Switching Languages :
  const switchLanguage = (lang) => {
    console.log(lang);
    setIsEng(!isEng);

    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className='flex flex-wrap justify-end gap-4 items-center p-2'>
      <div className='w-1/2 max-md:w-full flex justify-between'>
      <img src={maseratilogo} className='h-20 w-auto' alt='logo' />
      <button className='mx-8 font-semibold' onClick={() => switchLanguage(isEng ? "fr" : "en")}>{t(isEng ? "french" : "english")}</button>
      </div>
    </div>
  )
}
