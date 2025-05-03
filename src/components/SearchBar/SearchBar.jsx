import { FaSearch } from "react-icons/fa";
import s from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    onSubmit(value);
    e.target.reset();
  };

  return (
    <header>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <div className={s.searchFormWrapper}>
          <input
            className={s.searchInput}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.searchButton} type="submit">
            <FaSearch />
          </button>
        </div>
      </form>
    </header>
  );
};
