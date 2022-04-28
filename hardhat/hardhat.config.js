require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinekby: {
      url: "your url here",
      accounts: ["your address here"]
    },
    ethereum: {
      url: "your url here",
      accounts: ["your address here"]
    }
  },
  etherscan: {
    apiKey: "your api key here"
  }
};