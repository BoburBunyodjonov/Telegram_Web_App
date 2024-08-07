// MUI components
import { Box, Typography } from "@mui/material";

// Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ErrorIcon from "@mui/icons-material/Error";
import { Link, NavLink } from "react-router-dom";
import BottomDrawer from "../../../components/BottomModal";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../../reducers/DrawerSlice";
import { RootState } from "../../../store/store";

const MyLocation = () => {
  const dispatch = useDispatch();
  const drawerOpen = useSelector((state: RootState) => state.drawer.open);

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <>
      <NavLink to="" onClick={handleDrawerToggle}>
        <Box className="w-full flex justify-between items-center p-3">
          <LocationOnIcon
            style={{ fontSize: "30px" }}
            className="text-[#309156]"
          />
          <Typography>Укажите ваш адрес</Typography>
          <ErrorIcon
            style={{ fontSize: "30px" }}
            className=" text-[rgb(234_179_8)]"
          />
        </Box>
      </NavLink>
      <BottomDrawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
        title="Мои адреса"
      >
        <Link
          className="flex items-center py-4 px-2 cursor-pointer"
          to="/map"
        >
          <p className="flex-1 text-telegram-black">Добавить адрес</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            width="24"
            className="text-telegram-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </Link>
        <button onClick={handleDrawerToggle}
          title="common.close"
          className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden bg-[#2F9155] mt-4 rounded-xl"
        >
          Готово
        </button>
      </BottomDrawer>
    </>
  );
};

export default MyLocation;
