# Contract Automator

This script helps you to compile, deploy, and verify your smart contract on whichever blockchain network that allows smart contracts.

# Usage Guide

## Setup

#1. Place your contract (.sol) file at `hardhat/contracts`

#2. Fill in your contract constructor arguments at `hardhat/arguments.js`

#3. Fill in your network provider, wallet private key, and etherscan API key at `hardhat/hardhat.config.js`

## Running the script

`npm i` to install all relevant libraries

`bash automate.sh` if you are on a Windows OS.

`./automate.sh` if you are on a Mac OS.

# Supported Libraries

Contracts may require other external libraries which could be installed manually using `npm`.

Currently, openzepplin's contract libraries are provided in the `package.json`.

# Caveats

This is a simple script, created with not a lot of use case and flexibility in mind. Therefore, it is unable to handle multiple contracts compilation and deployment at the same time.

Do not put more than one contract in `hardhard/contracts` as the deploy script will only prepare for the first contract by alphabetical order.
