import React, { useState } from "react"; 

function Search ({setUserInput, handleSearch, data}) {


 const handleEnter = (e) => {
    e.key === "Enter" && handleSearch()
 }

    return (
        <div className="search__bar">
             <input onKeyDown={handleEnter} onChange={(e) => setUserInput(e.target.value)}type="text" placeholder="Search recipes and more..." />
        </div>
       
    )
}

export default Search;