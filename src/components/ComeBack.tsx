import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavLink } from "react-router-dom";

const ComeBack = (props) => {
    const {text} = props;

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible && "bg-white"
      } p-2 py-4 w-full max-w-[31rem] mx-auto flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50`}
    >
      <NavLink to="/">
        <ArrowBackIosIcon
          className="cursor-pointer text-black ml-3"
          onClick={scrollToTop}
        />
      </NavLink>
      {isVisible && (
        <div className="w-full px-3 py-2 bg-white" onClick={scrollToTop}>
          <p>
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default ComeBack;
