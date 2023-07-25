import React, { useState } from 'react'

function Search({ handleSearch }) {
    const [searchText, setSearchText] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setSearchText(e.target.value)
        handleSearch(e.target.value);
    }

    return (
        <div className='Search-bar'>
            <div className='search-box'>
                <input onChange={handleChange} value={searchText} type="text" placeholder='Search Transaction'></input><i class="fa-solid fa-magnifying-glass"></i>
            </div>


        </div>
    )
}

export default Search;
