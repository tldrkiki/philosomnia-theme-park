export function AttractionModal({ selectedAttraction, setSelectedAttraction }) {
  if (!selectedAttraction) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#070B14]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0C1220] border border-violet-500/25 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button 
          onClick={() => setSelectedAttraction(null)}
          className="absolute top-4 right-4 z-10 bg-[#070B14]/90 hover:bg-violet-950/80 text-white p-2 rounded-full border border-violet-500/30 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 md:h-72">
          <img 
            src={selectedAttraction.image} 
            alt={selectedAttraction.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              {selectedAttraction.categoryName} · {selectedAttraction.zoneName}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
              {selectedAttraction.name}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-8 space-y-6 text-sm">
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 bg-[#070B14] p-4 rounded-2xl border border-violet-900/30">
            <div>
              <span className="text-slate-500 block">身高要求</span>
              <span className="font-bold text-cyan-300">{selectedAttraction.height}</span>
            </div>
            <div className="w-px h-8 bg-violet-900/40" />
            <div>
              <span className="text-slate-500 block">今日營運時間</span>
              <span className="font-bold text-cyan-300">{selectedAttraction.hours}</span>
            </div>
            <div className="w-px h-8 bg-violet-900/40" />
            <div>
              <span className="text-slate-500 block">位置</span>
              <span className="font-bold text-cyan-300">{selectedAttraction.zoneName}</span>
            </div>
          </div>

          <div className="space-y-3 leading-relaxed text-slate-300">
            <h3 className="font-serif font-bold text-lg text-violet-200">景點介紹</h3>
            <p className="whitespace-pre-line text-sm">{selectedAttraction.description}</p>
          </div>

          <div className="pt-4 border-t border-violet-900/30 flex items-center justify-between">
            <button 
              onClick={() => {
                alert(`已將「${selectedAttraction.name}」加入你的樂園一日遊行程！`);
                setSelectedAttraction(null);
              }}
              className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white font-bold px-6 py-2.5 rounded-full text-xs transition shadow-lg"
            >
              + 加入我的行程
            </button>
            <button 
              onClick={() => setSelectedAttraction(null)}
              className="text-slate-400 hover:text-white text-xs"
            >
              關閉視窗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
