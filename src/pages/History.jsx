// src/pages/History.jsx
import { motion } from "framer-motion";
import AnimatedCard from "../components/AnimatedCard";
import Modal from "../components/Modal";
import { useState } from "react";

const History = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const timeline = [
    {
      year: "XIX век",
      title: "Появление в Казахстане",
      description: "Апорт впервые появился в Алматинской области и быстро адаптировался к местным условиям",
      fullDescription: `Апорт — один из старейших сортов яблок, который появился в Казахстане в XIX веке. 
      Согласно историческим данным, первые саженцы были завезены в Верный (ныне Алматы) русскими переселенцами. 
      Уникальные климатические условия Заилийского Алатау оказались идеальными для этого сорта.
      
      Яблоки достигли невероятных размеров — до 500-600 граммов, приобрели насыщенный вкус и аромат, 
      что сделало их знаменитыми далеко за пределами региона.`,
      image: "🍎",
      details: [
        "Первые упоминания: 1860-е годы",
        "Регион: Алматинская область", 
        "Особенности: Крупноплодность, адаптивность"
      ]
    },
    {
      year: "1900-1950",
      title: "Период расцвета",
      description: "Сорт получил мировое признание на международных выставках",
      fullDescription: `В начале XX века Апорт получил мировое признание. На международных выставках 
      в Мюнхене (1907) и Париже (1910) яблоки сорта Апорт были удостоены золотых медалей.
      
      К 1930-м годам Апорт стал основным промышленным сортом в Казахстане. Были заложены 
      крупные сады, разработаны технологии выращивания. В этот период сорт стал настоящим 
      символом Алма-Аты.`,
      image: "🏆",
      details: [
        "1907 г. — Золотая медаль в Мюнхене",
        "1910 г. — Признание в Париже", 
        "1930-е — Промышленное выращивание"
      ]
    },
    {
      year: "1960-1990", 
      title: "Массовое производство",
      description: "Апорт стал символом Алматы и визитной карточкой региона",
      fullDescription: `В советский период Апорт переживал золотую эру. К 1980-м годам площади 
      яблоневых садов в Алматинской области достигли 15 тысяч гектаров. Ежегодно собирали 
      до 30 тысяч тонн яблок этого сорта.
      
      Апорт стал неотъемлемой частью культуры и идентичности Алматы. Его дарили высоким 
      гостям, экспортировали в другие республики, изображали на сувенирной продукции.`,
      image: "🏭",
      details: [
        "Площади садов: 15,000 га", 
        "Урожайность: 30,000 тонн/год",
        "Статус: Символ Алматы"
      ]
    },
    {
      year: "2000+",
      title: "Современные вызовы",
      description: "Борьба за сохранение уникального генофонда и традиций", 
      fullDescription: `С распадом СССР и изменением экономических условий площади садов 
      значительно сократились. Уникальный генофонд оказался под угрозой.
      
      Однако в XXI веке началось возрождение интереса к Апорту. Создаются питомники, 
      внедряются современные технологии выращивания, развивается агротуризм. 
      Апорт остается важной частью культурного наследия Казахстана.`,
      image: "🛡️",
      details: [
        "Вызов: Сокращение площадей",
        "Решение: Современные технологии", 
        "Перспектива: Возрождение сорта"
      ]
    }
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
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
                  className="flex-1 p-6 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="text-sm font-semibold text-red-600 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 text-3xl">
                    {item.image}
                  </div>
                </AnimatedCard>
                
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg cursor-pointer"
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
            <AnimatedCard className="p-8 bg-gradient-to-r from-red-50 to-orange-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                🏆 Культурное наследие
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Яблоки сорта Апорт — это не просто фрукты, а живая история Казахстана. 
                Их крупные плоды с уникальным сладким вкусом и неповторимым ароматом 
                стали символом алматинского региона и предметом национальной гордости.
              </p>
            </AnimatedCard>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <div className="p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl flex-shrink-0">
                {selectedItem.image}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    {selectedItem.year}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {selectedItem.title}
                  </h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-6 whitespace-pre-line">
                  {selectedItem.fullDescription}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">📊 Ключевые факты:</h4>
                  <ul className="space-y-2">
                    {selectedItem.details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        {detail}
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
        )}
      </Modal>
    </>
  );
};

export default History;