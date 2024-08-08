// components/SearchInput.tsx
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const SearchInput = () => {
  const navigate = useNavigate();
  
  const handleInputClick = () => {
    navigate('/search');
  };

  const { t } = useTranslation();


  return (
    <form className="rounded-xl flex justify-between items-center bg-[rgb(237_237_237)] p-2">
      <SearchIcon className="text-[rgb(156_156_156)]" />
      <input
        className="w-full bg-inherit p-2 outline-none"
        placeholder={t('search_plac')}
        onClick={handleInputClick}
      />
    </form>
  );
};

export default SearchInput;
