import { Box, Typography } from "@mui/material";
import { SearchInput } from "../../../components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box className="p-3 bg-[#309156] space-y-4 rounded-b-xl">
         <Typography color={'white'} fontWeight={'700'} fontSize={'20px'}>
            Категории
         </Typography>
        <SearchInput />
      </Box>
    </>
  );
};

export default Header;
