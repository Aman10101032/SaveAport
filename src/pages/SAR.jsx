// src/pages/SAR.jsx
import { motion } from "framer-motion";
import { Calendar, TrendingUp, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { seasonsData } from "../data/seasonsData";

export default function SAR() {
  const navigate = useNavigate();

  const handleSeasonClick = (season) => {
    navigate(`/sar/${season}`);
  };

  const handleMonthClick = (season, monthEn, e) => {
    e.stopPropagation();
    navigate(`/sar/${season}/${monthEn}`);
  };

  const SeasonCard = ({ season, data }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 cursor-pointer"
        onClick={() => handleSeasonClick(season)}
      >
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Контент карточки */}
        <div className="relative z-10 p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6" />
            <h3 className="text-2xl font-bold">{data.name}</h3>
          </div>

          <p className="text-white/90 leading-relaxed text-sm mb-4">
            {data.description}
          </p>

          {/* Статистика сезона */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
              <div className="text-sm font-bold">{data.temperature}</div>
              <div className="text-xs opacity-90">Temperature</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center">
              <div className="text-sm font-bold">{data.precipitation}</div>
              <div className="text-xs opacity-90">Precipitation</div>
            </div>
            <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm text-center col-span-2">
              <div className="text-sm font-bold">{data.growth}</div>
              <div className="text-xs opacity-90">Growth phase</div>
            </div>
          </div>

          {/* Месяцы */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold mb-2">Months:</h4>
            {data.months.map((month, index) => (
              <motion.button
                key={month.en}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleMonthClick(season, month.en, e)}
                className="w-full bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-white flex items-center justify-between group hover:bg-white/30 transition-all duration-300"
              >
                <span className="font-medium">{month.ru}</span>
                <BarChart3 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
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
            SAR Data - Seasonal analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Explore seasonal changes in the cultivation of the legendary Aport apple variety using SAR technology.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <p className="text-gray-700 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-600" />
              <span>Click on a season to view general analytics or select a specific month.</span>
            </p>
          </div>
        </motion.div>

        {/* Сетка карточек по временам года */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(seasonsData).map(([season, data]) => (
            <SeasonCard key={season} season={season} data={data} />
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Seasonal characteristics of growing Aport
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Spring</h3>
              <p className="text-sm text-gray-600">Flowering, pollination, start of vegetation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">☀️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Summer</h3>
              <p className="text-sm text-gray-600">Fruit growth, crop formation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Autumn</h3>
              <p className="text-sm text-gray-600">Harvesting, preparing for winter</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Winter</h3>
              <p className="text-sm text-gray-600">Peace, protection from frost</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}