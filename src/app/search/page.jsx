"use client";
import SearchBar from "@/components/Searchs/SearchBar";
import SearchResultList from "@/components/Searchs/SearchResultList";
import { useState } from "react";

export default function Search() {
  const [results, setResults] = useState([]);
  return (
    <>
      <SearchBar setResults={setResults} />
      <SearchResultList results={results} />
    </>
  );
}
