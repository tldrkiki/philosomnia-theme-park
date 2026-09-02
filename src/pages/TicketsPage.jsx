export function TicketsPage() {
  const [ticketAdult, setTicketAdult] = useState(1);
  const [ticketChild, setTicketChild] = useState(0);
  const [isStudentDiscount, setIsStudentDiscount] = useState(false);
  const [isFanClub, setIsFanClub] = useState(false);

  const ticketTotal = useMemo(() => {
    if (isFanClub) return 0;
    let base = (ticketAdult * 90.3) + (ticketChild * 903);
    if (isStudentDiscount) base *= 0.8;
    return base.toFixed(1);
  }, [ticketAdult, ticketChild, isStudentDiscount, isFanClub]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent">
          失眠夜遊樂園 門票與會員預訂
        </h1>
        <p className="text-slate-400 text-sm">
          請選擇門票種類與優惠身分，系統將自動計算最佳入場票價
        </p>
      </div>

      <div className="bg-[#0C1220] border border-violet-500/15 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
        {/* Ticket selector rows */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#070B14] rounded-2xl border border-violet-900/30">
            <div>
              <h3 className="font-bold text-white text-base">成人標準門票 (12歲或以上)</h3>
              <p className="text-slate-400 text-xs">單日無限次暢玩所有機動遊戲及展覽</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-cyan-300 font-bold text-lg">$90.3</span>
              <div className="flex items-center gap-2 bg-[#0C1220] rounded-lg p-1 border border-violet-900/40">
                <button onClick={() => setTicketAdult(Math.max(0, ticketAdult - 1))} className="w-7 h-7 bg-violet-950/60 rounded text-white font-bold hover:bg-violet-800/60">-</button>
                <span className="w-6 text-center text-sm font-bold">{ticketAdult}</span>
                <button onClick={() => setTicketAdult(ticketAdult + 1)} className="w-7 h-7 bg-violet-950/60 rounded text-white font-bold hover:bg-violet-800/60">+</button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#070B14] rounded-2xl border border-violet-900/30">
            <div>
              <h3 className="font-bold text-white text-base">兒童門票 (12歲以下)</h3>
              <p className="text-slate-400 text-xs">特別特權價 $903 (尊貴特別版門票)</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-cyan-300 font-bold text-lg">$903.0</span>
              <div className="flex items-center gap-2 bg-[#0C1220] rounded-lg p-1 border border-violet-900/40">
                <button onClick={() => setTicketChild(Math.max(0, ticketChild - 1))} className="w-7 h-7 bg-violet-950/60 rounded text-white font-bold hover:bg-violet-800/60">-</button>
                <span className="w-6 text-center text-sm font-bold">{ticketChild}</span>
                <button onClick={() => setTicketChild(ticketChild + 1)} className="w-7 h-7 bg-violet-950/60 rounded text-white font-bold hover:bg-violet-800/60">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Special Discounts */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-violet-300">專屬身分折扣優惠</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <label className="flex items-center gap-3 p-3 bg-[#070B14] rounded-xl border border-violet-900/30 cursor-pointer hover:border-cyan-500/30 transition">
              <input 
                type="checkbox" 
                checked={isStudentDiscount} 
                onChange={(e) => setIsStudentDiscount(e.target.checked)}
                className="w-4 h-4 accent-cyan-400 rounded" 
              />
              <div>
                <div className="font-bold text-white">聖邏各斯中學 8折優惠</div>
                <div className="text-slate-400 text-[11px]">適用於學生、教職員及校友</div>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 bg-[#070B14] rounded-xl border border-violet-900/30 cursor-pointer hover:border-cyan-500/30 transition">
              <input 
                type="checkbox" 
                checked={isFanClub} 
                onChange={(e) => setIsFanClub(e.target.checked)}
                className="w-4 h-4 accent-cyan-400 rounded" 
              />
              <div>
                <div className="font-bold text-white">Superstar 張sir 寬寬後援會</div>
                <div className="text-cyan-300 text-[11px]">免費入場（入寬仔數）+ VIP搖滾區</div>
              </div>
            </label>
          </div>
        </div>

        {/* Total Calculation & Checkout */}
        <div className="pt-6 border-t border-violet-900/30 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block">應付總金額：</span>
            <span className="text-3xl font-black text-cyan-200 font-serif">
              HK${ticketTotal}
            </span>
          </div>
          <button 
            onClick={() => alert(`成功預訂門票！應付金額: HK$${ticketTotal}。歡迎入場！`)}
            className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-400 hover:via-fuchsia-400 hover:to-cyan-400 text-white font-bold px-8 py-3.5 rounded-full shadow-xl shadow-violet-500/20 transition transform hover:scale-105"
          >
            確認並完成預訂
          </button>
        </div>
      </div>

      {/* Annual Pass info */}
      <div className="bg-[#0C1220] border border-cyan-500/25 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-cyan-500/15 text-cyan-200 text-xs px-2.5 py-1 rounded-full font-bold">全年會籍禮遇</span>
          <h3 className="text-xl font-bold text-white">入境事務處會籍 · 一年只需 $360</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            平均每日低過 $1！全年無限次入園、免費泊車、每年免費張日寬VIP搖滾區、每月與 Peggy 會面及生日尊享禮品。
          </p>
        </div>
        <button 
          onClick={() => alert('請親臨樂園入境事務大樓辦理會籍！')}
          className="bg-violet-950/60 hover:bg-violet-900/60 text-cyan-200 border border-cyan-500/30 font-bold px-6 py-2.5 rounded-full text-xs whitespace-nowrap transition"
        >
          辦理入會手續
        </button>
      </div>
    </div>
  );
}
