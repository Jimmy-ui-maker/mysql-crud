"use client";
import React, { useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("/api/products", {
      cache: "no-store",
    }).then((response) =>
      response.json().then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      })
    );
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <section
      id="search-bar"
      className=" mt-5 w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container d-flex justify-content-center my-2">
        <div className="col-lg-6 col-8  p-1 rounded-3">
          <h1 className=" text-center text-success">Search Page</h1>
          <div class="input-group ">
            <input
              type="search"
              className="form-control shadow-none text-center text-success border-success"
              placeholder="Type here to search... "
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
