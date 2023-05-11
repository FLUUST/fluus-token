import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
// import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";
import { EtherscanProvider } from "@ethersproject/providers";

dotenv.config();

const FUJI_URL = process.env.FUJI_URL;
const CCHAIN_URL = process.env.CCHAIN_URL;

// Replace these private key with your Avalanche account private keys
// Be aware of NEVER adding private keys to GIT
const AVALANCHE_TEST_PRIVATE_KEY = process.env.AVALANCHE_TEST_PRIVATE_KEY;
const AVALANCHE_MAIN_PRIVATE_KEY = process.env.AVALANCHE_MAIN_PRIVATE_KEY;
const SNOWTRACE_API_KEY = process.env.SNOWTRACE_API_KEY;

export default {
  etherscan: {
    // Your API key for Snowtrace
    // Obtain one at https://snowtrace.io/
    apiKey: SNOWTRACE_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    avalancheTest: {
      url: FUJI_URL,
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`],
    },
    avalancheMain: {
      url: CCHAIN_URL,
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`],
    },
  },
};
