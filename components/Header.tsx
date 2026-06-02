"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-lime-400/25 bg-black/95 font-mono">
      <div className="mx-auto flex h-[72px] max-w-[1760px] items-center justify-between px-4 md:h-[78px] md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/wolf-logo.png"
            alt="Alpha Wolf"
            className="h-[50px] w-[50px] shrink-0 object-contain drop-shadow-[0_0_18px_rgba(132,255,0,.8)] md:h-[54px] md:w-[54px]"
          />
          <span className="whitespace-nowrap text-[20px] font-black leading-none text-white md:text-[21px]">
            ALPHA WOLF
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 text-[15px] font-black text-white xl:flex">
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
          className="hidden whitespace-nowrap rounded-md bg-lime-400 px-6 py-2.5 text-[14px] font-black text-black shadow-[0_0_24px_rgba(132,255,0,.45)] transition hover:bg-lime-300 xl:block"
        >
          CONNECT WALLET
        </Link>

        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="rounded-lg border border-lime-400/40 bg-lime-400/10 px-3 py-2 text-lg font-black text-lime-400 xl:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-lime-400/20 bg-black/95 px-4 py-4 xl:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl border px-4 py-3 text-sm font-black ${
                  active === item.key
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 bg-zinc-950 text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#presale"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-lime-400 px-4 py-3 text-center text-sm font-black text-black"
            >
              CONNECT WALLET
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}