interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div>
      <label>Name: </label>
      <input type="text" value={search} onChange={handleChange}></input>
    </div>
  );
};

export default SearchBar;
