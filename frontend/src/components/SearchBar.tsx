'use client'
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Network, Alchemy, Utils } from 'alchemy-sdk'
import SearchResult from './SearchResult';
require('dotenv').config();

const {ALCHEMY_API_KEY} = process.env
const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.OPT_SEPOLIA
};

const alchemy = new Alchemy(settings);

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [blockNumber, setBlockNumber] = useState(undefined)
  
  const getBlockNumber = async () => {
    const blockNum = await alchemy.core.getBlockNumber()
    setBlockNumber(blockNum)
    console.log(blockNum)
  }
  

  return (
    <div className="">
      <form className="mb-5 flex flex-row items-center" >
        <input
          type="text"
          placeholder="Search transaction/hash address"
          className="input input-bordered w-full max-w-xs flex-none bg-gray-100 border ml-5 mr-2"
          onChange={e => setSearchVal(e.target.value)}
        />
        <button id="submit" type="submit" className="btn btn-neutral flex-none" value={searchVal}>
          <Search />
          Search
        </button>
      </form>
      <SearchResult searchVal={searchVal} />
    </div>
  );
};

export default SearchBar;
