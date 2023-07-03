import React, { useState } from "react";

function SearchBar() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
}

export default SearchBar;
