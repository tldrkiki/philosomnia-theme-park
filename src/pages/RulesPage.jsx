export function RulesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="border-b border-violet-900/30 pb-4">
        <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
          樂園守則與遊牧人服務
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          為保障所有遊牧人安全與秩序，請嚴格遵守以下規則
        </p>
      </div>

      {/* Rules Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: '紫沙與石頭管制', content: '紫沙為管制物品，嚴禁觸碰或攜離園區。為確保閣下人身安全，請勿執拾任何石頭。', icon: ShieldAlert, color: 'text-cyan-400' },
          { title: '禮貌對待演藝人員', content: '嚴禁對演藝人員（主要是 Peggy）作出批評、嘲笑、侵犯界線等無禮行徑。', icon: Heart, color: 'text-fuchsia-400' },
          { title: '青燈大人巡邏與閃光燈', content: '青燈大人每日不定時於陰間巡邏，如遊牧人被目擊使用電話、相機閃光燈等發光裝置，將即時判入陰間監獄十分鐘。', icon: Moon, color: 'text-violet-400' },
          { title: 'DIDISAN 緊急呼救', content: '如遇上危險，請原地大叫「DIDISAN!!!」，執法人員將立即到場支援。', icon: PhoneCall, color: 'text-rose-400' }
        ].map((rule, idx) => {
          const IconComponent = rule.icon;
          return (
            <div key={idx} className="bg-[#0C1220] p-5 rounded-2xl border border-violet-500/15 space-y-2 hover:border-cyan-400/30 transition">
              <div className="flex items-center gap-2">
                <IconComponent className={`w-5 h-5 ${rule.color}`} />
                <h3 className="font-bold text-white text-base">{rule.title}</h3>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">{rule.content}</p>
            </div>
          );
        })}
      </div>

      {/* Transport Info */}
      <div className="bg-[#0C1220] border border-violet-500/15 p-6 rounded-3xl space-y-4">
        <h2 className="text-xl font-bold text-violet-100 flex items-center gap-2 font-serif">
          <Bus className="w-5 h-5 text-cyan-400" /> 園內交通網絡
        </h2>
        <div className="space-y-3 text-xs text-slate-300">
          <div className="bg-[#070B14] p-4 rounded-xl border border-violet-900/30">
            <span className="font-bold text-cyan-300 text-sm block mb-1">邏各斯飄飄鐵路 / 陰間列車</span>
            途經：市鎮大街站 ➔ 六度圈之城站 ➔ 歌瑪園站（只限落客） ➔ 陰間部落站 ➔ 山海閣及邏各斯站（循環線，每逢00, 20, 40分發車，全程約40分鐘）。
          </div>
          <div className="bg-[#070B14] p-4 rounded-xl border border-violet-900/30">
            <span className="font-bold text-cyan-300 text-sm block mb-1">邏各斯觀光車</span>
            每日兩班，不設中途站。20:00 從霹靂啪嘞監獄開出，途經跳彈床日報報館及凹凸凹凸廣場，終點為枕頭樹汁店（20:30原路回程）。
          </div>
        </div>
      </div>
    </div>
  );
}
