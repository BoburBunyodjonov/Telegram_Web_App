import { Box, Typography } from "@mui/material";
import { SearchInput } from "../../../components";
import { useTranslation } from "react-i18next";

const Header = () => {

  const { t } = useTranslation();


  return (
    <>
      <Box className="p-3 bg-[#309156] space-y-4 rounded-b-xl">
         <Typography color={'white'} fontWeight={'700'} fontSize={'20px'}>
            {t('catalog_title')}
         </Typography>
        <SearchInput />
      </Box>
    </>
  );
};

export default Header;
