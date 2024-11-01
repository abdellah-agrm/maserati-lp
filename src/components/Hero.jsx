import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className='container mx-auto min-h-[60vh] flex flex-col justify-end'>
      <h1 className='text-8xl max-md:text-6xl'>{t("hero-1")} <br className='max-md:hidden' /> {t("hero-2")}</h1>
      <button className='py-2 px-5 border border-white rounded-full bg-none hover:bg-white/15 w-max mt-10 cursor-pointer text-xl max-md:text-lg font-semibold'>Look</button>
    </div>
  )
}
