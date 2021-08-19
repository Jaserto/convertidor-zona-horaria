import React from 'react'
import { ReactComponent as SearchIcon } from "./svg/search.svg";


const Search = () => {
    return (
        <div className="search">
          <SearchIcon className="searchIcon" style={{ width: `13px` }} />
          <input
                type="text"
                name="searchInput"
                className="searchInput"
              /*   value={inputValue}
                onChange={e => inputChange(e)} */
                autoComplete="off"
            />  
        </div>
    )
}

export default Search;