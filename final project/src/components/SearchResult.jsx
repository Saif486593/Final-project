import React from "react";

import "./SearchResult.css";

export const SearchResult = ({ result}) => {
    return <div className="search-result" onC lick={(e) => alert('You clicked on ${result}')}>
    {result.name}
    </div>
};