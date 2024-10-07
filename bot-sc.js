require("dotenv").config();
const ethers = require("ethers");
const {
    Counter__factory,
} = require("./types/ethers-contracts/factories/Counter__factory");

const rpc = process.env.RPC;
const senderSk = process.env.SENDER_PRIVATE_KEY;

const address = "0x7F6350dC35c94308F4383E2241F4CAcA659eD5D7";

const provider = new ethers.JsonRpcProvider(rpc);
const wallet = new ethers.Wallet(senderSk, provider);
const contract = Counter__factory.connect(address, wallet);

async function transact() {
    let nonce = await wallet.getNonce();
    console.log({ nonce });
    let x = 0;
    while (x < 1) {
        const upperNonce = nonce + 4096;
        while (nonce < upperNonce) {
            contract
                .increment({
                    nonce,
                })
                .then((tx) =>
                    console.log(`[!] Tx with nonce '${tx.nonce}' sent!`),
                );
            nonce++;
        }
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 2000);
        });
        x++;
    }
}

transact().catch(console.error);
