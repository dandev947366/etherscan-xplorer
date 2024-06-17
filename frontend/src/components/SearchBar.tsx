'use client'
import React, {useState} from "react";
import { Search } from "lucide-react";
const SearchBar = () => {
  const [searchVal, setSearchVal] = useState(undefined)
  return (
    <div className="mb-5 flex flex-col items-center">
    <form >
      <input
        type="text"
        placeholder="Search transaction/hash address"
        className="input input-bordered w-full max-w-xs bg-gray-100 border ml-5"
      />
      <button id="submit" type="submit" className="btn btn-neutral" onChange={e=>setSearchVal(e)} value={searchVal} >
        <Search />
        Search
      </button>
      </form>
    </div>
  );
};

export default SearchBar;
