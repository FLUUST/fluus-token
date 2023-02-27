

import { task } from "hardhat/config";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
// import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";
import { EtherscanProvider } from "@ethersproject/providers";


dotenv.config();

const FUJI_URL = process.env.FUJI_URL
const CCHAIN_URL = process.env.CCHAIN_URL



// Replace these private key with your Avalanche account private keys
// Be aware of NEVER adding private keys to GIT
const AVALANCHE_TEST_PRIVATE_KEY = process.env.AVALANCHE_TEST_PRIVATE_KEY;
const AVALANCHE_MAIN_PRIVATE_KEY = process.env.AVALANCHE_MAIN_PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

task(
  "balances",
  "Prints the list of AVAX account balances",
  async (args, hre): Promise<void> => {
    const accounts: SignerWithAddress[] = await hre.ethers.getSigners();
    for (const account of accounts) {
      const balance: BigNumber = await hre.ethers.provider.getBalance(
        account.address
      );
      console.log(`${account.address} has balance ${balance.toString()}`);
    }
  }
);


export default {
  etherscan: {
    // Your API key for Snowtrace
    // Obtain one at https://snowtrace.io/
    apiKey: API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9"
      }
    ]
  },
  networks: {
    avalancheTest: {
      url: FUJI_URL,
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    },
    avalancheMain: {
      url: CCHAIN_URL,
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`]
    }
  }
};