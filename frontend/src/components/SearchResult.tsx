'use client'
import React, {useState} from 'react'
import SearchBar from './SearchBar'
import Stats from "@/components/Stats";
import Stat2 from "@/components/Stat2";
const SearchResult = ({ searchVal, blockNumber }) => {
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <div className="flex flex-col">
     <Stat2  /> 
     <Stats  />
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{searchVal}</td>
        <td>Blocknumber: {blockNumber}</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default SearchResult