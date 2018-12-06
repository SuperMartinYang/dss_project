module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*" // Match any network id
      },
      coverage: {
        host: "localhost",
        network_id: "*",
        port: 8555,
        gas: 0xfffffffffff,
        gasPrice: 0x01
      },
    }, // ^ Reproducing the solidity-coverage defaults
    solc: {
      optimizer: { // Turning on compiler optimization that removes some local variables during compilation
        enabled: true,
        runs: 200
      }
    }
  };
  
  