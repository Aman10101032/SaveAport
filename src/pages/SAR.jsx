// src/pages/SAR.jsx
import { motion } from "framer-motion";
import { Calendar, TrendingUp, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { yearMetadata, generateYearsData } from "../data/yearData";


const yearsData = generateYearsData();

export default function SAR() {
  const navigate = useNavigate();

  const handleYearClick = (year) => {
    navigate(`/sar/${year}`);
  };

  const YearCard = ({ year, data }) => {
    const metadata = yearMetadata[year];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer group"
        onClick={() => handleYearClick(year)}
      >
        {/* Фоновое изображение */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${metadata.image})` }}
        >
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>
        
        {/* Контент карточки */}
        <div className="relative z-10 p-6 text-white h-80 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-6 h-6" />
              <h3 className="text-2xl font-bold">{year}</h3>
            </div>
            
            <p className="text-white/90 leading-relaxed text-sm mb-4 line-clamp-3">
              {metadata.description}
            </p>
          </div>
          
          {/* Статистика в карточке */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
              <div className="text-lg font-bold">{data.общаяОценка}%</div>
              <div className="text-xs opacity-90">Оценка</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
              <div className="text-lg font-bold">{data.температура}°C</div>
              <div className="text-xs opacity-90">Температура</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
              <div className="text-lg font-bold">{data.осадки}мм</div>
              <div className="text-xs opacity-90">Осадки</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
              <div className="text-lg font-bold">{data.урожайность}%</div>
              <div className="text-xs opacity-90">Урожайность</div>
            </div>
          </div>

          {/* Кнопка просмотра */}
          <div className="mt-4 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 group-hover:bg-white/30 transition-colors">
              <BarChart3 className="w-4 h-4" />
              Смотреть аналитику
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            SAR Данные - Историческая аналитика
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Исследуйте 15-летнюю историю выращивания легендарного сорта яблок Апорт с помощью SAR технологий
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <p className="text-gray-700 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-600" />
              <span>Выберите год для просмотра детальной SAR аналитики</span>
            </p>
          </div>
        </motion.div>

        {/* Сетка карточек по годам */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(yearsData)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, data]) => (
              <YearCard key={year} year={parseInt(year)} data={data} />
            ))
          }
        </div>
      </div>
    </div>
  );
}