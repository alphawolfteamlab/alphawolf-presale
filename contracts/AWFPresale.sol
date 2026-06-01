// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract AWFPresale is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable awf;
    IERC20 public immutable usdt;
    IERC20 public immutable usdc;

    bool public saleActive = true;

    uint256 public totalSold;

    uint256 public constant AWF_DECIMALS = 1e18;

    uint256 public constant STAGE1_LIMIT = 10_000_000 * AWF_DECIMALS;
    uint256 public constant STAGE2_LIMIT = 15_000_000 * AWF_DECIMALS;
    uint256 public constant STAGE3_LIMIT = 18_300_000 * AWF_DECIMALS;

    uint256 public constant STAGE1_PRICE = 100_000; // $0.10, USDT/USDC 6 decimals
    uint256 public constant STAGE2_PRICE = 150_000; // $0.15
    uint256 public constant STAGE3_PRICE = 200_000; // $0.20

    event TokensPurchased(
        address indexed buyer,
        address indexed paymentToken,
        uint256 paymentAmount,
        uint256 awfAmount,
        uint256 stage
    );

    event SaleStatusChanged(bool active);
    event Withdrawn(address indexed token, address indexed to, uint256 amount);

    constructor(
        address _awf,
        address _usdt,
        address _usdc
    ) Ownable(msg.sender) {
        awf = IERC20(_awf);
        usdt = IERC20(_usdt);
        usdc = IERC20(_usdc);
    }

    function currentStage() public view returns (uint256) {
        if (totalSold < STAGE1_LIMIT) return 1;
        if (totalSold < STAGE2_LIMIT) return 2;
        if (totalSold < STAGE3_LIMIT) return 3;
        return 0;
    }

    function currentPrice() public view returns (uint256) {
        uint256 stage = currentStage();

        if (stage == 1) return STAGE1_PRICE;
        if (stage == 2) return STAGE2_PRICE;
        if (stage == 3) return STAGE3_PRICE;

        revert("Presale sold out");
    }

    function buyWithUSDT(uint256 paymentAmount) external nonReentrant {
        _buy(usdt, paymentAmount);
    }

    function buyWithUSDC(uint256 paymentAmount) external nonReentrant {
        _buy(usdc, paymentAmount);
    }

    function _buy(IERC20 paymentToken, uint256 paymentAmount) internal {
        require(saleActive, "Sale is not active");
        require(paymentAmount > 0, "Invalid payment amount");

        uint256 stage = currentStage();
        require(stage > 0, "Presale sold out");

        uint256 price = currentPrice();
        uint256 awfAmount = (paymentAmount * AWF_DECIMALS) / price;

        require(totalSold + awfAmount <= STAGE3_LIMIT, "Exceeds presale limit");
        require(awf.balanceOf(address(this)) >= awfAmount, "Not enough AWF in contract");

        totalSold += awfAmount;

        paymentToken.safeTransferFrom(msg.sender, address(this), paymentAmount);
        awf.safeTransfer(msg.sender, awfAmount);

        emit TokensPurchased(
            msg.sender,
            address(paymentToken),
            paymentAmount,
            awfAmount,
            stage
        );
    }

    function setSaleActive(bool active) external onlyOwner {
        saleActive = active;
        emit SaleStatusChanged(active);
    }

    function withdrawToken(address token, uint256 amount) external onlyOwner {
        IERC20(token).safeTransfer(owner(), amount);
        emit Withdrawn(token, owner(), amount);
    }

    function withdrawAllToken(address token) external onlyOwner {
        uint256 balance = IERC20(token).balanceOf(address(this));
        IERC20(token).safeTransfer(owner(), balance);
        emit Withdrawn(token, owner(), balance);
    }
}