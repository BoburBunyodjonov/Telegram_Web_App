
// Icons
import GppMaybeIcon from '@mui/icons-material/GppMaybe';


const ProfileInfo = () => {
  return (
    <>
      <div className="p-4 bg-white h-full">
        <div className="p-4 bg-neutral-50 rounded-xlbg-slate-200">
          <h3 className="text-xl font-semibold flex items-center text-black">
            <GppMaybeIcon/>
            Гарантия защиты данных
          </h3>
          <p className="mt-2 text-black">
            Ваши личная информация хранится на защищенных серверах
          </p>
        </div>
        <form className="mt-4">
          <div>
            <div>
              <input
                id="name"
                className="bg-slate-50 border border-slate-400 text-black placeholder:text-telegram-hint outline-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                placeholder="Ваше имя"
                required
                type="text"
                name="name"
              />
            </div>
            <div className="mt-4">
              <input
                id="phone"
                className="bg-slate-50 border border-slate-400 text-black placeholder:text-telegram-hint outline-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                placeholder="+998900000000"
                pattern="^\+998\d{2}\d{7}$"
                maxLength={13}
                required
                type="number"
                name="phone"
              />
            </div>
            <div className="mt-4">
              <select
                required
                id="gender"
                name="gender"
                className="bg-slate-50 border border-slate-400 text-black placeholder:text-telegram-hint outline-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
              >
                <option value="">Выберите пол</option>
                <option value="male">Мужчина</option>
                <option value="female">Женщина</option>
              </select>
            </div>
            <button className="text-white disabled:opacity-60 disabled:cursor-not-allowed  font-semibold cursor-pointer flex justify-center items-center w-full py-4 px-4 overflow-hidden bg-[#2F9155] rounded-xl mt-4">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
