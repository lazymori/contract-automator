const hre = require("hardhat");
const argu = require("../arguments");

async function main() {
  const Project = await hre.ethers.getContractFactory("Project");
  const project = await Project.deploy(...argu);

  await project.deployed();

  console.log("Project deployed to:", project.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });