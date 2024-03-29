const main = async () => {
  const Test = await hre.ethers.getContractFactory('Test');
  const test = await Test.deploy();

  await test.deployed();

  console.log("The smart contract was deployed to:", test.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();