import { Box } from "@mui/material";
import { SearchInput } from "../../../components";
import { NavLink } from "react-router-dom";

import languageLogo from '../images/flag.png'


const Header = () => {

  

  return (
    <>
      <Box className="p-3 bg-white space-y-4 rounded-b-xl">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="font-bold text-blue-400">
            WebApp
          </NavLink>
            <div className="flex items-center gap-2 bg-[rgb(237_237_237)] rounded-2xl">
              <button className="bg-telegram-secondary-white rounded-2xl w-12 h-12 flex items-center justify-center cursor-pointer">
                <img alt="Русский" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src={languageLogo}  />
              </button>
            </div>
        </div>
        <SearchInput />
      </Box>
    </>
  );
};

export default Header;
