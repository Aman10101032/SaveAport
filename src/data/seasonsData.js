// src/data/seasonsData.js
import springImg from '../img/seasons/spring.jpg';
import summerImg from '../img/seasons/summer.jpg';
import autumnImg from '../img/seasons/autumn.jpg';
import winterImg from '../img/seasons/winter.jpg';

export const seasonsData = {
  "spring": {
    name: "Весна",
    months: [
      { en: "march", ru: "Март" },
      { en: "april", ru: "Апрель" }, 
      { en: "may", ru: "Май" }
    ],
    image: springImg,
    description: "Период цветения и активного роста яблонь",
    temperature: "8-18°C",
    precipitation: "120-180мм",
    growth: "Активный"
  },    
  "summer": {
    name: "Лето",
    months: [
      { en: "june", ru: "Июнь" },
      { en: "july", ru: "Июль" },
      { en: "august", ru: "Август" }
    ],
    image: summerImg,
    description: "Созревание плодов и формирование урожая",
    temperature: "20-30°C", 
    precipitation: "80-150мм",
    growth: "Созревание"
  },
  "autumn": {
    name: "Осень",
    months: [
      { en: "september", ru: "Сентябрь" },
      { en: "october", ru: "Октябрь" },
      { en: "november", ru: "Ноябрь" }
    ],
    image: autumnImg,
    description: "Сбор урожая и подготовка к зиме",
    temperature: "5-15°C",
    precipitation: "100-160мм",
    growth: "Сбор"
  },
  "winter": {
    name: "Зима", 
    months: [
      { en: "december", ru: "Декабрь" },
      { en: "january", ru: "Январь" },
      { en: "february", ru: "Февраль" }
    ],
    image: winterImg,
    description: "Период покоя и зимней вегетации",
    temperature: "-5-5°C",
    precipitation: "50-100мм", 
    growth: "Покой"
  }
};