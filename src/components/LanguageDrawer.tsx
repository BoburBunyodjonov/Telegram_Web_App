import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../reducers/LanguageSlice";
import { RootState } from "../store/store";

// images

import uzFlag from "../assets/lang-uzb.eaff17a4.svg";
import ruFlag from "../assets/lang-rus.591ff664.svg";
import enFlag from "../assets/lang-en.55990df2.svg";
import CloseIcon from "@mui/icons-material/Close";

interface LanguageDrawerProps {
  open: boolean;
  onClose: () => void;
}

const LanguageDrawer: React.FC<LanguageDrawerProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const languages = ["Русский", "English", "Español"];

  const handleLanguageSelect = (language: string) => {
    dispatch(setLanguage(language));
    onClose();
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { height: "auto", width: "100%" } }}
    >
      <List>
        {languages.map((language, index) => (
          <ListItem key={index} onClick={() => handleLanguageSelect(language)}>
            <ListItemText primary={language} />
          </ListItem>
        ))}
      </List>

      <RadioGroup name="languages" defaultValue="uzb">
        <div className="transition ease rounded-t-2xl bg-telegram-white max-h-[80vh] animate-slide-up scrollbar-hide overflow-y-scroll px-4 pb-4 w-full">
          <div className="sticky top-0 z-[99] bg-telegram-white pt-4">
            <div className="flex justify-between items-center mb-4 ">
              <h2 className="flex-1 font-semibold text-2xl text-telegram-black">
                Выберите язык
              </h2>
              <CloseIcon className=" cursor-pointer" />
            </div>
            <div className="mt-2 false w-full border-b border-telegram-hint opacity-20"></div>
          </div>
          <label htmlFor="uzb">
            <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
              <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                <div className="rounded-full overflow-hidden">
                  <img
                    alt="lang"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={uzFlag}
                    style={{ color: "transparent" }}
                  />
                </div>
                <span>O'zbekcha</span>
              </div>
              <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                  <Radio name="languages" id="uzb" value="uzb" />
                </div>
              </div>
            </div>
          </label>
          <label htmlFor="rus">
            <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
              <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                <div className="rounded-full overflow-hidden">
                  <img
                    alt="lang"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={ruFlag}
                    style={{ color: "transparent" }}
                  />
                </div>
                <span>Русский</span>
              </div>
              <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                  <Radio name="languages" id="rus" value="rus" />
                </div>
              </div>
            </div>
          </label>
          <label htmlFor="en">
            <div className="flex justify-between py-3 gap-2 cursor-pointer items-center border-b border-opacity-20 last:border-b-none">
              <div className="text-telegram-black flex-grow font-semibold flex items-center gap-2">
                <div className="rounded-full overflow-hidden">
                  <img
                    alt="lang"
                    loading="lazy"
                    width="24"
                    height="24"
                    decoding="async"
                    data-nimg="1"
                    src={enFlag}
                    style={{ color: "transparent" }}
                  />
                </div>
                <span>English</span>
              </div>
              <div className="relative rounded-full bg-telegram-secondary-white max-w-[32px] min-w-[32px] h-8 shadow-inner">
                <div className="w-full h-full absolute bg-telegram-primary text-white rounded-full grid place-content-center">
                  <Radio name="languages" id="en" value="en" />
                </div>
              </div>
            </div>
          </label>
          <button className="text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex justify-center items-center w-full py-4 px-4 rounded-xl overflow-hidden bg-telegram-primary">
            Выбрать
          </button>
          <div></div>
        </div>
      </RadioGroup>
    </Drawer>
  );
};

export default LanguageDrawer;
