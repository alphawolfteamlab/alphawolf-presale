"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { erc20Abi, parseUnits } from "viem";
import { useAccount, useWriteContract } from "wagmi";

const PRESALE_ADDRESS = "0x6575bDd46c2F86c678573dED003516c13A282D24";
const USDT_ADDRESS = "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7";
const USDC_ADDRESS = "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";

const PRESALE_ABI = [
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

export default function PresalePage() {
  const { isConnected } = useAccount();
  const { writeContractAsync, isPending } = useWriteContract();

  const [payToken, setPayToken] = useState<"USDT" | "USDC">("USDT");
  const [amount, setAmount] = useState("1");

  const awfAmount = Number(amount || 0) / 0.1;

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
    <main className="min-h-screen bg-[#020403] text-white overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(132,255,0,.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(0,255,140,.08),transparent_30%)]" />

      <Header active="home" />

      <section className="relative z-10 mx-auto max-w-[900px] px-4 py-10 md:px-6">
        <div className="rounded-3xl border border-lime-400/30 bg-black/80 p-5 shadow-[0_0_55px_rgba(132,255,0,.16)] md:p-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-[5px] text-lime-400">
                ALPHA WOLF TOKEN
              </p>
              <h1 className="mt-3 text-[38px] font-black leading-none text-lime-400 md:text-[54px]">
                AWF PRESALE
              </h1>
            </div>

            <span className="rounded-xl border border-lime-400/70 px-4 py-2 text-sm font-black text-lime-300">
              STAGE 1
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4">
              <div className="text-sm font-black text-lime-400">STAGE 1</div>
              <div className="mt-2 text-gray-300">10,000,000 AWF</div>
              <div className="mt-3 text-2xl font-black">$0.10</div>
            </div>

            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4">
              <div className="text-sm font-black text-lime-400">STAGE 2</div>
              <div className="mt-2 text-gray-300">5,000,000 AWF</div>
              <div className="mt-3 text-2xl font-black">$0.15</div>
            </div>

            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-4">
              <div className="text-sm font-black text-lime-400">STAGE 3</div>
              <div className="mt-2 text-gray-300">3,300,000 AWF</div>
              <div className="mt-3 text-2xl font-black">$0.20</div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-lime-400/20 bg-black/50 p-5">
            <div className="flex items-center justify-between">
              <span className="font-black text-lime-400">CURRENT PRICE</span>
              <span className="text-3xl font-black text-lime-400">$0.10</span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[0%] bg-lime-400" />
            </div>

            <div className="mt-3 flex justify-between text-sm font-black">
              <span>0 AWF / 18,300,000 AWF</span>
              <span className="text-lime-400">0%</span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-lime-400/20 bg-black/50 p-5">
            <p className="text-sm font-black text-gray-300">PAY WITH</p>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {["USDT", "USDC"].map((token) => (
                <button
                  key={token}
                  onClick={() => setPayToken(token as "USDT" | "USDC")}
                  type="button"
                  className={`rounded-xl border py-4 font-black ${
                    payToken === token
                      ? "border-lime-400 bg-lime-400/15 text-lime-400"
                      : "border-white/10 bg-zinc-900 text-white"
                  }`}
                >
                  {token}
                </button>
              ))}
            </div>

            <div className="mt-5">
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
                      className="w-full rounded-xl bg-lime-400 py-4 text-lg font-black text-black"
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

            <label className="mt-5 block text-xs font-black text-gray-300">
              AMOUNT ({payToken})
            </label>

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              min="0"
              placeholder="1"
              className="mt-2 w-full rounded-xl border border-lime-400/20 bg-black px-4 py-4 text-xl font-black text-white outline-none focus:border-lime-400"
            />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-gray-400">YOU RECEIVE</span>
              <span className="text-xl font-black text-lime-400">
                {Number.isFinite(awfAmount) ? awfAmount.toLocaleString() : "0"} AWF
              </span>
            </div>

            <button
              onClick={buyAWF}
              disabled={isPending}
              type="button"
              className="mt-5 w-full rounded-xl border border-lime-400/70 bg-lime-400/10 py-4 text-lg font-black text-lime-400 hover:bg-lime-400 hover:text-black disabled:opacity-50"
            >
              {isPending ? "PROCESSING..." : `BUY AWF WITH ${payToken}`}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}