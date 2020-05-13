import React from "react";

function Search() {

  return (
    <div className="SearchInput">
      <form className="searchInputForm" method="get" action="/s">
        <input type="search" id="search" name="searchTerm" autoCorrect="off" autoCapitalize="off" 
        autoComplete="off" placeholder="Search">
        </input>
      </form>
    </div>
  )
}

export default Search;