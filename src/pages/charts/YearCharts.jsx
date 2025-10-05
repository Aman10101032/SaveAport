// src/pages/charts/YearCharts.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const YearCharts = () => {
  const { season, month } = useParams();
  const navigate = useNavigate();

  // Data for English month names
  const monthData = {
    'march': { name: "March", temperature: '8°C', precipitation: '45mm', growth: 'Beginning of sap flow' },
    'april': { name: "April", temperature: '12°C', precipitation: '60mm', growth: 'Blooming' },
    'may': { name: "May", temperature: '18°C', precipitation: '75mm', growth: 'Formation of fruit sets' },
    'june': { name: "June", temperature: '22°C', precipitation: '55mm', growth: 'Fruit growth' },
    'july': { name: "July", temperature: '25°C', precipitation: '40mm', growth: 'Ripening' },
    'august': { name: "August", temperature: '23°C', precipitation: '35mm', growth: 'Early harvest' },
    'september': { name: "September", temperature: '15°C', precipitation: '50mm', growth: 'Main harvest' },
    'october': { name: "October", temperature: '10°C', precipitation: '65mm', growth: 'Harvest completion' },
    'november': { name: "November", temperature: '5°C', precipitation: '70mm', growth: 'Preparation for winter' },
    'december': { name: "December", temperature: '0°C', precipitation: '40mm', growth: 'Winter dormancy' },
    'january': { name: "January", temperature: '-3°C', precipitation: '35mm', growth: 'Dormant period' },
    'february': { name: "February", temperature: '2°C', precipitation: '30mm', growth: 'End of dormancy' }
  };

  const seasonNames = {
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'winter': 'Winter'
  };

  const data = monthData[month] || {};
  const seasonName = seasonNames[season] || season;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/sar')}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to seasons
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            SAR Analytics - {seasonName} {data.name}
          </h1>
          <p className="text-xl text-gray-600">
            Detailed Synthetic Aperture Radar data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Temperature</h3>
            <div className="text-3xl font-bold text-orange-600">{data.temperature}</div>
            <p className="text-gray-600 mt-2">Average monthly temperature</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Precipitation</h3>
            <div className="text-3xl font-bold text-blue-600">{data.precipitation}</div>
            <p className="text-gray-600 mt-2">Total precipitation per month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">Growth Phase</h3>
            <div className="text-xl font-bold text-green-600">{data.growth}</div>
            <p className="text-gray-600 mt-2">Current stage of development</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">SAR Indicators</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-gray-600">Intensity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">0.78</div>
              <div className="text-sm text-gray-600">Coherence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2.3mm</div>
              <div className="text-sm text-gray-600">Deformation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <div className="text-sm text-gray-600">Quality</div>
            </div>
          </div>
        </motion.div>

        {/* Additional month information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Month Highlights</h3>
          <p className="text-gray-600 leading-relaxed">
            {data.growth && `In ${data.name.toLowerCase()}, Aport apple trees experience the "${data.growth.toLowerCase()}" phase. `}
            SAR data indicates optimal conditions for fruit development and strong signal intensity.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default YearCharts;
