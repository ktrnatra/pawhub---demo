export default function MenuOverlay() {
  const menuItems = [
    { icon: "⌂", label: "Home" },
    { icon: "♡", label: "My Pets" },
    { icon: "▭", label: "Vaccination Cards" },
    { icon: "♧", label: "Reminders" },
    { icon: "▯", label: "Saved Posts" },
    { icon: "⚙", label: "Settings" },
    { icon: "?", label: "Help & Support" },
  ];

  return (
    <div className="relative w-[393px] h-[852px] bg-[#0c0e09] overflow-hidden">
      {/* dimmed home background */}
      <div className="absolute inset-0 bg-[#f5f5f5] opacity-20 blur-[2px]">
        <div className="mx-auto mt-6 w-[360px] h-[52px] rounded-[20px] bg-[#0c0e09]" />
        <div className="mx-auto mt-4 w-[340px] h-[80px] rounded-[24px] bg-white" />
        <div className="mx-auto mt-4 w-[340px] h-[220px] rounded-[28px] bg-white" />
        <div className="mx-auto mt-4 flex w-[340px] gap-3">
          <div className="h-[150px] flex-1 rounded-[24px] bg-white" />
          <div className="h-[150px] flex-1 rounded-[24px] bg-white" />
        </div>
        <div className="absolute bottom-3 left-1/2 h-[72px] w-[360px] -translate-x-1/2 rounded-[36px] bg-[#0c0e09]" />
      </div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* side drawer */}
      <div className="absolute left-5 top-[38px] w-[285px] h-[790px] rounded-[28px] border border-[#fbff12]/25 bg-[#0c0e09]/92 shadow-2xl backdrop-blur-xl px-5 py-5">
        {/* header */}
        <div className="flex h-[52px] items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-[#fbff12] text-[#0c0e09] text-lg">
              ●
            </div>
            <div className="pawhub-bubbles text-[#fbff12] text-[24px] leading-none tracking-[-0.5px]">
              Pawhub
            </div>
          </div>

          <div className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white text-xl">
            ×
          </div>
        </div>

        {/* profile */}
        <div className="mt-6 flex items-center gap-3">
          <div className="size-[44px] overflow-hidden rounded-full bg-[#fbff12]">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop')] bg-cover bg-center" />
          </div>

          <div>
            <div className="text-white text-[15px] font-bold leading-none">
              Alexandra
            </div>
            <div className="mt-1 inline-flex rounded-full bg-[#fbff12] px-2 py-1 text-[10px] font-bold text-[#0c0e09]">
              Pet Parent
            </div>
          </div>
        </div>

        {/* menu list */}
        <div className="mt-8 flex flex-col">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="flex h-[54px] items-center border-b border-white/10"
            >
              <div className="flex size-7 items-center justify-center text-[#fbff12] text-[18px]">
                {item.icon}
              </div>
              <div className="ml-3 flex-1 text-white text-[15px] font-semibold">
                {item.label}
              </div>
              <div className="text-white/45 text-xl">›</div>
            </div>
          ))}
        </div>

        {/* logout */}
        <div className="absolute bottom-5 left-5 right-5 border-t border-white/15 pt-4">
          <div className="flex h-[50px] items-center">
            <div className="flex size-7 items-center justify-center text-[#fbff12] text-[18px]">
              ↪
            </div>
            <div className="ml-3 flex-1 text-white text-[15px] font-semibold">
              Log out
            </div>
            <div className="text-white/45 text-xl">›</div>
          </div>
        </div>
      </div>
    </div>
  );
}
