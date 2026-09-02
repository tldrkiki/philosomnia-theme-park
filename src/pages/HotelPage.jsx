export function HotelPage() {
  const [selectedOnsen, setSelectedOnsen] = useState(['智商提升', '美白護膚']);

  const toggleOnsen = (item) => {
    if (selectedOnsen.includes(item)) {
      setSelectedOnsen(selectedOnsen.filter(i => i !== item));
    } else {
      setSelectedOnsen([...selectedOnsen, item]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <div className="relative rounded-3xl overflow-hidden bg-[#0C1220] h-80 flex items-center justify-center p-8 border border-violet-500/20">
        <img 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80" 
          alt="邏各斯煙霧溫泉旅館" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-violet-950/40" />
        <div className="relative z-10 text-center space-y-3 max-w-2xl">
          <span className="bg-cyan-500/15 text-cyan-200 border border-cyan-400/30 px-3 py-1 rounded-full text-xs font-bold">
            相傳亞利麻女神亦流連忘返
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">
            邏各斯 煙霧溫泉旅館
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed">
            一百種不同的氣味和質感、全天然無雜質、充滿營養的煙霧。由邏各斯最壯麗的山——轟隆轟隆山湧出，渾然天成。
          </p>
        </div>
      </div>

      {/* Onsen Builder Interactive Tool */}
      <div className="bg-[#0C1220] border border-violet-500/15 rounded-3xl p-6 md:p-10 space-y-6 shadow-2xl">
        <div className="border-b border-violet-900/30 pb-4">
          <h2 className="text-2xl font-serif font-bold text-violet-100 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            自選溫泉煙霧配方
          </h2>
          <p className="text-slate-400 text-xs mt-1">
            過百種名貴材料任君選擇，點擊調配你的專屬異世界溫泉療程：
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: '智商提升', desc: '失眠鎮珍奇之最「梁子力獸」眼淚提煉靈丹', color: 'border-cyan-500/30 bg-cyan-950/20' },
            { name: '跳唱進步神速', desc: '失眠鎮氣溫最低地區搜集的「天山鍾雪蓮」', color: 'border-violet-500/30 bg-violet-950/20' },
            { name: '美白護膚', desc: '最清澈山水蒸餾出來的「靈魂之水」白色煙霧', color: 'border-emerald-500/30 bg-emerald-950/20' },
            { name: '忘記煩惱', desc: '士多啤梨冬甩蒸發出的香噴噴粉紅色煙霧', color: 'border-fuchsia-500/30 bg-fuchsia-950/20' }
          ].map(onsen => {
            const isSelected = selectedOnsen.includes(onsen.name);
            return (
              <div 
                key={onsen.name}
                onClick={() => toggleOnsen(onsen.name)}
                className={`p-5 rounded-2xl border cursor-pointer transition flex flex-col justify-between space-y-3 ${onsen.color} ${isSelected ? 'ring-2 ring-cyan-400 border-cyan-400/60' : 'opacity-80 hover:opacity-100'}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-base">{onsen.name}</h3>
                    {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{onsen.desc}</p>
                </div>
                <div className="text-[11px] text-cyan-300 font-medium">
                  {isSelected ? '✓ 已加入溫泉配方' : '+ 點擊選購'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#070B14] p-4 rounded-2xl border border-violet-900/40 flex items-center justify-between text-xs text-slate-300">
          <div>
            已選配方：<span className="text-cyan-200 font-bold">{selectedOnsen.join(' + ') || '無'}</span>
          </div>
          <button 
            onClick={() => alert(`已為閣下預約「邏各斯煙霧溫泉」！含 ${selectedOnsen.join(', ')} 特別調配。`)}
            className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-bold px-5 py-2 rounded-xl transition"
          >
            立即預訂溫泉套房 (生日月8折)
          </button>
        </div>
      </div>
    </div>
  );
}
