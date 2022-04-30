require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "your version here",
  networks: {
    rinkeby: {
      url: "your url here",
      accounts: ["your private keys here"]
    },
    ethereum: {
      url: "your url here",
      accounts: ["your private keys here"]
    },
  },
  etherscan: {
    apiKey: "your api key here"
  }
};
