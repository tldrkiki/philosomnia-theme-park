export function ShowsPage() {
  const showsData = useMemo(() => {
    return ATTRACTIONS_DATA.filter(a => a.category === 'shows');
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="border-b border-violet-900/30 pb-6">
        <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
          娛樂表演與巡遊時間表
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          含張日寬大匯演、Peggy演唱會、光的泳行彎曲光影匯演及鬼節百鬼夜行
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {showsData.map(show => (
          <div key={show.id} className="bg-[#0C1220] border border-violet-500/15 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row hover:border-cyan-400/30 transition-all duration-300">
            <img src={show.image} alt={show.name} className="w-full md:w-1/2 h-56 md:h-auto object-cover" />
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30 text-xs px-2.5 py-1 rounded-full font-bold mb-2">
                  {show.zoneName}
                </span>
                <h3 className="text-xl font-bold text-white">{show.name}</h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{show.description}</p>
              </div>
              <div className="space-y-2 pt-3 border-t border-violet-900/40 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-cyan-300 font-bold">
                  <Clock className="w-4 h-4" /> 演出時間：{show.hours}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
