import { Network, Alchemy } from "alchemy-sdk";
import dotenv from "dotenv";
import BigNumber from 'bignumber.js';
dotenv.config();
const { ALCHEMY_API_KEY } = process.env;

const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET
};

const alchemy = new Alchemy(settings);
const usdcContractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
//ANCHOR - GET BLOCK NUMBER
async function getBlockNumber() {
  try {
    const blockNumber = await alchemy.core.getBlockNumber();
    console.log("Current block number:", blockNumber);
    return blockNumber;
  } catch (error) {
    console.error("Error getting block number:", error);
    throw error;
  }
}

// getBlockNumber();

//ANCHOR - GET TOKEN BALANCE
async function getTokenBalances(address) {
  try {
    const balances = await alchemy.core.getTokenBalances(address);
    console.log("Token balances:", balances);
    return balances;
  } catch (error) {
    console.error("Error getting token balances:", error);
  }
}
//   getTokenBalances('0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97')

//ANCHOR - GET METADATA
async function getMetadata(tokenContractAddress) {
  try {
    const metadata = await alchemy.core.getTokenMetadata(tokenContractAddress);
    return metadata;
  } catch (error) {
    console.error("Error getting token metadata:", error);
    throw error;
  }
}

// getMetadata(usdcContractAddress)
//   .then((metadata) => {
//     console.log("Token metadata:", metadata);
//   })
//   .catch((error) => {
//     console.error("Failed to get token metadata:", error);
//   });
  
//ANCHOR - GET TRANSACTIONCOUNT
const VitalikAddress = "vitalik.eth";
const getTransactionCount = async () => {
  try {
    let response = await alchemy.core.getTransactionCount(VitalikAddress);
    console.log("Transaction count:", response);
    return response;
  } catch (error) {
    console.error("Error fetching transaction count:", error);
    throw error;
  }
};

// getTransactionCount()

//ANCHOR - CHECK IF IT IS CONTRACT ADDRESS
const checkContractAddress = async (address) => {
    try {
      const result = await alchemy.core.isContractAddress(address);
      console.log(`Address ${address} is${result ? '' : ' not'} a contract address.`);
      return result;
    } catch (error) {
      console.error('Error checking contract address:', error);
      throw error; 
      
    }
  };

// checkContractAddress(VitalikAddress)
// checkContractAddress('0x497a9A79e82e6fC0FF10a16f6F75e6fcd5aE65a8')

//ANCHOR - GET TOKEN BY OWNER
const getTokens = async () => {
    //Define the owner address or name
    const ownerAddress = "vitalik.eth"
    
    //The response returns the tokens the address owns and relevant metadata.
    let response = await alchemy.core.getTokensForOwner(ownerAddress)
  
    response.tokens.forEach(item => {
    
        // Access properties of each item
        const name = item.name;
        const symbol = item.symbol;
        const balance = item.balance.toLocaleString('en-US', {
            maximumFractionDigits: 2,
            useGrouping: true,
          });;
 
        // Log or process each item as needed
        console.log(`${symbol} (${name}): ${balance}`);
        console.log('-----')
      });
  };
  
//   getTokens()
//ANCHOR - GET GAS PRICE
const getGasPrice = async () => {
  try {
    // Call the method
    let response = await alchemy.core.getGasPrice();

    // Convert the response to a BigNumber
    let gasPrice = new BigNumber(response.toString());
    let newGasPrice=Utils.formatUnits(gasPrice.toString(), "ether")
    console.log(newGasPrice); 
    console.log(gasPrice.toString()); 
  } catch (error) {
    console.error('Error fetching gas price:', error);
  }
};
export {
  getBlockNumber,
  getTokenBalances,
  getMetadata,
  getTransactionCount,
  checkContractAddress,
  getTokens,
  getGasPrice
}