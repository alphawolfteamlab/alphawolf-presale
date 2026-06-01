import { network } from "hardhat";

const { ethers, networkName } = await network.create();

async function main() {
  const AWF = "0x41583B6Ddb08aC8F41886800AeC32E3717684C57";
  const USDT = "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7";
  const USDC = "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";

  console.log(`Deploying AWFPresale to ${networkName}...`);

  const presale = await ethers.deployContract("AWFPresale", [
    AWF,
    USDT,
    USDC,
  ]);

  console.log("Waiting for deployment confirmation...");

  await presale.waitForDeployment();

  console.log("AWF Presale deployed to:", await presale.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});