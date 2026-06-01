"use client";
import React from "react";
import { connectWallet } from "../lib/web3"; // ✅ çünkü lib klasörü, components ile kardeş

export default function ConnectButton({ chain = "fuji" }: { chain?: "fuji" | "avax" }) {
  const [addr, setAddr] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState<string | null>(null);

  const short = (a: string) => a.slice(0, 6) + "..." + a.slice(-4);

  const onClick = async () => {
    setBusy(true);
    setErr(null);
    try {
      const address = await connectWallet(chain);
      setAddr(address);
    } catch (e: any) {
      setErr(e?.message ?? "Bağlanma hatası");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      {addr ? (
        <span className="px-3 py-2 rounded border border-gray-400">{short(addr)}</span>
      ) : (
        <button
          onClick={onClick}
          disabled={busy}
          className="px-4 py-2 rounded bg-black text-white hover:opacity-90 disabled:opacity-60"
        >
          {busy ? "Bağlanıyor..." : "Connect Wallet"}
        </button>
      )}
      {err && <span className="text-red-500 text-sm ml-2">{err}</span>}
    </div>
  );
}

  return (
    <div className="flex items-center gap-3">
      {addr ? (
        <span className="px-3 py-2 rounded border border-gray-400">
          {short(addr)}
        </span>
      ) : (
        <button
          onClick={onClick}
          disabled={busy}
          className="px-4 py-2 rounded bg-black text-white hover:opacity-90 disabled:opacity-60"
        >
          {busy ? "Bağlanıyor..." : "Connect Wallet"}
        </button>
      )}
      {err && <span className="text-red-500 text-sm">{err}</span>}
    </div>
  );
}