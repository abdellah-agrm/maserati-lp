import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "english": "English",
          "french": "French",

          // hero :
          "hero-1":"Experience the art",
          "hero-2":"of performance",
"discover": "Discover",
          // models :
          "detail-1":"A luxury sports sedan that combines elegance with thrilling performance. The Ghibli features a 3.0-liter twin-turbo V6 engine, offering exhilarating acceleration. Its stylish interior is designed for comfort and sophistication, making it perfect for both city driving and long journeys.",
          "detail-2":"The Levante is Maserati's first SUV, merging versatility with high-end luxury. With all-wheel drive and a powerful V6 engine, it delivers a smooth, responsive drive. Its spacious cabin boasts premium materials and cutting-edge technology, ensuring a superior driving experience.",
          "detail-3":"A flagship luxury sedan that embodies Italian craftsmanship and performance. The Quattroporte offers a choice of V6 and V8 engines, providing dynamic driving options. Its spacious interior features bespoke design elements, making it a perfect blend of comfort and style.",
          "detail-4":"The Alfieri is a stunning sports car that represents Maserati's bold future. With a lightweight chassis and a powerful engine lineup, it promises an exhilarating drive. Its sculpted design and luxurious interior highlight Maserati’s commitment to performance and elegance.",
          
        }
      },
      fr: {
        translation: {
          "english": "Anglais",
          "french": "Français",
          
          // hero :
          "hero-1":"Découvrez l'art",
          "hero-2":"de la performance",

          // models :
          "detail-1":"Une berline sportive de luxe qui allie l'élégance à des performances palpitantes. La Ghibli est équipée d'un moteur V6 biturbo de 3,0 litres qui offre une accélération exaltante. Son intérieur élégant est conçu pour le confort et la sophistication, ce qui la rend parfaite pour la conduite en ville et les longs trajets.",
          "detail-2":"Le Levante est le premier SUV de Maserati, alliant polyvalence et luxe haut de gamme.Doté d'une transmission intégrale et d'un puissant moteur V6, il offre une conduite souple et réactive.Son habitacle spacieux est doté de matériaux haut de gamme et d'une technologie de pointe, garantissant une expérience de conduite supérieure.",
          "detail-3":"Une berline de luxe qui incarne le savoir-faire italien et la performance. La Quattroporte propose un choix de moteurs V6 et V8, offrant des options de conduite dynamiques. Son intérieur spacieux présente des éléments de design sur mesure, ce qui en fait un mélange parfait de confort et de style.",
          "detail-4":"L'Alfieri est une étonnante voiture de sport qui représente l'avenir audacieux de Maserati. Avec un châssis léger et une gamme de moteurs puissants, elle promet une conduite exaltante.Son design sculpté et son intérieur luxueux soulignent l'engagement de Maserati en matière de performance et d'élégance.",
          
        }
      }
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes data by default
    }
  });

export default i18n;