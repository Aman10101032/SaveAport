// src/pages/Charts.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LineChart, Line, BarChart, Bar, AreaChart, Area, 
  CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  Legend, PieChart, Pie, Cell 
} from "recharts";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

// Генерация фейковых данных для 2010-2025 годов
const generateYearData = (year) => {
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  
  return months.map(month => ({
    month,
    Влажность: Math.floor(Math.random() * 50) + 50, // 50-100%
    Осадки: Math.floor(Math.random() * 200), // 0-200 мм
    Температура: Math.floor(Math.random() * 35) - 5, // -5 до +30°C
    Солнечное_излучение: Math.floor(Math.random() * 400) + 100, // 100-500 Вт/м²
    Качество_почвы: Math.floor(Math.random() * 30) + 70, // 70-100%
    Общая_оценка: Math.floor(Math.random() * 30) + 70, // 70-100%
  }));
};

const yearsData = {};
for (let year = 2010; year <= 2025; year++) {
  yearsData[year] = generateYearData(year);
}

// Цвета для графиков
const colors = {
  Влажность: '#3B82F6',
  Осадки: '#60A5FA', 
  Температура: '#EF4444',
  Солнечное_излучение: '#F59E0B',
  Качество_почвы: '#10B981',
  Общая_оценка: '#8B5CF6'
};

const chartConfigs = {
  Влажность: {
    color: colors.Влажность,
    unit: '%',
    type: 'line'
  },
  Осадки: {
    color: colors.Осадки,
    unit: 'мм',
    type: 'bar'
  },
  Температура: {
    color: colors.Температура,
    unit: '°C',
    type: 'line'
  },
  Солнечное_излучение: {
    color: colors.Солнечное_излучение,
    unit: 'Вт/м²',
    type: 'area'
  },
  Качество_почвы: {
    color: colors.Качество_почвы,
    unit: '%',
    type: 'line'
  },
  Общая_оценка: {
    color: colors.Общая_оценка,
    unit: '%',
    type: 'line'
  }
};

export default function Charts() {
  const [selectedYear, setSelectedYear] = useState(2020);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (year) => {
    setExpandedSections(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const renderChart = (data, metric, config) => {
    const chartProps = {
      data,
      margin: { top: 5, right: 30, left: 20, bottom: 5 }
    };

    switch (config.type) {
      case 'line':
        return (
          <LineChart {...chartProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value} ${config.unit}`, metric]}
              labelFormatter={(label) => `Месяц: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey={metric} 
              stroke={config.color}
              strokeWidth={3}
              dot={{ fill: config.color, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: config.color }}
            />
          </LineChart>
        );
      
      case 'bar':
        return (
          <BarChart {...chartProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value} ${config.unit}`, metric]}
              labelFormatter={(label) => `Месяц: ${label}`}
            />
            <Bar 
              dataKey={metric} 
              fill={config.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
      
      case 'area':
        return (
          <AreaChart {...chartProps}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value} ${config.unit}`, metric]}
              labelFormatter={(label) => `Месяц: ${label}`}
            />
            <Area 
              type="monotone" 
              dataKey={metric} 
              stroke={config.color}
              fill={config.color}
              fillOpacity={0.3}
            />
          </AreaChart>
        );
      
      default:
        return null;
    }
  };

  const YearSection = ({ year, data }) => {
    const isExpanded = expandedSections[year];
    
    return (
      <motion.div
        initial={false}
        className="mb-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
      >
        <button
          onClick={() => toggleSection(year)}
          className="w-full p-6 text-left flex justify-between items-center bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-colors"
        >
          <div className="flex items-center gap-4">
            <Calendar className="w-6 h-6 text-red-600" />
            <h3 className="text-2xl font-bold text-gray-800">
              Данные за {year} год
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-red-600" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 border-t border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Object.entries(chartConfigs).map(([metric, config]) => (
                    <motion.div
                      key={metric}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: config.color }}
                        />
                        {metric}
                        <span className="text-sm text-gray-500 font-normal">
                          ({config.unit})
                        </span>
                      </h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          {renderChart(data, metric, config)}
                        </ResponsiveContainer>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Сводная статистика */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl"
                >
                  <h4 className="text-xl font-bold mb-4">Сводная статистика за {year} год</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {Object.entries(chartConfigs).map(([metric, config]) => {
                      const values = data.map(item => item[metric]);
                      const avg = values.reduce((a, b) => a + b, 0) / values.length;
                      return (
                        <div key={metric} className="text-center">
                          <div className="text-2xl font-bold">{avg.toFixed(1)}{config.unit}</div>
                          <div className="text-sm opacity-90">{metric}</div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Аналитика Апорта
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подробная статистика и аналитика по выращиванию яблок сорта Апорт с 2010 по 2025 год
          </p>
        </motion.div>

        {/* Годы с 2010 по 2025 */}
        <div className="space-y-4">
          {Object.entries(yearsData)
            .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Сортировка по убыванию года
            .map(([year, data]) => (
              <YearSection key={year} year={parseInt(year)} data={data} />
            ))
          }
        </div>

        {/* Легенда */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Легенда показателей</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(chartConfigs).map(([metric, config]) => (
              <div key={metric} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: config.color }}
                />
                <span className="text-sm text-gray-700">{metric}</span>
                <span className="text-xs text-gray-500">({config.unit})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}