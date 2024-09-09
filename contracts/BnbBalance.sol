// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract BnbBalance {
    function getBalances(address[] calldata addresses) external view returns (uint256[] memory balances) {
        balances = new uint256[](addresses.length);

        for (uint i = 0; i < addresses.length; i++) {
            balances[i] = addresses[i].balance;
        }
    }
}
