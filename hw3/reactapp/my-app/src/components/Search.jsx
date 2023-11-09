import React, { useState } from 'react';
import { fetchData } from './nameSearch';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let data = [];
    data = await fetchData();
    let output = document.getElementById("results");
    let flag = 1;
    data.forEach(element => {
        if(searchValue === `${element.firstName} ${element.lastName}` && flag === 1)
        {
            let result = document.createElement('p');
            result.innerHTML = `${searchValue} was found in the database!`;
            result.className = "p-3 mb-2 bg-success text-white";
            output.appendChild(result);
            flag = 0;
            
        }
    });

    if(flag === 1)
    {
        let result = document.createElement('p');
        result.innerHTML = `${searchValue} was not found in the database!`;
        result.className = "p-3 mb-2 bg-danger text-white";
        output.appendChild(result);
    }

  };

  return (
    <div className="jumbotron p-4 m-3 bg-light border-primary rounded">
      <h2 className="display-4">Search for Game of Thrones Characters</h2>
      <p className="lead">Enter the first and last name of a character from Game of Thrones to search for them in our database.</p>
      <div className="p-5">
      <form className="form-inline" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control-lg"
          placeholder="Enter first and last name"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-lg btn-primary m-2">Search</button>
      </form>
      </div>
      <div id="results"> </div>
    </div>
    
  );
};

export default Search;
