import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-3xl mb-6 shadow-2xl shadow-orange-500/20">
        <Sparkles size={48} className="text-black" />
      </div>
      <h1 className="text-4xl font-black tracking-tighter mb-4">
        VIBE PROJECT START
      </h1>
      <p className="text-gray-400 max-w-sm">
        Настройка завершена. Теперь просто твори красоту в этом файле.
      </p>
    </div>
  );
}