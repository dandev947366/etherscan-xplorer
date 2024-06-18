'use client'
import React, { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
const ethers = require('ethers');
const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const [result, setResult] = useState(null);
  const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
  
  
  return (
    <div className="">
      <form className="mb-5 flex flex-row items-center">
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
    </div>
  );
};

export default SearchBar;
