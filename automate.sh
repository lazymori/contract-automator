#!/bin/bash

set -e

cd hardhat
echo "Contract automation service has started..."

echo "Compiling..."
npx hardhat compile

echo "Deploying to $1..."
raw=`npx hardhat run --network $1 scripts/sample-script.js`

sleep 30s

echo "Verifying..."
address=`echo "${raw}" | awk '{print $NF}'`
npx hardhat verify --constructor-args arguments.js ${address}