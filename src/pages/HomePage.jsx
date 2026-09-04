import React from 'react';
import {
Sparkles,
Compass,
Clock,
Music,
Bus,
ChevronRight
} from 'lucide-react';
import { ATTRACTIONS_DATA } from '../data/parkData';

export function HomePage({ setActiveTab, setSelectedAttraction }) {
return (

{/* Hero Banner */}





    {/* Floating Hero Content */}
    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
      <div className="max-w-3xl space-y-5">
        <p className="text-cyan-200/90 text-sm md:text-base font-medium flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-300" /> 現實與異世界交織的奇幻國度
        </p>
        <h1 className="text-3xl md:text-6xl font-black text-white tracking-wide font-serif leading-tight drop-shadow-lg">
          失眠夜遊樂園<br />
          <span className="text-xl md:text-3xl font-light text-cyan-200/90 mt-2 block font-sans">
            「我嘅目標係設計出世界上最偉大嘅遊戲！」
          </span>
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

    {/* Park Highlights Banner */}
    <div className="bg-gradient-to-r from-violet-950/50 via-[#0C1220] to-cyan-950/40 border border-violet-500/25 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="space-y-4 max-w-xl relative z-10">
        <span className="text-xs uppercase tracking-widest text-fuchsia-300 font-bold">
          尊享特別禮遇 · 生日之星
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
          當日壽星入園，解鎖專屬異世界祝福！
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          憑身份證明文件領取生日徽章，即享免費失眠鎮招牌星星奶乙杯、免費租借凹凸凹凸乙隻、歌瑪園特快通行證、向日葵電台點歌及北極光肖像投映！
        </p>
        <button 
          onClick={() => setActiveTab('tickets')}
          className="bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white font-bold px-6 py-2.5 rounded-full text-sm transition shadow-lg shadow-fuchsia-500/20"
        >
          查看會員與生日禮遇
        </button>
      </div>
      <div className="w-full md:w-80 h-48 rounded-2xl overflow-hidden border border-violet-400/20 shadow-2xl flex-shrink-0 relative z-10">
        <img 
          src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80" 
          alt="星星奶與特權" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>


);
}
export default HomePage;
