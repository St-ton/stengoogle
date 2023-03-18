import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    // const res = await fetch(`${baseUrl}${url}`, {
    //   method: "GET",
    //   headers: {
    //     'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    //      "x-rapidapi-key": process.env.REACT_APP_API_KEY,

    //   },
    // });

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      url: "https://google-web-search1.p.rapidapi.com/",
      params: { query: "World Cup", limit: "20", related_keywords: "true" },
      headers: {
        "X-RapidAPI-Key": "67a4ed475bmsh0daa5f8798348a2p126de2jsn4013f14e1dc1",
        "X-RapidAPI-Host": "google-web-search1.p.rapidapi.com",
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
