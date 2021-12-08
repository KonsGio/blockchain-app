//testing solidity contracts 
//with libraries from truffle like mocha and chai
const EthSwap = artifacts.require('EthSwap');
const Token = artifacts.require('Token');

require('chai')
    .use(require('chai-as-promised'))
    .should()

    function tokens(n){
        return web3.utils.toWei(n, 'ether');
    }

//helper for decimals of coin
contract('EthSwap', (accounts) => {
    let token, ethSwap
   
    before(async() =>{
        token = await Token.new()
        ethSwap = await EthSwap.new(token.address)
        await token.transfer(ethSwap.address, tokens('100000'))
    })
    describe('Token deployment', async () =>{
        it('Contract has a name', async() =>{
            const name = await token.name()
            assert.equal(name, 'DApp Token')
        })
    })
    describe('EthSwap deployment', async () =>{
        it('Contract has a name', async() =>{
            const name = await ethSwap.name()
            assert.equal(name, 'EthSwap Instant Exchange')
        })

        it('contract has tokens', async() =>{
            let balance = await token.balanceOf(ethSwap.address)
            assert.equal(balance.toString(), tokens('100000'))
        })
    })
})