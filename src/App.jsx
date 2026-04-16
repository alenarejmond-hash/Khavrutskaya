import React, { useState, useEffect } from 'react';
import { 
  Plane, Map, Sparkles, Phone, MessageCircle, Navigation, Sun, Heart, 
  ArrowRight, Settings, X, Droplets, Cloud, Gem, Moon, Euro, 
  CircleCheck as CheckCircle2, MapPin, ExternalLink, Clock, Star, 
  Briefcase, Send, ChevronRight, ArrowUpRight, Flame, CalendarDays, 
  Luggage, Lock, Unlock, Ship, Newspaper 
} from 'lucide-react';

// Кастомная иконка Instagram
const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

// Кастомная иконка VK
const VKIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className}>
    <path d="M15.08 2H8.92C3.39 2 2 3.39 2 8.92v6.16C2 20.61 3.39 22 8.92 22h6.16C20.61 22 22 20.61 22 15.08V8.92C22 3.39 20.61 2 15.08 2zM16.5 15.46c.15.2.35.43.68.74.3.28.53.51.68.68.22.25.37.45.45.6.14.28.09.52-.16.73-.24.22-.64.33-1.19.33h-1.57c-.45 0-.82-.1-1.12-.29-.31-.19-.57-.46-.78-.81-.22-.38-.45-.71-.69-.99-.25-.29-.48-.48-.68-.58-.28-.13-.53-.13-.75 0-.22.13-.37.36-.45.69-.11.45-.16.92-.16 1.4 0 .38-.11.66-.34.84-.22.18-.55.27-.98.27h-.79c-1.14 0-2.12-.28-2.94-.84-1.13-.77-2.11-1.92-2.94-3.46-1.12-2.11-1.97-4.28-2.54-6.52-.08-.34-.05-.6.1-.79.16-.19.43-.28.82-.28h1.61c.3 0 .54.08.7.23.16.16.28.38.35.67.43 1.58.98 2.94 1.64 4.08.62 1.05 1.22 1.58 1.8 1.58.17 0 .31-.08.41-.23.11-.15.16-.42.16-.81V10.1c0-.46-.08-.79-.23-.99-.15-.2-.36-.31-.61-.31-.14 0-.32.04-.54.12.16-.45.43-.77.81-.97.38-.2.83-.3 1.34-.3h1.22c.31 0 .53.07.66.2.14.13.21.36.21.68v2.96c0 .53.11.85.34.97.23.12.51.05.85-.2.43-.31.85-.82 1.25-1.52.41-.75.76-1.55 1.06-2.42.09-.27.23-.46.42-.58.19-.13.43-.19.72-.19h1.7c.56 0 .94.13 1.14.39.2.26.15.58-.16.96-.34.45-.74.96-1.21 1.52-.46.57-.9 1.1-1.31 1.61-.3.37-.42.66-.35.88.08.21.33.52.75.92z"/>
  </svg>
);

if (typeof window !== 'undefined' && !document.getElementById('vk-bridge-script')) {
  const script = document.createElement('script');
  script.id = 'vk-bridge-script';
  script.src = 'https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js';
  script.async = true;
  document.head.appendChild(script);
}

