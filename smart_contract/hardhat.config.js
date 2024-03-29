require("@nomicfoundation/hardhat-toolbox");
//require("@nomicfoundation/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PM2yKO6ODwC-XSY5qZrOl3CB5hMEmz_o',
      accounts: ['b895a0eccb4488ec601ee3e538f02c287934fe78df0f7a06a78822ac5eef9307']
    }
  }
};
