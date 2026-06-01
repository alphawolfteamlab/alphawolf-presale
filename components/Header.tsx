import Link from "next/link";

type HeaderProps = {
  active?: string;
};

const navItems = [
  { key: "home", label: "HOME", href: "/" },
  { key: "gpu", label: "GPU NETWORK", href: "/gpu-network" },
  { key: "ai", label: "AI FACTORY", href: "/ai-factory" },
  { key: "tokenomics", label: "TOKENOMICS", href: "/tokenomics" },
  { key: "staking", label: "STAKING", href: "/staking" },
  { key: "roadmap", label: "ROADMAP", href: "/roadmap" },
  { key: "docs", label: "LITEPAPER", href: "/litepaper" },
];

export default function Header({ active = "home" }: HeaderProps) {
  return (
    <header className="relative z-30 h-[78px] border-b border-lime-400/25 bg-black/95 font-mono">
      <div className="mx-auto flex h-full max-w-[1760px] items-center justify-between px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/wolf-logo.png"
            alt="Alpha Wolf"
            className="h-[54px] w-[54px] shrink-0 object-contain drop-shadow-[0_0_18px_rgba(132,255,0,.8)]"
          />
          <span className="whitespace-nowrap text-[21px] font-black leading-none text-white">
            ALPHA WOLF
          </span>
        </Link>

        <nav className="flex flex-1 items-center justify-end gap-8 px-8 text-[15px] font-black text-white">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`relative whitespace-nowrap transition hover:text-lime-300 ${
                active === item.key ? "text-lime-300" : "text-white"
              }`}
            >
              {item.label}
              {active === item.key && (
                <span className="absolute -bottom-[21px] left-0 h-[3px] w-full rounded-full bg-lime-400 shadow-[0_0_12px_rgba(132,255,0,.9)]" />
              )}
            </Link>
          ))}
        </nav>

        <Link
          href="/#presale"
          className="shrink-0 rounded-md bg-lime-400 px-6 py-2.5 text-[14px] font-black text-black shadow-[0_0_24px_rgba(132,255,0,.45)] transition hover:bg-lime-300"
        >
          CONNECT WALLET
        </Link>
      </div>
    </header>
  );
}