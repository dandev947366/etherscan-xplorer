"use client";
import React, { useState, useRef, useEffect} from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { Search } from "lucide-react";
import dotenv from "dotenv";
import axios from 'axios'
dotenv.config();

const { ETHERSCAN_API_KEY } = process.env;

const Navbar = () => {
  const [userAccount, setUserAccount] = useState("")
  const [balance, setBalance] = useState("")
  const [count, setCount] = useState("")
  const [openModel, setOpenModel] = useState(true)
  const [price, setPrice] = useState([])
  const [etherSupply, setEtherSupply] = useState([])
  const [updatedPriceDate, setUpdatedPriceDate] = useState("")
  
  const Auth = Buffer.from(
    process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET,
  ).toString("base64");
  
  const chainId = 1; // Ethereum Mainnet
  
  (async () => {
    try {
      const { data } = await axios.get(
        `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
        {
          headers: { Authorization: `Basic ${Auth}` },
        },
      );
      console.log("Suggested gas fees:", data);
    } catch (error) {
      console.log("Server responded with:", error);
    }
  })();
  return (
    <div className="navbar bg-gray-100 p-5">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="text-black">
            Etherscan Explorer
          </Link>
        </div>
        {/* <div className="flex-none">
          <button className="btn btn-neutral">Connect Wallet</button>
        </div>
       */}
      </div>
    </div>
  );
};

export default Navbar;
