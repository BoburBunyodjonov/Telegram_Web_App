// MUI components
import { Box, Typography } from "@mui/material";

// Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ErrorIcon from "@mui/icons-material/Error";
import { NavLink } from "react-router-dom";

const MyLocation = () => {
  return (
    <>
      <NavLink to="">
        <Box className="py-4 w-full flex justify-between items-center p-3">
          <LocationOnIcon className="text-[#309156]" />
          <Typography>Укажите ваш адрес</Typography>
          <ErrorIcon className="text-[rgb(234_179_8)]" />
        </Box>
      </NavLink>
    </>
  );
};

export default MyLocation;
