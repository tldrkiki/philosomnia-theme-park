import React from 'react';
import { 
  Moon, 
  Sparkles, 
  Map, 
  Ticket, 
  Home, 
  Hotel, 
  Film, 
  Shield, 
  Menu, 
  X,
  Compass,
  Clock,
  User          
} from 'lucide-react';

export function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#050810] border-t border-violet-900/30 py-12 px-4 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto space-y-6 text-center">
        <div className="flex items-center justify-center gap-2 text-cyan-300 font-serif text-lg font-bold">
          <Sparkles className="w-5 h-5" /> 失眠夜遊樂園 Philosomnia Park
        </div>
        <p className="max-w-xl mx-auto">
          © 邏各斯大娛樂家初代反斗俠版權所有 · 「喺世界最需要娛樂嘅時候，我就會出場！」
        </p>
        <div className="flex justify-center space-x-6 text-slate-400">
          <button onClick={() => setActiveTab('rules')} className="hover:text-cyan-300 transition">使用條款</button>
          <button onClick={() => setActiveTab('rules')} className="hover:text-cyan-300 transition">私隱政策</button>
          <button onClick={() => setActiveTab('tickets')} className="hover:text-cyan-300 transition">門票條款</button>
          <button onClick={() => setActiveTab('hotel')} className="hover:text-cyan-300 transition">煙霧溫泉指南</button>
        </div>
      </div>
    </footer>
  );
}
