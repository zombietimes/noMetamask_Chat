const sol = artifacts.require("./Node.sol");
module.exports = function(deployer) {
  deployer.deploy(sol);
};
