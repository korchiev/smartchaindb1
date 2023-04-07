const smartAuction = artifacts.require("smartAuction");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(smartAuction);
};
