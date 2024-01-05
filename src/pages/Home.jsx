import React from 'react';
import { useEffect } from 'react';

import Header from '../components/layouts/Header';
import Headline from '../components/layouts/Headline';
import Footer from '../components/layouts/Footer';
import UnderDebrisLink from '../components/menu/UnderDebrisLink';
import InformationLink from '../components/menu/InformationLink';
import HelpLink from '../components/menu/HelpLink';
import SideMenuLink from '../components/menu/SideMenuLink';

import donation from '../assets/donation.svg';
import home from '../assets/home.svg';
import clothes from '../assets/clothes.svg';
import food from '../assets/utensils.svg';
import car from '../assets/car.svg';
import list from '../assets/list.svg';
import homes from '../assets/homes.svg';

import search from '../assets/search.svg';
import map from '../assets/map.svg';
import info from '../assets/info.svg';
import up from '../assets/up.svg';

import { setBackgroundColorBlack } from '../utils/BackgroundColorUtils';
import { Toaster } from 'sonner';

const Home = () => {
  useEffect(() => {
    // Page Settings
    setBackgroundColorBlack();
  }, []);

  return (
    <div className='wrapper min-w-[578px]'>
      <div className='flex justify-center'>
        <div className='mx-35 lg:max-w-[1160px]'>
          <Header />
          <main className='mt-20 flex justify-between lg:w-[1160px] '>
            <Headline />
            <div className='flex'>
              <div className='flex gap-11 items-start'>
                <menu className='w-[533px] flex flex-col gap-6 items-center justify-center '>
                  <UnderDebrisLink route='/enkaz-altinda' />
                  <InformationLink
                    icon={donation}
                    title='Bağış Yap'
                    route='/bagis'
                  />
                  <section className='flex flex-wrap gap-x-4 gap-y-6'>
                    <HelpLink
                      icon={home}
                      title='Konaklama Sağlayabilirim'
                      route='/konaklama-yardimi'
                    />
                    <HelpLink
                      icon={clothes}
                      title='Giysi Sağlayabilirim'
                      route='/giysi-yardimi'
                    />
                    <HelpLink
                      icon={food}
                      title='Gıda Sağlayabilirim'
                      route='/gida-yardimi'
                    />
                    <HelpLink
                      icon={car}
                      title='İş Aracı Kullanabilirim'
                      route='/is-araci-kullanabilirim'
                    />
                  </section>
                  <InformationLink
                    icon={list}
                    title='Enkaz Altında Olanlar'
                    route='/enkaz-altinda-olanlar'
                  />
                  <InformationLink
                    icon={homes}
                    title='Konaklama Sağlayanlar'
                    route='/konaklama-saglayanlar'
                  />
                </menu>
                <div className='h-full mr-4 md:flex hidden flex-col justify-between items-center'>
                  <div className='mt-14 flex flex-col gap-8'>
                    <SideMenuLink icon={search} title='Arama' />
                    <SideMenuLink icon={map} title='Harita' />
                    <SideMenuLink
                      icon={info}
                      title='Bilgilendirme'
                      route={'/bilgilendirme'}
                    />
                  </div>
                  <div>
                    <SideMenuLink icon={up} action={'up'} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Home;
