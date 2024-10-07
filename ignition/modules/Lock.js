// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

async function deploy() {
    const factory = await ethers.getContractFactory("Counter");
    const contract = await factory.deploy();
    console.log("Address: " + (await contract.getAddress()));
}

deploy();
