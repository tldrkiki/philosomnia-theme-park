import { PARK_ZONES, ATTRACTIONS_DATA } from './data/parkData';

export function Navbar({ activeTab, setActiveTab, itineraryCount, openItinerary }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0A0F1C]/90 backdrop-blur-xl border-b border-violet-500/20 shadow-[0_4px_30px_rgba(139,92,246,0.08)]">
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

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
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

        <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
          <button onClick={() => setActiveTab('home')} className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'home' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}>首頁</button>
          <button onClick={() => setActiveTab('map')} className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${activeTab === 'map' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}>
            <Compass className="w-4 h-4 text-cyan-400" /> 樂園地圖
          </button>
          <button onClick={() => setActiveTab('attractions')} className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'attractions' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}>遊樂設施</button>
          <button onClick={() => setActiveTab('shows')} className={`px-3.5 py-2 rounded-xl transition ${activeTab === 'shows' ? 'bg-violet-500/20 text-violet-200 font-bold' : 'text-slate-400 hover:text-cyan-300 hover:bg-violet-950/40'}`}>娛樂表演</button>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={openItinerary}
            className="relative p-2.5 rounded-full bg-violet-950/50 border border-violet-500/30 hover:border-cyan-400 text-cyan-300 transition"
            title="我的行程"
          >
            <Calendar className="w-4 h-4" />
            {itineraryCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-fuchsia-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                {itineraryCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export function HomePage({ setActiveTab, setSelectedAttraction }) {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[480px] md:h-[580px] overflow-hidden bg-[#070B14]">
        <img 
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80" 
          alt="失眠夜樂園城堡" 
          className="w-full h-full object-cover brightness-[0.55] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/40 via-transparent to-cyan-950/30" />
        
        {/* Floating Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl space-y-5">
            <p className="text-cyan-200/90 text-sm md:text-base font-medium flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-300" /> 現實與異世界交織的奇幻國度
            </p>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-wide font-serif leading-tight drop-shadow-lg">
              失眠夜遊樂園
            </h1>
            <p className="text-slate-300/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              初代反斗俠於鎮民大會提出快樂生活方案。邀請你用自己雙腳遊歷異世界，遇見大千世界中探索的朋友，留下難忘回憶！
            </p>
            
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={() => setActiveTab('map')}
                className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white font-bold px-7 py-3 rounded-full text-base transition shadow-xl shadow-violet-500/30 flex items-center gap-2"
              >
                <Compass className="w-5 h-5" /> 探索互動地圖
              </button>
              <button 
                onClick={() => setActiveTab('attractions')}
                className="bg-white/5 hover:bg-white/10 text-white border border-violet-400/30 px-7 py-3 rounded-full text-base backdrop-blur-md transition flex items-center gap-2"
              >
                查看精選設施
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Quick Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-[#070B14]/85 backdrop-blur-md border-t border-violet-500/15 py-3 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-cyan-300 font-bold">
                <Clock className="w-4 h-4" /> 今日營業：15:00 - 26:00
              </span>
              <span className="flex items-center gap-2">
                <Music className="w-4 h-4 text-fuchsia-400" /> 重磅演出：光的泳行 彎曲光影匯演 (26:00)
              </span>
              <span className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-violet-400" /> 邏各斯飄飄鐵路 循環線班次每20分開出
              </span>
            </div>
            <button onClick={() => setActiveTab('rules')} className="text-cyan-300 hover:text-cyan-200 hover:underline flex items-center gap-1">
              樂園守則與安全須知 <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Section Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold font-serif bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
            失眠夜熱門機動遊戲與體驗
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            點擊任何設施卡片，即可查看營運時間、身高限制及歷史簡介！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ATTRACTIONS_DATA.slice(0, 6).map(att => (
            <div 
              key={att.id}
              onClick={() => setSelectedAttraction(att)}
              className="group bg-[#0C1220] rounded-2xl overflow-hidden border border-violet-500/15 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_8px_30px_rgba(34,211,238,0.12)] flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={att.image} 
                  alt={att.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute top-3 left-3 bg-[#070B14]/85 backdrop-blur px-2.5 py-1 rounded-full text-xs font-medium text-cyan-300 border border-cyan-400/30">
                  {att.zoneName}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-200 transition">
                    {att.name}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-2 mt-1">
                    {att.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-violet-900/40 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> {att.hours}
                  </span>
                  <span className="text-violet-300 font-medium group-hover:translate-x-1 transition flex items-center gap-0.5">
                    查看詳情 <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} itineraryCount={0} openItinerary={() => {}} />
      <main className="flex-1">
        <HomePage setActiveTab={setActiveTab} setSelectedAttraction={setSelectedAttraction} />
      </main>
    </div>
  );
}
