import React from "react";
import Wrapper from "../Wrapper";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setCountries(sortCountry);
  };

  const handelSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  return (
    <Wrapper>
      <div className=" pb-6 flex  justify-between ">
        <div>
          <input
            type="text"
            value={search}
            placeholder="search"
            onChange={handleInputChange}
            className="input input-accent"
          />
        </div>
        <div>
          <button
            className=" btn btn-info "
            onClick={() => sortCountries("asc")}
          >
            Ase
          </button>
        </div>
        <div>
          <button
            className="btn btn-info font-medium"
            onClick={() => sortCountries("desc")}
          >
            Desc
          </button>
        </div>
        <div>
          {/* <input
            type="text"
            className="input input-accent"
            placeholder=" browser "
            list="country"
          />
          <datalist id="country">
            <option value="Afghanistan"></option>
            <option value="Armenia"></option>
            <option value="Azerbaijan"></option>
            <option value="Bahrain"></option>
            <option value="Bangladesh"></option>
          </datalist> */}

          <select
            className="input input-accent"
            value={filter}
            onChange={handelSelectChange}
          >
            <option value="all">All</option>
            <option>Eastern Asia</option>
            <option>Western Asia</option>
            <option>Southern Asia</option>
            <option>Central Asia</option>
            <option>South-Eastern Asia</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchFilter;
