import { useState } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import SearchResults from "./searchResults.js";
import { ScanSearch } from 'lucide-react';
import {useRouter} from 'next/navigation'

export default function Search() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(searchInput)
    const router = useRouter()
    router.push(`transaction/${searchInput}`)
  };
  
  

  return (
    <section className={styles.searchContainer}>
      <section className={styles.searchSection}>
        <h3>The Ethereum Blockchain Explorer</h3>
        <section className={styles.input_section}>
          <input
            className={styles.inputField}
            type="text"
            id="inputField"
            name="inputField"
            maxLength="120"
            placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
            required
            onChange={(e)=>(setSearchInput(e.target.value))}
          />
          <button className={styles.btn} onClick={handleSearch}>
          <ScanSearch />
          </button>
        </section>
      </section>
      {showResult && <SearchResults result={{ result, searchInput }} />}
    </section>
  );
}