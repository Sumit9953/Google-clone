import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search74.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}` , {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c156847defmsh434c9117b40c400p1e69a5jsn88bf8c86aa52',
            'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        }
    })

    const data = response.json();

    setResults(data);
    setIsLoading(false);
  }

  return (
    <ResultContext.Provider value={{ getResults , results , searchTerm , setSearchTerm , isLoading}}>
        {children}
    </ResultContext.Provider>
  )
};

export const useResultContext = () => useContext(ResultContext);
