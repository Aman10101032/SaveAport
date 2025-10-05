// src/pages/charts/YearCharts.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const YearCharts = () => {
  const { season, month } = useParams();
  const navigate = useNavigate();

  // Данные для английских названий месяцев
  const monthData = {
    'march': { name: "Март", temperature: '8°C', precipitation: '45мм', growth: 'Начало сокодвижения' },
    'april': { name: "Апрель", temperature: '12°C', precipitation: '60мм', growth: 'Цветение' },
    'may': { name: "Май", temperature: '18°C', precipitation: '75мм', growth: 'Формирование завязей' },
    'june': { name: "Июнь", temperature: '22°C', precipitation: '55мм', growth: 'Рост плодов' },
    'july': { name: "Июль", temperature: '25°C', precipitation: '40мм', growth: 'Созревание' },
    'august': { name: "Август", temperature: '23°C', precipitation: '35мм', growth: 'Сбор ранних сортов' },
    'september': { name: "Сентябрь", temperature: '15°C', precipitation: '50мм', growth: 'Основной сбор' },
    'october': { name: "Октябрь", temperature: '10°C', precipitation: '65мм', growth: 'Завершение сбора' },
    'november': { name: "Ноябрь", temperature: '5°C', precipitation: '70мм', growth: 'Подготовка к зиме' },
    'december': { name: "Декабрь", temperature: '0°C', precipitation: '40мм', growth: 'Зимний покой' },
    'january': { name: "Январь", temperature: '-3°C', precipitation: '35мм', growth: 'Период покоя' },
    'february': { name: "Февраль", temperature: '2°C', precipitation: '30мм', growth: 'Конец покоя' }
  };

  const seasonNames = {
    'spring': 'Весна',
    'summer': 'Лето', 
    'autumn': 'Осень',
    'winter': 'Зима'
  };

  const data = monthData[month] || {};
  const seasonName = seasonNames[season] || season;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        {/* Кнопка назад */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/sar')}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Назад к сезонам
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            SAR Аналитика - {seasonName} {data.name}
          </h1>
          <p className="text-xl text-gray-600">
            Детальные данные синтезированной апертурной радиолокации
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Температура</h3>
            <div className="text-3xl font-bold text-orange-600">{data.temperature}</div>
            <p className="text-gray-600 mt-2">Среднемесячная температура</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Осадки</h3>
            <div className="text-3xl font-bold text-blue-600">{data.precipitation}</div>
            <p className="text-gray-600 mt-2">Суммарные осадки за месяц</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Фаза роста</h3>
            <div className="text-xl font-bold text-green-600">{data.growth}</div>
            <p className="text-gray-600 mt-2">Текущая стадия развития</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">SAR Показатели</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-gray-600">Интенсивность</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">0.78</div>
              <div className="text-sm text-gray-600">Когерентность</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2.3мм</div>
              <div className="text-sm text-gray-600">Деформация</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <div className="text-sm text-gray-600">Качество</div>
            </div>
          </div>
        </motion.div>

        {/* Дополнительная информация о месяце */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Особенности месяца</h3>
          <p className="text-gray-600 leading-relaxed">
            {data.growth && `В ${data.name.toLowerCase()} у яблонь сорта Апорт наблюдается фаза "${data.growth.toLowerCase()}". `}
            SAR данные показывают оптимальные условия для развития плодов и хорошую интенсивность сигнала.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default YearCharts;