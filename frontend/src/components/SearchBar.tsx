'use client'
import React, {useState} from "react";
import { Search } from "lucide-react";
import {useRouter} from 'next/navigation'
const SearchBar = () => {
  const [searchVal, setSearchVal] = useState(undefined)
  const router = useRouter()
  const search = (e) => {
    e.preventDefault()
    console.log(searchVal)
    router.push(`transaction/${searchVal}`)  
  }
  return (
    <div className="mb-5 flex flex-col items-center">
    <form >
      <input
        type="text"
        placeholder="Search transaction/hash address"
        className="input input-bordered w-full max-w-xs bg-gray-100 border ml-5"
        onChange={e=>setSearchVal(e.target.value)}
      />
      <button id="submit" type="submit" className="btn btn-neutral" value={searchVal} onClick={search} >
        <Search />
        Search
      </button>
      </form>
    </div>
  );
};

export default SearchBar;
