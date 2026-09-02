export function MapPage({ setSelectedAttraction }) {
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS_DATA.filter(item => {
      return selectedCategory === 'all' || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Map Header Controls */}
      <div className="bg-[#0C1220] p-4 rounded-2xl border border-violet-500/15 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
        <div>
          <h1 className="text-2xl font-serif font-bold text-violet-100 flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-400" />
            失眠夜遊樂園 互動地圖
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            點擊地圖上的地標 Pin，即可預覽景點故事、營運時間及詳細資訊
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="bg-[#070B14] p-1 rounded-xl border border-violet-900/40 flex items-center">
            <button 
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${viewMode === 'map' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              <Layers className="w-3.5 h-3.5" /> 地圖模式
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${viewMode === 'list' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" /> 列表顯示
            </button>
          </div>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition border ${selectedCategory === 'all' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-transparent font-bold' : 'bg-[#0C1220] text-slate-300 border-violet-900/40 hover:border-cyan-500/40'}`}
        >
          全部景點 ({ATTRACTIONS_DATA.length})
        </button>
        <button 
          onClick={() => setSelectedCategory('rides')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition border ${selectedCategory === 'rides' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-transparent font-bold' : 'bg-[#0C1220] text-slate-300 border-violet-900/40 hover:border-cyan-500/40'}`}
        >
          🎢 機動遊戲
        </button>
        <button 
          onClick={() => setSelectedCategory('shows')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition border ${selectedCategory === 'shows' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-transparent font-bold' : 'bg-[#0C1220] text-slate-300 border-violet-900/40 hover:border-cyan-500/40'}`}
        >
          🎭 娛樂表演
        </button>
        <button 
          onClick={() => setSelectedCategory('experiences')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition border ${selectedCategory === 'experiences' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-transparent font-bold' : 'bg-[#0C1220] text-slate-300 border-violet-900/40 hover:border-cyan-500/40'}`}
        >
          🎪 參觀體驗
        </button>
        <button 
          onClick={() => setSelectedCategory('dining')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition border ${selectedCategory === 'dining' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-transparent font-bold' : 'bg-[#0C1220] text-slate-300 border-violet-900/40 hover:border-cyan-500/40'}`}
        >
          🍽️ 餐飲商店
        </button>
      </div>

      {/* MAP VIEW */}
      {viewMode === 'map' && (
        <div className="relative w-full h-[520px] md:h-[680px] bg-[#0C1220] rounded-3xl overflow-hidden border border-violet-500/20 shadow-2xl">
          {/* SVG Theme Map Background */}
          <svg className="w-full h-full object-cover" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0e1a" />
                <stop offset="50%" stopColor="#0f1528" />
                <stop offset="100%" stopColor="#080c18" />
              </linearGradient>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e1b4b" strokeWidth="0.25" opacity="0.6" />
              </pattern>
            </defs>
            
            <rect width="100" height="100" fill="url(#bgGrad)" />
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Rivers & Water Bodies */}
            <path d="M 0,20 Q 25,25 45,15 T 80,10 T 100,25 L 100,0 L 0,0 Z" fill="#0e7490" opacity="0.12" />
            <path d="M 10,80 Q 30,60 50,75 T 90,60" fill="none" stroke="#06b6d4" strokeWidth="2.5" opacity="0.25" />

            {/* Zone Regions */}
            {PARK_ZONES.map(z => (
              <g key={z.id}>
                <circle cx={z.pos.x} cy={z.pos.y} r="16" fill="white" opacity="0.02" />
                <circle cx={z.pos.x} cy={z.pos.y} r="12" fill="none" stroke="#a78bfa" strokeWidth="0.25" strokeDasharray="1,1" opacity="0.7" />
                <text x={z.pos.x} y={z.pos.y - 12} textAnchor="middle" fill="#94a3b8" fontSize="2.8" fontWeight="bold">
                  {z.name}
                </text>
              </g>
            ))}

            {/* Railroad Tracks */}
            <path d="M 48,85 Q 15,80 15,40 T 40,20 T 80,35 T 80,75 Z" fill="none" stroke="#22d3ee" strokeWidth="0.55" strokeDasharray="2,2" opacity="0.45" />
          </svg>

          {/* Interactive Map Pins */}
          {filteredAttractions.map((att) => (
            <div
              key={att.id}
              onClick={() => setSelectedAttraction(att)}
              style={{ left: `${att.coords.x}%`, top: `${att.coords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#070B14] border-2 border-cyan-400 shadow-lg shadow-cyan-500/40 flex items-center justify-center transform group-hover:scale-125 transition duration-300">
                  <Star className="w-4 h-4 text-cyan-300 fill-cyan-400" />
                </div>
                <div className="w-2 h-2 bg-cyan-400 rotate-45 -mt-1 shadow-sm" />
                
                {/* Name Label Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none absolute bottom-10 bg-[#070B14]/95 text-cyan-100 border border-cyan-500/40 text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap shadow-xl z-20">
                  {att.name}
                </div>
              </div>
            </div>
          ))}

          {/* Map Control Helper */}
          <div className="absolute bottom-4 left-4 bg-[#070B14]/85 backdrop-blur border border-violet-500/20 px-3 py-2 rounded-xl text-xs text-slate-300 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            點擊星號 Pin 查看設施詳情及營運狀態
          </div>
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map(att => (
            <div 
              key={att.id}
              onClick={() => setSelectedAttraction(att)}
              className="bg-[#0C1220] rounded-2xl overflow-hidden border border-violet-500/15 hover:border-cyan-400/40 transition cursor-pointer shadow-lg hover:shadow-xl p-4 flex gap-4 items-center group"
            >
              <img 
                src={att.image} 
                alt={att.name} 
                className="w-24 h-24 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition"
              />
              <div className="space-y-1.5 flex-1 min-w-0">
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {att.zoneName}
                </span>
                <h3 className="font-bold text-white text-base truncate group-hover:text-cyan-200 transition">
                  {att.name}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" /> {att.hours}
                </p>
                <p className="text-xs text-slate-500 truncate">
                  {att.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
