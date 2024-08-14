import React from "react";
import { Avatar, Radio, RadioGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguageDrawer } from "../../../reducers/DrawerSlice";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";
import BottomDrawer from "../../../components/BottomModal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import uzFlag from "../../../assets/lang-uzb.eaff17a4.svg";
import ruFlag from "../../../assets/lang-rus.591ff664.svg";
import enFlag from "../../../assets/lang-en.55990df2.svg";
import LanguageIcon from '@mui/icons-material/Language';

interface Language {
  nativeName: string;
  flag: string;
}

interface LngsType {
  en: Language;
  uz: Language;
  ru: Language;
}

const lngs: LngsType = {
  en: { nativeName: "English", flag: enFlag },
  uz: { nativeName: "Uzbek", flag: uzFlag },
  ru: { nativeName: "Russian", flag: ruFlag },
};

const Profile: React.FC = () => {
  // const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);
  const dispatch = useDispatch();
  const languageDrawerOpen = useSelector((state: RootState) => state.drawer.languageOpen);

  const { t, i18n } = useTranslation();

  // const currentNativeName = lngs[currentLanguage as keyof LngsType]?.nativeName || "Uzbek";

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(toggleLanguageDrawer());
  };

  const handleLanguageDrawerToggle = () => {
    dispatch(toggleLanguageDrawer());
  };

  return (
    <>
      <div className="bg-white p-3 h-full">
        <Link to="/info">
          <div className="p-2 py-4 flex items-center space-x-4">
            <Avatar>H</Avatar>
            <KeyboardArrowRightIcon />
          </div>
        </Link>
        <div className="grid grid-cols-2 gap-2">
         <Link to="/myorders">
         <div className="bg-[#F8F8F8] rounded-xl p-3">
            <ShoppingCartIcon className="text-[rgb(156_156_156)]" />
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={700}
              color="initial"
            >
              {t("my_orders")}
            </Typography>
          </div></Link>
          <div className="bg-[#F8F8F8] rounded-xl p-3">
            <ShoppingBagIcon className="text-[rgb(156_156_156)]" />
            <Typography
              fontSize={16}
              variant="h6"
              fontWeight={700}
              color="initial"
            >
              {t("pre_orders")}
            </Typography>
          </div>
          <Link to="/info">
            <div className="bg-[#F8F8F8] rounded-xl p-3">
              <AccountCircleIcon className="text-[rgb(156_156_156)]" />
              <Typography
                fontSize={16}
                variant="h6"
                fontWeight={700}
                color="initial"
              >
                {t("my_profile")}
              </Typography>
            </div>
          </Link>
          <Link to="/address">
            <div className="bg-[#F8F8F8] rounded-xl p-3">
              <LocationOnIcon className="text-[rgb(156_156_156)]" />
              <Typography
                fontSize={16}
                variant="h6"
                fontWeight={700}
                color="initial"
              >
                {t("my_address")}
              </Typography>
            </div>
          </Link>
        </div>
        <div onClick={handleLanguageDrawerToggle} className="cursor-pointer bg-[#F8F8F8] rounded-xl p-3 flex justify-between items-center mt-3">
          <div className="flex items-center space-x-2">
          <LanguageIcon/>
            <Typography fontSize={16} variant="h6" fontWeight={500} color="initial">
              {t("language")}
            </Typography>
          </div>
          <div className="flex items-center space-x-1">
            {/* <Typography fontSize={16} variant="h6" fontWeight={500} color="#9c9c9c">
              {currentNativeName}
            </Typography> */}
            <KeyboardArrowRightIcon className="text-[#9c9c9c]" />
          </div>
        </div>
      </div>
      <BottomDrawer
        open={languageDrawerOpen}
        onClose={handleLanguageDrawerToggle}
        title={t("select_language")}
      >
        <RadioGroup name="languages">
          <div className="transition ease rounded-t-2xl bg-telegram-white max-h-[80vh] animate-slide-up scrollbar-hide overflow-y-scroll px-4 pb-4 w-full">
            {Object.keys(lngs).map((lng) => (
              <label onClick={() => handleLanguageChange(lng)} key={lng} htmlFor={lng}>
                <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
                  <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                    <div className="rounded-full overflow-hidden">
                      <img
                        alt={lngs[lng as keyof LngsType].nativeName}
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        data-nimg="1"
                        src={lngs[lng as keyof LngsType].flag}
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <span>{lngs[lng as keyof LngsType].nativeName}</span>
                  </div>
                  <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                    <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                      <Radio name="languages" id={lng} value={lng} checked={i18n.language === lng} />
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </RadioGroup>
        <button
          onClick={handleLanguageDrawerToggle}
          className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden bg-[#2F9155] mt-4 rounded-xl"
        >
          {t("apply")}
        </button>
      </BottomDrawer>
    </>
  );
};

export default Profile;
