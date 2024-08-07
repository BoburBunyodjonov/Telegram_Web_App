import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SearchInput } from '../../../components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import LanguageDrawer from '../../../components/LanguageDrawer';
import languageLogo from '../images/flag.png';

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <Box className="p-3 bg-white space-y-4 rounded-b-xl">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="font-bold text-blue-400">
            WebApp
          </NavLink>
          <div className="flex items-center gap-2 bg-[rgb(237_237_237)] rounded-2xl">
            <button
              className="bg-telegram-secondary-white rounded-2xl w-12 h-12 flex items-center justify-center cursor-pointer"
              onClick={toggleDrawer(true)}
            >
              <img
                alt={currentLanguage}
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                data-nimg="1"
                src={languageLogo}
              />
            </button>
          </div>
        </div>
        <SearchInput />
      </Box>
      <LanguageDrawer open={drawerOpen} onClose={toggleDrawer(false)} />
    </>
  );
};

export default Header;
