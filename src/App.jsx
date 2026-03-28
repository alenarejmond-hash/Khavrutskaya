import React, { useState, useEffect } from 'react';
import { Plane, Map, Sparkles, Phone, MessageCircle, Navigation, Sun, Heart, ArrowRight, Settings, X, Droplets, Cloud, Gem, Moon, Euro, CircleCheck as CheckCircle2, MapPin, ExternalLink, Clock, Star, Briefcase, Send, ChevronRight, ArrowUpRight, Flame, CalendarDays, Luggage } from 'lucide-react';

// Кастомная иконка Instagram (так как бренды были удалены из новых версий lucide-react)
const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

if (typeof window !== 'undefined' && !document.getElementById('vk-bridge-script')) {
  const script = document.createElement('script');
  script.id = 'vk-bridge-script';
  script.src = 'https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js';
  script.async = true;
  document.head.appendChild(script);
}

// Общие данные для всех шаблонов (чтобы легко было менять текст везде сразу)
const DATA = {
  name: "Марина",
  lastName: "Хавруцкая",
  role: "Основатель бутик-турагентства",
  badge: "Влюблена в море",
  // Твоё фото из папки public! Просто положи туда avatar.jpg (БЕЗ СЛЕШЕЙ И ТОЧЕК)
  avatarUrl: "avatar.jpg",
  bgUrl: "https://i0.wp.com/images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&strip=all",
  // Добавили туры сюда, чтобы было удобно менять фото и текст!
  tours: [
    { id: 1, title: "Калининград", desc: "Европейский шарм", img: "https://i0.wp.com/images.unsplash.com/photo-1547448415-e9f5b28e570d?w=500&strip=all" },
    { id: 2, title: "Бали", desc: "Джунгли и океан", img: "https://i0.wp.com/images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&strip=all" }
  ],
  hotTours: [
    { id: 1, hotelName: "Emerald Resort", loc: "Мальдивы", dates: "15 - 22 Ноября", price: "$4 500", oldPrice: "$6 200", img: "https://i0.wp.com/images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&strip=all" },
    { id: 2, hotelName: "Four Seasons", loc: "Сейшелы", dates: "02 - 10 Декабря", price: "$5 100", oldPrice: "$7 000", img: "https://i0.wp.com/images.unsplash.com/photo-1540541338287-41700207dee6?w=600&strip=all" }
  ],
  reviews: [
    { id: 1, name: "Анна С.", text: "Это был лучший отпуск в моей жизни! Все продумано до мелочей. Огромное спасибо за этот рай на земле!" },
    { id: 2, name: "Михаил В.", text: "Сервис на высшем уровне. Отель превзошел все ожидания, а индивидуальный трансфер был очень кстати." },
    { id: 3, name: "Ольга К.", text: "Настоящий Quiet Luxury. Никаких забот, только океан, солнце и безупречный комфорт. Обязательно вернемся!" }
  ],
  aboutText: "Я организую премиальные путешествия более 10 лет. Знаю скрытые жемчужины по всему миру, лично инспектирую отели и создаю безупречный сервис, в котором продумана каждая деталь вашего отдыха."
};

