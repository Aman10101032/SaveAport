// src/pages/sar/YearSAR.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  BarChart3,
  TrendingUp,
  Droplets,
  Thermometer,
  Sprout,
  MapPin
} from "lucide-react";
import { yearMetadata, generateYearsData } from "../../data/yearData";
import { useState, useEffect } from "react";

generateDetailedData

export default function YearSAR() {
  const { year } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const detailedData = generateDetailedData(parseInt(year));
      setData(detailedData);
      setLoading(false);
    }, 800);
  }, [year]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-xl text-gray-600">Загрузка SAR данных за {year} год...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Данные не найдены</h1>
          <button
            onClick={() => navigate('/sar')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Вернуться к списку годов
          </button>
        </div>
      </div>
    );
  }

  const metadata = yearMetadata[year];

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
          Назад к списку годов
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
              SAR Аналитика - {year} год
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Детальный анализ данных синтезированной апертурной радиолокации для сорта Апорт
          </p>
        </motion.div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка - метаданные и основная информация */}
          <div className="lg:col-span-1 space-y-6">
            {/* Карточка года */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-800">{year} год</h2>
              </div>

              <img
                src={metadata.image}
                alt={`${year} год`}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <p className="text-gray-600 leading-relaxed mb-4">
                {metadata.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-red-600">{data.общаяОценка}%</div>
                  <div className="text-xs text-gray-600">Общая оценка</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-orange-600">{data.урожайность}%</div>
                  <div className="text-xs text-gray-600">Урожайность</div>
                </div>
              </div>
            </motion.div>

            {/* SAR показатели */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                SAR Показатели
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Интенсивность сигнала</span>
                  <span className="font-bold">{data.sarПоказатели.интенсивность}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${data.sarПоказатели.интенсивность}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Когерентность</span>
                  <span className="font-bold">{data.sarПоказатели.когерентность}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${data.sarПоказатели.когерентность * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Деформация (мм/год)</span>
                  <span className="font-bold">{data.sarПоказатели.деформация}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${data.sarПоказатели.деформация * 10}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Правая колонка - графики и аналитика */}
          <div className="lg:col-span-2 space-y-6">
            {/* Погодные условия */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-orange-600" />
                Погодные условия
              </h3>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{data.температура}°C</div>
                  <div className="text-gray-600">Средняя температура</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{data.осадки} мм</div>
                  <div className="text-gray-600">Осадки</div>
                </div>
              </div>

              {/* Мини-график месяцев */}
              <div className="grid grid-cols-6 gap-2">
                {data.месячныеДанные.slice(0, 6).map((monthData, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs text-gray-600 mb-1">{monthData.месяц}</div>
                    <div className="bg-orange-100 rounded h-16 relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-orange-500 rounded"
                        style={{ height: `${(monthData.температура + 10) * 2}%` }}
                      ></div>
                    </div>
                    <div className="text-xs mt-1">{monthData.температура}°C</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Качество плодов */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-green-600" />
                Качество плодов
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{data.качествоПлодов.размер} мм</div>
                  <div className="text-gray-600 text-sm">Размер</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{data.качествоПлодов.вег} г</div>
                  <div className="text-gray-600 text-sm">Вес</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{data.качествоПлодов.сахаристость}%</div>
                  <div className="text-gray-600 text-sm">Сахаристость</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{data.качествоПлодов.кислотность}%</div>
                  <div className="text-gray-600 text-sm">Кислотность</div>
                </div>
              </div>
            </motion.div>

            {/* Рост и развитие */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Рост и развитие
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Рост побегов по месяцам</h4>
                  <div className="space-y-2">
                    {data.месячныеДанные.slice(3, 9).map((monthData, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{monthData.месяц}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${monthData.ростПобегов}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-8">{monthData.ростПобегов}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Влажность почвы</h4>
                  <div className="space-y-2">
                    {data.месячныеДанные.slice(3, 9).map((monthData, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{monthData.месяц}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${monthData.влажность}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-8">{monthData.влажность}%</span>
                        </div>
                      </div>
                    ))}
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