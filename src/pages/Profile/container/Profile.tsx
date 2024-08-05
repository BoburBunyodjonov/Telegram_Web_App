import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import englishFlag from "../../../assets/flag.png";
import { Avatar } from "@mui/material";

const Profile = () => {
  return (
    <>
      <div className="bg-white p-3 h-screen">
        <div className="p-2 py-4 flex items-center space-x-4">
          <Avatar>H</Avatar>
          <KeyboardArrowRightIcon />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#F8F8F8] rounded-xl p-3">
            <ShoppingCartIcon className="text-[rgb(156_156_156)]" />
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={700}
              color="initial"
            >
              My orders
            </Typography>
          </div>
          <div className="bg-[#F8F8F8] rounded-xl p-3">
            <ShoppingBagIcon className="text-[rgb(156_156_156)]" />
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={700}
              color="initial"
            >
              Pre-orders
            </Typography>
          </div>
          <div className="bg-[#F8F8F8] rounded-xl p-3">
            <AccountCircleIcon className="text-[rgb(156_156_156)]" />
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={700}
              color="initial"
            >
              My profile
            </Typography>
          </div>
          <div className="bg-[#F8F8F8] rounded-xl p-3">
            <LocationOnIcon className="text-[rgb(156_156_156)]" />
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={700}
              color="initial"
            >
              My address
            </Typography>
          </div>
        </div>
        <div className="bg-[#F8F8F8] rounded-xl p-3 flex justify-between items-center mt-3">
          <div className="flex items-center space-x-2 justify-between">
            <img className="w-6 h-6 rounded-full" src={englishFlag} alt="" />
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={500}
              color="initial"
            >
              Language
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={500}
              color="#9c9c9c"
            >
              English
            </Typography>
            <KeyboardArrowRightIcon className="text-[#9c9c9c]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
