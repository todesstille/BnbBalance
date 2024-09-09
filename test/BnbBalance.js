const hre = require("hardhat");
const {ethers} = require("hardhat");
const { expect } = require("chai");

describe("BnbBalance", function () {
  beforeEach(async () => {
    [owner, alice, bob] = await ethers.getSigners();

    const BnbBalance = await ethers.getContractFactory("BnbBalance");
    bnbBalance = await BnbBalance.deploy();

  });
  describe("Balances", function () {
    it("Gets correct balances", async function () {
      const balances = await bnbBalance.getBalances([alice.address, bob.address]);

      expect(balances).to.deep.equal([10000000000000000000000n, 10000000000000000000000n]);
    });

  });
});
