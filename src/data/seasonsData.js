// src/data/seasonsData.js
import springImg from '../img/seasons/spring.jpg';
import summerImg from '../img/seasons/summer.jpg';
import autumnImg from '../img/seasons/autumn.jpg';
import winterImg from '../img/seasons/winter.jpg';

export const seasonsData = {
  "spring": {
    name: "Spring",
    months: [
      { en: "march", ru: "March" },
      { en: "april", ru: "April" },
      { en: "may", ru: "May" }
    ],
    image: springImg,
    description: "The period of blooming and active apple tree growth",
    temperature: "8-18°C",
    precipitation: "120-180mm",
    growth: "Active"
  },
  "summer": {
    name: "Summer",
    months: [
      { en: "june", ru: "June" },
      { en: "july", ru: "July" },
      { en: "august", ru: "August" }
    ],
    image: summerImg,
    description: "Fruit ripening and harvest formation",
    temperature: "20-30°C",
    precipitation: "80-150mm",
    growth: "Ripening"
  },
  "autumn": {
    name: "Autumn",
    months: [
      { en: "september", ru: "September" },
      { en: "october", ru: "October" },
      { en: "november", ru: "November" }
    ],
    image: autumnImg,
    description: "Harvesting and preparation for winter",
    temperature: "5-15°C",
    precipitation: "100-160mm",
    growth: "Harvest"
  },
  "winter": {
    name: "Winter",
    months: [
      { en: "december", ru: "December" },
      { en: "january", ru: "January" },
      { en: "february", ru: "February" }
    ],
    image: winterImg,
    description: "The period of dormancy and winter vegetation",
    temperature: "-5-5°C",
    precipitation: "50-100mm",
    growth: "Dormant"
  }
};
