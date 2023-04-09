import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults("?query=javascript&limit=40");
  }, []);

  console.log(results.results);

  if (isLoading) return <Loading />;
  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel = "noreferrer">
                <p className="text-sm">
                  {url.lenght > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 ">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return (
        <div className="flex flex-wrap justify-center items-center ">

        </div>
      );
    case "/news":
      return "NEWS";
    case "/videos":
      return "VIDEOS";

    default:
      return "ERROR!";
  }
};

export default Results;
