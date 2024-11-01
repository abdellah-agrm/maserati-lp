import React from 'react'
import { useTranslation } from 'react-i18next';
import { maseratipic1, maseratipic4, maseratipic5, maseratipic7 } from '../assets/images'

export default function Models() {
  const { t } = useTranslation();
  const isEven = (num) => num % 2 === 0;
  const data = [
    {
      name: "Maserati Ghibli",
      img: maseratipic1,
      details: "detail-1"
    },
    {
      name: "Maserati Levante",
      img: maseratipic5,
      details: "detail-2"
    },
    {
      name: "Maserati Quattroporte",
      img: maseratipic7,
      details: "detail-3"
    },
    {
      name: "Maserati Alfieri",
      img: maseratipic4,
      details: "detail-4"
    }
  ];

  return (
    <section className='min-h-screen'>
      {
        data.map((item, index) => (
          <div key={index} className='flex flex-row max-md:flex-col h-[550px] max-md:h-auto'>
            <div className={`w-1/2 max-md:w-full max-md:order-2 ${isEven(index) ? "order-1" : "order-2"}`}>
              <img src={item.img} className='w-full h-full object-cover object-center' alt="maserati" />
            </div>

            <div className={`flex flex-col justify-center gap-4 px-20 py-8 max-md:p-10 w-1/2 max-md:w-full max-md:order-1 bg-black ${isEven(index) ? "order-2" : "order-1"}`}>
              <h2 className='text-5xl max-md:text-4xl font-semibold'>{item.name}</h2>
              <p className='text-2xl max-md:text-lg'>{t(item.details)}</p>
              <button className='py-2 px-5 border border-white rounded-full bg-none hover:bg-white/15 w-max mt-3 cursor-pointer text-xl max-md:text-lg font-semibold'>Look</button>
            </div>
          </div>
        ))
      }
    </section>
  )
}
