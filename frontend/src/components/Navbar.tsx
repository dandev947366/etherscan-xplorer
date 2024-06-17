import React from 'react'
import Link from 'next/link'
import SearchBar from "@/components/SearchBar";
const Navbar = () => {
  return (
    <div className="navbar bg-neutral-200">
    <div className="container">
    <div className="flex-1">
     <Link href='/'>Etherscan Explorer</Link>
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