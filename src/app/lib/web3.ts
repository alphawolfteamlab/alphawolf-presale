import { ethers } from "ethers";

export const CHAINS = {
  fuji: {
    chainId: 43113,
    name: "Avalanche Fuji (Testnet)",
    rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
    nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
    blockExplorerUrls: ["https://testnet.snowtrace.io/"],
  },
  avax: {
    chainId: 43114,
    name: "Avalanche C-Chain",
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
    blockExplorerUrls: ["https://snowtrace.io/"],
  },
};

export function getWindowEthereum(): any {
  if (typeof window !== "undefined" && (window as any).ethereum) return (window as any).ethereum;
  return null;
}

export async function connectWallet(desired: "fuji" | "avax" = "fuji") {
  const eth = getWindowEthereum();
  if (!eth) throw new Error("MetaMask bulunamadı.");

  const provider = new ethers.BrowserProvider(eth);
  const net = await provider.getNetwork();
  const want = CHAINS[desired].chainId;

  if (Number(net.chainId) !== want) {
    try {
      await eth.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + want.toString(16) }],
      });
    } catch (e: any) {
      if (e?.code === 4902) {
        await eth.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: "0x" + want.toString(16),
            chainName: CHAINS[desired].name,
            nativeCurrency: CHAINS[desired].nativeCurrency,
            rpcUrls: CHAINS[desired].rpcUrls,
            blockExplorerUrls: CHAINS[desired].blockExplorerUrls,
          }],
        });
      } else {
        throw e;
      }
    }
  }

  const accounts: string[] = await eth.request({ method: "eth_requestAccounts" });
  const signer = await provider.getSigner();
  return { provider, signer, address: accounts[0] };
}