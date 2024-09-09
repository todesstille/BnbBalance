// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IBnbBalance {
    function getBalances(address[] calldata addresses) external view returns (uint256[] memory balances);
}
