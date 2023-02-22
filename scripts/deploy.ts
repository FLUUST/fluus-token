import { ethers, upgrades } from "hardhat";

import hre from "hardhat";

async function main() {
  // We get the token contract to deploy
  const FLUUSToken = await ethers.getContractFactory("FLUUSToken");

  const FToken = await FLUUSToken.deploy();
  await FToken.deployed();
  const FTokenAddr = FToken.address;
  console.log("FLUUS Token deployed to:", FToken.address);

  await timeout(10000);
  await hre.run("verify:verify", {
    address: FTokenAddr,
    contract: "contracts/FLUUSToken.sol:FLUUSToken",
  });

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});