// Обновленные данные из брифа клиента
const DATA = {
  name: "Марина",
  lastName: "Хавруцкая",
  role: "Турагент и организатор авторских туров",
  badge: "20 лет опыта",
  avatarUrl: "https://r2.syntx.ai/soraimages/555222856/7695795.png",
  bgUrl: "https://i0.wp.com/images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&strip=all",
  aboutText: "Я не просто подбираю туры, я создаю путешествия (в том числе авторские), в которые хочется возвращаться. 20 лет опыта. Знаю скрытые жемчужины по всему миру, лично инспектирую отели и создаю безупречный сервис, в котором продумана каждая деталь и безопасность вашего отдыха.",
  
  // Социальные сети
  socials: {
    tg: "https://t.me/turysuper",
    vk: "https://vk.com/turysuper777",
    insta: "https://www.instagram.com/newbreath.travel?igsh=czgydGwzMnRtZndu&utm_source=qr"
  },

  // Туры
  tours: [
    { id: 1, title: "Калининград", desc: "Европейский шарм", img: "https://i0.wp.com/images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&strip=all" },
    { id: 2, title: "Бали", desc: "Джунгли и океан", img: "https://i0.wp.com/images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&strip=all" }
  ],
  hotTours: [
    { id: 1, hotelName: "Emerald Resort", loc: "Мальдивы", dates: "15 - 22 Ноября", price: "$4 500", oldPrice: "$6 200", img: "https://i0.wp.com/images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&strip=all" },
    { id: 2, hotelName: "Four Seasons", loc: "Сейшелы", dates: "02 - 10 Декабря", price: "$5 100", oldPrice: "$7 000", img: "https://i0.wp.com/images.unsplash.com/photo-1540541338287-41700207dee6?w=600&strip=all" }
  ],
  cruises: [
    { id: 1, title: "Средиземноморье", ship: "Astoria Grande", img: "https://i0.wp.com/images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&strip=all" },
    { id: 2, title: "Персидский залив", ship: "MSC Virtuosa", img: "https://i0.wp.com/images.unsplash.com/photo-1548574505-5e239809ee19?w=600&strip=all" }
  ],
  news: [
    { id: 1, date: "15 Апр", text: "Открыто раннее бронирование на Мальдивы. Выгода до 30%." },
    { id: 2, date: "10 Апр", text: "Специальные условия на перелеты Emirates в Дубай. Напишите мне для деталей." }
  ],
  wishes: [
    "Пусть сегодняшний день подарит вам столько же тепла, сколько солнце на Мальдивах. ☀️",
    "Вы заслуживаете лучшего. Пусть ваши мечты о путешествиях начнут сбываться уже сегодня. 🌊",
    "Вдохновение повсюду. Желаю вам найти его в каждой мелочи этого дня! ✨",
    "Пусть ваш день будет таким же безупречным, как сервис в пятизвездочном отеле. 🥂"
  ],
  reviews: [
    { id: 1, name: "Анна С.", text: "Это был лучший отпуск в моей жизни! Все продумано до мелочей. Огромное спасибо за этот рай на земле!" },
    { id: 2, name: "Михаил В.", text: "Сервис на высшем уровне. Отель превзошел все ожидания, а индивидуальный трансфер был очень кстати." },
    { id: 3, name: "Ольга К.", text: "Настоящий Quiet Luxury. Никаких забот, только океан, солнце и безупречный комфорт. Обязательно вернемся!" }
  ],
  secretPin: "7777",
  secretTour: {
    title: "Private Island Resort",
    desc: "Полная приватность, личный батлер и перелет на гидроплане. Скрыто от посторонних глаз.",
    price: "По запросу",
    img: "https://i0.wp.com/images.unsplash.com/photo-1599619351208-3e6c839d6828?w=800&strip=all"
  }
};

