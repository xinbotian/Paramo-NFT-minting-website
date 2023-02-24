const hre = require("hardhat");

async function main() {

  const ParamoNFT = await hre.ethers.getContractFactory("ParamoNFT");
  const paramoNFT = await ParamoNFT.deploy();

  await roboPunksNFT.deployed();

  console.log("ParamoNFT deployed to:", paramoNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });