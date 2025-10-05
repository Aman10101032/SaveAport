// src/pages/sar/SeasonSAR.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, BarChart3, Thermometer, Droplets, Sprout, TrendingUp } from "lucide-react";
import { seasonsData } from "../../data/seasonsData";
import { nasaData } from "../../data/nasaData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SeasonSAR() {
  const { season } = useParams();
  const navigate = useNavigate();
  const data = seasonsData[season];

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Данные не найдены</h1>
          <button
            onClick={() => navigate('/sar')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Вернуться к сезонам
          </button>
        </div>
      </div>
    );
  }

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

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              SAR Аналитика - {data.name}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Детальный анализ данных синтезированной апертурной радиолокации за весь сезон
          </p>
        </motion.div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Левая колонка - метаданные и основная информация */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div 
                className="w-full h-64 bg-cover bg-center rounded-xl mb-4"
                style={{ backgroundImage: `url(${data.image})` }}
              />
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Общая информация</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {data.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <Thermometer className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-red-600">{data.temperature}</div>
                  <div className="text-sm text-gray-600">Температура</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-blue-600">{data.precipitation}</div>
                  <div className="text-sm text-gray-600">Осадки</div>
                </div>
              </div>
            </motion.div>

            {/* Месяцы сезона */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Месяцы сезона</h3>
              <div className="grid grid-cols-3 gap-3">
                {data.months.map((month, index) => (
                  <motion.button
                    key={month.en}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(`/sar/${season}/${month.en}`)}
                    className="bg-red-50 text-red-700 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors"
                  >
                    {month.ru}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Правая колонка - графики и аналитика */}
          <div className="space-y-6">
            {/* График нормализованных показателей */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Нормализованные показатели NASA
              </h3>
             <h4>(полученные методом обработки данных SAR)</h4><br></br>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={nasaData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="SolarRadiation" stroke="#8884d8" name="Солнечная радиация" />
                    <Line type="monotone" dataKey="SoilMoisture" stroke="#82ca9d" name="Влажность почвы" />
                    <Line type="monotone" dataKey="Precipitation" stroke="#ffc658" name="Осадки" />
                    <Line type="monotone" dataKey="AirHumidity" stroke="#ff7300" name="Влажность воздуха" />
                    <Line type="monotone" dataKey="Temperature" stroke="#387908" name="Температура" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* График благоприятности */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Показатель благоприятности
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={nasaData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="Favorability" 
                      stroke="#8884d8" 
                      name="Благоприятность"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-green-600" />
                Статистика развития
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Рост побегов</span>
                    <span className="font-bold text-green-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Формирование почек</span>
                    <span className="font-bold text-blue-600">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Здоровье листвы</span>
                    <span className="font-bold text-purple-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}