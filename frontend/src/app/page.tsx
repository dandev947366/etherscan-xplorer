import Image from "next/image";
import SearchResult from '@/components/SearchResult'
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import Stat2 from "@/components/Stat2";
export default function Home() {
  return (
    <main className="flex flex-col">
     <Stat2  /> 
     <Stats  />
      <SearchResult />
      
    </main>
  );
}