// --- ОБЩИЙ КОМПОНЕНТ: СЕКРЕТНЫЙ КЛУБ (PIN-КОД) ---
const SecretClubModal = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setPin(''); setIsUnlocked(false); setError(false); }, 300);
    }
  }, [isOpen]);

  const handlePress = (val) => {
    if (isUnlocked) return;
    if (val === 'del') {
      setPin(p => p.slice(0, -1));
      setError(false);
      return;
    }
    if (pin.length < 4) {
      const newPin = pin + val;
      setPin(newPin);
      if (newPin.length === 4) {
        if (newPin === DATA.secretPin) {
          setTimeout(() => setIsUnlocked(true), 300);
        } else {
          setError(true);
          setTimeout(() => { setPin(''); setError(false); }, 800);
        }
      }
    }
  };

  return (
    <div className={`fixed inset-0 z-[110] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={onClose}></div>
      
      <div className={`w-full max-w-sm mx-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl relative transform transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-16 scale-95'}`}>
        <button onClick={onClose} className="absolute top-5 right-5 p-2 bg-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all">
          <X className="w-5 h-5" />
        </button>

        {!isUnlocked ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20">
              <Lock className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2 text-center">Private Club</h3>
            <p className="text-xs text-white/60 mb-8 text-center">Введите PIN для доступа к эксклюзивной коллекции</p>

            <div className="flex gap-4 mb-8">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`w-4 h-4 rounded-full border transition-all duration-300 ${pin.length > i ? 'bg-sky-400 border-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]' : error ? 'border-red-500 bg-red-500/30' : 'border-white/30 bg-transparent'}`} />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-x-8 gap-y-4 w-full max-w-[240px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((val, i) => (
                <div key={i} className="flex justify-center items-center h-14">
                  {val !== '' ? (
                    <button 
                      onClick={() => handlePress(val)}
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-light hover:bg-white/10 active:bg-white/20 transition-colors"
                    >
                      {val === 'del' ? <X className="w-6 h-6" /> : val}
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 border border-emerald-500/30">
              <Unlock className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="font-serif text-2xl text-white mb-2 text-center">Доступ открыт</h3>
            <p className="text-xs text-white/60 mb-6 text-center">Эксклюзивное предложение для вас</p>
            
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-6 group cursor-pointer hover:bg-white/10 transition-all">
              <img src={DATA.secretTour.img} alt="Secret" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="p-4">
                <h4 className="font-serif text-lg text-white mb-1">{DATA.secretTour.title}</h4>
                <p className="text-[10px] text-white/60 mb-3">{DATA.secretTour.desc}</p>
                <div className="text-sky-400 font-bold text-sm">{DATA.secretTour.price}</div>
              </div>
            </div>

            <a href={DATA.socials.tg} target="_blank" rel="noreferrer" className="w-full bg-sky-500 text-slate-900 font-bold rounded-xl py-3 hover:bg-sky-400 transition-colors shadow-[0_0_20px_rgba(14,165,233,0.3)] text-center block">
              Связаться в Telegram
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// --- КОМПОНЕНТ ДЛЯ АНИМАЦИИ (SCROLL REVEAL) ---
const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- КОМПОНЕНТ ДЛЯ МАГИЧЕСКОГО ПОЯВЛЕНИЯ ТЕКСТА ПО СЛОВАМ ---
const StaggeredText = ({ text, delayOffset = 0 }) => {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <React.Fragment key={i}>
          <span
            className="inline-block opacity-0"
            style={{
              animation: `textReveal 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`,
              animationDelay: `${delayOffset + i * 40}ms`
            }}
          >
            {word}
          </span>
          {i !== text.split(' ').length - 1 && ' '}
        </React.Fragment>
      ))}
    </>
  );
};

// ==========================================
// ГЛАВНЫЙ КОМПОНЕНТ (Oasis Quiet Luxury)
// ==========================================
export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [activeReview, setActiveReview] = useState(0);
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  
  // Состояние для Пожелания дня
  const [randomWish, setRandomWish] = useState('');
  const [isWishVisible, setIsWishVisible] = useState(false);

  const nextRev = () => setActiveReview(p => (p + 1) % DATA.reviews.length);
  const prevRev = () => setActiveReview(p => (p - 1 + DATA.reviews.length) % DATA.reviews.length);

  const closeQuiz = () => {
    setIsQuizOpen(false);
    setTimeout(() => setQuizStep(1), 500);
  };

  const showWish = () => {
    const w = DATA.wishes[Math.floor(Math.random() * DATA.wishes.length)];
    setRandomWish(w);
    setIsWishVisible(true);
  };

  // Сигнал для ВКонтакте
  useEffect(() => {
    const initVK = async () => {
      try {
        let attempts = 0;
        while (!window.vkBridge && attempts < 20) {
          await new Promise(r => setTimeout(r, 100));
          attempts++;
        }
        if (window.vkBridge) {
          await window.vkBridge.send('VKWebAppInit');
        }
      } catch (error) {
        console.error('VK Bridge Init Error:', error);
      }
    };
    initVK();
  }, []);

  return (
    // Светлый, небесно-голубой фон с мягким скроллом
    <div className="min-h-screen bg-[#F0F8FF] text-slate-800 font-sans relative overflow-x-hidden pb-12 w-full">
      
      <style>{`
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        @keyframes fluidMorph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>

      {/* --- ГЛОБАЛЬНЫЙ ФОН И ВИДЕО (На весь экран: манящий пляж) --- */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden">
        {/* ИНСТРУКЦИЯ ПО ЗАМЕНЕ ФОНА:
          1. Положи свое фото и видео в папку `public` твоего проекта.
          2. Назови их `bg-poster.jpg` и `bg-video.mp4`.
          3. Vite автоматически подтянет их по ссылкам `/bg-poster.jpg` и `/bg-video.mp4`.
          (Если пока файлов нет, в превью будет просто фон, как только положишь файлы — они появятся).
        */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          poster="/bg-poster.jpg" 
          style={{ animation: 'slowZoom 25s ease-in-out infinite alternate', transformOrigin: 'center' }}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          {/* Заглушка на всякий случай, если локальное видео не найдено: 
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-tropical-beach-4033-small.mp4" type="video/mp4" />
          */}
        </video>
        {/* Градиент, чтобы видео бесшовно сливалось с небесным фоном сайта внизу */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-sky-900/10 to-[#F0F8FF]"></div>
      </div>

      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#F0F8FF]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full mix-blend-multiply blur-[80px]"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-300/20 rounded-full mix-blend-multiply blur-[80px]"></div>
      </div>

      {/* РАСШИРЕННЫЙ КОНТЕЙНЕР ДЛЯ ДЕСКТОПА (max-w-6xl вместо 480px) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-8 md:pt-16">

        {/* --- 1. БЛОК: HERO (НЕВИДИМЫЙ ИНТЕРФЕЙС / PURE TEXT) --- */}
        <Reveal>
          {/* Карточка убрана, контент парит прямо над видео океана */}
          <div className="relative text-center px-2 pb-10 mb-12 md:mb-20 mt-[20vh] md:mt-[30vh] max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Аватарка стоит органично, без "абсолютного" позиционирования */}
            <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] z-30 group mb-8 md:mb-12">
              {/* Свечение капли */}
              <div 
                className="absolute inset-[-20px] bg-sky-300/20 blur-[30px] transition-all duration-700 opacity-80"
                style={{ animation: 'fluidMorph 8s ease-in-out infinite' }}
              ></div>
              {/* Сама капля с матовым стеклом */}
              <div 
                className="w-full h-full p-[2px] bg-white/10 backdrop-blur-md shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] relative z-10 overflow-hidden"
                style={{ animation: 'fluidMorph 8s ease-in-out infinite' }}
              >
                <img 
                  src={DATA.avatarUrl} 
                  alt={DATA.name} 
                  className="w-full h-full object-contain"
                  style={{ animation: 'fluidMorph 8s ease-in-out infinite' }}
                />
              </div>
              <Sparkles className="absolute top-2 right-0 md:w-10 md:h-10 w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse z-20" />
            </div>

            {/* Текст с сияющим мягким лазурным свечением */}
            <h1 className="font-serif text-[32px] md:text-6xl font-semibold text-white tracking-wide mb-3 [text-shadow:0_4px_20px_rgba(14,165,233,0.6)]">
              <StaggeredText text={`${DATA.name} ${DATA.lastName}`} delayOffset={300} />
            </h1>
            <p className="text-sky-50 font-bold text-[10px] md:text-sm uppercase tracking-[0.4em] mt-2 mb-6 opacity-0 [text-shadow:0_2px_15px_rgba(14,165,233,0.8)]" style={{ animation: 'textReveal 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards 700ms' }}>
              {DATA.role}
            </p>
            
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-6 md:mb-10 opacity-0 drop-shadow-[0_2px_10px_rgba(14,165,233,0.5)]" style={{ animation: 'textReveal 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards 800ms' }}></div>
            
            <p className="font-serif italic text-white text-[16px] md:text-2xl leading-relaxed px-2 md:px-12 [text-shadow:0_4px_25px_rgba(14,165,233,0.7)]">
              <StaggeredText text="«Открываю для вас мир Quiet Luxury. Путешествия, где важна каждая деталь, а сервис незаметен, но безупречен.»" delayOffset={900} />
            </p>
          </div>
        </Reveal>

        {/* --- ГРУППИРОВКА: ПОЖЕЛАНИЕ И ОБО МНЕ (В 2 колонки на десктопе) --- */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-14 md:mb-20 max-w-5xl mx-auto">
            
            {/* --- ПОЖЕЛАНИЕ ДНЯ --- */}
            <div className="bg-gradient-to-br from-sky-50 to-white/60 backdrop-blur-md border border-sky-200/60 p-6 md:p-10 rounded-3xl shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center h-full">
              <Sparkles className="w-8 h-8 text-sky-400 mb-3 md:mb-5 opacity-80" />
              <h2 className="font-serif text-xl md:text-2xl text-slate-800 font-medium mb-2 md:mb-4">Пожелание дня</h2>
              
              {!isWishVisible ? (
                <button onClick={showWish} className="mt-2 px-6 py-3 bg-sky-600/10 text-sky-700 hover:bg-sky-600/20 rounded-full font-medium transition-colors text-sm md:text-base border border-sky-600/20">
                  ✨ Открыть послание
                </button>
              ) : (
                <p className="text-slate-600 font-serif italic text-[15px] md:text-lg leading-relaxed animate-in fade-in zoom-in-95 duration-500">
                  "{randomWish}"
                </p>
              )}
            </div>

            {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ --- */}
            <div className="bg-white/70 backdrop-blur-md border border-white p-6 md:p-10 rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md shadow-md relative flex flex-col justify-center h-full">
              <div className="absolute -top-4 -left-1 text-5xl md:text-6xl text-sky-200 font-serif opacity-70">"</div>
              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed relative z-10">
                {DATA.aboutText}
              </p>
              <div className="mt-6 md:mt-8 flex justify-end">
                <span className="font-serif italic text-sky-600 text-lg md:text-xl border-b border-sky-200/50 pb-1 pr-2">
                  С любовью, {DATA.name} {DATA.lastName}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- КНОПКА: ПОДОБРАТЬ ТУР (Ограничена по ширине) --- */}
        <Reveal delay={150}>
          <div className="mb-14 md:mb-20 px-2 max-w-sm mx-auto">
            <a href={DATA.socials.tg} target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-lg shadow-sky-500/30 rounded-2xl py-4 flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
              <Plane className="w-5 md:w-6 h-5 md:h-6" />
              <span className="font-serif text-lg md:text-xl font-medium">Подобрать тур</span>
            </a>
          </div>
        </Reveal>

        {/* --- 3. БЛОК: 3D-ГЛОБУС & КВИЗ --- */}
        <Reveal>
          <div className="relative mb-14 md:mb-24">
            <h2 className="text-center font-serif text-2xl md:text-4xl text-slate-800 mb-8 font-medium">Куда отправимся <br className="md:hidden"/><span className="text-sky-500 italic md:ml-2">в этот раз?</span></h2>
            
            <div className="relative flex justify-center items-center h-[280px] md:h-[360px]">
              <button 
                onClick={() => setIsQuizOpen(true)}
                className={`relative z-20 w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full transition-all duration-700 ease-out shadow-[0_20px_50px_rgba(6,182,212,0.3)]
                  ${isQuizOpen ? 'scale-90 blur-md opacity-60' : 'hover:scale-105'}`}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden border-[6px] md:border-[8px] border-white bg-cyan-100">
                  <img 
                    src="https://i0.wp.com/images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&strip=all" 
                    alt="Ocean Globe" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 via-transparent to-white/40 mix-blend-overlay rounded-full"></div>
                  <div className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.2)] md:shadow-[inset_-30px_-30px_50px_rgba(0,0,0,0.2)] pointer-events-none"></div>
                </div>
                
                {!isQuizOpen && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg flex items-center gap-2">
                      <span className="font-bold text-cyan-800 text-sm md:text-base">Пройти квиз</span>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" />
                    </div>
                  </div>
                )}
              </button>

              {/* ВЫЕЗЖАЮЩАЯ ПАНЕЛЬ КВИЗА (По центру на десктопе) */}
              <div className={`absolute top-10 md:top-16 left-0 right-0 mx-auto w-full max-w-md bg-white border border-white rounded-[2rem] shadow-2xl p-6 md:p-8 transition-all duration-500 z-30 ${isQuizOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-20 opacity-0 invisible pointer-events-none'}`}>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] md:text-xs text-sky-600 uppercase tracking-[0.2em] font-medium">
                    {quizStep < 4 ? `Шаг ${quizStep} из 3` : 'Готово'}
                  </span>
                  <button onClick={closeQuiz} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors">
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                {quizStep === 1 && (
                  <div className="animate-in fade-in zoom-in-95 duration-300">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-2">Куда тянет душу?</h3>
                    <p className="text-sm md:text-base text-slate-500 mb-6">Выберите идеальную картинку отдыха</p>
                    <div className="space-y-3">
                      {['Белоснежные пляжи и релакс', 'Активный отдых и горы', 'Европейские улочки', 'Экзотика и джунгли'].map((option, i) => (
                        <button key={i} onClick={() => setQuizStep(2)} className="w-full text-left px-5 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-100 text-sm md:text-base font-medium text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-colors flex justify-between items-center group">
                          {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-2">С кем полетите?</h3>
                    <p className="text-sm md:text-base text-slate-500 mb-6">Это поможет подобрать правильный отель</p>
                    <div className="space-y-3">
                      {['Вдвоем (Романтика)', 'Семьей (С детьми)', 'Соло (Перезагрузка)', 'Шумной компанией'].map((option, i) => (
                        <button key={i} onClick={() => setQuizStep(3)} className="w-full text-left px-5 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-100 text-sm md:text-base font-medium text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-colors flex justify-between items-center group">
                          {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-2">Ваш контакт?</h3>
                    <p className="text-sm md:text-base text-slate-500 mb-6">Оставьте Telegram или WhatsApp, я пришлю 3 лучших варианта под ваш запрос.</p>
                    <div className="space-y-4">
                      <input 
                        type="tel" 
                        placeholder="+7 (999) 000-00-00" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 md:py-5 text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 md:text-lg"
                      />
                      <button 
                        onClick={() => setQuizStep(4)} 
                        className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold rounded-2xl py-4 md:py-5 text-lg hover:shadow-lg hover:shadow-sky-500/30 transition-all"
                      >
                        Получить подборку
                      </button>
                    </div>
                  </div>
                )}

                {quizStep === 4 && (
                  <div className="text-center py-6 md:py-10 animate-in zoom-in-90 duration-500">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-emerald-200">
                      <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-emerald-500" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">Запрос принят!</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 md:mb-10">Я уже начала готовить для вас идеальные варианты. Напишу в ближайшее время.</p>
                    <button onClick={closeQuiz} className="w-full bg-slate-100 text-slate-700 font-bold rounded-2xl py-4 md:py-5 text-lg hover:bg-slate-200 transition-colors">
                      Отлично, жду
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </Reveal>

        {/* --- 4. БЛОК: АВТОРСКИЕ ТУРЫ (СЕТКА) --- */}
        <Reveal>
          <div className="mb-14 md:mb-24">
            <div className="flex justify-between items-end mb-6 md:mb-10">
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-medium">Авторские <br className="md:hidden"/><span className="text-sky-500 italic md:ml-2">маршруты</span></h2>
              <button className="text-xs md:text-sm font-bold uppercase tracking-wider text-cyan-600 mb-1 hover:text-sky-500 transition-colors">Все туры</button>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {DATA.tours.map((tour, idx) => (
                <div key={idx} className="relative h-[220px] md:h-[320px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e38]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white group-hover:bg-white group-hover:text-cyan-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white">
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-sky-200 mb-1 md:mb-2 font-semibold drop-shadow-md">{tour.desc}</p>
                    <h3 className="font-serif text-lg md:text-2xl font-medium drop-shadow-md">{tour.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* --- 5. БЛОК: КРУИЗЫ --- */}
        <Reveal>
          <div className="mb-14 md:mb-24">
            <div className="flex justify-between items-end mb-6 md:mb-10">
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-medium">Морские <br className="md:hidden"/><span className="text-cyan-600 italic md:ml-2">круизы</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {DATA.cruises.map(cruise => (
                <div key={cruise.id} className="group relative h-32 md:h-48 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex border border-white/80 bg-white/40 cursor-pointer">
                  <img src={cruise.img} alt={cruise.title} className="w-1/3 md:w-2/5 h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="w-2/3 md:w-3/5 bg-white/70 backdrop-blur-md p-4 md:p-8 flex flex-col justify-center relative">
                    <div className="absolute top-3 right-4 md:top-5 md:right-6 text-cyan-600/40 group-hover:text-cyan-500 transition-colors">
                      <Ship className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <h3 className="font-serif text-lg md:text-2xl text-slate-800 font-medium leading-tight">{cruise.title}</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 mt-2 md:mt-4">{cruise.ship}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* --- 6. БЛОК: ГОРЯЩИЕ ТУРЫ --- */}
        <Reveal>
          <div className="mb-14 md:mb-24 -mx-5 md:mx-0">
            <div className="px-5 md:px-0 mb-6 md:mb-10">
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-medium">Специальные <br className="md:hidden"/><span className="text-sky-500 italic md:ml-2">предложения</span></h2>
            </div>
            
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto gap-5 px-5 md:px-0 pb-8 pt-2 snap-x snap-mandatory md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {DATA.hotTours.map((deal) => (
                <div key={deal.id} className="min-w-[260px] md:min-w-0 snap-center bg-white border border-white rounded-[2rem] p-3 md:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative h-[160px] md:h-[220px] rounded-2xl overflow-hidden mb-4">
                    <img src={deal.img} alt={deal.hotelName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-sky-400 to-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      Осталось мало мест
                    </div>
                  </div>
                  
                  <div className="px-2 pb-2">
                    <h4 className="font-serif text-lg md:text-xl font-bold text-slate-800">{deal.hotelName}</h4>
                    <div className="flex items-center gap-1 text-slate-500 text-xs md:text-sm mt-1 mb-4 md:mb-6">
                      <MapPin className="w-3 h-3 text-cyan-500" /> {deal.loc}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[9px] md:text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-0.5 line-through">{deal.oldPrice}</p>
                        <p className="font-serif text-xl md:text-3xl font-bold text-sky-600">{deal.price}</p>
                      </div>
                      <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors shadow-sm">
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* --- 7. БЛОК: НОВОСТИ --- */}
        <Reveal>
          <div className="mb-14 md:mb-24 px-1 md:px-0">
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <Newspaper className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-medium">Новости <span className="text-sky-500 italic">&</span> Вдохновение</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {DATA.news.map(item => (
                <div key={item.id} className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-sm items-center hover:shadow-md transition-shadow">
                  <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-sky-100/50 rounded-2xl md:rounded-3xl text-sky-700 border border-sky-200/50">
                    <span className="text-lg md:text-2xl font-serif font-bold leading-none">{item.date.split(' ')[0]}</span>
                    <span className="text-[9px] md:text-[11px] uppercase font-bold tracking-widest mt-0.5 md:mt-1">{item.date.split(' ')[1]}</span>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* --- ОТЗЫВЫ --- */}
        <Reveal>
          <div className="mb-14 md:mb-24 px-5 md:px-0 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-sky-200"></div>
              <h2 className="font-serif text-xl md:text-3xl text-slate-800 font-medium italic">Впечатления</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-sky-200"></div>
            </div>
            
            <div className="relative border-t border-b border-sky-200/40 py-8 md:py-16 px-2 md:px-8 text-center flex flex-col justify-between bg-white/60 backdrop-blur-sm rounded-3xl min-h-[260px] md:min-h-[350px] shadow-md">
              <div className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-5 md:h-5 text-sky-400 fill-sky-400" />
                ))}
              </div>

              <div className="relative flex-1 flex flex-col justify-center items-center mt-6 mb-8 w-full min-h-[100px] md:min-h-[160px]">
                {DATA.reviews.map((review, i) => (
                  <div key={review.id} className={`absolute inset-0 px-4 md:px-12 transition-all duration-700 ease-in-out flex items-center justify-center ${i === activeReview ? 'opacity-100 blur-none z-10' : 'opacity-0 blur-sm pointer-events-none z-0'}`}>
                    <p className="font-serif text-slate-700 italic text-[15px] md:text-xl leading-relaxed md:leading-loose line-clamp-4 md:line-clamp-none max-w-2xl mx-auto">
                      "{review.text}"
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between w-full px-4 md:px-10 relative z-20 h-[70px] md:h-[90px]">
                <button onClick={prevRev} className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-sky-200/60 flex items-center justify-center hover:bg-sky-50 hover:border-sky-400 transition-all text-sky-600/70 hover:text-sky-500 bg-white shadow-sm">
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6 rotate-180" />
                </button>
                
                <div className="relative w-[120px] md:w-[160px] h-full flex justify-center">
                  {DATA.reviews.map((review, i) => (
                    <div key={review.id} className={`absolute inset-0 flex flex-col items-center transition-all duration-500 ${i === activeReview ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 pointer-events-none z-0'}`}>
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full mb-1.5 md:mb-2 ring-2 ring-sky-100 shadow-sm flex items-center justify-center bg-gradient-to-br from-sky-100 to-sky-50 text-sky-700 font-bold font-serif text-lg md:text-2xl shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-800 truncate w-full text-center">{review.name}</span>
                    </div>
                  ))}
                </div>
                
                <button onClick={nextRev} className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-sky-200/60 flex items-center justify-center hover:bg-sky-50 hover:border-sky-400 transition-all text-sky-600/70 hover:text-sky-500 bg-white shadow-sm">
                  <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- СЕКРЕТНЫЙ КЛУБ --- */}
        <Reveal>
          <div className="w-full mb-12 md:mb-20 px-5 md:px-0 relative z-10 max-w-md mx-auto">
            <button onClick={() => setIsSecretOpen(true)} className="w-full bg-sky-600/10 border border-sky-600/20 text-sky-700 py-4 md:py-5 rounded-2xl flex items-center justify-center gap-3 md:gap-4 group hover:bg-sky-600/20 transition-all backdrop-blur-md">
              <Lock className="w-4 h-4 md:w-5 md:h-5 opacity-70 group-hover:scale-110 transition-transform" />
              <span className="font-serif italic text-lg md:text-xl">Закрытая коллекция</span>
            </button>
          </div>
          <SecretClubModal isOpen={isSecretOpen} onClose={() => setIsSecretOpen(false)} />
        </Reveal>

        {/* --- ФУТЕР --- */}
        <Reveal>
          <div className="mb-8 md:mb-12 w-full">
            <div className="flex flex-col items-center px-5 md:px-0">
              <div className="flex items-center justify-center gap-3 mb-6 md:mb-8 w-full max-w-[200px] md:max-w-[400px]">
                <div className="h-[1px] flex-1 bg-sky-200/50"></div>
                <span className="font-serif italic text-slate-500 text-sm md:text-lg">Мои контакты</span>
                <div className="h-[1px] flex-1 bg-sky-200/50"></div>
              </div>
              
              <div className="flex justify-center gap-6 md:gap-10">
                {/* Telegram */}
                <a href={DATA.socials.tg} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-sky-200/50 bg-white shadow-md flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all group">
                  <Send className="w-5 h-5 md:w-7 md:h-7 text-sky-600/70 group-hover:text-sky-500 group-hover:scale-110 transition-all" />
                </a>
                {/* VK */}
                <a href={DATA.socials.vk} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-sky-200/50 bg-white shadow-md flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all group">
                  <VKIcon className="w-5 h-5 md:w-7 md:h-7 text-sky-600/70 group-hover:text-sky-500 group-hover:scale-110 transition-all" />
                </a>
                {/* Instagram */}
                <a href={DATA.socials.insta} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-sky-200/50 bg-white shadow-md flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all group">
                  <Instagram className="w-5 h-5 md:w-7 md:h-7 text-sky-600/70 group-hover:text-sky-500 group-hover:scale-110 transition-all" />
                </a>
              </div>
              
              <p className="text-center text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mt-10 md:mt-16 pb-4">
                © {DATA.name} {DATA.lastName} • Quiet Luxury
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}