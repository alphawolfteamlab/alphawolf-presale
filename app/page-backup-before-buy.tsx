"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "@/components/Header";

const payments = [
  ["USDT", "/usdt.png"],
  ["USDC", "/usdc.png"],
];

const presaleStages = [
  ["STAGE 1", "10,000,000 AWF", "$0.10"],
  ["STAGE 2", "5,000,000 AWF", "$0.15"],
  ["STAGE 3", "3,300,000 AWF", "$0.20"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020403] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_26%_12%,rgba(132,255,0,.14),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(0,255,140,.08),transparent_30%)]" />

      <Header active="home" />

      <section
        id="presale"
        className="relative z-10 mx-auto grid max-w-[1580px] items-stretch gap-4 px-4 py-4 md:px-6 xl:grid-cols-[1.18fr_.82fr]"
      >
        <div className="relative overflow-hidden rounded-3xl border border-lime-400/25 bg-black/65 p-4 shadow-[0_0_55px_rgba(132,255,0,.12)] md:p-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.035)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative grid h-full items-stretch gap-5 lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative z-20 flex flex-col">
              <div className="inline-flex w-fit rounded-lg border border-lime-400/50 bg-black/55 px-4 py-2 text-[11px] font-black tracking-[4px] text-lime-400">
                AI • GPU • DEFI
              </div>

              <p className="mt-4 text-xs tracking-[7px] text-lime-300">
                WELCOME TO
              </p>

              <h1 className="mt-3 font-black leading-[0.9] tracking-tight">
                <span className="block text-[42px] text-white md:text-[52px] xl:text-[58px]">
                  ALPHA
                </span>
                <span className="block text-[42px] text-white md:text-[52px] xl:text-[58px]">
                  WOLF
                </span>
                <span className="block whitespace-nowrap text-[42px] md:text-[52px] xl:text-[58px]">
                  <span className="text-lime-400">TOKEN</span>{" "}
                  <span className="text-[.72em] text-white">(AWF)</span>
                </span>
              </h1>

              <p className="mt-5 max-w-[540px] text-[16px] leading-relaxed text-gray-200">
                GPU-powered crypto ecosystem for AI compute, rendering utility,
                decentralized infrastructure and community growth.
              </p>

              <div className="mt-5 grid max-w-[540px] grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-lime-400/25 bg-lime-400/5 px-4 py-3">
                  <span className="font-black text-lime-400">● LIVE</span>
                  <div className="mt-1 text-gray-400">GPU Infrastructure</div>
                </div>

                <div className="rounded-xl border border-lime-400/25 bg-lime-400/5 px-4 py-3">
                  <span className="font-black text-lime-400">AI READY</span>
                  <div className="mt-1 text-gray-400">Compute Layer</div>
                </div>
              </div>

              <div className="mt-auto grid max-w-[540px] grid-cols-1 gap-3 pt-6">
                <a
                  href="#presale"
                  className="rounded-xl bg-lime-400 py-4 text-center font-black text-black shadow-[0_0_24px_rgba(132,255,0,.55)]"
                >
                  JOIN THE PACK
                </a>

                <a
                  href="/gpu-network"
                  className="rounded-xl border border-lime-400/80 bg-black/30 py-4 text-center font-black text-lime-400"
                >
                  EXPLORE ECOSYSTEM
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[520px] overflow-hidden rounded-2xl border border-lime-400/25 bg-black">
              <img
                src="/neural-wolf-core.png"
                alt="Neural Wolf Core"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute left-5 top-5 rounded-full bg-black/60 px-4 py-2 text-sm font-black text-lime-400 backdrop-blur">
                ● GPU NODE ACTIVE
              </div>
            </div>
          </div>
        </div>

        <aside className="flex flex-col rounded-3xl border border-lime-400/30 bg-black/75 p-4 shadow-[0_0_45px_rgba(132,255,0,.13)]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-[32px] font-black leading-none text-lime-400 md:text-[36px]">
              AWF PRESALE
            </h2>

            <span className="rounded-lg border border-lime-400/70 px-3 py-1 text-xs text-lime-300">
              STAGE 1
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {presaleStages.map(([stage, amount, price]) => (
              <div
                key={stage}
                className="rounded-xl border border-lime-400/20 bg-lime-400/5 p-3"
              >
                <div className="text-[11px] font-black text-lime-400">
                  {stage}
                </div>
                <div className="mt-1 text-[10px] text-gray-300">{amount}</div>
                <div className="mt-2 text-lg font-black text-white">
                  {price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-lime-400/20 bg-lime-400/5 px-4 py-3 text-center">
  <span className="text-sm font-black text-lime-400">
    STAGE 1 ENDS WHEN 10,000,000 AWF IS SOLD
  </span>
</div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[30%] bg-lime-400 shadow-[0_0_16px_rgba(132,255,0,.8)]" />
          </div>

          <div className="mt-2 flex justify-between text-sm font-black">
            <span>
              <span className="text-lime-400">0 AWF</span>{" "}
              <span className="text-white">/ 18,300,000 AWF</span>
            </span>
            <span className="text-lime-400">0%</span>
          </div>

          <div className="mt-4 rounded-xl border border-lime-400/20 bg-black/50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-black">1 AWF</div>
                <div className="mt-1 text-xs text-gray-300">
                  NEXT STAGE: <span className="text-white">$0.15</span>
                </div>
              </div>
              <div className="text-2xl font-black text-lime-400">$0.10</div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-300">PAY WITH</p>

          <div className="mt-2 grid grid-cols-2 gap-3">
            {payments.map(([label, icon]) => (
              <button
                key={label}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900 py-3 font-black hover:border-lime-400/70"
              >
                <img src={icon} alt={label} className="h-7 w-7 object-contain" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="mt-3">
  <ConnectButton.Custom>
    {({ openConnectModal, openChainModal, account, chain, mounted }) => {
      const ready = mounted;
      const connected = ready && account && chain;

      return (
        <button
          onClick={() => {
            if (!connected) {
              openConnectModal();
              return;
            }

            if (chain.unsupported) {
              openChainModal();
              return;
            }
          }}
          type="button"
          className="w-full rounded-xl bg-lime-400 py-4 text-lg font-black text-black shadow-[0_0_24px_rgba(132,255,0,.45)]"
        >
          {!connected
            ? "CONNECT WALLET"
            : chain.unsupported
            ? "SWITCH TO AVAX"
            : account.displayName}
        </button>
      );
    }}
  </ConnectButton.Custom>
</div>

          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-lime-400/15 bg-lime-400/5 p-3">
              <div className="text-[10px] font-black text-gray-300">
                NETWORK
              </div>
              <div className="mt-2 font-black text-lime-400">AVALANCHE</div>
            </div>

            <div className="rounded-xl border border-lime-400/15 bg-lime-400/5 p-3">
              <div className="text-[10px] font-black text-gray-300">
                TOKEN SUPPLY
              </div>
              <div className="mt-2 font-black text-lime-400">61M AWF</div>
            </div>

            <div className="rounded-xl border border-lime-400/15 bg-lime-400/5 p-3">
              <div className="text-[10px] font-black text-gray-300">PAY</div>
              <div className="mt-2 font-black text-lime-400">USDT/USDC</div>
            </div>
          </div>
        </aside>
      </section>

      <footer className="relative z-10 mx-auto max-w-[1580px] px-4 pb-7 md:px-6">
        <div className="relative flex items-center justify-center overflow-hidden py-5">
          <div className="absolute left-0 top-1/2 h-px w-[42%] bg-gradient-to-r from-transparent via-lime-400/70 to-lime-400/20" />
          <div className="absolute right-0 top-1/2 h-px w-[42%] bg-gradient-to-l from-transparent via-lime-400/70 to-lime-400/20" />

          <div className="relative z-10 flex items-center gap-5 rounded-full border border-lime-400/30 bg-black/80 px-8 py-3 shadow-[0_0_30px_rgba(132,255,0,.18)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-lime-400/70 bg-lime-400/10 text-xl font-black text-lime-400">
              C
            </span>

            <span className="text-sm font-black tracking-[6px] text-white">
              ALPHAWOLF TEAM
            </span>

            <span className="text-lime-400">•</span>

            <span className="text-sm font-black tracking-[6px] text-lime-400">
              2026
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}