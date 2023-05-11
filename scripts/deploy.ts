import { ethers, upgrades } from "hardhat";

import hre from "hardhat";

async function main() {
  // We get the token contract to deploy
  const FLUUSToken = await ethers.getContractFactory("FLUUSToken");
  const fluus = await hre.upgrades.deployProxy(FLUUSToken, { kind: "uups" });
  await fluus.deployed();

  const FTokenAddr = fluus.address;
  console.log("FLUUS Token deployed to:", fluus.address);

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
