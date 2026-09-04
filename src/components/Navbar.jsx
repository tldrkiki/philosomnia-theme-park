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

export function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0A0F1C]/90 backdrop-blur-xl border-b border-violet-500/20 shadow-[0_4px_30px_rgba(139,92,246,0.08)]">
      {/* Top utility bar */}
      <div className="bg-[#050810] px-4 py-1.5 text-xs text-slate-400 border-b border-violet-900/30 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 text-cyan-300/90">
            <Moon className="w-3.5 h-3.5" /> 樂園開放時間：每日 15:00 - 26:00 (02:00 AM)
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-slate-500">失眠鎮邏各斯大娛樂家 · 初代反斗俠創立</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-cyan-300 transition flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" /> 登入 / 入境登記
          </button>
          <span className="text-slate-700">|</span>
          <span className="text-violet-300/90 font-medium">繁體中文 (邏各斯語)</span>
        </div>
      </div>

      {/* Main Header Menu */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px] shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#070B14] rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
          </div>
          <div>
            <div className="text-xl md:text-2xl font-black tracking-wider bg-gradient-to-r from-violet-200 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent font-serif">
              失眠夜遊樂園
            </div>
            <div className="text-[10px] tracking-[0.2em] text-violet-400/70 uppercase font-sans">
              Philosomnia Park
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
          <button 
            onClick={() => setActiveTab('home')}
            className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'home' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}
          >
            首頁
          </button>
          <button 
            onClick={() => setActiveTab('map')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${activeTab === 'map' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            樂園地圖
          </button>
          <button 
            onClick={() => setActiveTab('attractions')}
            className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'attractions' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}
          >
            遊樂設施
          </button>
          <button 
            onClick={() => setActiveTab('shows')}
            className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'shows' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}
          >
            娛樂表演
          </button>
          <button 
            onClick={() => setActiveTab('hotel')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${activeTab === 'hotel' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}
          >
            <Hotel className="w-4 h-4 text-cyan-400" />
            煙霧溫泉旅館
          </button>
          <button 
            onClick={() => setActiveTab('tickets')}
            className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'tickets' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}
          >
            門票預訂
          </button>
          <button 
            onClick={() => setActiveTab('rules')}
            className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'rules' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}
          >
            樂園守則
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('tickets')}
            className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-400 hover:to-blue-400 text-white font-bold px-5 py-2 rounded-full shadow-lg shadow-violet-500/25 text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5"
          >
            <Ticket className="w-4 h-4" />
            購買門票
          </button>
        </div>
      </div>

      {/* Mobile quick tabs */}
      <div className="lg:hidden flex overflow-x-auto px-4 py-2 bg-[#0A0F1C] border-t border-violet-900/20 text-xs gap-2 no-scrollbar">
        <button onClick={() => setActiveTab('home')} className={`px-3 py-1.5 rounded-full whitespace-nowrap transition ${activeTab === 'home' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'bg-violet-950/50 text-slate-400'}`}>首頁</button>
        <button onClick={() => setActiveTab('map')} className={`px-3 py-1.5 rounded-full whitespace-nowrap transition ${activeTab === 'map' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'bg-violet-950/50 text-slate-400'}`}>樂園地圖</button>
        <button onClick={() => setActiveTab('attractions')} className={`px-3 py-1.5 rounded-full whitespace-nowrap transition ${activeTab === 'attractions' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'bg-violet-950/50 text-slate-400'}`}>設施</button>
        <button onClick={() => setActiveTab('shows')} className={`px-3 py-1.5 rounded-full whitespace-nowrap transition ${activeTab === 'shows' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'bg-violet-950/50 text-slate-400'}`}>表演</button>
        <button onClick={() => setActiveTab('hotel')} className={`px-3 py-1.5 rounded-full whitespace-nowrap transition ${activeTab === 'hotel' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'bg-violet-950/50 text-slate-400'}`}>溫泉旅館</button>
        <button onClick={() => setActiveTab('tickets')} className={`px-3 py-1.5 rounded-full whitespace-nowrap transition ${activeTab === 'tickets' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'bg-violet-950/50 text-slate-400'}`}>門票</button>
      </div>
    </header>
  );
}
