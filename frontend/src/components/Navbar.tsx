import React from 'react'
import Link from 'next/link'
import SearchBar from "@/components/SearchBar";
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 p-5">
    <div className="container">
    <div className="flex-1">
     <Link href='/' className="text-black">Etherscan Explorer</Link>
     
    
    
    </div>
    <div className="flex-none">
    
      {/* <Link href='/create' className='btn btn-ghost'>Create Post</Link> */}
      <button className="btn btn-neutral">Connect Wallet</button>
    </div>
  </div>
  </div>
  )
}

export default Navbar