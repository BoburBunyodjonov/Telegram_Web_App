import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const AddressComp = () => {
  return (
    <>
      <div className="bg-telegram-white bg-white rounded-b-2xl p-4">
        <h2 className="font-semibold text-telegram-black py-2 text-xl">
          Адрес доставки
        </h2>
        <div className="flex items-center gap-3">
        <LocationOnIcon className="text-red-500" />
          <div className="border-b flex items-center justify-between py-2 w-full cursor-pointer border-red-500 text-red-500">
            <p className="text-red-500 text-opacity-90">Выберите адрес</p>
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressComp;
