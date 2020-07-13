require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remember artwork hover forget fresh spoil'; 
let testAccounts = [
"0x970faca110adcd46914ea31f8c235c3aa81d6971eea249f46fa98f910c15d59f",
"0x1fc5683d326c5e8dd0a8dbdab00e203580e4fb258d9cf0a50edd781d3b96ac25",
"0x64a32ce4f8becf9f696f000a00ba67a1e8b4a4cb08696de0c18f499a0cb98a48",
"0x9d01ed17e82c340441d736e17ef899edea115bdb4aa87f77ece8ef1fc7d908ec",
"0x915d0b61901cea1b1d6e1b1a85132314a8cd96c5e8a77262ff285109b071d09e",
"0xa3546bca3575127ae9e8c3359cc87cf2b7632f877cd2889d9f418035f652b3f1",
"0x271b3137f9c7ecb43bbe019640c725b78a5c02d370e986cf1a64c51479dad01b",
"0x1421367496796fa12f22fed4ed1241fe063a740c16c8316daf4107f0fd0f2ae3",
"0xf8a5f5e6bc62f3d3fb0b63a38b49eaf8cf3210d9d6230118f7b36837ad173c1e",
"0x267c5f51a4429e2eaa88d0c9272de78e676ebc785f89b3b02b7ecaa6c490fd7b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
