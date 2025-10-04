// src/pages/Home.jsx
import { motion } from "framer-motion";
import AnimatedCard from "../components/AnimatedCard";
import { ArrowRight, BarChart3, History, Lightbulb, Users, Target, Award, Play, Heart, Shield, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <History className="w-8 h-8" />,
      title: "Богатая история",
      description: "Узнайте о centuries-old наследии сорта Апорт",
      path: "/history",
      image: "https://images.unsplash.com/photo-1619546952812-5202a5f4a7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Аналитика данных",
      description: "Изучите статистику и тенденции производства",
      path: "/charts",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Инновации",
      description: "Современные решения для сохранения сорта",
      path: "/solution",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const gallery = [
    {
      url: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Свежий урожай"
    },
    {
      url: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Яблоневый сад"
    },
    {
      url: "https://images.unsplash.com/photo-1590502593740-6f2f9ac2a75a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Традиции выращивания"
    },
    {
      url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Качество Апорта"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Сохраняем наследие",
      description: "Заботимся о сохранении уникального генофонда Апорта для будущих поколений"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Защищаем традиции",
      description: "Поддерживаем фермеров и сохраняем традиционные методы выращивания"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Развиваем экологию",
      description: "Внедряем устойчивые и экологичные методы сельского хозяйства"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "10,000+", label: "Фермеров" },
    { icon: <Target className="w-6 h-6" />, number: "150+", label: "Лет истории" },
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Наград" },
    { icon: <Play className="w-6 h-6" />, number: "100%", label: "Натурально" }
  ];

  const handleLearnMore = () => {
    navigate("/history");
  };

  const handleFeatureClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Фоновое изображение */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1920&q=80')",
            filter: "brightness(0.6)",
          }}
        ></div>

        {/* Анимированный фон (свет и частицы) */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          {/* Плавающие светящиеся круги */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 bg-gradient-to-br from-red-300/30 to-orange-300/20 rounded-full blur-3xl"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  scale: 0.5 + Math.random(),
                  opacity: 0.3 + Math.random() * 0.3,
                }}
                animate={{
                  x: [
                    Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                    Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
                  ],
                  y: [
                    Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), 
                    Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
                  ],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Световые волны */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-orange-400/10 animate-pulse"></div>
        </div>

        {/* Основной контент */}
        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Save Aport 🍎
          </motion.h1>

          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed">
              Сохраняем уникальное наследие Казахстана — легендарный сорт яблок Апорт. 
              Присоединяйтесь к миссии по возрождению культурного достояния.
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.button
              onClick={handleLearnMore}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-2xl mx-auto"
            >
              Узнать больше <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Нижний градиент (для плавного затухания) */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-red-100/60 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-red-500 mb-4 inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Наша миссия
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы работаем над сохранением и развитием уникального сорта яблок Апорт
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AnimatedCard 
                  delay={index * 0.1} 
                  className="overflow-hidden cursor-pointer group"
                  onClick={() => handleFeatureClick(feature.path)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM1ZjVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKEoiBBcG9ydCDihKIgPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  </div>
                  
                  <div className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-red-500 mb-4 inline-flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Основные принципы, которые направляют нашу работу по сохранению Апорта
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AnimatedCard delay={index * 0.1} className="p-8 text-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-red-500 mb-6 inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Галерея Апорта
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Увидьте красоту и величие легендарного сорта
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjM1ZjVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKEoiBBcG9ydCDihKIgPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6">
              🍎
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Апорт — наследие, которое стоит сохранить
            </h2>
            
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              На протяжении более чем 150 лет яблоки Апорт были неотъемлемой частью культурного 
              наследия Казахстана. Их уникальный вкус, аромат и размер стали легендой, 
              известной далеко за пределами нашей страны.
            </p>

            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Сегодня, перед лицом современных вызовов, наша миссия — сохранить этот уникальный 
              сорт для будущих поколений. Благодаря совместным усилиям фермеров, ученых и 
              энтузиастов, мы продолжаем писать историю Апорта.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-2xl font-bold text-white italic">
                "Великие дела начинаются с маленьких яблок"
              </p>
            </div>

            <motion.button
              onClick={() => navigate("/solution")}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              Узнать о наших решениях <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;