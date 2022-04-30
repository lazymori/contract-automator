const path = require('path');
const fs = require('fs');

const hre = require("hardhat");
const arg = require("../arguments");

async function main() {
  var projectName = (((fs.readdirSync(path.join(__dirname, "..", "contracts")))[0]).split("."))[0];
  const Project = await hre.ethers.getContractFactory(projectName);
  const project = await Project.deploy(...arg);

  await project.deployed();

  console.log("Project deployed to:", project.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });