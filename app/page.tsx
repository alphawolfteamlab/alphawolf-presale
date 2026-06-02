"use client";

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "@/components/Header";
import { erc20Abi, formatUnits, parseUnits } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

const payments = [
  ["USDT", "/usdt.png"],
  ["USDC", "/usdc.png"],
];

const presaleStages = [
  ["STAGE 1", "10,000,000 AWF", "$0.10"],
  ["STAGE 2", "5,000,000 AWF", "$0.15"],
  ["STAGE 3", "3,300,000 AWF", "$0.20"],
];

const PRESALE_ADDRESS = "0x6575bDd46c2F86c678573dED003516c13A282D24";
const AWF_ADDRESS = "0x41583B6Ddb08aC8F41886800AeC32E3717684C57";
const USDT_ADDRESS = "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7";
const USDC_ADDRESS = "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";

const TOTAL_PRESALE_AWF = 18_300_000;

const PRESALE_ABI = [
  {
    name: "totalSold",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    name: "buyWithUSDT",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "paymentAmount", type: "uint256" }],
    outputs: [],
  },
  {
    name: "buyWithUSDC",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "paymentAmount", type: "uint256" }],
    outputs: [],
  },
] as const;

export default function Home() {
  const { isConnected, address } = useAccount();
  const { writeContractAsync, isPending } = useWriteContract();

  const [payToken, setPayToken] = useState<"USDT" | "USDC">("USDT");
  const [amount, setAmount] = useState("1");

  const { data: totalSoldData } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: PRESALE_ABI,
    functionName: "totalSold",
    query: {
      refetchInterval: 8000,
    },
  });

  const { data: awfBalanceData } = useReadContract({
    address: AWF_ADDRESS,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address),
      refetchInterval: 8000,
    },
  });

  const soldAwf = totalSoldData ? Number(formatUnits(totalSoldData, 18)) : 0;
  const soldPercent = Math.min(100, (soldAwf / TOTAL_PRESALE_AWF) * 100);

  const awfAmount = Number(amount || 0) * 10;

  const awfBalance = awfBalanceData
    ? Number(formatUnits(awfBalanceData, 18))
    : 0;

  const awfValue = awfBalance * 0.1;

  const compactAwfBalance =
    awfBalance >= 1_000_000
      ? `${(awfBalance / 1_000_000).toFixed(2)}M`
      : awfBalance.toLocaleString(undefined, { maximumFractionDigits: 0 });

  async function buyAWF() {
    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      const paymentAmount = parseUnits(amount, 6);
      const tokenAddress = payToken === "USDT" ? USDT_ADDRESS : USDC_ADDRESS;
      const buyFunction = payToken === "USDT" ? "buyWithUSDT" : "buyWithUSDC";

      await writeContractAsync({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: "approve",
        args: [PRESALE_ADDRESS, paymentAmount],
      });

      await writeContractAsync({
        address: PRESALE_ADDRESS,
        abi: PRESALE_ABI,
        functionName: buyFunction,
        args: [paymentAmount],
      });

      alert("AWF purchase completed.");
    } catch (error) {
      console.error(error);
      alert("Transaction failed or cancelled.");
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020403] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_26%_12%,rgba(132,255,0,.14),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(0,255,140,.08),transparent_30%)]" />

      <Header active="home" />

      <section
        id="presale"
        className="relative z-10 mx-auto grid max-w-[1580px] items-start gap-4 px-4 py-4 md:px-6 xl:grid-cols-[1.18fr_.82fr]"
      >
        <div className="relative overflow-hidden rounded-3xl border border-lime-400/25 bg-black/65 p-4 shadow-[0_0_55px_rgba(132,255,0,.12)] md:p-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(132,255,0,.035)_1px,transparent_1px),linear-gradient(rgba(132,255,0,.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

          <div className="relative grid items-stretch gap-5 lg:grid-cols-[.9fr_1.1fr]">
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

              <div className="mt-8 grid max-w-[540px] grid-cols-1 gap-3">
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

            <div className="relative min-h-[455px] overflow-hidden rounded-2xl border border-lime-400/25 bg-black">
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

        <aside className="rounded-3xl border border-lime-400/30 bg-black/75 p-3 shadow-[0_0_45px_rgba(132,255,0,.13)]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-[29px] font-black leading-none text-lime-400 md:text-[32px]">
              AWF PRESALE
            </h2>

            <span className="rounded-lg border border-lime-400/70 px-3 py-1 text-xs text-lime-300">
              STAGE 1
            </span>
          </div>

          <div className="mt-2 grid grid-cols-3 gap-2">
            {presaleStages.map(([stage, stageAmount, price]) => (
              <div
                key={stage}
                className="rounded-xl border border-lime-400/20 bg-lime-400/5 p-2.5"
              >
                <div className="text-[10px] font-black text-lime-400">
                  {stage}
                </div>
                <div className="mt-1 text-[9px] text-gray-300">
                  {stageAmount}
                </div>
                <div className="mt-1.5 text-base font-black text-white">
                  {price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 rounded-xl border border-lime-400/20 bg-lime-400/5 px-4 py-2 text-center">
            <span className="text-xs font-black text-lime-400">
              STAGE 1 ENDS WHEN 10,000,000 AWF IS SOLD
            </span>
          </div>

          <div className="mt-2 rounded-xl border border-lime-400/20 bg-black/45 px-4 py-2.5">
            <div className="flex justify-between text-sm font-black">
              <span>
                <span className="text-lime-400">
                  SOLD:{" "}
                  {soldAwf.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}{" "}
                  AWF
                </span>{" "}
                <span className="text-white">
                  / {TOTAL_PRESALE_AWF.toLocaleString()} AWF
                </span>
              </span>

              <span className="text-lime-400">{soldPercent.toFixed(2)}%</span>
            </div>

            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full bg-lime-400 shadow-[0_0_16px_rgba(132,255,0,.8)]"
                style={{ width: `${soldPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-2 rounded-xl border border-lime-400/20 bg-black/50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-black">1 AWF</div>
                <div className="mt-0.5 text-sm text-gray-300">
                  NEXT STAGE: <span className="text-white">$0.15</span>
                </div>
              </div>

              <div className="text-4xl font-black text-lime-400">$0.10</div>
            </div>
          </div>

          {isConnected && (
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-lime-400/20 bg-lime-400/5 p-3">
                <div className="text-[10px] font-black text-gray-400">
                  YOUR AWF BALANCE
                </div>

                <div className="mt-1 text-2xl font-black text-lime-400">
                  {compactAwfBalance} AWF
                </div>
              </div>

              <div className="rounded-xl border border-lime-400/20 bg-lime-400/5 p-3">
                <div className="text-[10px] font-black text-gray-400">
                  ESTIMATED VALUE
                </div>

                <div className="mt-1 text-2xl font-black text-white">
                  $
                  {awfValue.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>
          )}

          <p className="mt-2 text-sm text-gray-300">PAY WITH</p>

          <div className="mt-2 grid grid-cols-2 gap-3">
            {payments.map(([label, icon]) => (
              <button
                key={label}
                onClick={() => setPayToken(label as "USDT" | "USDC")}
                type="button"
                className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 font-black ${
                  payToken === label
                    ? "border-lime-400 bg-lime-400/15 text-lime-400"
                    : "border-white/10 bg-zinc-900 hover:border-lime-400/70"
                }`}
              >
                <img src={icon} alt={label} className="h-6 w-6 object-contain" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-[1fr_.72fr] gap-3">
            <div className="rounded-xl border border-lime-400/20 bg-black/45 p-2.5">
              <label className="text-[10px] font-black text-gray-300">
                AMOUNT ({payToken})
              </label>

              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                min="0"
                placeholder="1"
                className="mt-1 w-full rounded-xl border border-lime-400/20 bg-black px-4 py-1.5 text-lg font-black text-white outline-none focus:border-lime-400"
              />
            </div>

            <div className="rounded-xl border border-lime-400/15 bg-lime-400/5 px-3 py-2.5">
              <div className="text-[10px] font-black text-gray-300">
                RECEIVE
              </div>

              <div className="mt-1.5 text-lg font-black text-lime-400">
                {Number.isFinite(awfAmount) ? awfAmount.toLocaleString() : "0"}{" "}
                AWF
              </div>
            </div>
          </div>

          <div className="mt-2">
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
                    className="w-full rounded-xl bg-lime-400 py-2 text-base font-black text-black shadow-[0_0_24px_rgba(132,255,0,.45)]"
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

          <button
            onClick={buyAWF}
            disabled={isPending}
            type="button"
            className="mt-2 w-full rounded-xl border border-lime-400/70 bg-lime-400/10 py-2 text-base font-black text-lime-400 hover:bg-lime-400 hover:text-black disabled:opacity-50"
          >
            {isPending ? "PROCESSING..." : "BUY AWF"}
          </button>
        </aside>
      </section>
    </main>
  );
}