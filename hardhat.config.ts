// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";
// require("@nomiclabs/hardhat-waffle");
dotenv.config();

const FUJI_URL = process.env.FUJI_URL


// Replace these private key with your Avalanche account private keys
// Be aware of NEVER adding private keys to GIT
const AVALANCHE_TEST_PRIVATE_KEY = process.env.AVALANCHE_TEST_PRIVATE_KEY;
const AVALANCHE_MAIN_PRIVATE_KEY = process.env.AVALANCHE_TEST_PRIVATE_KEY;

export default {
  solidity: "0.8.9",
  networks: {
    avalancheTest: {
      url: FUJI_URL,
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    },
    avalancheMain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`]
    }
  }
};