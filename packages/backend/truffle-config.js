require("dotenv").config();
const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const {
  HD_MNEMONIC,
  SNOWTRACE_API_KEY,
} = process.env;


module.exports = {
  // bulid path for ABI json files
  contracts_build_directory: path.join(__dirname, "./../frontend/src/contracts"),
  // plugin
  plugins: [
    'truffle-plugin-verify'
  ],
  // api keys for API
  api_keys: {
    snowtrace: SNOWTRACE_API_KEY,
  },
  networks: {
    fuji: {
      provider: () => new HDWalletProvider(HD_MNEMONIC, `https://api.avax-test.network/ext/bc/C/rpc`),
      network_id: 43113,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  mocha: {

  },
  compilers: {
    solc: {
      version: "0.8.10",    
      // docker: true,        
        settings: {          
          optimizer: {
            enabled: false,
            runs: 200
          },
      //  evmVersion: "byzantium"
        }
    }
  },
};