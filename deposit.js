const ethers = require("ethers");
const {
    Bscvalidatorset__factory,
} = require("./types/ethers-contracts/factories/Bscvalidatorset__factory");
const {
    Stakehub__factory,
} = require("./types/ethers-contracts/factories/Stakehub__factory");

const provider = new ethers.JsonRpcProvider("https://rpc.taranium.com");
const decryptedWallet = ethers.Wallet.fromEncryptedJsonSync(
    '{"address":"bcdd0d2cda5f6423e57b6a4dcd75decbe31aecf0","crypto":{"cipher":"aes-128-ctr","ciphertext":"f7505ced32fe3037d6dc25ae7e9716858e516bacfb0dc28c9995f01cf7fee84a","cipherparams":{"iv":"d93e5314f18ccfc8330e1ad37534fa29"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"1fb8f954f70fb0ddb8be5b1fb57d821df21dda700682f382baed311dde95a6c7"},"mac":"c501bb033f94cb9efc3c63fe1547555fc1412d3abb8b400cacda37bd9de888ec"},"id":"7246dc9c-d170-4009-8878-8628be169836","version":3}',
    "0123456789",
);
const wallet = new ethers.Wallet(decryptedWallet.privateKey, provider);

const addr = "0x0000000000000000000000000000000000002002";
const contract = Stakehub__factory.connect(addr, wallet);
console.log({ contract });

// contract.createValidator
//     .populateTransaction(
//         "0xbcdd0d2cda5f6423e57b6a4dcd75decbe31aecf0",
//         "0xb3baf71dc234890671fc3292afde45e20ce83cb8cd65c614be9fa29932c34051a75cbc1e25b968cc72142c91a56b521a",
//         "0x98b4ca4128a64042b75d7233c687f872e5be35b6332841a073d2c5083adf3be68681bf31a20bce3c5bdf1ad5d131c5971927bee52d68e0471a2c627991256f06e89dae2c150b2d3fd0a27af4ed514cc55d87f4e7f15ee8dfb3b36cdda13572c1",
//         {
//             rate: 0,
//             maxRate: 0,
//             maxChangeRate: 0,
//         },
//         {
//             moniker: "Xxx",
//             identity: "x",
//             website: "x",
//             details: "x",
//         },
//         {
//             value: "3000000000000000000000",
//         },
//     )
//     .then((tx) => {
//         wallet.sendTransaction(tx).then(console.log);
//     });

// check validators
const validatorSetContract = Bscvalidatorset__factory.connect(
    "0x0000000000000000000000000000000000001000",
    wallet,
);
validatorSetContract.currentValidatorSet(0).then(console.log);
validatorSetContract.currentValidatorSet(1).then(console.log);
validatorSetContract.currentValidatorSet(2).then(console.log);
