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

// =========================================================================
// ⬇️⬇️⬇️ БЛОК ДЛЯ РЕДАКТИРОВАНИЯ (МЕНЯЙТЕ ДАННЫЕ ТОЛЬКО ЗДЕСЬ) ⬇️⬇️⬇️
// Все тексты, ссылки, контакты и картинки вынесены сюда для удобства.
// Подсказка по картинкам: можно вставлять ссылки из интернета (https://...)
// или загружать свои файлы в папку public (например, писать "/photo.jpg")
// =========================================================================
const DATA = {
  // --- ОСНОВНАЯ ИНФОРМАЦИЯ ---
  name: "Марина",
  lastName: "Хавруцкая",
  
  // ФОНОВЫЕ ИЗОБРАЖЕНИЯ (Для мобильного и компьютера)
  bgMobile: "/bg-poster.png",          // Вертикальное фото для телефона
  bgDesktop: "/bg-poster-desktop.png", // Горизонтальное фото для широких экранов
  
  // Должность (текст на одной строке)
  roleText: "Основатель и руководитель турагентства",
  // ССЫЛКА НА ЛОГОТИП (сохраните вашу картинку как logo.png в папку public)
  roleLogo: "/logo.png",
  
  badge: "20 лет опыта",
  aboutText: "Я не просто подбираю туры, я создаю путешествия (в том числе авторские), в которые хочется возвращаться. 20 лет опыта. Знаю скрытые жемчужины по всему миру, лично инспектирую отели и создаю безупречный сервис, в котором продумана каждая деталь и безопасность вашего отдыха.",
  
  // --- СОЦИАЛЬНЫЕ СЕТИ И КОНТАКТЫ ---
  socials: {
    tg: "https://t.me/turysuper",
    vk: "https://vk.com/turysuper777",
    insta: "https://www.instagram.com/newbreath.travel?igsh=czgydGwzMnRtZndu&utm_source=qr"
  },

  // --- АВТОРСКИЕ МАРШРУТЫ (Секция с сеткой туров) ---
  tours: [
    { id: 1, title: "Бали", desc: "Джунгли и океан", img: "https://i0.wp.com/images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&strip=all", link: "https://t.me/turysuper" },
    { id: 2, title: "Все Авторские туры", desc: "Полная коллекция", img: "https://i0.wp.com/images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&strip=all", link: "https://t.me/turysuper" }
  ],
  
  // --- ГОРЯЩИЕ ТУРЫ (Специальные предложения) ---
  // Сюда вы вставите ссылку на опубликованную вкладку "ГОРЯЩИЕ ТУРЫ" в формате TSV
  // ВАЖНО: При публикации (Файл -> Поделиться -> Опубликовать в интернете) 
  // обязательно выберите вкладку "ГОРЯЩИЕ ТУРЫ" (вместо "Весь документ") и формат "TSV" (.tsv)!
  // ПОДСКАЗКА ПО СТОЛБЦАМ ТАБЛИЦЫ:
  // Столбец B: title (Гео)          Столбец F: price (Новая цена)
  // Столбец C: dates (Даты)         Столбец G: rating (Рейтинг)
  // Столбец D: hotel (Отель)        Столбец H: imageUrl (Фото)
  // Столбец E: oldPrice (Стар.цена) Столбец I: bookingLink (Ссылка)
  hotToursSheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXue1d4HdwJdKy2Q68NuZxGEyQiV-I34yoCorqQH83EJR2PLa8lkLBh0Lx7DT8F_p6Yn7_K1VHTpNO/pub?gid=536176768&single=true&output=tsv",
  
  hotTours: [],
  
  // --- КРУИЗЫ ---
  cruises: [
    { id: 1, title: "Средиземноморье", ship: "Astoria Grande", img: "https://i0.wp.com/images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&strip=all" },
    { id: 2, title: "Персидский залив", ship: "MSC Virtuosa", img: "https://i0.wp.com/images.unsplash.com/photo-1548574505-5e239809ee19?w=600&strip=all" }
  ],
  
  // --- НОВОСТИ ---
  // Сюда вы вставите ссылку на опубликованную вкладку "Новости" в формате TSV (инструкция ниже)
  newsSheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrEIxf7RjorBv2_SfnngsQ5Ts3hU4t2REiEhXmpS68-gOidooeEBaxAvlz4jHU4EvzjPyoZZYD_Xuv/pub?gid=0&single=true&output=tsv",

  // Старые новости удалены. Теперь они подтягиваются СТРОГО из Google Таблицы
  news: [],
  
  // --- ПОЖЕЛАНИЯ ДНЯ (Случайный выбор) ---
  // Вставьте ссылку на опубликованную вкладку "ПОЖЕЛАНИЯ" (Формат TSV)
  // ПОДСКАЗКА: Просто пишите тексты пожеланий в первый столбец друг под другом.
  wishesSheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXue1d4HdwJdKy2Q68NuZxGEyQiV-I34yoCorqQH83EJR2PLa8lkLBh0Lx7DT8F_p6Yn7_K1VHTpNO/pub?gid=43878386&single=true&output=tsv",
  
  // Старые тексты удалены! Теперь они подтягиваются из Google Таблицы
  wishes: [],
  
  // --- ОТЗЫВЫ КЛИЕНТОВ ---
  // 1. Ссылка на опубликованную вкладку "ОПУБЛИКОВАННЫЕ ОТЗЫВЫ" (Формат TSV)
  // ВАЖНО: Убедитесь, что gid=... в конце этой ссылки ведет именно на "Опубликованные отзывы", а не на "Новые отзывы"
  // Столбцы: A: Имя | B: Дата | C: Оценка | D: Текст | E: Фото (ссылка, необязательно)
  reviewsSheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXue1d4HdwJdKy2Q68NuZxGEyQiV-I34yoCorqQH83EJR2PLa8lkLBh0Lx7DT8F_p6Yn7_K1VHTpNO/pub?gid=1406883491&single=true&output=tsv",

  // 2. Ссылка на Веб-приложение (Google Apps Script), куда будут прилетать новые отзывы
  // ❌ ОШИБКА: Вы скопировали ссылку на "библиотеку" (в ней есть слово /library/).
  // ✅ ПРАВИЛЬНО: Ссылка на веб-приложение ВСЕГДА содержит "/macros/s/" и заканчивается на "/exec"
  // КАК ПОЛУЧИТЬ ПРАВИЛЬНУЮ: 
  // 1. В гугл-скрипте нажмите синюю кнопку (справа вверху) "Начать развертывание" (Deploy) -> "Новое развертывание". 
  // 2. Нажмите на шестеренку и выберите тип "Веб-приложение".
  // 3. В поле "У кого есть доступ" выберите "Все" (Anyone). 
  // 4. Нажмите "Начать развертывание". 
  // 5. В появившемся окне скопируйте "URL веб-приложения" (нижняя строчка) и вставьте её сюда:
  reviewsScriptUrl: "https://script.google.com/macros/s/AKfycbxdfO2VfxBAjwaghkhYqExp4gt-UVF0Bn_f9LpE4IkJrAXKfVefN6W5_LwX1rvYG00J/exec",
  
  // Тестовые отзывы удалены! Теперь они подтягиваются из вкладки "Опубликованные отзывы"
  reviews: [],
  
  // --- СЕКРЕТНЫЙ КЛУБ ---
  secretPin: "7777", // Ваш PIN-код
  secretTour: {
    title: "Private Island Resort",
    desc: "Полная приватность, личный батлер и перелет на гидроплане. Скрыто от посторонних глаз.",
    price: "По запросу",
    img: "https://i0.wp.com/images.unsplash.com/photo-1599619351208-3e6c839d6828?w=800&strip=all"
  },
  
  // --- ГАЛЕРЕЯ (Атмосфера путешествий) ---
  // ВАЖНО: Убедитесь, что эта ссылка отличается от ссылки на "Горящие туры"!
  // У каждой вкладки свой уникальный номер (gid=...) в конце ссылки. 
  // Выберите именно вкладку "ФОТОГАЛЕРЕЯ" при публикации.
  gallerySheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXue1d4HdwJdKy2Q68NuZxGEyQiV-I34yoCorqQH83EJR2PLa8lkLBh0Lx7DT8F_p6Yn7_K1VHTpNO/pub?gid=1706560007&single=true&output=tsv",
  
  // Тестовые фото удалены! Теперь все тянется ТОЛЬКО из таблицы по ссылке выше.
  gallery: [],

  // --- ФУТЕР И ПРАВОВАЯ ИНФОРМАЦИЯ ---
  footer: {
    copyrightYear: "2026",
    creatorText: "DESIGN & CODE BY ELENA SOTNIKOVA",
    creatorLink: "https://nice-app.ru/",
    policyTitle: "Политика конфиденциальности",
    policyText: "здесь будет политика....",
    agreementTitle: "Пользовательское соглашение",
    agreementText: "здесь будет пользовательское...."
  }
};
// =========================================================================
// ⬆️⬆️⬆️ КОНЕЦ БЛОКА РЕДАКТИРОВАНИЯ ⬆️⬆️⬆️
// =========================================================================

