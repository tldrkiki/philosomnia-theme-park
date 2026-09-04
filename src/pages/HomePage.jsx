import React, { useState, useMemo } from 'react';
import { 
  Search, MapPin, Ticket, Clock, Info, Navigation, Star, 
  Sparkles, Coffee, Utensils, ShoppingBag, Hotel, ShieldAlert, 
  Gift, Heart, ChevronRight, X, Layers, SlidersHorizontal, 
  Music, Tv, Bus, Calendar, User, PhoneCall, Moon, Compass, Check,
  Share2, AlertCircle, Sparkle, Plus, Trash2, CheckCircle2, Flame, Map as MapIcon
} from 'lucide-react';

export const PARK_ZONES = [
  { id: 'logos_main', name: '邏各斯市鎮大街', color: 'bg-amber-500', pos: { x: 50, y: 80 } },
  { id: 'six_degrees', name: '六度圈之城', color: 'bg-purple-500', pos: { x: 52, y: 55 } },
  { id: 'underworld', name: '陰間部落', color: 'bg-indigo-600', pos: { x: 45, y: 30 } },
  { id: 'ice_snow', name: '邏各斯冰雪樂園', color: 'bg-cyan-400', pos: { x: 22, y: 35 } },
  { id: 'dream_zone', name: '夢境與大千世界', color: 'bg-emerald-500', pos: { x: 75, y: 40 } },
  { id: 'school_zone', name: '聖邏各斯中學區', color: 'bg-rose-500', pos: { x: 78, y: 70 } }
];

export const ATTRACTIONS_DATA = [
  {
    id: 'att-1',
    name: '邏各斯時空穿梭歷險',
    category: 'rides',
    categoryName: '精選機動遊戲',
    zone: 'six_degrees',
    zoneName: '六度圈之城',
    height: '任何高度',
    hours: '15:00 - 25:30',
    coords: { x: 48, y: 58 },
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    summary: '走進失眠圖書館，由邏各斯虛擬精靈妙音帶你穿梭邏各斯不同歷史時空，於虛擬實境中記錄歷史。',
    description: '走進失眠圖書館，由邏各斯虛擬精靈妙音帶你穿梭邏各斯不同歷史時空，於虛擬實境中為無眠太太記錄和見證失眠鎮不同紀元的歷史事件。（P.S. 不要得罪妙音，裂音隨時出沒）',
    tags: ['VR體驗', '時空穿梭', '故事導覽']
  },
  {
    id: 'att-2',
    name: '邏各斯冰雪之旅',
    category: 'rides',
    categoryName: '精選機動遊戲',
    zone: 'ice_snow',
    zoneName: '邏各斯冰雪樂園',
    height: '102厘米或以上',
    hours: '15:00 - 25:45',
    coords: { x: 20, y: 38 },
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
    summary: '乘坐雪橇列車從雪山頂急速滑下，感受冰冷寒風劃過肌理的極速刺激。',
    description: '一望無際的邏各斯冰雪樂園新設了一部雪橇列車，讓你先從雪山眺望邏各斯優美的風景，再從山頂急速滑下，感受冰冷寒風劃過肌理的刺激。在速度與零度之間，且看看雪國裡那雪獸會否滲奇香？',
    tags: ['雪橇過山車', '極速刺激', '雪國景觀']
  },
  {
    id: 'att-3',
    name: '芝士山大宅',
    category: 'rides',
    categoryName: '精選機動遊戲',
    zone: 'six_degrees',
    zoneName: '六度圈之城',
    height: '任何高度',
    hours: '15:00 - 26:00',
    coords: { x: 55, y: 50 },
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    summary: '乘坐自動代步車穿梭豪華大宅，一睹邏各斯最富有家庭的奢華生活與家傳之寶。',
    description: '在偌大的豪華大宅內，乘坐自動代步車穿梭衣物房、化妝房、健身房、玩具房、睡房、娛樂大廳、按摩院、電影院、卡拉OK室、室內運動場、圖書館、私人花園及博物館，親身探索全邏各斯最有錢家庭金碧輝煌的奢侈生活。你更有機會一睹大宅家傳之寶真身及其珍貴紀錄片！',
    tags: ['豪宅巡禮', '自動代步車', '家傳之寶']
  },
  {
    id: 'att-4',
    name: '轉圈轉圈妖怪共你',
    category: 'rides',
    categoryName: '精選機動遊戲',
    zone: 'underworld',
    zoneName: '陰間部落',
    height: '任何高度',
    hours: '15:00 - 26:00',
    coords: { x: 42, y: 28 },
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    summary: '妖怪版旋轉木馬！登上烏狐、窿龍、夢瓜等妖怪坐騎，伴隨陰間悠揚樂韻翩然共舞。',
    description: '朋友最多，轉圈轉圈妖怪共你～ 烏狐、窿龍、夢瓜等人氣妖怪和他們的一眾朋友都已悉心打扮，圍成一圈，準備就緒！各位大人快快登上這座妖怪版旋轉木馬，伴隨陰間音樂人特製的悠揚樂韻，於陰間一角與那些可愛的小朋友們翩然共舞吧。',
    tags: ['妖怪旋轉木馬', '親子同樂', '陰間獨家音樂']
  },
  {
    id: 'att-5',
    name: '盈救時間大作戰！',
    category: 'rides',
    categoryName: '精選機動遊戲',
    zone: 'six_degrees',
    zoneName: '六度圈之城',
    height: '任何高度',
    hours: '15:00 - 25:00',
    coords: { x: 58, y: 62 },
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    summary: '拿起時間使者法寶槍，透過傳送陣收集時間碎片！記得避開陳八妹的時間碎片。',
    description: '這是一個來自十年前的求救訊號，「死神好友盈」急需協助！馬上進入駖子小姐以靈力操控的人間傳送陣，拿起時間使者法寶槍，幫陸月盈將灑落的時間碎片一塊一塊收集回來吧。記得千萬別收集楊嘉兒婆婆陳八妹的時間碎片！',
    tags: ['互動射擊', '時間冒險', '拯救任務']
  },
  {
    id: 'att-6',
    name: '逃出夢遊之境',
    category: 'rides',
    categoryName: '精選機動遊戲',
    zone: 'dream_zone',
    zoneName: '夢境與大千世界',
    height: '110厘米或以上',
    hours: '16:00 - 25:00',
    coords: { x: 72, y: 38 },
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    summary: '在夢貘宮殿裏發個共感夢！限時尋找密碼逃脫，否則夢境將被夢貘大人吞噬。',
    description: '與親朋好友在夢貘宮殿裏發個共感夢，留意細節，尋找密碼，挑戰一場緊張刺激又神秘莫測的密室逃脫。注意，如果限時之內未能逃出，夢貘大人將會吞噬你的夢境！',
    tags: ['密室逃脫', '夢境解謎', '限時挑戰']
  }
];

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
