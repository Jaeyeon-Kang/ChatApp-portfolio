import close from "../../assets/menu/close.svg";
import minimize from "../../assets/menu/minimize.svg";
import openFull from "../../assets/menu/open_full.svg";

const MenuButtons = () => {
  const roundClass = "w-3 h-3 rounded-full flex items-center justify-center";
  const imgClass =
    "w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200";
  return (
    <>
      <div className="flex space-x-2 group">
        <div className={`bg-red-500 ${roundClass}`}>
          <img src={close} alt="close" className={imgClass} />
        </div>
        <div className={`bg-yellow-400  ${roundClass}`}>
          <img src={minimize} alt="minimize" className={imgClass} />
        </div>
        <div className={`bg-green-500  ${roundClass}`}>
          <img src={openFull} alt="open full" className={imgClass} />
        </div>
      </div>
    </>
  );
};

export default MenuButtons;