// --- КОМПОНЕНТ: СТЕКЛЯННАЯ БОКОВАЯ ПАНЕЛЬ "ОБО МНЕ" (DRAWER) ---
const AboutDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[120] flex justify-end transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-700" onClick={onClose}></div>
      
      <div className={`w-full md:w-[440px] h-[100dvh] bg-white/85 backdrop-blur-2xl border-l border-white/50 shadow-2xl relative transform transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute top-4 right-4 md:top-5 md:right-5 z-20">
          <button onClick={onClose} className="p-2 md:p-3 bg-white/80 backdrop-blur-md rounded-full text-slate-500 hover:text-slate-800 hover:bg-white shadow-sm border border-white/60 transition-all">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        <div className="px-6 md:px-10 pt-16 md:pt-20 pb-10 flex-1 flex flex-col">
          {/* Журнальное прямоугольное фото */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-white/60 mb-8">
            <img src="/avatar.jpg" alt={DATA.name} className="w-full h-[380px] object-cover" />
          </div>

          {/* Текст манифеста */}
          <div className="flex-1">
            <h2 className="font-serif text-3xl text-slate-800 font-light tracking-wide mb-6">Давайте знакомиться</h2>
            <p className="text-slate-600 font-light tracking-wide leading-relaxed text-[17px]">
              {DATA.aboutText}
            </p>
          </div>
          
          {/* Элегантная подпись */}
          <div className="mt-10 pt-8 border-t border-slate-200/50">
            <div className="flex justify-end">
              <span className="font-serif font-light tracking-wide text-sky-600 text-xl border-b border-sky-200/50 pb-1 pr-2">
                С любовью, {DATA.name} {DATA.lastName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
    <div className={`fixed inset-0 z-[160] flex items-center justify-center transition-all duration-300 ease-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Очень темный, густой блюр для эффекта "закрытой двери" */}
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-lg" onClick={onClose}></div>
      
      <div className={`w-full max-w-sm mx-4 relative transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
        
        {!isUnlocked ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-500 bg-slate-900/50 p-10 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Декоративный блик */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
            
            <button onClick={onClose} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl text-white mb-2 text-center font-light tracking-widest uppercase">Private</h3>
            <div className="w-8 h-[1px] bg-sky-500/50 mb-6"></div>
            <p className="text-[10px] text-white/40 mb-10 text-center font-light tracking-[0.2em] uppercase">Введите код доступа</p>

            {/* Точки PIN-кода */}
            <div className="flex gap-6 mb-10">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="relative flex items-center justify-center w-4 h-4">
                  <div className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-300 ${pin.length > i ? 'bg-sky-400 scale-[2] shadow-[0_0_12px_rgba(56,189,248,0.8)]' : error ? 'bg-red-500 scale-100' : 'bg-white/20 scale-100'}`} />
                </div>
              ))}
            </div>

            {/* Клавиатура */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-6 w-full max-w-[260px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((val, i) => (
                <div key={i} className="flex justify-center items-center h-12">
                  {val !== '' ? (
                    <button 
                      onClick={() => handlePress(val)}
                      className="w-12 h-12 flex items-center justify-center text-white/60 hover:text-white text-3xl font-serif font-light transition-all hover:scale-110 active:scale-95"
                    >
                      {val === 'del' ? <X className="w-6 h-6 text-white/60" /> : val}
                    </button>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* СОСТОЯНИЕ: РАЗБЛОКИРОВАНО (Элитная карточка-приглашение) */
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="w-full bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-700/50 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden text-center group">
              {/* Эффект свечения на фоне */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-sky-500/10 blur-[50px] pointer-events-none"></div>
              
              <button onClick={onClose} className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors z-20">
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full border border-sky-400/30 flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-sky-400/10 animate-ping opacity-20"></div>
                <Unlock className="w-6 h-6 text-sky-400 relative z-10" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 font-light tracking-wide">Доступ открыт</h3>
              <p className="text-sm md:text-base text-slate-400 mb-10 font-light tracking-wide leading-relaxed">
                Добро пожаловать в закрытую коллекцию и VIP-сообщество. Здесь начинается самое интересное.
              </p>

              {/* Ссылка на закрытую группу (Использует Telegram из DATA.socials) */}
              <a href={DATA.socials.tg} target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center gap-3 w-full bg-white text-slate-900 font-medium tracking-widest uppercase text-xs md:text-sm py-5 rounded-2xl hover:bg-sky-50 transition-colors overflow-hidden group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span className="relative z-10 flex items-center gap-2">Перейти в клуб <ArrowUpRight className="w-4 h-4" /></span>
              </a>
            </div>
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

// --- КОМПОНЕНТ ДЛЯ ПОИСКА КРУИЗОВ (INFOFLOT WIDGET) ---
const CruiseWidget = () => {
  useEffect(() => {
    const initWidget = () => {
      const container = document.querySelector('.infoflotWidget');
      if (container) container.innerHTML = ''; // Очищаем старые айфреймы при переоткрытии
      
      if (window.createInfoflotWidget) {
        window.createInfoflotWidget("https://bitrix.infoflot.com/rest/api/search.filter/", {
          key: "YTo0OntzOjI6IklEIjtpOjUyMTQ7czo0OiJVU0VSIjtzOjI4OiJibVYzWW5KbFlYUm9RR2x1ZEdWeWJtVjBMbkoxIjtzOjY6IlJBTkRPTSI7czo4OiJhb2hqcHFrbyI7czoxNToiSU5GT0ZMT1QtQVBJS0VZIjtzOjQwOiI3NDQ1ZGFkOGE3OWZkMWExZDVhZTE0NDJhYTIyZWQ4ZTU0ZmJiZmE2Ijt9",
          referer: encodeURIComponent(window.location.href)
        });
      }
    };

    if (!document.getElementById('infoflot-script')) {
      const script = document.createElement('script');
      script.id = 'infoflot-script';
      script.src = "https://bitrix.infoflot.com/local/templates/infoflot/frontend/js/infoflotIframe.js";
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    } else {
      setTimeout(initWidget, 50);
    }
  }, []);

  return (
    <div 
      className="w-full h-full"
      dangerouslySetInnerHTML={{
        __html: `<div class="infoflotWidget w-full h-full min-h-[600px] rounded-2xl overflow-hidden" data-id="YTo0OntzOjI6IklEIjtpOjUyMTQ7czo0OiJVU0VSIjtzOjI4OiJibVYzWW5KbFlYUm9RR2x1ZEdWeWJtVjBMbkoxIjtzOjY6IlJBTkRPTSI7czo4OiJhb2hqcHFrbyI7czoxNToiSU5GT0ZMT1QtQVBJS0VZIjtzOjQwOiI3NDQ1ZGFkOGE3OWZkMWExZDVhZTE0NDJhYTIyZWQ4ZTU0ZmJiZmE2Ijt9" data-index="1"></div>`
      }}
    />
  );
};

// --- КОМПОНЕНТ МОДАЛЬНОГО ОКНА ДЛЯ ОТПРАВКИ ОТЗЫВА ---
const LeaveReviewModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(''); // Добавлено поле для фото
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { 
        setStep(1); setRating(5); setName(''); setDate(''); setText(''); setPhoto(''); setIsSubmitting(false);
      }, 500);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!name.trim() || !text.trim()) return; // Проверка, что поля не пустые
    
    if (!DATA.reviewsScriptUrl) {
      setStep(2); // Если скрипт не подключен, просто показываем "Готово"
      return;
    }

    setIsSubmitting(true);
    
    // Отправляем данные в Google Script
    fetch(DATA.reviewsScriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Важно для обхода блокировок Google
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // Исправлено для 100% доставки с любых устройств
      body: JSON.stringify({ name, date, rating, text, photo }) // Добавили фото
    }).then(() => {
      setIsSubmitting(false);
      setStep(2);
    }).catch((err) => {
      console.error('Ошибка отправки:', err);
      setIsSubmitting(false);
      setStep(2); // Показываем успех даже при ошибке no-cors (особенность Google Script)
    });
  };

  return (
    <div className={`fixed inset-0 z-[150] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose}></div>
      <div className={`relative w-full max-w-lg mx-4 bg-white border border-white rounded-[2rem] shadow-2xl p-6 md:p-8 transition-all duration-500 transform ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
        
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] md:text-xs text-sky-600 uppercase tracking-widest font-medium">
            {step === 1 ? 'Новый отзыв' : 'Готово'}
          </span>
          <button onClick={onClose} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {step === 1 ? (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-slate-800 mb-2">Ваши впечатления</h3>
            <p className="text-sm md:text-base text-slate-500 font-light tracking-wide mb-6">Поделитесь эмоциями от вашего путешествия</p>
            
            <div className="space-y-4">
              {/* Оценка */}
              <div className="flex items-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setRating(star)} className="focus:outline-none transition-transform hover:scale-110">
                    <Star className={`w-8 h-8 md:w-10 md:h-10 ${star <= rating ? 'text-amber-300 fill-amber-300' : 'text-slate-200'}`} />
                  </button>
                ))}
              </div>

              <input 
                type="text" 
                placeholder="Ваше имя" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 md:py-4 text-slate-800 font-light tracking-wide focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" 
              />
              <input 
                type="text" 
                placeholder="Дата (ДД-ММ-ГГГГ)" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 md:py-4 text-slate-800 font-light tracking-wide focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" 
              />
              <input 
                type="text" 
                placeholder="Ссылка на фото (по желанию)" 
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 md:py-4 text-slate-800 font-light tracking-wide focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400" 
              />
              <textarea 
                placeholder="Пару слов об отдыхе..." 
                rows="3" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 md:py-4 text-slate-800 font-light tracking-wide focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
              ></textarea>
              
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting || !name.trim() || !text.trim()}
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium tracking-wide rounded-2xl py-4 mt-2 hover:shadow-lg hover:shadow-sky-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 md:py-10 animate-in zoom-in-90 duration-500">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border border-sky-100">
              <Star className="w-10 h-10 md:w-12 md:h-12 text-sky-500 fill-sky-500" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-slate-800 mb-3">Благодарю!</h3>
            <p className="text-slate-600 font-light tracking-wide text-sm md:text-base leading-relaxed mb-8">Ваш отзыв очень ценен для меня. Он появится на сайте после модерации.</p>
            <button onClick={onClose} className="w-full bg-slate-100 text-slate-700 font-medium tracking-wide rounded-2xl py-4 hover:bg-slate-200 transition-colors">
              Вернуться
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// ГЛАВНЫЙ КОМПОНЕНТ (Oasis Quiet Luxury)
// ==========================================
export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // Состояние для панели "Обо мне"
  const [quizStep, setQuizStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [activeReview, setActiveReview] = useState(0);
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Модалка для фото
  
  const [selectedNews, setSelectedNews] = useState(null); // Модалка конкретной новости
  const [isAllNewsOpen, setIsAllNewsOpen] = useState(false); // Шторка всех новостей
  const [newsPage, setNewsPage] = useState(1); // Пагинация новостей
  const [newsList, setNewsList] = useState(DATA.news); // Данные новостей
  
  const [hotToursList, setHotToursList] = useState(DATA.hotTours); // Данные спецпредложений
  const [galleryList, setGalleryList] = useState([]); // Данные галереи теперь строго пустые по умолчанию, ждем загрузки из таблицы

  // --- ДРАГ И АВТО-СКРОЛЛ ДЛЯ ГАЛЕРЕИ ---
  const galleryRef = React.useRef(null);
  const [isGalleryDragging, setIsGalleryDragging] = useState(false);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);
  const galleryStartX = React.useRef(0);
  const galleryScrollLeft = React.useRef(0);
  const galleryDragged = React.useRef(false);

  const handleGalleryMouseDown = (e) => {
    setIsGalleryDragging(true);
    galleryDragged.current = false;
    galleryStartX.current = e.pageX - galleryRef.current.offsetLeft;
    galleryScrollLeft.current = galleryRef.current.scrollLeft;
  };
  const handleGalleryMouseLeave = () => {
    setIsGalleryDragging(false);
    setIsGalleryHovered(false);
  };
  const handleGalleryMouseUp = () => {
    setIsGalleryDragging(false);
    setTimeout(() => { galleryDragged.current = false; }, 50); // Защита от ложного клика
  };
  const handleGalleryMouseMove = (e) => {
    if (!isGalleryDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - galleryStartX.current) * 2;
    if (Math.abs(walk) > 10) galleryDragged.current = true;
    galleryRef.current.scrollLeft = galleryScrollLeft.current - walk;
  };
  const handleGalleryTouchStart = () => setIsGalleryDragging(true);
  const handleGalleryTouchEnd = () => setIsGalleryDragging(false);

  // Авто-скролл галереи
  useEffect(() => {
    let animationId;
    const step = () => {
      if (galleryRef.current && !isGalleryHovered && !isGalleryDragging && !selectedImage && galleryList.length > 0) {
        galleryRef.current.scrollLeft += 1; // Скорость прокрутки
        
        if (galleryRef.current.children.length > 2) {
          const spacerWidth = galleryRef.current.children[0].offsetWidth;
          const setWidth = galleryRef.current.children[1].offsetWidth;
          
          // Бесшовный бесконечный цикл
          if (galleryRef.current.scrollLeft >= spacerWidth + setWidth * 2) {
            galleryRef.current.scrollLeft -= setWidth;
          }
        }
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isGalleryHovered, isGalleryDragging, selectedImage, galleryList]);
  
  const [reviewsList, setReviewsList] = useState([]); // Отзывы из таблицы
  const [wishesList, setWishesList] = useState(DATA.wishes); // Пожелания из таблицы
  
  // Состояние для Пожелания дня
  const [randomWish, setRandomWish] = useState('');
  const [isWishVisible, setIsWishVisible] = useState(false);
  
  const [isCruiseWidgetOpen, setIsCruiseWidgetOpen] = useState(false); // Состояние для виджета круизов
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // Состояние для модалки отзыва
  const [legalDoc, setLegalDoc] = useState(null); // Модалка правовых документов
  const [selectedReview, setSelectedReview] = useState(null); // Модалка полного отзыва

  // Привязываем листалку к новому массиву reviewsList
  const nextRev = () => setActiveReview(p => (p + 1) % (reviewsList.length || 1));
  const prevRev = () => setActiveReview(p => (p - 1 + (reviewsList.length || 1)) % (reviewsList.length || 1));

  const closeQuiz = () => {
    setIsQuizOpen(false);
    setTimeout(() => setQuizStep(1), 500);
  };

  const showWish = () => {
    if (!randomWish && wishesList.length > 0) {
      setRandomWish(wishesList[Math.floor(Math.random() * wishesList.length)]);
    }
    setIsWishVisible(true);
  };

  // Сигнал для загрузки пожеланий из вкладки Google Таблицы
  useEffect(() => {
    if (DATA.wishesSheetUrl) {
      const correctUrl = DATA.wishesSheetUrl.replace('output=csv', 'output=tsv');
      fetch(correctUrl)
        .then(res => {
          if (!res.ok) throw new Error('Сетевой ответ не ок');
          return res.text();
        })
        .then(tsv => {
          const rows = tsv.split(/[\n\r]+/);
          const fetchedWishes = rows
            .map(row => row.replace(/^"|"$/g, '').trim())
            .filter(item => item.length > 5); // Отсеиваем пустые и слишком короткие строки
          
          if (fetchedWishes.length > 0) {
            setWishesList(fetchedWishes);
            setRandomWish(fetchedWishes[Math.floor(Math.random() * fetchedWishes.length)]);
          }
        })
        .catch(() => {
          // Тихо обрабатываем прерывание запроса при обновлении страницы, без красных ошибок
          if (wishesList.length > 0 && !randomWish) {
            setRandomWish(wishesList[Math.floor(Math.random() * wishesList.length)]);
          }
        });
    } else if (wishesList.length > 0 && !randomWish) {
      setRandomWish(wishesList[Math.floor(Math.random() * wishesList.length)]);
    }
  }, []);

  // Сигнал для загрузки новостей из вкладки Google Таблицы
  useEffect(() => {
    if (DATA.newsSheetUrl) {
      // Автоматически исправляем ссылку, если случайно вставили csv вместо tsv
      const correctUrl = DATA.newsSheetUrl.replace('output=csv', 'output=tsv');
      
      fetch(correctUrl)
        .then(res => res.text())
        .then(tsv => {
          const rows = tsv.split('\n');
          const fetchedNews = rows.slice(1).map((row, index) => {
            const cols = row.split('\t');
            return {
              id: index + 100, // Уникальный ID
              date: cols[0] ? cols[0].trim() : '',
              title: cols[1] ? cols[1].trim() : '',
              text: cols[2] ? cols[2].trim() : ''
            };
          }).filter(item => item.title && item.text); // Отсеиваем пустые строки
          
          if (fetchedNews.length > 0) {
            setNewsList(fetchedNews.reverse()); // Новые (снизу таблицы) будут первыми
          } else {
            setNewsList([]); // Очищаем, если новостей нет
          }
        })
        .catch(err => console.error("Ошибка загрузки новостей:", err));
    }
  }, []);

  // Сигнал для загрузки спецпредложений из вкладки Google Таблицы
  useEffect(() => {
    if (DATA.hotToursSheetUrl) {
      const correctUrl = DATA.hotToursSheetUrl.replace('output=csv', 'output=tsv');
      
      fetch(correctUrl)
        .then(res => res.text())
        .then(tsv => {
          // Умный парсер TSV, который понимает переносы строк внутри ячеек (как в столбце А)
          const rows = [];
          let currentRow = [];
          let currentCell = '';
          let inQuotes = false;
          
          for (let i = 0; i < tsv.length; i++) {
            const char = tsv[i];
            if (char === '\r') continue; // Пропускаем возврат каретки
            
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === '\t' && !inQuotes) {
              currentRow.push(currentCell);
              currentCell = '';
            } else if (char === '\n' && !inQuotes) {
              currentRow.push(currentCell);
              rows.push(currentRow);
              currentRow = [];
              currentCell = '';
            } else {
              currentCell += char;
            }
          }
          if (currentCell || currentRow.length > 0) {
            currentRow.push(currentCell);
            rows.push(currentRow);
          }

          // Пропускаем первую строку (заголовки) и строго берем нужные столбцы (B-I)
          const fetchedTours = rows.slice(1).map((cols, index) => {
            // Очищаем от лишних кавычек и пробелов
            const clean = (val) => val ? val.replace(/^"|"$/g, '').trim() : '';
            
            return {
              id: index + 200,
              title: clean(cols[1]),       // Столбец B: title
              dates: clean(cols[2]),       // Столбец C: dates
              hotelName: clean(cols[3]),   // Столбец D: hotel
              price: clean(cols[4]),       // Столбец E: price
              oldPrice: clean(cols[5]),    // Столбец F: oldPrice
              rating: clean(cols[6]),      // Столбец G: rating
              img: clean(cols[7]),         // Столбец H: imageUrl
              bookingLink: clean(cols[8])  // Столбец I: bookingLink
            };
          }).filter(item => item.title && item.hotelName && item.price && item.img && item.img.includes('http')); // Строгий фильтр, чтобы не лезли пустые/сломанные карточки
          
          setHotToursList(fetchedTours);
        })
        .catch(err => console.error("Ошибка загрузки спецпредложений:", err));
    }
  }, []);

  // Сигнал для загрузки галереи из вкладки Google Таблицы
  useEffect(() => {
    if (DATA.gallerySheetUrl) {
      const correctUrl = DATA.gallerySheetUrl.replace('output=csv', 'output=tsv');
      
      fetch(correctUrl)
        .then(res => res.text())
        .then(tsv => {
          // Умный поиск: просто извлекаем все ячейки, которые содержат ссылки
          const links = tsv.split(/[\n\t\r]+/)
            .map(item => item.replace(/^"|"$/g, '').trim())
            .filter(item => item.startsWith('http'));

          if (links.length > 0) {
            setGalleryList(links);
          }
        })
        .catch(err => console.error("Ошибка загрузки галереи:", err));
    }
  }, []);

  // Сигнал для загрузки опубликованных отзывов из вкладки Google Таблицы
  useEffect(() => {
    if (DATA.reviewsSheetUrl) {
      const correctUrl = DATA.reviewsSheetUrl.replace('output=csv', 'output=tsv');
      
      fetch(correctUrl)
        .then(res => res.text())
        .then(tsv => {
          const rows = tsv.split('\n');
          const fetchedReviews = rows.slice(1).map((row, index) => {
            const cols = row.split('\t');
            return {
              id: index + 500,
              name: cols[0] ? cols[0].replace(/^"|"$/g, '').trim() : '',
              date: cols[1] ? cols[1].replace(/^"|"$/g, '').trim() : '',
              rating: cols[2] ? parseInt(cols[2].replace(/^"|"$/g, '').trim()) : 5,
              text: cols[3] ? cols[3].replace(/^"|"$/g, '').trim() : '',
              photo: cols[4] ? cols[4].replace(/^"|"$/g, '').trim() : '' // Добавлено фото
            };
          }).filter(item => item.name && item.text); // Берем только если есть имя и текст
          
          if (fetchedReviews.length > 0) {
            setReviewsList(fetchedReviews.reverse()); // Новые (снизу таблицы) показываем первыми
          }
        })
        .catch(err => console.error("Ошибка загрузки отзывов:", err));
    }
  }, []);

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
    // Светлый, небесно-голубой фон с мягким скроллом, отключено выделение и вызов контекстного меню
    <div 
      className="min-h-screen text-slate-800 font-sans relative overflow-x-hidden pb-12 w-full select-none [-webkit-touch-callout:none]"
      onContextMenu={(e) => e.preventDefault()}
    >
      
      <style>{`
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes livingBackground {
          0% { transform: scale(1.0) translate(0, 0); }
          50% { transform: scale(1.15) translate(-1.5%, -1.5%); }
          100% { transform: scale(1.3) translate(1.5%, -3%); }
        }
        @keyframes fluidMorph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* --- ГЛОБАЛЬНЫЙ ФОНОВЫЙ ЦВЕТ --- */}
      <div className="fixed inset-0 z-[-3] bg-[#F0F8FF] pointer-events-none"></div>

      {/* --- ФОНОВОЕ ФОТО (Только на первый экран с плавным градиентом) --- */}
      <div className="absolute top-0 left-0 w-full h-[110vh] md:h-[130vh] z-[-2] pointer-events-none overflow-hidden bg-gradient-to-b from-sky-200/40 to-[#F0F8FF]">
        {/* ИНСТРУКЦИЯ ПО ФОНУ:
          1. Положите вертикальное фото bg-poster.jpg для телефонов в папку public.
          2. Положите горизонтальное фото bg-poster-desktop.jpg для компьютеров туда же.
        */}
        <picture>
          <source media="(min-width: 768px)" srcSet={DATA.bgDesktop} />
          <img 
            src={DATA.bgMobile} 
            alt="Luxury Background" 
            onLoad={() => setBgLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ animation: 'livingBackground 28s ease-in-out infinite alternate' }}
          />
        </picture>
        {/* Очень легкий градиент-фильтр океанического цвета */}
        <div className="absolute inset-0 bg-sky-900/10"></div>
        {/* Градиент, растворяющий фото в основном цвете фона (на десктопе уменьшен, чтобы не засвечивал текст) */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 md:h-1/3 bg-gradient-to-t from-[#F0F8FF] to-transparent"></div>
      </div>

      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full mix-blend-overlay blur-[80px]"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-300/10 rounded-full mix-blend-overlay blur-[80px]"></div>
    </div>

    {/* ВЫЗОВ ПАНЕЛИ "ОБО МНЕ" */}
    <AboutDrawer isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    {/* ВЫЗОВ ПАНЕЛИ "СЕКРЕТНЫЙ КЛУБ" (Вынесено из Reveal для перекрытия всех окон) */}
    <SecretClubModal isOpen={isSecretOpen} onClose={() => setIsSecretOpen(false)} />

    {/* МОДАЛКА ДЛЯ ОТЗЫВОВ */}
    <LeaveReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />

    {/* МОДАЛКА ДЛЯ ДОКУМЕНТОВ */}
    <div className={`fixed inset-0 z-[160] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${legalDoc ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setLegalDoc(null)}></div>
      <div className={`relative w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 transition-all duration-500 transform ${legalDoc ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-serif text-xl md:text-2xl text-slate-800 font-light tracking-wide pr-8">
            {legalDoc === 'policy' ? DATA.footer.policyTitle : DATA.footer.agreementTitle}
          </h3>
          <button onClick={() => setLegalDoc(null)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors shrink-0">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto text-slate-600 font-light tracking-wide text-sm md:text-base leading-relaxed pr-2 whitespace-pre-wrap">
          {legalDoc === 'policy' ? DATA.footer.policyText : DATA.footer.agreementText}
        </div>
      </div>
    </div>

    {/* МОДАЛКА ПОЛНОГО ОТЗЫВА */}
    <div className={`fixed inset-0 z-[160] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${selectedReview ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={() => setSelectedReview(null)}></div>
      <div className={`relative w-full max-w-2xl mx-4 max-h-[85vh] flex flex-col bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 transition-all duration-500 transform ${selectedReview ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
        <button onClick={() => setSelectedReview(null)} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors z-10">
          <X className="w-5 h-5" />
        </button>
        
        {selectedReview && (
          <div className="flex flex-col h-full overflow-hidden">
            <div className="flex items-center gap-4 mb-6 shrink-0 pr-8">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-slate-800 font-light tracking-wide">{selectedReview.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex gap-1">
                    {[...Array(selectedReview.rating || 5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    ))}
                  </div>
                  {selectedReview.date && <span className="text-[10px] md:text-xs uppercase tracking-widest font-light text-slate-400">{selectedReview.date}</span>}
                </div>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-6">
              <p className="font-serif text-slate-700 font-light tracking-wide text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {selectedReview.text}
              </p>
              {/* БОЛЬШОЕ ФОТО ИЗ ПУТЕШЕСТВИЯ В МОДАЛКЕ */}
              {selectedReview.photo && (
                <div className="rounded-2xl md:rounded-[2rem] overflow-hidden shadow-md border border-slate-100 cursor-pointer group" onClick={() => setSelectedImage(selectedReview.photo)}>
                  <img src={selectedReview.photo} alt="Фото из путешествия" className="w-full max-h-[300px] md:max-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>

    {/* МОДАЛКА ВИДЖЕТА КРУИЗОВ */}
    <div className={`fixed inset-0 z-[145] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isCruiseWidgetOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setIsCruiseWidgetOpen(false)}></div>
      <div className={`relative w-full max-w-6xl h-[95vh] md:h-[90vh] mx-4 bg-white rounded-[2rem] shadow-2xl p-2 md:p-6 transition-all duration-500 transform flex flex-col overflow-hidden ${isCruiseWidgetOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
        <div className="flex justify-between items-center px-4 pt-4 md:px-2 md:pt-0 mb-4 shrink-0">
          <h3 className="font-serif text-2xl md:text-3xl text-slate-800 font-light tracking-wide">Подбор круиза</h3>
          <button onClick={() => setIsCruiseWidgetOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto w-full relative rounded-2xl">
          {isCruiseWidgetOpen && <CruiseWidget />}
        </div>
      </div>
    </div>

    {/* МОДАЛКА ОДНОЙ НОВОСТИ */}
    <div className={`fixed inset-0 z-[140] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${selectedNews ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={() => setSelectedNews(null)}></div>
      <div className={`relative w-full max-w-lg mx-4 bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 transition-all duration-500 transform ${selectedNews ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
        <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors">
          <X className="w-5 h-5" />
        </button>
        {selectedNews && (
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-slate-800 font-light tracking-wide mb-2 pr-8">{selectedNews.title}</h3>
            <div className="flex items-center gap-2 text-sky-600 mb-6">
              <CalendarDays className="w-4 h-4" />
              <span className="text-[11px] md:text-xs uppercase tracking-widest font-medium">{selectedNews.date}</span>
            </div>
            <div className="text-slate-600 font-light tracking-wide text-sm md:text-base leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {(() => {
                let parts = selectedNews.text.split(/\\n|\n/);
                // Умная автоматическая разбивка: если текст сплошной и длинный, делим его по 2 предложения
                if (parts.length <= 1 && selectedNews.text.length > 150) {
                  const sentences = selectedNews.text.match(/[^.!?]+[.!?]+/g) || [selectedNews.text];
                  parts = [];
                  for (let i = 0; i < sentences.length; i += 2) {
                    parts.push(sentences.slice(i, i + 2).join('').trim().replace(/\s+/g, ' '));
                  }
                }
                return parts.map((p, i) => p.trim() ? <p key={i}>{p}</p> : null);
              })()}
            </div>
          </div>
        )}
      </div>
    </div>

    {/* ШТОРКА ВСЕХ НОВОСТЕЙ */}
    <div className={`fixed inset-0 z-[130] flex justify-end transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isAllNewsOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-700" onClick={() => setIsAllNewsOpen(false)}></div>
      
      <div className={`w-full md:w-[500px] h-[100dvh] bg-white/95 backdrop-blur-2xl border-l border-white/50 shadow-2xl relative transform transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col ${isAllNewsOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="font-serif text-2xl text-slate-800 font-light tracking-wide">Все новости</h2>
          <button onClick={() => setIsAllNewsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {newsList.slice((newsPage - 1) * 5, newsPage * 5).map(item => (
            <div 
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-sky-50 hover:border-sky-100 cursor-pointer transition-colors group shadow-sm"
            >
              <div className="flex items-center gap-2 text-sky-600 mb-2">
                <CalendarDays className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-medium">{item.date}</span>
              </div>
              <h3 className="font-serif text-lg text-slate-800 font-light tracking-wide mb-2 group-hover:text-sky-700 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-500 font-light tracking-wide line-clamp-2">{item.text.replace(/\\n|\n/g, ' ')}</p>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-white">
          <button 
            onClick={() => setNewsPage(p => Math.max(1, p - 1))}
            disabled={newsPage === 1}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <span className="text-sm font-light tracking-wide text-slate-500">
            Страница {newsPage} из {Math.ceil(newsList.length / 5) || 1}
          </span>
          <button 
            onClick={() => setNewsPage(p => Math.min(Math.ceil(newsList.length / 5) || 1, p + 1))}
            disabled={newsPage === (Math.ceil(newsList.length / 5) || 1)}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {/* --- ВЫЗОВ ПАНЕЛИ КВИЗА (Вынесено из-под Reveal для абсолютного перекрытия всех окон) --- */}
    <div className={`fixed inset-0 z-[120] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isQuizOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeQuiz}></div>
      <div className={`relative w-full max-w-md mx-4 bg-white border border-white rounded-[2rem] shadow-2xl p-6 md:p-8 transition-all duration-500 transform ${isQuizOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
        
        <div className="flex justify-between items-center mb-6">
          <span className="text-[10px] md:text-xs text-sky-600 uppercase tracking-widest font-medium">
            {quizStep < 4 ? `Шаг ${quizStep} из 3` : 'Готово'}
          </span>
          <button onClick={closeQuiz} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors">
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {quizStep === 1 && (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-slate-800 mb-2">Куда тянет душу?</h3>
            <p className="text-sm md:text-base text-slate-500 font-light tracking-wide mb-6">Выберите идеальную картинку отдыха</p>
            <div className="space-y-3">
              {['Белоснежные пляжи и релакс', 'Активный отдых и горы', 'Европейские улочки', 'Экзотика и джунгли'].map((option, i) => (
                <button key={i} onClick={() => setQuizStep(2)} className="w-full text-left px-5 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-100 text-sm md:text-base font-light tracking-wide text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-colors flex justify-between items-center group">
                  {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        {quizStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-slate-800 mb-2">С кем полетите?</h3>
            <p className="text-sm md:text-base text-slate-500 font-light tracking-wide mb-6">Это поможет подобрать правильный отель</p>
            <div className="space-y-3">
              {['Вдвоем (Романтика)', 'Семьей (С детьми)', 'Соло (Перезагрузка)', 'Шумной компанией'].map((option, i) => (
                <button key={i} onClick={() => setQuizStep(3)} className="w-full text-left px-5 py-4 md:py-5 rounded-2xl bg-slate-50 border border-slate-100 text-sm md:text-base font-light tracking-wide text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-colors flex justify-between items-center group">
                  {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        {quizStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-slate-800 mb-2">Ваш контакт?</h3>
            <p className="text-sm md:text-base text-slate-500 font-light tracking-wide mb-6">Оставьте Telegram или WhatsApp, я пришлю 3 лучших варианта под ваш запрос.</p>
            <div className="space-y-4">
              <input 
                type="tel" 
                placeholder="+7 (999) 000-00-00" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 md:py-5 text-slate-800 font-light tracking-wide focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 md:text-lg"
              />
              <button 
                onClick={() => setQuizStep(4)} 
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium tracking-wide rounded-2xl py-4 md:py-5 text-lg hover:shadow-lg hover:shadow-sky-500/30 transition-all"
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
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-slate-800 mb-3 md:mb-4">Запрос принят!</h3>
            <p className="text-slate-600 font-light tracking-wide text-sm md:text-base leading-relaxed mb-8 md:mb-10">Я уже начала готовить для вас идеальные варианты. Напишу в ближайшее время.</p>
            <button onClick={closeQuiz} className="w-full bg-slate-100 text-slate-700 font-medium tracking-wide rounded-2xl py-4 md:py-5 text-lg hover:bg-slate-200 transition-colors">
              Отлично, жду
            </button>
          </div>
        )}
      </div>
    </div>

    {/* --- МОДАЛКА ДЛЯ ФОТО ГАЛЕРЕИ --- */}
    <div className={`fixed inset-0 z-[130] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${selectedImage ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setSelectedImage(null)}></div>
      <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 md:top-10 md:right-10 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10 shadow-lg">
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <div className={`relative z-10 max-w-[95vw] max-h-[90vh] transition-transform duration-500 ${selectedImage ? 'scale-100' : 'scale-90'}`}>
        {selectedImage && <img src={selectedImage} alt="Expanded Atmosphere" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />}
      </div>
    </div>

    {/* РАСШИРЕННЫЙ КОНТЕЙНЕР ДЛЯ ДЕСКТОПА (max-w-6xl вместо 480px) */}
    <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-8 md:pt-16">

        {/* --- 1. БЛОК: HERO (НЕВИДИМЫЙ ИНТЕРФЕЙС / PURE TEXT) --- */}
        <Reveal>
          <div className="relative text-center px-2 pb-10 mb-12 md:mb-20 mt-[20vh] md:mt-[30vh] max-w-4xl mx-auto flex flex-col items-center">
            
            {/* БЛОК С ТЕКСТОМ: мягкая затемняющая подложка. На десктопе усилена, чтобы текст не тонул в белой дымке */}
            <div className="relative w-full flex flex-col items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[160%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,transparent_70%)] md:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,transparent_60%)] z-0 pointer-events-none blur-md"></div>
              
              {/* Отступ mb-3 убран на мобильном (mb-0), оставлен на десктопе */}
              <h1 className="relative z-10 font-serif text-[32px] md:text-6xl font-medium text-white tracking-wide mb-0 md:mb-3 drop-shadow-md">
                <StaggeredText text={`${DATA.name} ${DATA.lastName}`} delayOffset={300} />
              </h1>
              
              {/* Отступ mt и gap уменьшены на мобильном для максимального сближения */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-0 md:gap-5 mt-0 md:mt-2 mb-6 opacity-0 w-full" style={{ animation: 'textReveal 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards 700ms' }}>
                <p className="text-white font-medium md:font-light text-[10px] md:text-sm uppercase tracking-widest drop-shadow-md text-center">
                  {DATA.roleText}
                </p>
                
                {/* ЛОГОТИП с подложкой-свечением для читаемости темных букв на любом фоне */}
                <div className="relative inline-block mt-0">
                  <div className="absolute inset-0 bg-white/40 blur-xl rounded-full"></div>
                  <img src={DATA.roleLogo} alt="Логотип ЛетИя" className="relative h-20 md:h-28 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] shrink-0" />
                </div>
              </div>
              
              <div className="relative z-10 w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-6 md:mb-10 opacity-0 drop-shadow-md" style={{ animation: 'textReveal 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards 800ms' }}></div>
              
              <p className="relative z-10 font-serif font-light text-white text-[16px] md:text-2xl leading-relaxed px-2 md:px-12 tracking-wide drop-shadow-md">
                <StaggeredText text="«Открываю для вас мир путешествий. Только лучшие предложения индивидуально под ваш запрос.»" delayOffset={900} />
              </p>

              {/* Изящная стеклянная кнопка вызова манифеста */}
              <button 
                onClick={() => setIsAboutOpen(true)}
                className="relative z-10 mt-10 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-light tracking-widest uppercase text-xs md:text-sm hover:bg-white/20 hover:scale-[1.02] transition-all flex items-center gap-3 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
                style={{ animation: 'textReveal 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards 1200ms', opacity: 0 }}
              >
                Давайте знакомиться <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* --- ПОЖЕЛАНИЕ ДНЯ (Эффект матового стекла) --- */}
        <Reveal delay={100}>
          <div className="mb-14 md:mb-20 max-w-2xl mx-auto px-5 md:px-0">
            <div 
              onClick={showWish}
              className={`relative cursor-pointer group rounded-[2rem] overflow-hidden bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/40 p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.1)] transition-all duration-700 min-h-[160px] md:min-h-[200px] flex items-center justify-center`}
            >
              <Sparkles className={`absolute top-6 left-6 w-5 h-5 text-sky-400 transition-opacity duration-1000 ${isWishVisible ? 'opacity-100' : 'opacity-0'}`} />

              {/* Инструкция до клика (Премиальный дизайн) */}
              <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 ease-in-out ${isWishVisible ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.4)] mb-3 md:mb-4 animate-[pulse_3s_ease-in-out_infinite]">
                  <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-sky-600" />
                </div>
                <span className="font-serif text-slate-700 text-lg md:text-xl tracking-[0.1em] px-4 text-center">Ваше послание</span>
                <span className="text-[10px] md:text-xs text-slate-500 tracking-[0.2em] uppercase font-light mt-2">Коснитесь, чтобы открыть</span>
              </div>

              {/* Само послание (размыто до клика) */}
              <div className={`relative z-10 w-full text-center transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${isWishVisible ? 'blur-none opacity-100 scale-100' : 'blur-[12px] opacity-0 scale-95 select-none'}`}>
                <p className="font-serif text-slate-700 text-lg md:text-2xl leading-relaxed tracking-wide px-2 md:px-8">
                  {randomWish ? `"${randomWish}"` : 'Настройка волн...'}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- КНОПКА: ПОДОБРАТЬ ТУР (Ограничена по ширине) --- */}
        <Reveal delay={150}>
          <div className="mb-14 md:mb-20 px-2 max-w-sm mx-auto">
            <a href={DATA.socials.tg} target="_blank" rel="noreferrer" className="w-full bg-gradient-to-r from-blue-500 to-sky-500 text-white shadow-lg shadow-sky-500/30 rounded-2xl py-4 flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
              <Plane className="w-5 md:w-6 h-5 md:h-6" />
              <span className="font-serif font-light tracking-wide text-lg md:text-xl">Подобрать тур</span>
            </a>
          </div>
        </Reveal>

        {/* --- 3. БЛОК: 3D-ГЛОБУС & КВИЗ --- */}
        <Reveal>
          <div className="relative mb-14 md:mb-24">
            <h2 className="text-center font-serif text-2xl md:text-4xl text-slate-800 font-light tracking-wide mb-8">Куда отправимся <br className="md:hidden"/><span className="text-sky-500 font-light tracking-wide md:ml-2">в этот раз?</span></h2>
            
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
                    <span className="font-light tracking-wide text-cyan-800 text-sm md:text-base">Пройти квиз</span>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" />
                  </div>
                </div>
              )}
            </button>

          </div>
        </div>
      </Reveal>

      {/* --- 4. БЛОК: АВТОРСКИЕ ТУРЫ (СЕТКА) --- */}
        {/* --- 4. БЛОК: АВТОРСКИЕ ТУРЫ (СЕТКА) --- */}
        <Reveal>
          <div className="mb-14 md:mb-24">
            <div className="flex justify-between items-end mb-6 md:mb-10">
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-light tracking-wide">Авторские <br className="md:hidden"/><span className="text-sky-500 font-light tracking-wide md:ml-2">маршруты</span></h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {DATA.tours.map((tour, idx) => (
                <a key={idx} href={tour.link} target="_blank" rel="noreferrer" className="block relative h-[220px] md:h-[320px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e38]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white group-hover:bg-white group-hover:text-cyan-700 transition-colors">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white">
                    <p className="text-[10px] md:text-xs uppercase tracking-widest font-light text-sky-200 mb-1 md:mb-2 drop-shadow-md">{tour.desc}</p>
                    <h3 className="font-serif text-lg md:text-2xl font-light tracking-wide drop-shadow-md">{tour.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* --- 5. БЛОК: КРУИЗЫ --- */}
        <Reveal>
          <div className="mb-14 md:mb-24">
            <div className="flex justify-between items-end mb-6 md:mb-10">
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-light tracking-wide">Морские и речные<br className="md:hidden"/><span className="text-cyan-600 font-light tracking-wide md:ml-2">круизы по всему миру</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {DATA.cruises.map(cruise => (
                <div key={cruise.id} onClick={() => setIsCruiseWidgetOpen(true)} className="group relative h-32 md:h-48 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex border border-white/80 bg-white/40 cursor-pointer">
                  <img src={cruise.img} alt={cruise.title} className="w-1/3 md:w-2/5 h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="w-2/3 md:w-3/5 bg-white/70 backdrop-blur-md p-4 md:p-8 flex flex-col justify-center relative">
                    <div className="absolute top-3 right-4 md:top-5 md:right-6 text-cyan-600/40 group-hover:text-cyan-500 transition-colors">
                      <Ship className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <h3 className="font-serif text-lg md:text-2xl text-slate-800 font-light tracking-wide leading-tight">{cruise.title}</h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest font-light text-slate-500 mt-2 md:mt-4">{cruise.ship}</p>
                    {/* Подсказка для клика */}
                    <div className="absolute bottom-3 right-4 md:bottom-5 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-cyan-600 text-[10px] md:text-xs font-medium">
                      Подобрать <ChevronRight className="w-3 h-3" />
                    </div>
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
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-light tracking-wide">Специальные <br className="md:hidden"/><span className="text-sky-500 font-light tracking-wide md:ml-2">предложения</span></h2>
            </div>
            
            <div className="flex overflow-x-auto gap-5 px-5 md:px-0 pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {hotToursList.map((deal) => (
                <div 
                  key={deal.id} 
                  onClick={() => deal.bookingLink && window.open(deal.bookingLink, '_blank')}
                  className="min-w-[260px] max-w-[260px] md:min-w-[320px] md:max-w-[320px] shrink-0 snap-center bg-white border border-white rounded-[2rem] p-3 md:p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow cursor-pointer group flex flex-col"
                >
                  <div className="relative h-[160px] md:h-[220px] shrink-0 rounded-2xl overflow-hidden mb-4">
                    <img src={deal.img} alt={deal.hotelName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {deal.rating && (
                      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md border border-white/50 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Star className="w-3 h-3 text-sky-500 fill-sky-500" />
                        {deal.rating}
                      </div>
                    )}
                  </div>
                  
                  <div className="px-2 pb-2 flex flex-col flex-1">
                    <h4 className="font-serif text-lg md:text-xl font-light tracking-wide text-slate-800 line-clamp-2 h-[56px] md:h-[60px] capitalize">{deal.hotelName}</h4>
                    <div className="flex flex-col gap-1.5 text-slate-500 font-light tracking-wide text-xs md:text-sm mt-2 mb-4 md:mb-6 flex-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-cyan-500" /> <span className="truncate">{deal.title || deal.loc}</span>
                      </div>
                      {deal.dates && (
                        <div className="flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 shrink-0 text-cyan-500" /> <span className="truncate">{deal.dates}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-end justify-between mt-auto">
                      <div className="flex flex-col justify-end min-h-[48px]">
                        {deal.oldPrice && <p className="text-[9px] md:text-[11px] uppercase tracking-widest text-slate-400 font-light mb-0.5 line-through">{deal.oldPrice}</p>}
                        <p className="text-lg md:text-2xl font-medium tracking-wide text-sky-600 tabular-nums lining-nums flex items-baseline">
                          {deal.price && deal.price.includes('РУБ') ? (
                            <>
                              {deal.price.split('РУБ')[0].trim()}
                              <span className="text-[10px] md:text-xs font-normal ml-1">РУБ</span>
                            </>
                          ) : (
                            deal.price
                          )}
                          <span className="text-[10px] md:text-xs font-normal text-slate-400 ml-1">/ чел</span>
                        </p>
                      </div>
                      <button className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors shadow-sm">
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
          <div className="mb-14 md:mb-24 px-5 md:px-0">
            <div className="flex justify-between items-end mb-6 md:mb-10">
              <div className="flex items-center gap-3">
                <Newspaper className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-light tracking-wide">Новости <span className="text-sky-500 font-light tracking-wide">туризма</span></h2>
              </div>
              <button onClick={() => setIsAllNewsOpen(true)} className="flex items-center gap-1 text-sky-600 hover:text-sky-700 transition-colors group">
                <span className="text-[10px] md:text-sm uppercase tracking-widest font-medium border-b border-sky-200 group-hover:border-sky-400 pb-0.5">Все новости</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {newsList.map((item, index) => {
                const isMobileHidden = index >= 2;
                const isDesktopHidden = index >= 4;
                if (isDesktopHidden) return null;
                
                return (
                  <div 
                    key={item.id} 
                    onClick={() => setSelectedNews(item)}
                    className={`p-5 md:p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-sm cursor-pointer hover:shadow-md transition-all flex-col gap-3 group ${isMobileHidden ? 'hidden md:flex' : 'flex'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sky-600">
                        <CalendarDays className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium">{item.date}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg md:text-xl text-slate-800 font-light tracking-wide mt-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-light tracking-wide line-clamp-2">{item.text.replace(/\\n|\n/g, ' ')}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* --- 8. БЛОК: АТМОСФЕРА ПУТЕШЕСТВИЙ (ГАЛЕРЕЯ) --- */}
        <Reveal>
          <div className="mb-14 md:mb-24 -mx-5 md:mx-0">
            <div className="px-5 md:px-0 mb-6 md:mb-10">
              <h2 className="font-serif text-2xl md:text-4xl text-slate-800 font-light tracking-wide">Атмосфера <br className="md:hidden"/><span className="text-sky-500 font-light tracking-wide md:ml-2">наших путешествий</span></h2>
            </div>
            
            <div className="w-full relative z-10 group/gallery">
              <div 
                ref={galleryRef}
                className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing pb-8 pt-2 select-none"
                onMouseDown={handleGalleryMouseDown}
                onMouseLeave={handleGalleryMouseLeave}
                onMouseUp={handleGalleryMouseUp}
                onMouseMove={handleGalleryMouseMove}
                onTouchStart={handleGalleryTouchStart}
                onTouchEnd={handleGalleryTouchEnd}
                onMouseEnter={() => setIsGalleryHovered(true)}
              >
                {/* Спейсер для правильного отступа на мобильных */}
                <div className="w-5 md:w-0 shrink-0 pointer-events-none"></div>
                
                {/* 4 одинаковых сета для бесшовной бесконечной прокрутки */}
                {[...Array(4)].map((_, setIndex) => (
                  <div key={`set-${setIndex}`} className="flex gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
                    {galleryList.map((img, i) => (
                      <div 
                        key={`g-${setIndex}-${i}`} 
                        onClick={() => {
                          if (galleryDragged.current) return;
                          setSelectedImage(img);
                        }} 
                        className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-[2rem] overflow-hidden flex-shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white/60 bg-white/40"
                      >
                        <img src={img} alt="Atmosphere" draggable={false} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* --- ОТЗЫВЫ --- */}
        {reviewsList.length > 0 && (
          <Reveal>
            <div className="mb-14 md:mb-24 px-5 md:px-0 max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-10 md:mb-16">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-sky-200"></div>
                <h2 className="font-serif text-xl md:text-3xl text-slate-800 font-light tracking-wide uppercase">Впечатления</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-sky-200"></div>
              </div>
              
              <div className="relative py-4 md:py-8 flex flex-col">
                
                {/* Монограмма на заднем фоне (Первая буква имени) */}
                <div className="absolute top-1/2 left-[75%] md:left-[85%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
                  {reviewsList.map((review, i) => (
                    <div 
                      key={`mono-${review.id}`}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out ${i === activeReview ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                      <span className="font-serif text-[280px] md:text-[400px] leading-none text-sky-600/10 font-light">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Текст отзыва */}
                <div className="relative z-10 w-full h-[220px] md:h-[280px] flex">
                  {reviewsList.map((review, i) => (
                    <div 
                      key={review.id} 
                      className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex items-center ${i === activeReview ? 'opacity-100 translate-x-0 blur-none z-10' : 'opacity-0 translate-x-8 blur-sm pointer-events-none z-0'}`}
                    >
                      <div className="flex w-full items-center justify-between gap-4 md:gap-8 pr-4 md:pr-8">
                        <div className="flex-1 relative">
                          {/* Огромная журнальная кавычка */}
                          <span className="absolute -top-10 -left-4 md:-top-16 md:-left-8 text-[80px] md:text-[120px] text-sky-300/30 font-serif leading-none select-none">“</span>
                          
                          {/* Звезды рейтинга */}
                          <div className="flex gap-1 mb-4 relative z-10">
                            {[...Array(review.rating || 5)].map((_, idx) => (
                              <Star key={idx} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-300 fill-amber-300" />
                            ))}
                          </div>

                          <p className="font-serif text-slate-800 font-light tracking-wide text-lg md:text-3xl leading-relaxed md:leading-[1.6] relative z-10 line-clamp-3 md:line-clamp-4">
                            {review.text}
                          </p>
                          
                          {/* Кнопка Читать полностью, если текст длинный */}
                          {review.text.length > 120 && (
                            <button onClick={() => setSelectedReview(review)} className="relative z-10 mt-3 flex items-center gap-1 text-[10px] md:text-xs text-sky-500 uppercase tracking-widest font-medium hover:text-sky-600 transition-colors group/btn">
                              Читать полностью <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                          )}
                          
                          {/* Автор отзыва с элегантной линией и датой */}
                          <div className="mt-6 md:mt-10 flex items-center gap-3 md:gap-4">
                            <div className="h-[1px] bg-sky-300 shrink-0 w-12 md:w-20"></div>
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <span className="font-serif italic text-slate-500 text-base md:text-xl tracking-wide">{review.name}</span>
                              {review.date && <span className="text-[9px] md:text-[11px] uppercase tracking-widest font-light text-slate-400">{review.date}</span>}
                            </div>
                          </div>
                        </div>

                        {/* ФОТО ИЗ ПУТЕШЕСТВИЯ (справа от текста) */}
                        {review.photo && (
                          <div 
                            className="shrink-0 w-[100px] h-[130px] md:w-[180px] md:h-[240px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/80 rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer group/photo relative"
                            onClick={() => setSelectedImage(review.photo)}
                          >
                            <img src={review.photo} alt="Travel" className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                              <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-white opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500 scale-50 group-hover/photo:scale-100" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Минималистичная навигация и кнопка Оставить отзыв */}
                <div className="relative z-20 mt-4 md:mt-8 flex flex-col sm:flex-row sm:items-center justify-between w-full border-t border-sky-100/50 pt-6 gap-6">
                  <div className="flex items-center justify-between sm:justify-start gap-8 w-full sm:w-auto">
                    <div className="flex gap-4 md:gap-8">
                      <button onClick={prevRev} className="p-2 -ml-2 text-slate-400 hover:text-slate-800 transition-colors group">
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 rotate-180 group-hover:-translate-x-2 transition-transform" />
                      </button>
                      <button onClick={nextRev} className="p-2 text-slate-400 hover:text-slate-800 transition-colors group">
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </div>
                    
                    <div className="font-serif font-light text-slate-400 tracking-widest text-sm md:text-base">
                      <span className="text-slate-800">{(activeReview + 1).toString().padStart(2, '0')}</span> / {reviewsList.length.toString().padStart(2, '0')}
                    </div>
                  </div>

                  <button onClick={() => setIsReviewModalOpen(true)} className="flex items-center justify-center gap-2 text-sky-600 hover:text-sky-700 transition-colors group mx-auto sm:mx-0">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium border-b border-sky-200 group-hover:border-sky-400 pb-0.5">Оставить отзыв</span>
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          </Reveal>
        )}

        {/* --- СЕКРЕТНЫЙ КЛУБ --- */}
      <Reveal>
        <div className="w-full mb-12 md:mb-20 px-5 md:px-0 max-w-md mx-auto">
          <button onClick={() => setIsSecretOpen(true)} className="relative w-full overflow-hidden rounded-2xl p-[1px] group transition-all duration-700 hover:shadow-[0_10px_40px_rgba(14,165,233,0.15)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-sky-400/50 to-sky-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:animate-[marquee_3s_linear_infinite]"></div>
            
            <div className="relative w-full bg-gradient-to-b from-slate-800 to-slate-950 px-8 py-5 md:py-6 rounded-2xl flex items-center justify-center gap-4 transition-all overflow-hidden border border-slate-700/50 group-hover:border-slate-600">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <Lock className="w-5 h-5 md:w-6 md:h-6 text-sky-400/80 group-hover:text-sky-300 group-hover:scale-110 transition-all z-10" />
              <span className="font-serif font-light tracking-[0.15em] text-lg md:text-xl text-white/90 group-hover:text-white transition-colors z-10 uppercase">
                Закрытая коллекция
              </span>
            </div>
          </button>
        </div>
      </Reveal>

      {/* --- ФУТЕР --- */}
        <Reveal>
          <div className="mb-8 w-full">
            <div className="flex flex-col items-center px-5 md:px-0">
              <div className="flex items-center justify-center gap-3 mb-6 md:mb-8 w-full max-w-[200px] md:max-w-[400px]">
                <div className="h-[1px] flex-1 bg-sky-200/50"></div>
                <span className="font-serif font-light tracking-widest uppercase text-slate-500 text-[10px] md:text-sm">Мои контакты</span>
                <div className="h-[1px] flex-1 bg-sky-200/50"></div>
              </div>
              
              <div className="flex justify-center gap-6 md:gap-10">
                <a href={DATA.socials.tg} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-sky-200/50 bg-white shadow-md flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all group">
                  <Send className="w-5 h-5 md:w-7 md:h-7 text-sky-600/70 group-hover:text-sky-500 group-hover:scale-110 transition-all" />
                </a>
                <a href={DATA.socials.vk} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-sky-200/50 bg-white shadow-md flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all group">
                  <VKIcon className="w-5 h-5 md:w-7 md:h-7 text-sky-600/70 group-hover:text-sky-500 group-hover:scale-110 transition-all" />
                </a>
                <a href={DATA.socials.insta} target="_blank" rel="noreferrer" className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-sky-200/50 bg-white shadow-md flex items-center justify-center hover:border-sky-400 hover:shadow-lg transition-all group">
                  <Instagram className="w-5 h-5 md:w-7 md:h-7 text-sky-600/70 group-hover:text-sky-500 group-hover:scale-110 transition-all" />
                </a>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-10 md:mt-16 mb-6">
                <button onClick={() => setLegalDoc('policy')} className="text-[9px] md:text-[10px] uppercase tracking-widest font-light text-slate-400 hover:text-sky-500 transition-colors border-b border-transparent hover:border-sky-500 pb-0.5">
                  {DATA.footer.policyTitle}
                </button>
                <span className="hidden md:inline text-slate-300">•</span>
                <button onClick={() => setLegalDoc('agreement')} className="text-[9px] md:text-[10px] uppercase tracking-widest font-light text-slate-400 hover:text-sky-500 transition-colors border-b border-transparent hover:border-sky-500 pb-0.5">
                  {DATA.footer.agreementTitle}
                </button>
              </div>

              <p className="text-center text-[10px] md:text-xs uppercase tracking-widest font-light text-slate-400 mb-4">
                © {DATA.footer.copyrightYear} {DATA.name} {DATA.lastName}. Все права защищены.
              </p>
              
              <a href={DATA.footer.creatorLink} target="_blank" rel="noreferrer" className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] font-medium text-slate-300 hover:text-sky-500 transition-colors pb-8 inline-block">
                {DATA.footer.creatorText}
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}