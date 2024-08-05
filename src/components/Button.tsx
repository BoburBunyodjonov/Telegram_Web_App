import React from "react";

interface CustomButtonProps {
  text: string;
  icon: React.ReactNode;
}

const ButtonComp: React.FC<CustomButtonProps> = (props) => {
  const { text, icon, handlerClick, } = props;


  return (
    <button onClick={handlerClick} className="text-sm w-full py-3 bg-[#309156] rounded-xl shadow-sm mt-auto flex items-center justify-center gap-1 bg-telegram-primary text-white">
      {icon}
      {text}
    </button>
  );
};

export default ButtonComp;
