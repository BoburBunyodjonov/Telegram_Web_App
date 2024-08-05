// icons
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <>
      <form action="" className="rounded-xl flex justify-between items-center bg-[rgb(237_237_237)] p-2">
        <SearchIcon className="text-[rgb(156_156_156)]" />
        <input  className="w-full bg-inherit p-2 outline-none"  placeholder="Искать товары" />
      </form>
    </>
  );
};

export default SearchInput;