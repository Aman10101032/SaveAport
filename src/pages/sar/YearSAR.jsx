// src/pages/sar/YearSAR.jsx
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, BarChart3, Thermometer, Droplets, Wind, Cloud } from "lucide-react";
import { seasonsData } from "../../data/seasonsData";
import { nasaData } from "../../data/nasaData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Function to generate synthetic detailed monthly data
const generateDetailedData = (year, month) => {
  const baseData = nasaData.find(item => item.year === year) || nasaData[nasaData.length - 1];

  const generateMonthlyVariation = (baseValue) => {
    const variation = (Math.random() - 0.5) * 2; // from -1 to 1
    return baseValue + variation * 0.5;
  };

  const monthNames = {
    january: 'January', february: 'February', march: 'March', april: 'April',
    may: 'May', june: 'June', july: 'July', august: 'August',
    september: 'September', october: 'October', november: 'November', december: 'December'
  };

  return {
    month: monthNames[month] || month,
    year: year,
    SolarRadiation: generateMonthlyVariation(baseData.SolarRadiation),
    SoilMoisture: generateMonthlyVariation(baseData.SoilMoisture),
    Precipitation: generateMonthlyVariation(baseData.Precipitation),
    AirHumidity: generateMonthlyVariation(baseData.AirHumidity),
    Temperature: generateMonthlyVariation(baseData.Temperature),
    Favorability: generateMonthlyVariation(baseData.Favorability),
    VegetationIndex: 0.7 + Math.random() * 0.3,
    SoilTemperature: generateMonthlyVariation(baseData.Temperature - 2),
    WindSpeed: 2 + Math.random() * 8,
    CloudCover: Math.random() * 100,
    Evaporation: 50 + Math.random() * 150
  };
};

// Helper to get monthly data
const getMonthData = (season, month) => {
  const currentYear = 2024;
  return generateDetailedData(currentYear, month);
};

export default function YearSAR() {
  const { season, month } = useParams();
  const navigate = useNavigate();
  const seasonData = seasonsData[season];
  const monthData = getMonthData(season, month);

  if (!seasonData || !monthData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Data not found</h1>
          <button
            onClick={() => navigate(`/sar/${season}`)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to season
          </button>
        </div>
      </div>
    );
  }

  const chartData = [
    { name: 'Solar Radiation', value: monthData.SolarRadiation },
    { name: 'Soil Moisture', value: monthData.SoilMoisture },
    { name: 'Precipitation', value: monthData.Precipitation },
    { name: 'Air Humidity', value: monthData.AirHumidity },
    { name: 'Temperature', value: monthData.Temperature },
    { name: 'Favorability', value: monthData.Favorability }
  ];

  const weeklyData = [
    { week: 'Week 1', growth: 65, health: 70, activity: 60 },
    { week: 'Week 2', growth: 75, health: 75, activity: 70 },
    { week: 'Week 3', growth: 80, health: 80, activity: 75 },
    { week: 'Week 4', growth: 85, health: 85, activity: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/sar')}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            To seasons
          </motion.button>
          <span className="text-gray-400">/</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/sar/${season}`)}
            className="text-red-600 hover:text-red-700 transition-colors"
          >
            {seasonData.name}
          </motion.button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">{monthData.month}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-red-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {monthData.month} - {seasonData.name}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed SAR data analysis for {monthData.month.toLowerCase()} {monthData.year}
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left column - key indicators */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key indicators</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Thermometer className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Temperature</span>
                  </div>
                  <span className="font-bold text-red-600">{monthData.Temperature.toFixed(2)}°C</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Precipitation</span>
                  </div>
                  <span className="font-bold text-blue-600">{monthData.Precipitation.toFixed(2)} mm</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Soil Moisture</span>
                  </div>
                  <span className="font-bold text-green-600">{monthData.SoilMoisture.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Cloud className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Vegetation Index</span>
                  </div>
                  <span className="font-bold text-purple-600">{(monthData.VegetationIndex * 100).toFixed(0)}%</span>
                </div>
              </div>
            </motion.div>

            {/* Growth status */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Growth status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Biomass Growth</span>
                    <span className="font-bold text-green-600">{(monthData.VegetationIndex * 100).toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${monthData.VegetationIndex * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Plant Health</span>
                    <span className="font-bold text-blue-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Photosynthesis Activity</span>
                    <span className="font-bold text-purple-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Monthly indicators chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                Monthly Indicators for {monthData.month}
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" name="Value" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Weekly growth chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Weekly Growth Dynamics
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="growth" stroke="#82ca9d" name="Growth" strokeWidth={2} />
                    <Line type="monotone" dataKey="health" stroke="#8884d8" name="Health" strokeWidth={2} />
                    <Line type="monotone" dataKey="activity" stroke="#ffc658" name="Activity" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
