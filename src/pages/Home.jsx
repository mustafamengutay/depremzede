import Header from '../components/layouts/Header';

import UnderDebrisLink from '../components/menu/UnderDebrisLink';
import InformationLink from '../components/menu/InformationLink';
import HelpLink from '../components/menu/HelpLink';

import donation from '../assets/donation.svg';
import home from '../assets/home.svg';
import clothes from '../assets/clothes.svg';
import food from '../assets/utensils.svg';
import car from '../assets/car.svg';
import list from '../assets/list.svg';
import homes from '../assets/homes.svg';
import Headline from '../components/layouts/Headline';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="mt-20 flex justify-between">
        <Headline />
        <menu className="w-[533px] flex flex-col gap-6 items-center justify-center">
          <UnderDebrisLink />
          <InformationLink icon={donation} title="Bağış Yap" />
          <section className="flex flex-wrap gap-x-4 gap-y-6">
            <HelpLink icon={home} title="Konaklama Sağlayabilirim" />
            <HelpLink icon={clothes} title="Giysi Sağlayabilirim" />
            <HelpLink icon={food} title="Gıda Sağlayabilirim" />
            <HelpLink icon={car} title="İş Aracı Kullanabilirim" />
          </section>
          <InformationLink icon={list} title="Enkaz Altında Olanlar" />
          <InformationLink icon={homes} title="Konaklama Sağlayanlar" />
        </menu>
      </main>
    </div>
  );
};

export default Home;
