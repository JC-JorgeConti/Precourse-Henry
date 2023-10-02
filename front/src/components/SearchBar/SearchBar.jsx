import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(id);
    setId(""); // Vacía el input después de ejecutar onSearch
  };

  return (
    <div className={style.searchbar}>
      <form onSubmit={handleSubmit}>
        <div className={style.wrapperInput}>
          <input
            onChange={handleChange}
            placeholder="id"
            className={style.inputNav}
            type="search"
            value={id}
          />
          <button type="submit" className={style.btnNav}>
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
