export function AttractionsPage({ setSelectedAttraction }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS_DATA.filter(item => {
      const matchCat = item.category === 'rides' || item.category === 'experiences';
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.zoneName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-violet-900/30 pb-6">
        <div>
          <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
            失眠夜遊樂設施與主題區域
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            探索邏各斯異世界中的機動遊戲、虛擬實境與探險之旅
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋設施、遊戲或區域..."
            className="w-full bg-[#0C1220] border border-violet-900/40 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAttractions.map(att => (
          <div 
            key={att.id}
            onClick={() => setSelectedAttraction(att)}
            className="bg-[#0C1220] rounded-2xl overflow-hidden border border-violet-500/15 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer shadow-lg group flex flex-col"
          >
            <div className="h-48 relative overflow-hidden">
              <img src={att.image} alt={att.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute top-3 left-3 bg-[#070B14]/85 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-cyan-300 border border-cyan-400/30">
                {att.height}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs text-violet-300/80 font-medium mb-1">{att.zoneName}</div>
                <h3 className="font-bold text-xl text-white group-hover:text-cyan-200 transition">{att.name}</h3>
                <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">{att.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {att.tags.map((t, idx) => (
                  <span key={idx} className="bg-violet-950/50 text-slate-300 text-[10px] px-2 py-0.5 rounded-md border border-violet-800/40">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
