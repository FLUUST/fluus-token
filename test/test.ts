import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers, upgrades } from "hardhat";
describe("FluusToken tests", function () {
  it("Total Supply should be 1 billion", async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    console.log("Owner Address", owner.address);
    const FLUUSTokenFactory = await ethers.getContractFactory("FLUUSToken");
    const FluusTokenProxy = await upgrades.deployProxy(FLUUSTokenFactory, { kind: "uups" });
    await FluusTokenProxy.deployed();
    const decimals = await FluusTokenProxy.decimals();
    const oneBillion = BigNumber.from(10).pow(9);
    const expectedTotalSupply = oneBillion.mul(BigNumber.from(10).pow(18));
    const actualTotalSupply = await FluusTokenProxy.totalSupply();
    expect(actualTotalSupply._hex).to.equal(expectedTotalSupply._hex);
  });
});
