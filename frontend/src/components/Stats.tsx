import React, { useState, useEffect } from 'react';
import { getBlockNumber } from './index'; 

const Stats: React.FC = () => {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);

  useEffect(() => {
    async function fetchBlockNumber() {
      try {
        const blockNumber = await getBlockNumber();
        setBlockNumber(blockNumber);
      } catch (error) {
        console.error('Error fetching block number:', error);
      }
    }

    fetchBlockNumber();
  }, []); 
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Block Number</div>
        <div className="stat-value">{blockNumber !== null ? blockNumber : 'Loading...'}</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>
      
      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-blue-200">4,200</div>
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
