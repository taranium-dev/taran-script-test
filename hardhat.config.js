require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.27",
    networks: {
        hardhat: {},
        taranium: {
            accounts: [process.env.SENDER_PRIVATE_KEY],
            url: process.env.RPC,
        },
    },
};
