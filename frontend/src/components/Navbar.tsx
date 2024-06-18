'use client'
import React, {useState,useRef } from 'react'
import Link from 'next/link'
import SearchBar from "@/components/SearchBar";
import { Search } from 'lucide-react';
import Web3Modal from "web3modal";
import { providers } from "ethers";

const Navbar = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");
  const [owner, setOwner] = useState("");
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
//CONNECT WALLET
const getProviderOrSigner = async (needSigner = false) => {
  const provider = await web3ModalRef.current.connect();
  const web3Provider = new providers.Web3Provider(provider);
  console.log("provider", provider);
  console.log("web3Provider", web3Provider);

  // If user is not connected to the OP network, let them know and throw an error
  const OP_CHAINID = 11155420;
  const LOCAL_HOST_CHAINID = 31337;
  const { chainId } = await web3Provider.getNetwork();
  if (chainId !== OP_CHAINID) {
    window.alert("Change the network to OP_CHAINID");
    throw new Error("Change the network to OP_CHAINID");
  }
  console.log("chainId", chainId);

  if (needSigner) {
    const signer = web3Provider.getSigner();
    console.log("signer", signer);

    return signer;
  }
  const signer = web3Provider.getSigner();
  const address = await signer.getAddress();
  const truncatedAddress =
    address.slice(0, 6) + "..." + address.slice(38, 42);
  setAddress(truncatedAddress);
  console.log("address", address);
  return web3Provider;
};

  const handleConnectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };
  const connectWallet = async () => {
    
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "opsepolia",
        providerOptions: {},
        disableInjectedProvider: false
      });

      handleConnectWallet();
    }
  };
  return (
    <div className="navbar bg-gray-100 p-5">
    <div className="container">
    <div className="flex-1">
     <Link href='/' className="text-black">Etherscan Explorer</Link>
     
    
    
    </div>
    <div className="flex-none">
          {!walletConnected ? (
            <button className="btn btn-neutral" onClick={connectWallet}>
              Connect Wallet
            </button>
          ) : (
            <button className="btn btn-neutral">
              {address}
            </button>
          )}
        </div>
    </div>
  </div>

  )
}

export default Navbar