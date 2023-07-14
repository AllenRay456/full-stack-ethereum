require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/779fbdccbefc447e9129e0c2969dc89b",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
