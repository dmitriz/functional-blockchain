// after https://github.com/dappuniversity/ethers_examples/blob/master/examples/1_accounts.js

const { INFURA_ID, INFURA_URL } = require('../keys/services')

const { callNew } = require('../lib/functional-utils')
const { promiseMethod2cps } = require('../lib/cps-utils')

const { ethers } = require("ethers")
const { pipeline } = require('cpsfy')

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

const getJsonRpcProvider = callNew(ethers.providers.JsonRpcProvider)

const balanceEther = pipeline(INFURA_URL + INFURA_ID)(
    getJsonRpcProvider,
    promiseMethod2cps('getBalance')
)

balanceEther(address)(n => 
    console.log(`${ethers.utils.formatEther(n)} ETH`)
)
