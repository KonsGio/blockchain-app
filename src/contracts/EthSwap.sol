pragma solidity ^0.5.0;
import "./Token.sol";
//truffle compile
contract EthSwap {
    string public name = "EthSwap Instant Exchange";
    Token public token;

    constructor(Token _token) public{
        token = _token;
    }
}
