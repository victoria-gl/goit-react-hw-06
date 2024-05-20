import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { getFilter } from "../../redux/selector";

const SearchBar = () => {
  const id = useId();
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(changeFilter(e.target.value.trim()));

  const value = useSelector(getFilter);
  return (
    <div className={css.searchBar}>
      <label htmlFor={id}>Find contact by name</label>
      <input
        type="text"
        id={id}
        className={css.searchInput}
        onChange={onChange}
        placeholder="Search"
        name="search"
        value={value}
      />
    </div>
  );
};
export default SearchBar;
