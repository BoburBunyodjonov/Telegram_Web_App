import { t } from "i18next";
import { NavLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography } from "@mui/material";

const MyOrders = () => {
  return (
    <>
      <div className="h-full bg-white">
        <div className={`bg-white p-2 py-4 w-full max-w-[31rem] mx-auto flex justify-between items-center sticky top-0 left-1/2 z-50`}
        >
          <NavLink to="/profile">
            <ArrowBackIosIcon className="cursor-pointer text-black ml-3" />
          </NavLink>
          <div className="w-full px-3 py-2 bg-white">
            <Typography
              textAlign={"center"}
              marginRight={'20px'}
              variant="h6"
              fontSize={17}
              fontWeight={700}
              color="initial"
            >
              {t("my_orders")}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
