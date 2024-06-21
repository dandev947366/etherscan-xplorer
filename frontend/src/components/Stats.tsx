import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Network, Alchemy, Utils } from "alchemy-sdk";
import dotenv from "dotenv";
import BigNumber from 'bignumber.js';

dotenv.config();
const { ALCHEMY_API_KEY } = process.env;

const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET
};

const alchemy = new Alchemy(settings);

const Stats: React.FC = () => {
  // const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [gasPrice, setGasPrice] = useState<number | null>(null);
  
  const getGasPrice = async () => {
    try {
      let response = await alchemy.core.getGasPrice();
      let gasPrice = new BigNumber(response.toString());
      let newGasPrice = Utils.formatUnits(gasPrice.toString(), "ether")
      console.log(newGasPrice); 
      console.log(gasPrice.toString()); 
    } catch (error) {
      console.error('Error fetching gas price:', error);
    }
  };
  useEffect(() => {
    getGasPrice();
  }, []); 
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Block Number</div>
        <div className="stat-value"></div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>
      
      <div className="stat place-items-center">
        <div className="stat-title">Current Gas Price</div>
        <div className="stat-value text-blue-200">{gasPrice !== null ? gasPrice : 'Loading...'}</div>
        <div className="stat-desc text-blue-300">↗︎ 40 (2%)</div>
      </div>
      
      <div className="stat place-items-center">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}

export default Stats;
