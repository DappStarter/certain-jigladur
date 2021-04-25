require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom clog other security notice birth predict coconut hockey arctic bubble tongue'; 
let testAccounts = [
"0x2a68a63ca16097ac6043b1fb56a28263f110450a28afe4982ad49a3a15297df8",
"0x56e2a3c95ae5d54cc37fbb5b247fbfc38670d5c6f936decc9f42d3289a1e62b4",
"0xeeef037c194d38830b1e304362520ff611dbb9e3d8f5cd74047cf87a920d2a95",
"0xd2a2d3aa60e51eb22ce7ad6452cc4151a505c393e23a96505688688c3070e296",
"0x88c7e9164ef36b13fceeae4755c0d662483af19e4ab3caba5dc42a595c6cedd1",
"0xd35af12b4a48061f55f76fa82545a358f19571034b3d1fb6f91ecd168673dc09",
"0x654e0afe645c8bc26d8cb3d81c5baf560d589feae81fa68bf48ab4511b9169cf",
"0x07cbda218242e048217d99cf20f12658db2cf2dfee8bd6c2e13e036f85c18a35",
"0x28e888b73d953d5db8982340cfd72cf05224a6c5257263a2e8b7b5b17c0e9892",
"0x33ac40ec472c4eb7f73df67aa706da448b4b33d3421bdd07b39ef19220ebe176"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


