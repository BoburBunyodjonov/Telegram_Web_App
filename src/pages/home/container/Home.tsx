import React from 'react';
import MyLocation from '../components/MyLocation';
import Header from '../components/Header';
import SliderBanner from '../components/Slider';
import Footer from '../components/Footer';
import { CategoriesAll, ProductList } from '../../../components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {


  const { t } = useTranslation();

  return (
    <div className="space-y-3">
      <MyLocation />
      <Header />
      <SliderBanner />
      <CategoriesAll />
      <ProductList>
        <div className="flex justify-between">
          <h2 className="font-semibold text-telegram-black py-2 text-xl">
            {t('discounts')} 
          </h2>
          <NavLink
            to="/"
            className="bg-telegram-secondary-white text-telegram-black px-4 text-sm rounded-xl flex  items-center"
          >
            {t('all')}
            <NavigateNextIcon />
          </NavLink>
        </div>
      </ProductList>
      <Footer />
    </div>
  );
};

export default Home;
