const hre = require("hardhat");

async function main() {
  const BnbBalance = await ethers.getContractFactory("BnbBalance");
  bnbBalance = await BnbBalance.deploy();

  await bnbBalance.waitForDeployment();

  console.log(bnbBalance.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
