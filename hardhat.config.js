require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/69414592c6bc4c52bd382350ee0ef9f2',
      // @kicoes habría que cambiar aquí la url concatenando como abajo pero no me ha funcionado
      //url: `https://rinkeby.infura.io/v3/${projectId}`,
      //test git
      accounts: [privateKey],
    },  
  }, 
};