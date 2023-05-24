import React from "react";
import { SearchResult } from "./SearchResult";

import "./SearchResultList.css";

export const SearchResultList = ({results}) => {
    return (
         <div className="results-list">
    {
        results.map((results, id) => {
            return <SearchResult result={result} key={id} />;

        })
    }
   
    </div>
    );
};