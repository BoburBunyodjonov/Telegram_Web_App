import  Telegram  from "../images/telegram.webp";
import Instagram  from "../images/instagram.webp";
import Youtube  from "../images/youtube.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";




const Footer = () => {

  const { t } = useTranslation();


  return (
    <>
      <footer className="px-3 py-5 bg-white mt-5 rounded-t-2xl">
        <p className="">{t('social_media')}</p>
        <div className="flex items-center justify-start gap-2 mt-1">
          <Link
            target="_blank"
            className="rounded-2xl overflow-hidden"
            to=""
          >
            <img
              alt="telegram"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              src={Telegram}
              style={{color: 'transparent'}}
            />
          </Link>
          <Link
            target="_blank"
            className="rounded-2xl overflow-hidden"
            to=""
          >
            <img
              alt="instagram"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              src={Instagram}
              style={{color: 'transparent'}}
            />
          </Link>
          <Link
            target="_blank"
            className="rounded-2xl overflow-hidden"
            to=""
          >
            <img
              alt="youtube"
              loading="lazy"
              width="42"
              height="42"
              decoding="async"
              data-nimg="1"
              src={Youtube}
              style={{color: 'transparent'}}
            />
          </Link>
        </div>
        <p className="text-telegram-hint mt-4">{t('contact_number')} </p>
        <div className="font-semibold">+998771149998</div>
      </footer>
    </>
  );
};

export default Footer;
