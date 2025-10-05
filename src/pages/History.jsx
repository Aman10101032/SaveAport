// src/pages/History.jsx
import { motion } from "framer-motion";
import AnimatedCard from "../components/AnimatedCard";
import Modal from "../components/Modal";
import { useState } from "react";
import { timelineData } from "../data/historyData";

const History = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const timeline = timelineData;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-12 px-4 relative overflow-hidden"
      >
        {/* Анимированный фон */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Градиентный фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-red-50/70"></div>
          
          {/* Плавающие геометрические формы */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-amber-200/40"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 50 - 25, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Тонкие линии */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleX: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Световые пятна */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-amber-200/20 to-orange-200/10 blur-xl"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              История Апорта
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Путешествие во времени: от первых саженцев до символа национальной гордости
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.4 }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
              >
                <AnimatedCard
                  delay={index * 0.1}
                  className="flex-1 p-6 cursor-pointer relative overflow-hidden"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Фоновое изображение */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  />
                  {/* Затемнение для лучшей читаемости текста */}
                  <div className="absolute inset-0 bg-black bg-opacity-40" />

                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-white mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 text-3xl">
                      {item.image}
                    </div>
                  </div>
                </AnimatedCard>

                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg cursor-pointer z-10"
                    onClick={() => setSelectedItem(item)}
                  />
                  {index !== timeline.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="w-1 h-24 bg-gradient-to-b from-red-400 to-orange-400 rounded-full"
                    />
                  )}
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <AnimatedCard className="p-8 bg-gradient-to-r from-red-50 to-orange-50 relative overflow-hidden">
              {/* Декоративные элементы */}
              <motion.div
                className="absolute -right-4 -top-4 w-24 h-24 bg-red-200/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -left-6 -bottom-6 w-32 h-32 bg-orange-200/15 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  🏆 Культурное наследие
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Яблоки сорта Апорт — это не просто фрукты, а живая история Казахстана.
                  Их крупные плоды с уникальным сладким вкусом и неповторимым ароматом
                  стали символом алматинского региона и предметом национальной гордости.
                </p>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <div
            className="p-8 relative min-h-[500px] bg-cover bg-center rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${selectedItem.bg})` }}
          >
            {/* Затемнение фона */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            <div className="relative z-10">
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">
                  {selectedItem.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {selectedItem.year}
                    </span>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedItem.title}
                    </h2>
                  </div>

                  <p className="text-white leading-relaxed text-lg mb-6 whitespace-pre-line">
                    {selectedItem.fullDescription}
                  </p>

                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white border-opacity-30">
                    <h4 className="font-semibold text-white mb-3 text-shadow">📊 Ключевые факты:</h4>
                    <ul className="space-y-2">
                      {selectedItem.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2 text-white text-shadow">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default History;