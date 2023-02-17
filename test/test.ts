import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("FLUUSToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("FLUUSToken");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();

    expect(await instance.name()).to.equal("FLUUS Token");
  });
});