// ==========================================
// ШАБЛОН 1: Живой Океан (Liquid Ocean) - Твой оригинал
// ==========================================
const Template1 = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
  <div className="relative min-h-screen bg-[#f4fbfc] overflow-hidden flex justify-center text-slate-800 font-sans selection:bg-cyan-200 w-full">
    {/* АНИМИРОВАННЫЙ ФОН */}
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-200/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-float-slow"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-100/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-sky-200/50 rounded-full mix-blend-multiply filter blur-[60px] opacity-60 animate-float-slow" style={{ animationDelay: '1s' }}></div>
    
    <div className="relative z-10 w-full max-w-md px-6 py-10 flex flex-col items-center">
      <div className="relative mt-4 mb-6 animate-float-slow">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300 to-teal-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-xl opacity-60"></div>
        <div className="organic-blob relative w-44 h-44 z-10 border-[3px] border-white/80 bg-white/50" style={{ backgroundImage: `url(${DATA.bgUrl})` }}>
          {/* Убрал mix-blend-overlay и opacity-90, чтобы фото было четким! */}
          <img src={DATA.avatarUrl} alt="Аватар" className="w-full h-full object-cover relative z-10" style={{ borderRadius: 'inherit' }} />
        </div>
        <div className="absolute -bottom-3 -right-2 z-20 glass-panel px-4 py-1.5 rounded-2xl flex items-center gap-1.5 transform rotate-3">
          <Sun className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-400 uppercase tracking-wider">{DATA.badge}</span>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold mb-1 tracking-tight text-slate-800">{DATA.name} <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-500">{DATA.lastName}</span></h1>
        <p className="text-slate-500 font-medium flex items-center justify-center gap-1.5 text-sm"><Plane className="w-4 h-4 text-cyan-500" /> {DATA.role}</p>
      </div>

      <button className="relative w-full group mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-[2rem] blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
        <div className="relative w-full bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-bold text-lg py-4 px-8 rounded-[2rem] flex items-center justify-center gap-3 shadow-[0_10px_25px_rgba(13,148,136,0.3)] transition-all transform group-hover:scale-[1.02]">
          <Sparkles className="w-5 h-5" /> Подобрать тур мечты
        </div>
      </button>

      {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ (Раскрывается по клику) --- */}
      <div 
        onClick={() => setIsAboutOpen(!isAboutOpen)}
        className="w-full glass-panel px-6 py-5 rounded-[2rem] mb-8 relative overflow-hidden cursor-pointer transition-all hover:bg-white/60 z-20 select-none"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-200/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="flex items-center justify-between relative z-10 pointer-events-none">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-500" /> Обо мне
          </h3>
          <div className={`w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 transition-transform duration-500 ${isAboutOpen ? 'rotate-180' : 'rotate-0'}`}>
             <ChevronRight className="w-5 h-5 rotate-90" />
          </div>
        </div>
        <div className={`grid transition-all duration-500 ease-in-out relative z-10 pointer-events-none ${isAboutOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <p className="text-sm text-slate-600 font-medium leading-relaxed pt-4 border-t border-teal-100/50 mt-4">
              {DATA.aboutText}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mb-8">
        <div className="flex justify-between items-center px-2 mb-4">
          <h3 className="text-xl font-bold text-slate-800">Авторские туры</h3>
          <div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span><span className="w-2 h-2 rounded-full bg-teal-300"></span></div>
        </div>
        
        {/* ВАРИАНТ 1: Горизонтальный свайп со стеклянной панелью внутри фото */}
        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory">
          {DATA.tours.map(tour => (
            <div key={tour.id} className="min-w-[85%] snap-center h-48 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg shadow-cyan-900/5">
               <img src={tour.img} alt={tour.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="absolute bottom-3 left-3 right-3 glass-panel p-3.5 rounded-[1.5rem] flex justify-between items-center transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                 <div>
                   <h4 className="font-bold text-slate-800 leading-tight mb-0.5">{tour.title}</h4>
                   <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{tour.desc}</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 text-white flex items-center justify-center shadow-md"><ArrowRight className="w-5 h-5"/></div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ГОРЯЩИЕ ТУРЫ (ВАРИАНТ 1: Живой Океан - Свайп-карусель стеклянных карточек) --- */}
      <div className="w-full mb-10">
        <div className="flex items-center gap-2 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 animate-pulse"><Flame className="w-4 h-4" /></div>
          <h3 className="text-xl font-bold text-slate-800">Горящие туры</h3>
        </div>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-4 px-2">
          {DATA.hotTours.map(tour => (
            <div key={tour.id} className="min-w-[85%] snap-center glass-panel p-2 rounded-[2rem] flex items-center gap-4 group cursor-pointer hover:bg-white/70 transition-all hover:shadow-[0_15px_30px_rgba(13,148,136,0.15)] hover:-translate-y-1">
              <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden relative shadow-inner border border-white shrink-0">
                <img src={tour.img} alt={tour.hotelName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-1 left-1 bg-white/90 backdrop-blur-md rounded-full px-2 py-0.5 text-[8px] font-bold text-orange-500 uppercase tracking-wider">-25%</div>
              </div>
              <div className="flex-1 py-1 pr-2">
                <h4 className="font-bold text-slate-800 text-[15px] leading-tight mb-1">{tour.hotelName}</h4>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 mb-2 font-medium">
                  <CalendarDays className="w-3 h-3 text-cyan-500" /> {tour.dates}
                </div>
                <div className="flex items-end justify-between pr-1">
                  <div>
                    <div className="text-[10px] text-slate-400 line-through decoration-orange-400/50 mb-0.5">{tour.oldPrice}</div>
                    <div className="font-extrabold text-lg text-teal-600 leading-none">{tour.price}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ОТЗЫВЫ (ВАРИАНТ 1: Горизонтальный скролл с неоморфными карточками) --- */}
      <div className="w-full mb-12">
        <h3 className="text-xl font-bold text-slate-800 px-2 mb-4 flex items-center gap-2">
          <Heart className="w-5 h-5 text-cyan-500" /> Отзывы туристов
        </h3>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-4 px-2">
          {DATA.reviews.map(review => (
            <div key={review.id} className="min-w-[280px] snap-center glass-panel p-5 rounded-[2rem] flex flex-col justify-between group hover:bg-white/80 transition-colors">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400/50 group-hover:fill-cyan-400 transition-colors" />
                ))}
              </div>
              <p className="text-sm text-slate-600 italic mb-5">«{review.text}»</p>
              <div className="flex items-center gap-3">
                {/* ИНИЦИАЛ ВМЕСТО ФОТО */}
                <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm flex items-center justify-center bg-gradient-to-br from-cyan-400 to-teal-400 text-white font-bold font-serif text-lg shrink-0">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-slate-800 text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- LEAD-МАГНИТ (ВАРИАНТ 1: Живой Океан - Изящная тонкая кнопка) --- */}
      <div className="w-full mb-12 px-4">
        <button className="w-full glass-panel p-1.5 rounded-[1.5rem] group hover:bg-white/80 transition-all shadow-sm relative overflow-hidden cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-between border border-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-transform duration-500">
                <Luggage className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="font-extrabold text-slate-800 text-xs uppercase tracking-wide leading-tight">Чек-лист</h3>
                <p className="text-[9px] text-teal-600 font-medium mt-0.5">Секреты сборов (PDF)</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-colors mr-1">
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </button>
      </div>

      <div className="w-full mt-2 pb-8">
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest text-cyan-600 font-bold mb-5 relative z-10">На связи 24/7</span>
          <div className="flex justify-center gap-5 relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full"></div>
            {/* Telegram */}
            <a href="#" className="relative group w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] organic-blob opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <Send className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform" />
            </a>
            {/* WhatsApp */}
            <a href="#" className="relative group w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] organic-blob opacity-80 group-hover:opacity-100 transition-opacity" style={{animationDelay: '1s'}}></div>
              <Phone className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform" />
            </a>
            {/* Instagram */}
            <a href="#" className="relative group w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-sky-400 rounded-[50%_50%_60%_40%/60%_40%_70%_50%] organic-blob opacity-80 group-hover:opacity-100 transition-opacity" style={{animationDelay: '2s'}}></div>
              <Instagram className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

// ==========================================
// ШАБЛОН 2: Тропическая Арка (Tropical Arch)
// ==========================================
const Template2 = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
  <div className="relative min-h-screen bg-[#FDFBF7] overflow-hidden flex justify-center text-[#2C3E50] font-serif w-full">
    {/* Декор арки на фоне */}
    <div className="absolute top-0 w-full max-w-md h-[40vh] bg-[#F4EFE6] rounded-b-[5rem] shadow-sm"></div>
    
    <div className="relative z-10 w-full max-w-md px-6 py-10 flex flex-col items-center">
      {/* Аватар в виде арки */}
      <div className="relative mt-8 mb-8 group">
        <div className="w-48 h-64 rounded-t-[100rem] rounded-b-2xl overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
           <img src={DATA.avatarUrl} alt="Аватар" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-[#20B2AA]/10 mix-blend-overlay"></div>
        </div>
        {/* Тень-подложка арки */}
        <div className="absolute top-4 -right-4 w-48 h-64 rounded-t-[100rem] rounded-b-2xl border border-[#E5DCC5] z-0"></div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-normal mb-2 tracking-wide text-[#2C3E50]">{DATA.name} <span className="italic text-[#20B2AA]">{DATA.lastName}</span></h1>
        <p className="text-[#8B7E66] font-sans tracking-widest uppercase text-xs flex items-center justify-center gap-2">
          <span className="w-4 h-[1px] bg-[#8B7E66]"></span> {DATA.role} <span className="w-4 h-[1px] bg-[#8B7E66]"></span>
        </p>
      </div>

      {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ (Элегантная Цитата) --- */}
      <div className="w-full mb-10 relative px-4">
        <div className="absolute -left-2 -top-6 text-7xl text-[#20B2AA]/10 font-serif leading-none">"</div>
        <div className="pl-5 border-l-2 border-[#20B2AA] py-1 relative z-10">
          <h3 className="text-xs font-bold tracking-widest uppercase text-[#2C3E50] mb-2">Моя философия</h3>
          <p className="text-sm text-[#8B7E66] font-serif italic leading-relaxed">
            {DATA.aboutText}
          </p>
        </div>
      </div>

      {/* Многослойное стекло */}
      <div className="w-full mb-10 font-sans relative">
        <div className="absolute -left-4 top-10 w-20 h-20 bg-[#F4A460]/20 rounded-full blur-xl z-0"></div>
        
        <button className="relative z-10 w-full bg-white/80 backdrop-blur-md border border-white p-5 rounded-2xl flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(32,178,170,0.15)] transition-all transform hover:-translate-y-1 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#20B2AA]"><Plane className="w-5 h-5" /></div>
            <span className="font-medium text-lg text-[#2C3E50]">Подобрать тур мечты</span>
          </div>
          <ArrowRight className="w-5 h-5 text-[#8B7E66]" />
        </button>

        <h3 className="relative z-10 text-lg font-serif italic text-[#8B7E66] mb-3 px-2">Авторские туры:</h3>
        
        {/* ВАРИАНТ 2: Асимметричные арки со сдвигом */}
        <div className="relative z-10 grid grid-cols-2 gap-4 items-start">
          {DATA.tours.map((tour, i) => (
            <div key={tour.id} className={`bg-white/90 backdrop-blur-xl border border-white p-2 rounded-t-[100px] rounded-b-3xl shadow-[0_15px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-500 cursor-pointer group ${i % 2 !== 0 ? 'mt-8' : ''}`}>
              <div className="w-full h-40 rounded-t-[100px] rounded-b-2xl overflow-hidden mb-4 relative">
                <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#20B2AA]/10 mix-blend-overlay"></div>
              </div>
              <div className="text-center pb-3">
                <h4 className="font-medium text-[#2C3E50] text-[15px] leading-tight mb-1">{tour.title}</h4>
                <p className="text-[9px] text-[#8B7E66] uppercase tracking-widest">{tour.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ГОРЯЩИЕ ТУРЫ (ВАРИАНТ 2: Тропическая Арка - Горизонтальный скролл карточек) --- */}
      <div className="w-full mb-12 font-sans relative z-10">
        <h3 className="text-lg font-serif italic text-[#8B7E66] mb-4 px-2 flex items-center gap-2"><Flame className="w-5 h-5 text-[#F4A460]" /> Специальные предложения:</h3>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-6 px-2">
          {DATA.hotTours.map(tour => (
            <div key={tour.id} className="min-w-[90%] snap-center bg-white/80 backdrop-blur-md border border-white rounded-3xl p-3 flex gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(32,178,170,0.1)] transition-all cursor-pointer group shrink-0">
              <div className="w-20 h-full min-h-[100px] rounded-2xl overflow-hidden rounded-t-[50px] relative shrink-0">
                <img src={tour.img} alt={tour.hotelName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex-1 py-1 flex flex-col justify-between pr-1">
                <div>
                  <h4 className="font-medium text-[#2C3E50] text-[16px] leading-tight">{tour.hotelName}</h4>
                  <p className="text-[10px] text-[#8B7E66] uppercase tracking-widest mt-1 mb-2">{tour.loc}</p>
                </div>
                <div className="border-t border-[#E5DCC5]/50 pt-2 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-[#8B7E66] block mb-0.5 line-through">{tour.oldPrice}</span>
                    <span className="font-serif italic text-[#20B2AA] font-bold text-lg leading-none">{tour.price}</span>
                  </div>
                  <div className="bg-[#F4EFE6] text-[#8B7E66] text-[9px] px-2 py-1 rounded-full uppercase tracking-widest flex items-center h-fit">
                    {tour.dates}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ОТЗЫВЫ (ВАРИАНТ 2: Элегантная интерактивная колода карт) --- */}
      <div className="w-full mb-12 font-sans relative z-10 px-4">
        <h3 className="text-lg font-serif italic text-[#8B7E66] mb-6 flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-[#E5DCC5]"></span> Что говорят клиенты <span className="w-8 h-[1px] bg-[#E5DCC5]"></span>
        </h3>
        <div 
          className="relative h-[220px] w-full cursor-pointer group"
          onClick={() => setActiveReview(prev => (prev + 1) % DATA.reviews.length)}
        >
          {DATA.reviews.map((review, i) => {
            const offset = (i - activeReview + DATA.reviews.length) % DATA.reviews.length;
            const isTop = offset === 0;
            const scale = 1 - (offset * 0.05);
            const translateY = offset * 12; 
            const zIndex = 30 - offset;
            const opacity = offset > 2 ? 0 : 1 - (offset * 0.15);

            return (
              <div 
                key={review.id} 
                className="absolute top-0 left-0 w-full bg-white/95 backdrop-blur-md border border-[#E5DCC5]/60 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ 
                  zIndex, 
                  transform: `translateY(${translateY}px) scale(${scale})`, 
                  opacity,
                  visibility: opacity === 0 ? 'hidden' : 'visible'
                }}
              >
                <div className="absolute -top-4 right-4 text-4xl text-[#20B2AA]/20 font-serif leading-none">"</div>
                <div className="flex items-center gap-4 mb-3">
                  {/* ИНИЦИАЛ ВМЕСТО ФОТО */}
                  <div className="w-12 h-14 rounded-t-full rounded-b-md border-2 border-white shadow-sm flex items-center justify-center bg-gradient-to-br from-[#F4A460] to-[#E5DCC5] text-white font-bold font-serif text-xl shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C3E50] text-sm">{review.name}</h4>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 text-[#F4A460] fill-[#F4A460]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#8B7E66] font-serif italic leading-relaxed line-clamp-3">
                  {review.text}
                </p>
                {isTop && (
                  <div className="absolute -bottom-3 right-4 bg-[#F4EFE6] text-[#8B7E66] text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-[#E5DCC5] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-sm">
                    След. <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* --- LEAD-МАГНИТ (ВАРИАНТ 2: Тропическая Арка - Элегантная карточка) --- */}
      <div className="w-full mb-12 px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-md border border-[#E5DCC5] rounded-2xl p-3 flex items-center gap-4 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all">
          <div className="w-10 h-10 bg-[#F4EFE6] rounded-full flex items-center justify-center border border-[#E5DCC5] shadow-sm shrink-0 group-hover:-translate-y-0.5 transition-transform">
            <Luggage className="w-5 h-5 text-[#F4A460]" />
          </div>
          <div className="text-left flex-1">
            <h3 className="font-serif text-[15px] text-[#2C3E50] leading-none mb-1">Гайд путешественника</h3>
            <p className="text-[8px] text-[#8B7E66] uppercase tracking-widest">Бесплатный чеклист</p>
          </div>
          <ArrowRight className="w-4 h-4 text-[#20B2AA] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>

      <div className="w-full mt-2 pb-8 flex flex-col items-center relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-[#E5DCC5]"></span>
          <span className="font-serif italic text-[#8B7E66] text-sm">Связаться со мной</span>
          <span className="w-8 h-[1px] bg-[#E5DCC5]"></span>
        </div>
        <div className="flex justify-center gap-5">
          <a href="#" className="w-12 h-12 rounded-full border border-[#E5DCC5] flex items-center justify-center text-[#2C3E50] hover:bg-[#20B2AA] hover:text-white hover:border-[#20B2AA] transition-all duration-300 group shadow-sm hover:shadow-md">
            <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-[#E5DCC5] flex items-center justify-center text-[#2C3E50] hover:bg-[#F4A460] hover:text-white hover:border-[#F4A460] transition-all duration-300 group shadow-sm hover:shadow-md">
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full border border-[#E5DCC5] flex items-center justify-center text-[#2C3E50] hover:bg-[#20B2AA] hover:text-white hover:border-[#20B2AA] transition-all duration-300 group shadow-sm hover:shadow-md">
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
};

// ==========================================
// ШАБЛОН 3: Жемчужный Бриз (Pearl Breeze)
// ==========================================
const Template3 = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  return (
  <div className="relative min-h-screen bg-gradient-to-br from-[#F0FFFF] to-[#E0FFFF] overflow-hidden flex justify-center text-[#004d40] font-sans w-full">
    {/* Мягкие свечения */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8)_0%,transparent_70%)]"></div>
    
    <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center">
      {/* Аватар-галька */}
      <div className="relative mt-4 mb-8">
        <div className="absolute inset-0 bg-white/50 rounded-[50%_60%_40%_70%/60%_40%_70%_50%] blur-xl animate-pulse-slow"></div>
        <div className="w-40 h-40 rounded-[50%_60%_40%_70%/60%_40%_70%_50%] overflow-hidden relative z-10 border-2 border-white/60 shadow-[0_10px_30px_rgba(0,100,100,0.1)]">
          <img src={DATA.avatarUrl} alt="Аватар" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-light tracking-wider mb-2">{DATA.name} <span className="font-bold">{DATA.lastName}</span></h1>
        <p className="text-[#00695c] opacity-80 font-medium text-sm flex items-center justify-center gap-2">
          <Droplets className="w-4 h-4" /> {DATA.role}
        </p>
      </div>

      {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ (Кнопка + Всплывающий Попап с плавным переходом) --- */}
      <button 
        onClick={() => setShowAbout(true)} 
        className="w-full p-5 rounded-3xl backdrop-blur-xl bg-white/30 shadow-[0_8px_32px_rgba(0,100,100,0.05)] border border-white/60 mb-8 flex justify-between items-center hover:bg-white/50 transition-all group"
      >
        <span className="font-semibold text-lg text-[#00695c] flex items-center gap-3">
          <Heart className="w-6 h-6 opacity-70 group-hover:scale-110 transition-transform text-[#004d40]" /> 
          Узнать обо мне
        </span>
        <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-white transition-colors">
          <ArrowRight className="w-4 h-4 text-[#004d40]" />
        </div>
      </button>

      {/* Само Модальное окно (Плавное появление и затухание) */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-[600ms] ease-in-out ${showAbout ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-[#004d40]/30 transition-all duration-[600ms] ease-in-out ${showAbout ? 'backdrop-blur-md opacity-100' : 'backdrop-blur-none opacity-0'}`} 
          onClick={() => setShowAbout(false)}
        ></div>
        <div className={`bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 max-w-sm w-full relative transform transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${showAbout ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-16 scale-95 opacity-0'}`}>
          <button onClick={() => setShowAbout(false)} className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-[#F0FFFF] rounded-full text-[#00695c] hover:bg-[#E0FFFF] transition-colors"><X className="w-4 h-4" /></button>
          <div className="w-12 h-12 bg-[#E0FFFF] rounded-2xl flex items-center justify-center mb-5 text-[#004d40]">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#004d40] mb-3">Обо мне</h3>
          <p className="text-sm text-[#00695c] leading-relaxed font-medium">{DATA.aboutText}</p>
        </div>
      </div>

      {/* Дышащая кнопка */}
      <button className="w-full bg-[#004d40] text-[#E0FFFF] font-medium text-lg py-4 px-8 rounded-full mb-8 shadow-[0_8px_20px_rgba(0,77,64,0.3)] hover:shadow-[0_12px_25px_rgba(0,77,64,0.4)] transition-all animate-breathe flex items-center justify-center gap-3">
        Начать путешествие <Plane className="w-5 h-5" />
      </button>

      {/* ВАРИАНТ 3: Элегантные текстовые строки с выезжающим фото-кругом */}
      <div className="w-full space-y-4 mb-10 relative z-10">
        <h3 className="text-lg font-medium text-[#00695c] opacity-90 mb-3 px-2 text-left">Авторские туры</h3>
        {DATA.tours.map(tour => (
          <div key={tour.id} className="group relative p-4 rounded-[2rem] backdrop-blur-xl bg-white/30 shadow-[0_8px_32px_rgba(0,100,100,0.03)] border border-white/50 flex items-center justify-between overflow-hidden cursor-pointer hover:bg-white/50 hover:shadow-lg transition-all duration-500">
            {/* Размытый фон, появляющийся при наведении */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-700">
               <img src={tour.img} alt="bg" className="w-full h-full object-cover blur-sm" />
            </div>
            
            <div className="relative z-10 flex-1 pr-4">
              <h3 className="font-bold text-[19px] text-[#004d40] tracking-wide mb-0.5">{tour.title}</h3>
              <p className="text-xs text-[#00695c] font-medium opacity-80 uppercase tracking-widest">{tour.desc}</p>
            </div>
            
            <div className="relative z-10 w-14 h-14 rounded-full overflow-hidden border-[3px] border-white shadow-md group-hover:scale-[1.15] group-hover:rotate-6 transition-all duration-500">
              <img src={tour.img} alt={tour.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* --- ГОРЯЩИЕ ТУРЫ (ВАРИАНТ 3: Жемчужный Бриз - Неоновое свечение и матовое стекло) --- */}
      <div className="w-full mb-10 relative z-10">
        <h3 className="text-lg font-medium text-[#00695c] opacity-90 mb-4 px-2 flex items-center gap-2"><Flame className="w-5 h-5 opacity-80" /> Горящие предложения</h3>
        <div className="flex overflow-x-auto gap-4 hide-scrollbar snap-x snap-mandatory pb-6 pt-2">
          {DATA.hotTours.map(tour => (
            <div key={tour.id} className="min-w-[80%] snap-center relative rounded-3xl p-4 backdrop-blur-xl bg-white/20 border border-white/50 shadow-[0_10px_30px_rgba(0,100,100,0.1)] cursor-pointer group hover:bg-white/30 transition-all duration-500">
              {/* Пульсирующий бейдж */}
              <div className="absolute -top-3 -right-2 bg-gradient-to-r from-red-400 to-orange-400 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-red-500/30 animate-pulse flex items-center gap-1 z-20">
                HOT
              </div>
              <div className="h-32 rounded-2xl overflow-hidden relative mb-4">
                <div className="absolute inset-0 bg-[#004d40]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={tour.img} alt={tour.hotelName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0" />
              </div>
              <h4 className="font-bold text-lg text-[#004d40] mb-1">{tour.hotelName}</h4>
              <p className="text-[11px] text-[#00695c] mb-3 flex items-center gap-1 font-medium"><CalendarDays className="w-3 h-3" /> {tour.dates}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#004d40] font-black text-xl">{tour.price}</span>
                <span className="text-sm text-[#00695c] opacity-60 line-through decoration-red-400/70">{tour.oldPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ОТЗЫВЫ (ВАРИАНТ 3: Жемчужный слайдер - УВЕЛИЧЕНА ВЫСОТА И ТОЧКИ) --- */}
      <div className="w-full mb-12 relative z-10 px-4">
        <h3 className="text-lg font-medium text-[#00695c] opacity-90 mb-6 text-center">Истории путешественников</h3>
        
        {/* min-h-[300px] чтобы текст не обрезался */}
        <div className="relative p-6 rounded-[2rem] backdrop-blur-xl bg-white/20 shadow-[0_8px_32px_rgba(0,100,100,0.05)] border border-white/50 overflow-hidden min-h-[300px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#E0FFFF]/40 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex-1 relative min-h-[190px] w-full">
            {DATA.reviews.map((review, i) => (
              <div key={review.id} className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col justify-center ${i === activeReview ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'}`}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 text-[#00695c] fill-white/50" />
                  ))}
                </div>
                {/* line-clamp-5 чтобы больше текста влезло */}
                <p className="text-sm text-[#004d40] font-medium leading-relaxed mb-5 italic line-clamp-5">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  {/* ИНИЦИАЛ ВМЕСТО ФОТО */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#00695c]/20 shadow-sm flex items-center justify-center bg-gradient-to-br from-[#E0FFFF] to-white text-[#00695c] font-bold font-serif text-lg shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-[#00695c] uppercase tracking-widest">{review.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-2 relative z-10 w-full">
            {/* Огромная зона клика для мобилок (p-3) */}
            <button 
              onClick={() => setActiveReview((prev) => (prev - 1 + DATA.reviews.length) % DATA.reviews.length)} 
              className="p-3 -ml-3 text-[#00695c]/40 hover:text-[#00695c] transition-colors"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <div className="flex justify-center gap-1">
              {DATA.reviews.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveReview(idx)}
                  className="p-3 -m-3 group" // Увеличенная зона клика вокруг точек!
                >
                  <div className={`transition-all duration-300 rounded-full mx-auto ${idx === activeReview ? 'w-6 h-1.5 bg-[#00695c]' : 'w-1.5 h-1.5 bg-[#00695c]/30 group-hover:bg-[#00695c]/50'}`} />
                </button>
              ))}
            </div>
            <button 
              onClick={() => setActiveReview((prev) => (prev + 1) % DATA.reviews.length)} 
              className="p-3 -mr-3 text-[#00695c]/40 hover:text-[#00695c] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* --- LEAD-МАГНИТ (ВАРИАНТ 3: Жемчужный Бриз - Компактная кнопка) --- */}
      <div className="w-full mb-12 px-4 relative z-10">
        <button className="w-full relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00695c]/20 to-[#004d40]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
          <div className="relative py-3 px-4 rounded-2xl backdrop-blur-xl bg-white/40 border border-white flex items-center gap-4 shadow-sm hover:bg-white/60 transition-colors text-left cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0FFFF] to-white flex items-center justify-center shadow-inner text-[#00695c] shrink-0 group-hover:scale-105 transition-transform">
              <Luggage className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#004d40] text-xs uppercase tracking-wider mb-0.5">Чек-лист в дорогу</h3>
              <span className="text-[#00695c] text-[9px] uppercase tracking-widest font-medium">Забрать PDF</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#00695c]" />
          </div>
        </button>
      </div>

      <div className="w-full flex flex-col items-center mt-2 pb-8 relative z-10">
        <p className="text-[#00695c] opacity-70 font-medium text-[10px] mb-5 tracking-widest uppercase">Жду вашего сообщения</p>
        <div className="flex justify-center gap-5">
          <a href="#" className="w-12 h-12 rounded-full backdrop-blur-md bg-white/40 border border-white/60 flex items-center justify-center hover:bg-white hover:shadow-[0_4px_15px_rgba(0,100,100,0.15)] transition-all duration-300 group">
            <Send className="w-5 h-5 text-[#00695c] group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full backdrop-blur-md bg-white/40 border border-white/60 flex items-center justify-center hover:bg-white hover:shadow-[0_4px_15px_rgba(0,100,100,0.15)] transition-all duration-300 group">
            <Phone className="w-5 h-5 text-[#00695c] group-hover:scale-110 transition-transform" />
          </a>
          <a href="#" className="w-12 h-12 rounded-full backdrop-blur-md bg-white/40 border border-white/60 flex items-center justify-center hover:bg-white hover:shadow-[0_4px_15px_rgba(0,100,100,0.15)] transition-all duration-300 group">
            <Instagram className="w-5 h-5 text-[#00695c] group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

// ==========================================
// ШАБЛОН 4: Небесный Эффект (Cloud Nine)
// ==========================================
const Template4 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => setActiveReview(p => (p + 1) % DATA.reviews.length);
  const prevReview = () => setActiveReview(p => (p - 1 + DATA.reviews.length) % DATA.reviews.length);

  return (
  <div className="relative min-h-screen bg-gradient-to-b from-[#E6F3FF] via-white to-white overflow-hidden flex justify-center text-slate-700 font-sans w-full">
    {/* Облака на фоне */}
    <div className="absolute top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-80"></div>
    <div className="absolute top-40 -right-10 w-60 h-60 bg-white rounded-full blur-3xl opacity-80"></div>

    {/* Весь контейнер слегка покачивается */}
    <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center animate-sway">
      
      {/* Аватар-облако/капля */}
      <div className="relative mb-6 group">
         <div className="w-44 h-44 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden relative z-10 border-4 border-white shadow-xl shadow-[#87CEFA]/20 group-hover:rounded-[50%] transition-all duration-700">
           <img src={DATA.avatarUrl} alt="Аватар" className="w-full h-full object-cover" />
         </div>
         {/* Золотой акцент */}
         <div className="absolute -top-2 -right-2 text-[#FFD700] animate-bounce-slow"><Sparkles className="w-8 h-8" /></div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-1 text-slate-800">{DATA.name} <span className="text-[#87CEFA]">{DATA.lastName}</span></h1>
        <p className="text-slate-500 font-medium text-sm flex items-center justify-center gap-1.5"><Cloud className="w-4 h-4 text-[#87CEFA]" /> Легко и без забот</p>
      </div>

      {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ (Кнопка-гармошка по клику) --- */}
      <div className="w-full mb-8 flex flex-col items-center relative z-20">
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="bg-white px-6 py-3 rounded-full shadow-lg shadow-[#87CEFA]/15 border border-[#E6F3FF] text-sm font-bold text-[#87CEFA] flex items-center gap-2 hover:-translate-y-1 transition-all z-20"
        >
          <Cloud className={`w-5 h-5 transition-transform duration-500 ${isExpanded ? 'scale-0' : 'scale-100'}`} /> 
          {isExpanded ? 'Скрыть историю' : 'Узнать больше обо мне'}
          <ChevronRight className={`w-4 h-4 transition-transform duration-500 ${isExpanded ? '-rotate-90' : 'rotate-90'}`} />
        </button>
        
        <div className={`w-full bg-white/90 backdrop-blur-md border border-[#E6F3FF] rounded-3xl shadow-sm transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-64 mt-[-20px] pt-10 pb-6 px-6 opacity-100' : 'max-h-0 mt-0 py-0 px-6 opacity-0'}`}>
          <p className="text-sm text-slate-600 leading-relaxed font-medium text-center">
            {DATA.aboutText}
          </p>
        </div>
      </div>

      {/* Парящие блоки */}
      <button className="w-full bg-white text-[#87CEFA] font-bold text-lg py-4 px-8 rounded-2xl mb-8 shadow-[0_15px_30px_rgba(135,206,250,0.15)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(135,206,250,0.25)] transition-all border border-[#E6F3FF] flex items-center justify-center gap-2">
        Взлетаем! <Plane className="w-5 h-5" />
      </button>

      {/* ВАРИАНТ 4: Парящие облака-пилюли с анимацией */}
      <div className="w-full mb-10">
        <h3 className="text-lg font-bold text-slate-700 mb-4 px-4 text-left">Авторские туры</h3>
        <div className="flex flex-col gap-5">
          {DATA.tours.map((tour, i) => (
            <div key={tour.id} className={`bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-[0_10px_20px_rgba(135,206,250,0.1)] border border-[#E6F3FF] flex items-center gap-4 hover:shadow-[0_15px_30px_rgba(135,206,250,0.2)] hover:border-[#87CEFA]/50 transition-all cursor-pointer ${i % 2 === 0 ? 'animate-float' : 'animate-float-slow'}`}>
              <img src={tour.img} alt={tour.title} className="w-16 h-16 rounded-full object-cover shadow-inner" />
              <div className="flex-1">
                <span className="font-extrabold text-lg text-slate-700 block leading-tight mb-0.5">{tour.title}</span>
                <span className="text-[10px] uppercase font-bold text-[#87CEFA] tracking-widest">{tour.desc}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#E6F3FF] flex items-center justify-center mr-2 text-[#87CEFA] group-hover:bg-[#87CEFA] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ГОРЯЩИЕ ТУРЫ (ВАРИАНТ 4: ПОЛНАЯ ПЕРЕДЕЛКА - ГОРИЗОНТАЛЬНЫЕ ПАРЯЩИЕ КАРТОЧКИ) --- */}
      <div className="w-full mb-12">
        <h3 className="text-lg font-bold text-slate-700 mb-4 px-4 flex items-center gap-2"><Flame className="w-5 h-5 text-orange-400" /> Горящие туры</h3>
        <div className="flex overflow-x-auto gap-5 px-4 pb-6 pt-2 snap-x snap-mandatory hide-scrollbar">
          {DATA.hotTours.map((tour) => (
             <div key={tour.id} className="min-w-[85%] snap-center shrink-0 bg-white rounded-3xl p-3 shadow-[0_10px_20px_rgba(135,206,250,0.1)] border border-[#E6F3FF] hover:-translate-y-1 transition-all group cursor-pointer">
                <div className="w-full h-40 rounded-2xl overflow-hidden relative mb-3">
                   <img src={tour.img} alt={tour.hotelName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                   <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#87CEFA] uppercase tracking-widest shadow-sm">Promo</div>
                </div>
                <div className="px-2">
                   <div className="flex justify-between items-start mb-1">
                      <h4 className="font-extrabold text-slate-700 text-lg leading-tight">{tour.hotelName}</h4>
                      <div className="text-[10px] text-slate-400 line-through mt-1">{tour.oldPrice}</div>
                   </div>
                   <div className="flex items-center gap-1 text-xs text-slate-400 mb-3 font-medium uppercase tracking-widest"><MapPin className="w-3 h-3 text-[#87CEFA]" /> {tour.loc}</div>
                   <div className="flex justify-between items-center border-t border-[#E6F3FF] pt-3">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 bg-[#E6F3FF]/50 px-2 py-1 rounded-md uppercase"><CalendarDays className="w-3 h-3 text-[#87CEFA]"/> {tour.dates}</div>
                      <div className="font-black text-[#87CEFA] text-xl">{tour.price}</div>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* --- ОТЗЫВЫ (ВАРИАНТ 4: Парящее облако с навигацией) --- */}
      <div className="w-full mb-12 px-4">
        <h3 className="text-lg font-bold text-slate-700 mb-6 text-center">Счастливые туристы</h3>
        
        <div className="relative bg-white rounded-3xl p-6 shadow-[0_15px_30px_rgba(135,206,250,0.15)] border border-[#E6F3FF] min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white border-b border-r border-[#E6F3FF] transform rotate-45 shadow-[5px_5px_10px_rgba(135,206,250,0.05)]"></div>
          
          <div className="relative z-10 flex-1 relative min-h-[140px] w-full">
            {DATA.reviews.map((review, i) => (
              <div key={review.id} className={`absolute inset-0 transition-all duration-500 ease-out flex flex-col justify-between ${i === activeReview ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 pointer-events-none z-0'}`}>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                      ))}
                    </div>
                    <Sparkles className="w-4 h-4 text-[#87CEFA] opacity-50" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* ИНИЦИАЛ ВМЕСТО ФОТО */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#E6F3FF] flex items-center justify-center bg-gradient-to-br from-[#87CEFA] to-[#E6F3FF] text-white font-bold font-serif text-lg shadow-inner shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{review.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2 mt-4 relative z-10">
            <button onClick={prevReview} className="w-8 h-8 rounded-full bg-[#E6F3FF] flex items-center justify-center text-[#87CEFA] hover:bg-[#87CEFA] hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <button onClick={nextReview} className="w-8 h-8 rounded-full bg-[#E6F3FF] flex items-center justify-center text-[#87CEFA] hover:bg-[#87CEFA] hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* --- LEAD-МАГНИТ (ВАРИАНТ 4: Небесный Эффект - Компактный) --- */}
      <div className="w-full mb-12 px-6 relative z-10">
        <button className="w-full bg-white/90 backdrop-blur-sm p-1 rounded-[1.5rem] shadow-[0_8px_20px_rgba(135,206,250,0.1)] hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(135,206,250,0.2)] transition-all border border-[#E6F3FF] group cursor-pointer">
          <div className="py-2.5 px-4 flex items-center gap-4">
             <div className="w-9 h-9 bg-gradient-to-br from-[#87CEFA] to-[#B0E0E6] rounded-full flex items-center justify-center text-white shadow-inner shrink-0 group-hover:animate-bounce-slow">
               <Luggage className="w-4 h-4" />
             </div>
             <div className="flex flex-col items-start text-left flex-1">
               <h3 className="font-extrabold text-slate-700 text-xs">Секретный чек-лист</h3>
               <span className="text-[9px] text-[#87CEFA] font-bold uppercase tracking-widest mt-0.5">Подарок внутри</span>
             </div>
             <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#87CEFA] transition-colors" />
          </div>
        </button>
      </div>

      <div className="w-full flex flex-col items-center mt-2 pb-8 relative z-10">
        <h3 className="text-[10px] font-bold text-[#87CEFA] uppercase tracking-widest mb-5 flex items-center gap-2">Контакты</h3>
        <div className="flex justify-center gap-5">
           <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-[0_5px_15px_rgba(135,206,250,0.1)] border border-[#E6F3FF] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(135,206,250,0.2)] hover:bg-[#87CEFA] group transition-all">
             <Send className="w-5 h-5 text-[#87CEFA] group-hover:text-white transition-colors" />
           </a>
           <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-[0_5px_15px_rgba(135,206,250,0.1)] border border-[#E6F3FF] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(135,206,250,0.2)] hover:bg-[#87CEFA] group transition-all" style={{animationDelay: '0.1s'}}>
             <Phone className="w-5 h-5 text-[#87CEFA] group-hover:text-white transition-colors" />
           </a>
           <a href="#" className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-[0_5px_15px_rgba(135,206,250,0.1)] border border-[#E6F3FF] flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(135,206,250,0.2)] hover:bg-[#87CEFA] group transition-all" style={{animationDelay: '0.2s'}}>
             <Instagram className="w-5 h-5 text-[#87CEFA] group-hover:text-white transition-colors" />
           </a>
        </div>
      </div>

    </div>
  </div>
  );
};

// ==========================================
// ШАБЛОН 5: Кристальный Оазис (Crystal Oasis)
// ==========================================
const Template5 = () => {
  const [activeRev, setActiveRev] = useState(0);

  return (
  <div className="relative min-h-screen bg-[#FAFAFA] overflow-hidden flex justify-center text-gray-900 font-sans w-full">
    {/* Водные и песочные блики */}
    <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-[#00CED1]/10 rounded-full blur-[100px]"></div>
    <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-[#FF7F50]/5 rounded-full blur-[100px]"></div>

    <div className="relative z-10 w-full max-w-md px-6 py-10 flex flex-col items-center">
      
      {/* Аватар-лепесток */}
      <div className="relative mb-8">
         <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1] to-[#FF7F50] rounded-[0_50%_50%_50%] blur-md opacity-40 translate-y-2 translate-x-2"></div>
         <div className="w-48 h-48 rounded-[0_50%_50%_50%] overflow-hidden relative z-10 border-[6px] border-white">
           <img src={DATA.avatarUrl} alt="Аватар" className="w-full h-full object-cover" />
         </div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-black tracking-tight mb-2 uppercase">{DATA.name}</h1>
        <h2 className="text-xl font-medium text-[#00CED1] uppercase tracking-widest mb-3">{DATA.lastName}</h2>
        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Gem className="w-3 h-3 text-[#FF7F50]" /> {DATA.role} <Gem className="w-3 h-3 text-[#FF7F50]" />
        </p>
      </div>

      {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ (Горизонтальный свайп-карусель) --- */}
      <div className="w-full overflow-hidden mb-8 -mx-6 px-6">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
          {/* Слайд 1 */}
          <div className="snap-center shrink-0 w-[85%] bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Gem className="w-5 h-5 text-[#00CED1]" /> Обо мне
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {DATA.aboutText}
            </p>
          </div>
          {/* Слайд 2 */}
          <div className="snap-center shrink-0 w-[85%] bg-gradient-to-br from-[#00CED1] to-[#20B2AA] p-5 rounded-2xl shadow-sm text-white flex flex-col justify-center items-center text-center">
            <Sparkles className="w-8 h-8 mb-3 opacity-90" />
            <p className="font-bold text-lg">10+ лет опыта</p>
            <p className="text-sm opacity-90">В премиум сегменте</p>
          </div>
        </div>
        <div className="flex justify-center gap-1 mt-1">
          <div className="w-2 h-2 rounded-full bg-[#00CED1]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
      </div>

      {/* Глянцевая кнопка с бликом */}
      <button className="relative w-full overflow-hidden bg-gradient-to-r from-[#FF7F50] to-[#FF6347] text-white font-bold text-lg py-4 px-8 rounded-xl mb-8 shadow-xl shadow-orange-500/20 group hover:shadow-orange-500/40 transition-shadow">
        <span className="relative z-10 flex items-center justify-center gap-2"><Gem className="w-5 h-5" /> Premium Туры</span>
        {/* Эффект пробегающего блика */}
        <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] animate-shimmer"></div>
      </button>

      {/* ВАРИАНТ 5: 3D-Кристальная сетка с жесткими гранями */}
      <div className="w-full flex flex-col gap-5 mb-10 px-2">
        <h3 className="font-bold text-gray-900 text-lg uppercase tracking-wider mb-1">Авторские туры</h3>
        {DATA.tours.map((tour, i) => (
          <div key={tour.id} className="relative group cursor-pointer">
            {/* Тень-основание для 3D эффекта */}
            <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 0 ? 'from-[#00CED1] to-[#20B2AA]' : 'from-[#FF7F50] to-[#FF6347]'} rounded-2xl transform translate-x-2 translate-y-2 opacity-50 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300`}></div>
            
            {/* Сама карточка */}
            <div className="relative bg-white/90 backdrop-blur-xl p-3 rounded-2xl border border-white shadow-sm flex items-center gap-5 transform group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                <img src={tour.img} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-[19px] uppercase tracking-tight leading-none mb-1.5">{tour.title}</h4>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${i % 2 === 0 ? 'text-[#00CED1]' : 'text-[#FF7F50]'}`}>{tour.desc}</p>
              </div>
              <div className="bg-gray-50/80 p-3 rounded-xl text-gray-400 group-hover:text-gray-900 group-hover:bg-white shadow-sm mr-2 transition-all duration-300">
                 <Gem className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- ГОРЯЩИЕ ТУРЫ (ВАРИАНТ 5: Кристальный Оазис - Горизонтальный скролл) --- */}
      <div className="w-full mb-12 px-2">
        <h3 className="font-bold text-gray-900 text-lg uppercase tracking-wider mb-4 flex items-center gap-2">
          <Flame className="w-6 h-6 text-[#FF6347]" /> Горящие туры
        </h3>
        <div className="flex overflow-x-auto gap-5 pb-6 pt-2 snap-x snap-mandatory hide-scrollbar">
          {DATA.hotTours.map(tour => (
            <div key={tour.id} className="min-w-[85%] snap-center relative bg-white/80 backdrop-blur-xl rounded-xl border border-white shadow-md overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow shrink-0">
              {/* Диагональная лента */}
              <div className="absolute -right-8 top-4 bg-[#FF6347] text-white text-[10px] font-black uppercase tracking-widest px-10 py-1 rotate-45 z-20 shadow-md">
                SALE
              </div>
              <div className="h-36 relative overflow-hidden">
                <img src={tour.img} alt={tour.hotelName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white z-10 flex justify-between items-end">
                  <div>
                    <h4 className="font-black text-xl uppercase tracking-tight leading-none mb-1">{tour.hotelName}</h4>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#00CED1]">{tour.loc}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest">{tour.dates}</div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center bg-white">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 line-through font-bold mb-0.5">{tour.oldPrice}</span>
                  <span className="text-2xl font-black text-[#FF7F50] leading-none">{tour.price}</span>
                </div>
                <div className="bg-gradient-to-r from-[#00CED1] to-[#20B2AA] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                  Смотреть
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ОТЗЫВЫ (ВАРИАНТ 5: Интерактивный кристальный блок с переключением аватаров) --- */}
      <div className="w-full mb-12 px-4">
        <h3 className="font-bold text-gray-900 text-lg uppercase tracking-wider mb-5 flex items-center gap-2">
          <Gem className="w-5 h-5 text-[#00CED1]" /> Отзывы
        </h3>
        
        <div className="relative group min-h-[240px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1]/20 to-[#FF7F50]/20 rounded-3xl transform -translate-x-1.5 -translate-y-1.5 transition-transform duration-500"></div>
          <div className="relative h-full bg-white/95 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm flex flex-col justify-between">
            
            <div className="relative min-h-[120px] w-full">
              {DATA.reviews.map((review, i) => (
                <div key={review.id} className={`absolute inset-0 transition-all duration-500 ease-in-out ${i === activeRev ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'}`}>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-[#00CED1] fill-[#00CED1]" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed italic line-clamp-3">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-end border-t border-gray-100 pt-4 mt-4 relative z-20">
              <div className="relative min-w-[120px] h-[36px]">
                {DATA.reviews.map((review, i) => (
                   <div key={`name-${review.id}`} className={`absolute inset-0 transition-all duration-300 ${i === activeRev ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-0.5">Путешественник</span>
                      <h4 className="font-black text-gray-900 text-sm uppercase tracking-wider truncate">{review.name}</h4>
                   </div>
                ))}
              </div>
              
              <div className="flex gap-1.5 bg-gray-50/80 p-1.5 rounded-full border border-gray-100 shadow-inner">
                {DATA.reviews.map((r, i) => (
                  <button 
                    key={r.id}
                    onClick={() => setActiveRev(i)}
                    className={`relative w-8 h-8 rounded-full flex items-center justify-center font-bold font-serif text-sm transition-all duration-300 ${i === activeRev ? 'scale-110 ring-2 ring-[#FF7F50] z-10 shadow-md bg-gradient-to-br from-[#FF7F50] to-[#FF6347] text-white' : 'opacity-50 hover:opacity-100 bg-gray-200 text-gray-500'}`}
                  >
                    {r.name.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* --- LEAD-МАГНИТ (ВАРИАНТ 5: Кристальный Оазис - Компактный) --- */}
      <div className="w-full mb-12 px-4">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-xl transform translate-x-1 translate-y-1 opacity-40 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300 pointer-events-none"></div>
          <div className="relative bg-white/90 backdrop-blur-xl border border-white p-3 rounded-xl shadow-sm flex items-center gap-3 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-[#FF7F50] border border-gray-100 shadow-inner shrink-0">
              <Luggage className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-black text-gray-900 text-xs uppercase tracking-wider mb-0.5">Чек-лист</h3>
              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Идеальный чемодан</p>
            </div>
            <div className="w-6 h-6 rounded bg-[#FF7F50] text-white flex items-center justify-center shadow-md">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-2 pb-8 px-2">
        <div className="flex items-center justify-center gap-2 mb-5">
           <Gem className="w-3 h-3 text-[#FF7F50]" />
           <span className="font-black text-gray-400 uppercase tracking-widest text-[10px]">Ваш турагент</span>
           <Gem className="w-3 h-3 text-[#00CED1]" />
        </div>
        <div className="flex justify-center gap-5">
           <a href="#" className="relative group w-12 h-12 bg-white backdrop-blur-xl border border-gray-100 rounded-xl shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <Send className="w-5 h-5 text-[#00CED1] relative z-10 group-hover:scale-110 transition-transform" />
           </a>
           <a href="#" className="relative group w-12 h-12 bg-white backdrop-blur-xl border border-gray-100 rounded-xl shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7F50]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <Phone className="w-5 h-5 text-[#FF7F50] relative z-10 group-hover:scale-110 transition-transform" />
           </a>
           <a href="#" className="relative group w-12 h-12 bg-white backdrop-blur-xl border border-gray-100 rounded-xl shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <Instagram className="w-5 h-5 text-gray-800 relative z-10 group-hover:scale-110 transition-transform" />
           </a>
        </div>
      </div>

    </div>
  </div>
);
};

// ==========================================
// ШАБЛОН 6: Oasis Quiet Luxury (Мой дизайн)
// ==========================================
const Template6 = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [activeReview, setActiveReview] = useState(0);

  const nextRev = () => setActiveReview(p => (p + 1) % DATA.reviews.length);
  const prevRev = () => setActiveReview(p => (p - 1 + DATA.reviews.length) % DATA.reviews.length);

  const closeQuiz = () => {
    setIsQuizOpen(false);
    setTimeout(() => setQuizStep(1), 500);
  };

  return (
    // Светлый, теплый кремово-персиковый фон с мягким скроллом
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans relative overflow-x-hidden pb-12 w-full">
      
      {/* --- ГЛОБАЛЬНЫЙ ФОН И ЧЁТКОЕ ФОТО 1/3 --- */}
      <div className="absolute top-0 left-0 w-full h-[40vh] z-0 pointer-events-none">
        {/* Четкое фото пляжа, моря и пальм на верхнюю треть экрана */}
        <img 
          src="https://i0.wp.com/images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&strip=all" 
          alt="Beautiful Beach" 
          className="w-full h-full object-cover"
        />
        {/* Легкий градиент для плавного перехода и читаемости статусбара */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FDFBF7]/40"></div>
      </div>

      {/* Остальной фон страницы с бликами (фиксированный под всем контентом) */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#FDFBF7]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full mix-blend-multiply blur-[80px]"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-cyan-200/30 rounded-full mix-blend-multiply blur-[80px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[480px] mx-auto px-5 pt-8">

        {/* --- 1. БЛОК: HERO (GLASSMORPHISM & АРКА) --- */}
        {/* mt-[20vh] обеспечивает правильный "наезд" нижней стеклянной карточки на фото, компенсируя удаленную плашку статуса */}
        <div className="relative bg-white/60 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] text-center px-6 pb-10 pt-[90px] mb-12 mt-[20vh]">
          
          {/* ЭЛЕГАНТНОЕ ФОТО (Quiet Luxury) */}
          <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-[140px] h-[140px] z-30 group">
            {/* Мягкое теплое свечение, чтобы фото "сливалось" с фоном */}
            <div className="absolute inset-[-10px] bg-gradient-to-tr from-amber-200/40 to-white/40 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 opacity-70"></div>
            
            {/* Тонкая ювелирная рамка */}
            <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-br from-white via-amber-100/50 to-amber-300/80 shadow-[0_15px_35px_-5px_rgba(217,119,6,0.2)] relative z-10">
              <img 
                src={DATA.avatarUrl} 
                alt={DATA.name} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Блик-звездочка для премиальности - ТЕПЕРЬ ОН ИДЕАЛЬНО НАКЛАДЫВАЕТСЯ НА КРАЙ! */}
            <Sparkles className="absolute top-1 right-1 w-7 h-7 text-amber-400 drop-shadow-sm animate-pulse z-20" />
          </div>

          <h1 className="font-serif text-[26px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 tracking-wide">
            {DATA.name} {DATA.lastName}
          </h1>
          <p className="text-cyan-700 font-bold text-[9px] uppercase tracking-[0.3em] mt-2 mb-5">
            Руководитель агентства
          </p>
          
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-5"></div>
          
          <p className="font-serif italic text-slate-600 text-[15px] leading-relaxed px-2">
            «Открываю для вас мир Quiet Luxury. Путешествия, где важна каждая деталь, а сервис незаметен, но безупречен.»
          </p>
        </div>

        {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ (Личное письмо с подписью) --- */}
        <div className="mb-14 px-2">
          <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md shadow-sm relative">
            <div className="absolute -top-4 -left-1 text-5xl text-amber-200 font-serif opacity-70">"</div>
            <p className="text-sm text-slate-600 font-light leading-relaxed relative z-10">
              {DATA.aboutText}
            </p>
            <div className="mt-5 flex justify-end">
              <span className="font-serif italic text-amber-600 text-lg border-b border-amber-200/50 pb-1 pr-2">
                С любовью, {DATA.name}
              </span>
            </div>
          </div>
        </div>

        {/* --- 3. БЛОК: 3D-ГЛОБУС & КВИЗ --- */}
        <div className="relative mb-14">
          <h2 className="text-center font-serif text-2xl text-slate-800 mb-6 font-medium">Куда отправимся <br/><span className="text-amber-500 italic">в этот раз?</span></h2>
          
          <div className="relative flex justify-center items-center h-[280px]">
            {/* Интерактивный Глобус */}
            <button 
              onClick={() => setIsQuizOpen(true)}
              className={`relative z-20 w-[240px] h-[240px] rounded-full transition-all duration-700 ease-out shadow-[0_20px_50px_rgba(6,182,212,0.3)]
                ${isQuizOpen ? 'scale-90 blur-md opacity-60' : 'hover:scale-105'}`}
            >
              {/* Фото океана в форме глобуса с бликами */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-[6px] border-white/80 bg-cyan-100">
                <img 
                  src="https://i0.wp.com/images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&strip=all" 
                  alt="Ocean Globe" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 via-transparent to-white/40 mix-blend-overlay"></div>
                {/* Эффект объема (внутренняя тень) */}
                <div className="absolute inset-0 rounded-full shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.2)] pointer-events-none"></div>
              </div>
              
              {!isQuizOpen && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                    <span className="font-bold text-cyan-800 text-sm">Пройти квиз</span>
                    <ChevronRight className="w-4 h-4 text-cyan-600" />
                  </div>
                </div>
              )}
            </button>

            {/* --- ВЫЕЗЖАЮЩАЯ ПАНЕЛЬ КВИЗА (МНОГОШАГОВАЯ) --- */}
            <div className={`absolute top-10 left-0 w-full bg-white/95 backdrop-blur-3xl border border-white/80 rounded-[2rem] shadow-2xl p-6 transition-all duration-500 z-30 ${isQuizOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-20 opacity-0 invisible pointer-events-none'}`}>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] text-amber-600 uppercase tracking-[0.2em] font-medium">
                  {quizStep < 4 ? `Шаг ${quizStep} из 3` : 'Готово'}
                </span>
                <button onClick={closeQuiz} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {quizStep === 1 && (
                <div className="animate-in fade-in zoom-in-95 duration-300">
                  <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">Куда тянет душу?</h3>
                  <p className="text-sm text-slate-500 mb-6">Выберите идеальную картинку отдыха</p>
                  <div className="space-y-3">
                    {['Белоснежные пляжи и релакс', 'Активный отдых и горы', 'Европейские улочки', 'Экзотика и джунгли'].map((option, i) => (
                      <button key={i} onClick={() => setQuizStep(2)} className="w-full text-left px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700 transition-colors flex justify-between group">
                        {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">С кем полетите?</h3>
                  <p className="text-sm text-slate-500 mb-6">Это поможет подобрать правильный отель</p>
                  <div className="space-y-3">
                    {['Вдвоем (Романтика)', 'Семьей (С детьми)', 'Соло (Перезагрузка)', 'Шумной компанией'].map((option, i) => (
                      <button key={i} onClick={() => setQuizStep(3)} className="w-full text-left px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700 transition-colors flex justify-between group">
                        {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">Куда прислать варианты?</h3>
                  <p className="text-sm text-slate-500 mb-6">Оставьте WhatsApp, я пришлю 3 лучших варианта под ваш запрос.</p>
                  <div className="space-y-4">
                    <input 
                      type="tel" 
                      placeholder="+7 (999) 000-00-00" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                    <button 
                      onClick={() => setQuizStep(4)} 
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-2xl py-4 hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                    >
                      Получить подборку
                    </button>
                  </div>
                </div>
              )}

              {quizStep === 4 && (
                <div className="text-center py-6 animate-in zoom-in-90 duration-500">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-800 mb-3">Запрос принят!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">Я уже начала готовить для вас идеальные варианты. Напишу в WhatsApp в течение 15 минут.</p>
                  <button onClick={closeQuiz} className="w-full bg-slate-100 text-slate-700 font-bold rounded-2xl py-4 hover:bg-slate-200 transition-colors">
                    Отлично, жду
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* --- 4. БЛОК: АВТОРСКИЕ ТУРЫ --- */}
        <div className="mb-14">
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-serif text-2xl text-slate-800 font-medium">Авторские <br/><span className="text-amber-500 italic">маршруты</span></h2>
            <button className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-1">Все туры</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Мальдивы', subtitle: 'Private Villas', img: 'https://i0.wp.com/images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&strip=all' },
              { title: 'Сейшелы', subtitle: 'Ocean Breeze', img: 'https://i0.wp.com/images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=400&strip=all' }
            ].map((tour, idx) => (
              <div key={idx} className="relative h-[220px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Теплый градиент для читаемости */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e38]/80 via-transparent to-transparent"></div>
                
                {/* Иконка перехода в правый верхний угол */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white group-hover:bg-white group-hover:text-cyan-700 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-amber-200 mb-1 font-semibold drop-shadow-md">{tour.subtitle}</p>
                  <h3 className="font-serif text-lg font-medium drop-shadow-md">{tour.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- 5. БЛОК: ГОРЯЩИЕ ТУРЫ (СЛАЙДЕР) --- */}
        <div className="mb-14 -mx-5"> {/* -mx-5 для выноса за края экрана мобильного */}
          <div className="px-5 mb-6">
            <h2 className="font-serif text-2xl text-slate-800 font-medium">Специальные <br/><span className="text-amber-500 italic">предложения</span></h2>
          </div>
          
          <div className="flex overflow-x-auto gap-5 px-5 pb-8 pt-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              { id: 1, name: 'Rixos Premium', loc: 'Дубай, ОАЭ', price: '$3 200', img: 'https://i0.wp.com/images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&strip=all' },
              { id: 2, name: 'Ayana Resort', loc: 'Бали, Индонезия', price: '$2 850', img: 'https://i0.wp.com/images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&strip=all' }
            ].map((deal) => (
              <div key={deal.id} className="min-w-[260px] snap-center bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="relative h-[160px] rounded-2xl overflow-hidden mb-4">
                  <img src={deal.img} alt={deal.name} className="w-full h-full object-cover" />
                  {/* Яркий индикатор мест */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Осталось 2 места
                  </div>
                </div>
                
                <div className="px-2 pb-2">
                  <h4 className="font-serif text-lg font-bold text-slate-800">{deal.name}</h4>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-1 mb-4">
                    <MapPin className="w-3 h-3 text-cyan-500" /> {deal.loc}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Стоимость</p>
                      <p className="font-serif text-xl font-bold text-amber-600">{deal.price}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ОТЗЫВЫ (ВАРИАНТ 6: Quiet Luxury - Элегантное затухание) --- */}
        <div className="mb-14 px-5">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-amber-200"></div>
            <h2 className="font-serif text-xl text-slate-800 font-medium italic">Впечатления</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-amber-200"></div>
          </div>
          
          <div className="relative border-t border-b border-amber-200/40 py-8 px-2 text-center flex flex-col justify-between bg-white/20 backdrop-blur-sm rounded-3xl min-h-[260px] shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1 z-20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-amber-300 fill-amber-300" />
              ))}
            </div>

            <div className="relative flex-1 flex flex-col justify-center items-center mt-6 mb-8 w-full min-h-[100px]">
              {DATA.reviews.map((review, i) => (
                <div key={review.id} className={`absolute inset-0 px-4 transition-all duration-700 ease-in-out flex items-center justify-center ${i === activeReview ? 'opacity-100 blur-none z-10' : 'opacity-0 blur-sm pointer-events-none z-0'}`}>
                  <p className="font-serif text-slate-700 italic text-[15px] leading-relaxed line-clamp-4">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between w-full px-4 relative z-20 h-[70px]">
              <button onClick={prevRev} className="w-8 h-8 rounded-full border border-amber-200/60 flex items-center justify-center hover:bg-white hover:border-amber-400 transition-all text-amber-600/70 hover:text-amber-500 bg-white/50">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              
              <div className="relative w-[120px] h-full flex justify-center">
                {DATA.reviews.map((review, i) => (
                  <div key={review.id} className={`absolute inset-0 flex flex-col items-center transition-all duration-500 ${i === activeReview ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 pointer-events-none z-0'}`}>
                    {/* ИНИЦИАЛ ВМЕСТО ФОТО */}
                    <div className="w-10 h-10 rounded-full mb-1.5 ring-2 ring-amber-100 shadow-sm flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 text-amber-700 font-bold font-serif text-lg shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-slate-800 truncate w-full text-center">{review.name}</span>
                  </div>
                ))}
              </div>
              
              <button onClick={nextRev} className="w-8 h-8 rounded-full border border-amber-200/60 flex items-center justify-center hover:bg-white hover:border-amber-400 transition-all text-amber-600/70 hover:text-amber-500 bg-white/50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* --- LEAD-МАГНИТ (ВАРИАНТ 6: Quiet Luxury - Минимализм) --- */}
        <div className="w-full mb-12 px-5">
          <button className="w-full bg-white/50 backdrop-blur-md border border-amber-200/50 hover:border-amber-400/80 rounded-2xl py-4 px-5 flex items-center justify-between transition-all group relative overflow-hidden shadow-sm cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full border border-amber-200/60 flex items-center justify-center bg-white shrink-0 group-hover:scale-105 transition-transform">
                <Luggage className="w-4 h-4 text-amber-600/80 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <h3 className="font-serif text-[15px] text-slate-800 leading-none mb-1.5">Чек-лист путешественника</h3>
                <div className="text-[8px] uppercase tracking-[0.2em] font-bold text-amber-600/80">Забрать руководство</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-300 relative z-10 group-hover:text-amber-500 transition-colors" />
          </button>
        </div>

        {/* --- ФУТЕР --- */}
        <div className="mb-8 w-full">
          <div className="flex flex-col items-center px-5">
             <div className="flex items-center justify-center gap-3 mb-6 w-full max-w-[200px]">
               <div className="h-[1px] flex-1 bg-amber-200/50"></div>
               <span className="font-serif italic text-slate-500 text-sm">Свяжитесь со мной</span>
               <div className="h-[1px] flex-1 bg-amber-200/50"></div>
             </div>
             
             <div className="flex justify-center gap-6">
               <a href="#" className="w-12 h-12 rounded-full border border-amber-200/50 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:border-amber-400 hover:shadow-sm transition-all group">
                 <Send className="w-5 h-5 text-amber-600/70 group-hover:text-amber-500 group-hover:scale-110 transition-all" />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-amber-200/50 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:border-amber-400 hover:shadow-sm transition-all group">
                 <Phone className="w-5 h-5 text-amber-600/70 group-hover:text-amber-500 group-hover:scale-110 transition-all" />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-amber-200/50 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white hover:border-amber-400 hover:shadow-sm transition-all group">
                 <Instagram className="w-5 h-5 text-amber-600/70 group-hover:text-amber-500 group-hover:scale-110 transition-all" />
               </a>
             </div>
             
             <p className="text-center text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-10 pb-4">
               © Oasis Quiet Luxury
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// ШАБЛОН 7: Секретный Резорт
// ==========================================
const Template7 = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [phone, setPhone] = useState('');

  const nextRev = () => setActiveReview(p => (p + 1) % DATA.reviews.length);
  const prevRev = () => setActiveReview(p => (p - 1 + DATA.reviews.length) % DATA.reviews.length);

  const closeQuiz = () => {
    setIsQuizOpen(false);
    setTimeout(() => setQuizStep(1), 500);
  };

  return (
    <div className="min-h-screen bg-resort-chic text-slate-900 font-sans selection:bg-[#C5A059]/30 flex justify-center overflow-hidden relative w-full">
      
      {/* Эффект матовой текстуры для дорогой бумаги */}
      <div className="noise-overlay"></div>

      {/* Теплый солнечный (песочный) блик ВЫНЕСЕН НА ВЕСЬ ЭКРАН */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[60vh] bg-[#F3E5AB]/50 rounded-[100%] blur-[100px] pointer-events-none z-0"></div>

      {/* Глобальные стили для светлого, летнего люкса */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        
        /* Светлый премиальный фон (Цвет белого песка и жемчуга) */
        .bg-resort-chic { 
          background-color: #FDFBF7;
          background-image: radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F5EFEB 100%);
        }
        
        .noise-overlay {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none; z-index: 50; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* Светлый Glassmorphism (Воздушное стекло) */
        .glass-panel { 
          background: rgba(255, 255, 255, 0.65); 
          backdrop-filter: blur(24px); 
          -webkit-backdrop-filter: blur(24px); 
          border: 1px solid rgba(255, 255, 255, 1); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,1);
        }
        
        .glass-panel-light {
          background: rgba(255, 255, 255, 0.45); 
          backdrop-filter: blur(16px); 
          border: 1px solid rgba(255, 255, 255, 0.8); 
        }

        /* Насыщенное золото для читаемости на светлом */
        .gold-gradient-text { 
          background: linear-gradient(135deg, #B58500 0%, #D4AF37 50%, #9C7100 100%); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
        }

        .gold-accent { color: #B58500; }

        @keyframes spinGlobe {
          from { background-position: 0 0; }
          to { background-position: 200% 0; }
        }

        /* Дневной, яркий глобус */
        .globe-texture {
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Land_ocean_ice_2048.jpg/1024px-Land_ocean_ice_2048.jpg');
          background-size: auto 100%;
          animation: spinGlobe 40s linear infinite;
        }
        .globe-shadow {
          box-shadow: 
            inset -20px -20px 40px rgba(0,0,0,0.2), 
            inset 10px 10px 30px rgba(255,255,255,0.9), 
            0 15px 40px rgba(0,0,0,0.1);
        }

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="w-full max-w-md relative overflow-y-auto overflow-x-hidden pb-24 z-10">

        {/* --- 1. Блок «Главный экран / Hero» --- */}
        <div className="px-5 pt-36 pb-6"> {/* Увеличил отступ сверху (pt-36), чтобы фото было куда вылетать */}
          <div className="glass-panel rounded-3xl p-8 pt-12 relative text-center mt-12"> {/* mt-12 опускает саму плашку вниз */}
            
            {/* РЕАЛИСТИЧНОЕ ФОТО (Красивый 3D-вылет) */}
            <div className="absolute bottom-[calc(100%-40px)] left-1/2 -translate-x-1/2 w-32 h-40 flex justify-center z-20">
              <div className="relative w-full h-full group cursor-pointer">
                {/* Свечение */}
                <div className="absolute inset-0 bg-[#D4AF37] blur-[20px] opacity-40 rounded-full z-0 group-hover:opacity-60 transition-opacity"></div>
                {/* Само фото */}
                <img 
                  src={DATA.avatarUrl} 
                  alt={DATA.name} 
                  className="w-full h-full object-cover rounded-[100px_100px_40px_40px] border-[4px] border-white shadow-xl relative z-10 transition-transform group-hover:-translate-y-2"
                />
                {/* Значок статуса */}
                <div className="absolute bottom-1 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-20 border border-slate-100">
                   <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 relative z-10">
              <h1 className="text-3xl font-serif text-slate-900 tracking-wide mb-1">{DATA.name} {DATA.lastName}</h1>
              <p className="gold-accent text-[10px] uppercase tracking-[0.25em] font-medium opacity-90">Executive Travel Expert</p>
              
              <div className="flex items-center justify-center gap-3 my-6">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
                <Sun className="w-3 h-3 text-[#D4AF37] opacity-80" />
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
              </div>
              
              <p className="text-sm text-slate-600 font-light leading-relaxed px-2">
                Создаю путешествия туда, где всегда светит солнце. Идеальный сервис, лучшие виллы и теплое море.
              </p>
            </div>
          </div>
        </div>

        {/* --- 2. Блок «Live Vibe Status» --- */}
        <div className="px-5 mb-12">
          <div className="glass-panel-light rounded-full py-3 px-5 flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 items-center shadow-sm">
            <div className="flex items-center gap-2.5 snap-center shrink-0">
              <Sun className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-xs text-slate-500 font-light uppercase tracking-widest">Мальдивы: <span className="text-slate-800 font-medium ml-1">+29°C</span></span>
            </div>
            <div className="w-[1px] h-3 bg-slate-300 shrink-0"></div>
            <div className="flex items-center gap-2.5 snap-center shrink-0">
              <Euro className="w-4 h-4 text-sky-600" />
              <span className="text-xs text-slate-500 font-light uppercase tracking-widest">Курс: <span className="text-slate-800 font-medium ml-1">₽98.5</span></span>
            </div>
            <div className="w-[1px] h-3 bg-slate-300 shrink-0"></div>
            <div className="flex items-center gap-2.5 snap-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-xs text-slate-500 font-light uppercase tracking-widest">На связи</span>
            </div>
          </div>
        </div>

        {/* --- ИНТЕРАКТИВНЫЙ БЛОК ОБО МНЕ (3D Flip Card - переворот) --- */}
        <div className="px-5 mb-12 h-44 [perspective:1000px]">
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] cursor-pointer shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg rounded-3xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          >
            
            {/* Лицевая сторона */}
            <div className="absolute inset-0 glass-panel-light rounded-3xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-3 border border-[#D4AF37]/30">
                <Star className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-xl text-slate-900">Узнать обо мне</h2>
              <div className="absolute bottom-4 text-[9px] uppercase text-slate-400 tracking-[0.2em] animate-pulse flex items-center gap-1">
                Нажмите для переворота <ChevronRight className="w-3 h-3" />
              </div>
            </div>
            
            {/* Обратная сторона */}
            <div className="absolute inset-0 glass-panel-light rounded-3xl p-6 flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] border border-[#D4AF37]/30">
              <p className="text-xs text-slate-700 font-light leading-relaxed text-center overflow-y-auto hide-scrollbar max-h-full">
                {DATA.aboutText}
              </p>
            </div>
            
          </div>
        </div>

        {/* --- 4. Блок «Авторские Туры» --- */}
        <div className="px-5 mt-16 mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-2xl text-slate-900">Летняя коллекция</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-200 to-transparent ml-6"></div>
          </div>
          
          <div className="space-y-6">
            <a href="#" className="block relative h-64 rounded-[2rem] overflow-hidden group shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-white">
              <img src="https://i0.wp.com/images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&strip=all" alt="Пляж" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F3E5AB] mb-2 font-medium">Секретный остров</p>
                <h3 className="font-serif text-2xl text-white mb-2 leading-snug">Вилла на воде,<br/>Мальдивы</h3>
                <p className="text-xs text-white/90 font-light shadow-sm">Личный батлер и теплый океан у ваших ног.</p>
              </div>
            </a>
          </div>
        </div>

        {/* --- 5. Блок «Горящие Туры» --- */}
        <div className="mb-16">
          <div className="px-5 mb-6">
            <h2 className="font-serif text-2xl text-slate-900">Лучшее сейчас</h2>
          </div>
          
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-5 pb-8 gap-5">
            {[
              { id: 1, img: "https://i0.wp.com/images.unsplash.com/photo-1540541338287-41700207dee6?w=600&strip=all", title: "One&Only Reethi", loc: "Мальдивы", price: "1 200 000 ₽", left: 1 },
              { id: 2, img: "https://i0.wp.com/images.unsplash.com/photo-1582719508461-905c673771fd?w=600&strip=all", title: "Burj Al Arab", loc: "ОАЭ, Дубай", price: "850 000 ₽", left: 2 },
            ].map(tour => (
              <div key={tour.id} className="snap-center shrink-0 w-72 glass-panel rounded-3xl overflow-hidden relative shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white text-slate-800 text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full z-10 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  Осталось {tour.left} места
                </div>
                <div className="relative h-40">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 pt-4">
                  <p className="text-[10px] text-sky-600 uppercase tracking-widest mb-1.5 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3" /> {tour.loc}
                  </p>
                  <h4 className="font-serif text-xl text-slate-900 mb-4">{tour.title}</h4>
                  <div className="flex items-end justify-between border-t border-slate-200 pt-4">
                    <div>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-1">Депозит от</p>
                      <p className="text-lg gold-accent font-serif italic">{tour.price}</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-slate-100 transition border border-slate-200 text-slate-800">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ОТЗЫВЫ (ВАРИАНТ 7: Secret Resort - Золотая элегантность) --- */}
        <div className="px-5 mb-14">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl text-slate-900 mb-2">Голоса гостей</h2>
            <div className="w-8 h-[1px] bg-[#D4AF37] mx-auto"></div>
          </div>
          
          <div className="relative glass-panel rounded-[2rem] p-6 pt-10 mt-8 min-h-[260px] flex flex-col justify-between items-center shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white/60">
            {/* Интерактивные аватары сверху */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center h-16 w-full">
               {DATA.reviews.map((review, i) => (
                  <div 
                    key={review.id} 
                    onClick={() => setActiveReview(i)}
                    className={`transition-all duration-500 rounded-full border-4 border-[#FDFBF7] shadow-md flex items-center justify-center font-serif font-bold text-white bg-gradient-to-br from-[#D4AF37] to-[#B58500] absolute cursor-pointer ${
                      i === activeReview ? 'w-16 h-16 z-20 scale-100 opacity-100 text-2xl shadow-[0_10px_20px_rgba(212,175,55,0.2)]' : 
                      i === (activeReview - 1 + DATA.reviews.length) % DATA.reviews.length ? 'w-12 h-12 z-10 -translate-x-14 opacity-60 text-lg hover:opacity-100' :
                      i === (activeReview + 1) % DATA.reviews.length ? 'w-12 h-12 z-10 translate-x-14 opacity-60 text-lg hover:opacity-100' :
                      'w-8 h-8 z-0 opacity-0 text-sm'
                    }`}
                  >
                    {review.name.charAt(0)}
                  </div>
               ))}
            </div>
            
            <div className="flex justify-center gap-1 mb-4 mt-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            
            <div className="relative flex-1 w-full flex items-center justify-center min-h-[100px]">
              {DATA.reviews.map((review, i) => (
                <div key={review.id} className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${i === activeReview ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-4 pointer-events-none z-0'}`}>
                  <p className="text-center text-sm text-slate-600 font-light leading-relaxed px-2">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between w-full mt-4 border-t border-[#D4AF37]/20 pt-4">
              <button onClick={prevRev} className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors bg-white/50">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              
              <div className="relative h-6 w-32 flex justify-center items-center">
                 {DATA.reviews.map((review, i) => (
                   <span key={review.id} className={`absolute font-serif text-slate-900 italic text-lg transition-all duration-500 ${i === activeReview ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                     {review.name}
                   </span>
                 ))}
              </div>
              
              <button onClick={nextRev} className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors bg-white/50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* --- LEAD-МАГНИТ (ВАРИАНТ 7: Secret Resort) --- */}
        <div className="px-5 mb-12">
          <button className="w-full relative group rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(212,175,55,0.1)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] transition-all duration-500 transform hover:-translate-y-0.5 cursor-pointer">
            {/* Золотой фон с текстурой */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] via-[#B58500] to-[#805B00]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
            
            <div className="relative p-[1px]">
              <div className="bg-[#FDFBF7]/95 backdrop-blur-md rounded-[15px] p-3 px-4 flex items-center gap-4 border border-white/40">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] to-[#F4EFE6] rounded-lg border border-[#E5DCC5] flex items-center justify-center shadow-inner group-hover:-translate-y-1 transition-transform duration-500">
                    <Luggage className="w-5 h-5 text-[#B58500]" />
                  </div>
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-serif text-[15px] font-bold text-slate-900 leading-none mb-1">Чек-лист (PDF)</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-4 h-[1px] bg-[#D4AF37]"></span>
                    <p className="text-[8px] text-[#B58500] uppercase tracking-[0.15em] font-bold">Скачать</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </button>
        </div>

        {/* --- 7. Футер «Контакты» --- */}
        <footer className="px-5 pb-10 flex flex-col items-center w-full relative z-10">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-5"></div>
          <p className="text-[9px] text-[#B58500] uppercase tracking-[0.25em] mb-6 font-bold text-center">
            Контакты
          </p>
          
          <div className="flex justify-center gap-5">
            <a href="#" className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#E5DCC5] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:border-[#D4AF37] hover:shadow-[0_5px_15px_rgba(212,175,55,0.15)] transition-all group">
               <Send className="w-5 h-5 text-slate-700 group-hover:text-[#D4AF37] transition-colors" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#1A1A1A] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:bg-[#2A2A2A] hover:border-[#D4AF37] transition-all group relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
               <Phone className="w-5 h-5 text-[#D4AF37] relative z-10 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#FDFBF7] border border-[#E5DCC5] flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:border-[#D4AF37] hover:shadow-[0_5px_15px_rgba(212,175,55,0.15)] transition-all group">
               <Instagram className="w-5 h-5 text-slate-700 group-hover:text-[#D4AF37] transition-colors" />
            </a>
          </div>
        </footer>

        {/* --- Модальное окно Квиза (Многошаговое) --- */}
        <div className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex justify-center ${isQuizOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-[120%] opacity-0 invisible pointer-events-none'}`}>
          <div className="w-full max-w-md bg-white/95 backdrop-blur-3xl border-t border-white rounded-t-[2.5rem] p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] text-amber-600 uppercase tracking-[0.2em] font-medium">
                {quizStep < 4 ? `Шаг ${quizStep} из 3` : 'Готово'}
              </span>
              <button onClick={closeQuiz} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition">
                <X className="w-4 h-4" />
              </button>
            </div>

            {quizStep === 1 && (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">Куда тянет душу?</h3>
                <p className="text-sm text-slate-500 mb-6">Выберите идеальную картинку отдыха</p>
                <div className="space-y-3">
                  {['Белоснежные пляжи и релакс', 'Активный отдых и горы', 'Европейские улочки', 'Экзотика и джунгли'].map((option, i) => (
                    <button key={i} onClick={() => setQuizStep(2)} className="w-full text-left px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700 transition-colors flex justify-between group">
                      {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">С кем полетите?</h3>
                <p className="text-sm text-slate-500 mb-6">Это поможет подобрать правильный отель</p>
                <div className="space-y-3">
                  {['Вдвоем (Романтика)', 'Семьей (С детьми)', 'Соло (Перезагрузка)', 'Шумной компанией'].map((option, i) => (
                    <button key={i} onClick={() => setQuizStep(3)} className="w-full text-left px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700 transition-colors flex justify-between group">
                      {option} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">Куда прислать варианты?</h3>
                <p className="text-sm text-slate-500 mb-6">Оставьте WhatsApp, я пришлю 3 лучших варианта под ваш запрос.</p>
                <div className="space-y-4">
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 000-00-00" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  <button 
                    onClick={() => setQuizStep(4)} 
                    className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B58500] text-white font-bold rounded-2xl py-4 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all"
                  >
                    Получить подборку
                  </button>
                </div>
              </div>
            )}

            {quizStep === 4 && (
              <div className="text-center py-6 animate-in zoom-in-90 duration-500">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-3">Запрос принят!</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">Я уже начала готовить для вас идеальные варианты. Напишу в WhatsApp в течение 15 минут.</p>
                <button onClick={closeQuiz} className="w-full bg-slate-100 text-slate-700 font-bold rounded-2xl py-4 hover:bg-slate-200 transition-colors">
                  Отлично, жду
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// ГЛАВНЫЙ КОМПОНЕНТ: ПАНЕЛЬ УПРАВЛЕНИЯ
// ==========================================
export default function App() {
  const [activeTemplate, setActiveTemplate] = useState(1);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Сигнал для ВКонтакте, что приложение загружено
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

  // Стили-анимации, добавленные глобально, вынесены в переменную (исправление краша)
  const globalStyles = `
      /* iOS Safari Fix: Облегченный способ без краша памяти мобилки (чтобы все фото грузились) */
      .overflow-hidden {
        -webkit-mask-image: -webkit-radial-gradient(white, black);
        isolation: isolate;
      }
      
      img {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      
      .hide-scrollbar {
        -ms-overflow-style: none; 
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      
      .hide-scrollbar::-webkit-scrollbar { 
        display: none; 
      }
      
      @keyframes morph {
        0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
        67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
        100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      @keyframes breathe {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.03); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.05); }
      }
      @keyframes sway {
        0%, 100% { transform: rotate(-1deg); }
        50% { transform: rotate(1deg); }
      }
      @keyframes shimmer {
        100% { left: 100%; }
      }
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
      }
      .organic-blob {
        animation: morph 8s ease-in-out infinite;
        background-size: cover; background-position: center;
        box-shadow: inset 0 0 20px rgba(255,255,255,0.5), 0 15px 35px rgba(13,148,136,0.2);
      }
      .animate-float { animation: float 4s ease-in-out infinite; }
      .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
      .animate-breathe { animation: breathe 4s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      .animate-sway { animation: sway 6s ease-in-out infinite; transform-origin: top center; }
      .animate-shimmer { animation: shimmer 2.5s infinite linear; }
      .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      
      .glass-panel {
        background: rgba(255,255,255,0.45); backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.7); box-shadow: 0 8px 32px 0 rgba(31,135,175,0.08);
      }
      .glass-button {
        background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%);
        backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.8);
        box-shadow: 0 4px 15px rgba(13,148,136,0.15); transition: all 0.3s ease;
      }
      .glass-button:hover {
        transform: translateY(-2px); box-shadow: 0 8px 25px rgba(13,148,136,0.25);
        background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 100%);
      }
  `;

  const renderTemplate = () => {
    switch(activeTemplate) {
      case 1: return <Template1 />;
      case 2: return <Template2 />;
      case 3: return <Template3 />;
      case 4: return <Template4 />;
      case 5: return <Template5 />;
      case 6: return <Template6 />;
      case 7: return <Template7 />;
      default: return <Template1 />;
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen">
      
      {/* Безопасное внедрение стилей (исправляет проблему белого экрана и крашей) */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      {/* --- СКРЫТАЯ ПАНЕЛЬ ПЕРЕКЛЮЧЕНИЯ ДЛЯ ПРЕЗЕНТАЦИИ --- */}
      <div 
        className={`fixed top-4 right-4 z-[100] transition-all duration-300 ${
          isPanelOpen ? 'bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-gray-200 w-80' : 'bg-transparent'
        }`}
      >
        {!isPanelOpen ? (
          <>
            {/* Яркая подсказка-указатель (Уменьшена и сделана компактнее, чтобы не перекрывать фото) */}
            <div className="absolute top-2.5 right-14 animate-pulse pointer-events-none flex items-center">
              <div className="bg-slate-900/80 backdrop-blur-sm text-white text-[8px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap flex items-center gap-1.5 border border-white/10">
                Дизайн <ArrowRight className="w-2.5 h-2.5 text-cyan-400" />
              </div>
            </div>

            {/* Полупрозрачная кнопка (незаметная для клиента) */}
            <button 
              onClick={() => setIsPanelOpen(true)}
              className="absolute top-0 right-0 w-12 h-12 bg-black/5 hover:bg-black/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all group shadow-sm hover:shadow-lg"
            >
              <Settings className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors animate-spin-slow" style={{ animationDuration: '6s' }} />
            </button>
          </>
        ) : (
          <div className="flex flex-col animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex justify-between items-center mb-5">
              <span className="font-bold text-gray-900 text-sm uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-500" /> Выбор стиля
              </span>
              <button onClick={() => setIsPanelOpen(false)} className="text-gray-400 hover:text-black transition-colors p-1 bg-gray-100 rounded-full">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setActiveTemplate(1)} className={`py-2 px-3 text-xs font-semibold rounded-xl transition-all border ${activeTemplate === 1 ? 'bg-cyan-500 text-white border-cyan-500 shadow-md' : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-cyan-300'}`}>1. Живой Океан</button>
              <button onClick={() => setActiveTemplate(2)} className={`py-2 px-3 text-xs font-semibold rounded-xl transition-all border ${activeTemplate === 2 ? 'bg-[#20B2AA] text-white border-[#20B2AA] shadow-md' : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-[#20B2AA]'}`}>2. Тропич. Арка</button>
              <button onClick={() => setActiveTemplate(3)} className={`py-2 px-3 text-xs font-semibold rounded-xl transition-all border ${activeTemplate === 3 ? 'bg-[#004d40] text-white border-[#004d40] shadow-md' : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-[#004d40]'}`}>3. Жемчужный</button>
              <button onClick={() => setActiveTemplate(4)} className={`py-2 px-3 text-xs font-semibold rounded-xl transition-all border ${activeTemplate === 4 ? 'bg-[#87CEFA] text-white border-[#87CEFA] shadow-md' : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-[#87CEFA]'}`}>4. Небесный</button>
              <button onClick={() => setActiveTemplate(5)} className={`py-2 px-3 text-xs font-semibold rounded-xl transition-all border ${activeTemplate === 5 ? 'bg-[#FF7F50] text-white border-[#FF7F50] shadow-md' : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-[#FF7F50]'}`}>5. Кристалл</button>
              <button onClick={() => setActiveTemplate(6)} className={`py-2 px-3 text-xs font-semibold rounded-xl transition-all border ${activeTemplate === 6 ? 'bg-amber-600 text-white border-amber-600 shadow-md' : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-amber-400'}`}>6. Quiet Luxury</button>
              <button onClick={() => setActiveTemplate(7)} className={`py-2 px-3 col-span-2 text-xs font-semibold rounded-xl transition-all border ${activeTemplate === 7 ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md' : 'bg-gray-50 text-gray-600 border-gray-100 hover:border-[#D4AF37]'}`}>7. Секретный Резорт</button>
            </div>
            
            <div className="mt-5 p-3 bg-blue-50 rounded-xl">
              <p className="text-[10px] text-blue-600 leading-tight">
                <strong>Секретный пульт:</strong> Клиент не видит эту панель. Переключайте стили во время звонка для создания Вау-эффекта! 🪄
              </p>
            </div>
          </div>
        )}
      </div>

      {/* --- РЕНДЕР ВЫБРАННОГО ШАБЛОНА --- */}
      <div className="w-full min-h-screen transition-opacity duration-500 ease-in-out">
        {renderTemplate()}
      </div>

    </div>
  );
}