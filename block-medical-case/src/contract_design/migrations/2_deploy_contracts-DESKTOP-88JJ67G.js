//var EMERGE_process = artifacts.require("./EMERGE_process.sol");
var MedicalCase = artifacts.require("./MedicalCase.sol");

module.exports = function(deployer) {
  deployer.deploy(MedicalCase);
  //deployer.deploy(EMERGE_process);
};
