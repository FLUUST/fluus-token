// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20SnapshotUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

/// @custom:security-contact token@fluus.com
contract FLUUSToken is
    Initializable,
    ERC20Upgradeable,
    ERC20BurnableUpgradeable,
    ERC20SnapshotUpgradeable,
    OwnableUpgradeable,
    PausableUpgradeable,
    UUPSUpgradeable
{
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __ERC20_init("FLUUSToken", "FLUUS");
        __ERC20Burnable_init();
        __ERC20Snapshot_init();
        __Ownable_init();
        __Pausable_init();
        __UUPSUpgradeable_init();
        __mintAll();
    }

    function __mintAll() private {
        // Charitable 5% of 10**9
        address charitableAddress = 0x4a300AC92f5e70d140c696FA415677d2A16467EA;
        uint256 charitableAmount = 50000000 * 10 ** 18;
        _mint(charitableAddress, charitableAmount);
        // // Marketing 10% of 10**9
        address marketingAddress = 0x01B9AC1553E3de2D22aeFCB0C533d9b20B68Cf5f;
        uint256 marketingAmount = 100000000 * 10 ** 18;
        _mint(marketingAddress, marketingAmount);
        // // Community 20% of 10**9
        address communityAddress = 0x39090bEA125bC0f6E9e45bbE7c95c4b5F560B580;
        uint256 communityAmount = 200000000 * 10 ** 18;
        _mint(communityAddress, communityAmount);
        // // Operating 14% of 10**9
        address operatingAddress = 0x1494E3D39FCd54db1ac8C0D06313b12C6e294b0B;
        uint256 operatingAmount = 140000000 * 10 ** 18;
        _mint(operatingAddress, operatingAmount);
        // // Team 15% of 10**9
        address teamAddress = 0x1cc453371fF1C2E4A7e8D971161c9C9082De7840;
        uint256 teamAmount = 150000000 * 10 ** 18;
        _mint(teamAddress, teamAmount);
        // // Liquidity 9% of 10**9
        address liquidityAddress = 0xb9A008B75D762D311d1Aaf3047d8C39cb2916c64;
        uint256 liquidityAmount = 90000000 * 10 ** 18;
        _mint(liquidityAddress, liquidityAmount);
        // // Participants 22% of 10**9
        address participantsAddress = 0x1923756AC5641Fd2fcc7567D29c1C933Dd76aD7f;
        uint256 participantsAmount = 220000000 * 10 ** 18;
        _mint(participantsAddress, participantsAmount);
        // // Advisors 5% of 10**9
        address advisorsAddress = 0x5004dc56b58e9B1dC0F3Abe6BFDbA8FE9b7Fc8cb;
        uint256 advisorsAmount = 50000000 * 10 ** 18;
        _mint(advisorsAddress, advisorsAmount);
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Upgradeable, ERC20SnapshotUpgradeable) whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
