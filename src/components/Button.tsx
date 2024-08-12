import React from "react";

export interface CustomButtonProps {
  text: string;
  icon?: React.ReactNode;
  handlerClick?: () => void;
}
const ButtonComp: React.FC<CustomButtonProps> = ({ text, icon, handlerClick}) => {

   

  return (
    <button onClick={handlerClick} className="text-sm w-full py-3 bg-[#309156] rounded-xl shadow-sm mt-auto flex items-center justify-center gap-1 bg-telegram-primary text-white">
      {icon}
      {text}
    </button>
  );
};

export default ButtonComp;
