import React from "react";
import { Box, Radio, RadioGroup } from "@mui/material";
import { SearchInput } from "../../../components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import BottomDrawer from "../../../components/BottomModal";
import { toggleLanguageDrawer } from "../../../reducers/DrawerSlice";
import { useTranslation } from "react-i18next";

import uzFlag from "../../../assets/lang-uzb.eaff17a4.svg";
import ruFlag from "../../../assets/lang-rus.591ff664.svg";
import enFlag from "../../../assets/lang-en.55990df2.svg";

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

const Header: React.FC = () => {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const dispatch = useDispatch();
  const languageDrawerOpen = useSelector(
    (state: RootState) => state.drawer.languageOpen
  );

  const { t, i18n } = useTranslation();

  const currentFlag = lngs[currentLanguage as keyof LngsType]?.flag || uzFlag;

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(toggleLanguageDrawer());
  };

  const handleLanguageDrawerToggle = () => {
    dispatch(toggleLanguageDrawer());
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
              onClick={handleLanguageDrawerToggle}
            >
              <img
                alt={currentLanguage}
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                data-nimg="1"
                src={currentFlag}
              />
            </button>
          </div>
        </div>
        <SearchInput />
      </Box>
      <BottomDrawer
        open={languageDrawerOpen}
        onClose={handleLanguageDrawerToggle}
        title={t("select_language")}
      >
        <RadioGroup name="languages">
          <div className="transition ease rounded-t-2xl bg-telegram-white max-h-[80vh] animate-slide-up scrollbar-hide overflow-y-scroll px-4 pb-4 w-full">
            {Object.keys(lngs).map((lng) => (
              <label
                onClick={() => handleLanguageChange(lng)}
                key={lng}
                htmlFor={lng}
              >
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
                      <Radio
                        name="languages"
                        id={lng}
                        value={lng}
                        checked={i18n.language === lng}
                      />
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
          {t("add_lang_btn")}
        </button>
      </BottomDrawer>
    </>
  );
};

export default Header;
