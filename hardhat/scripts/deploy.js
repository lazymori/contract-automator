const hre = require("hardhat");
const arguments = require("../arguments");

async function main() {
  console.log(arguments);

  const Project = await hre.ethers.getContractFactory("Project");
  const project = await Project.deploy(arguments);

  await project.deployed();

  console.log("Project deployed to:", project.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });