import { useEffect } from 'react';
import FormHeader from '../components/formElements/FormHeader';

import ahbab from '../assets/ahbap_logo.png';
import darussafaka from '../assets/darussafaka_logo.png';
import kizilay from '../assets/kizilay_logo.png';
import { Link } from 'react-router-dom';

const Donation = () => {
  useEffect(() => {
    // Page Settings
    document.body.style.backgroundColor = '#F8F9FA';
    window.scrollTo(0, 0);
  }, []);

  const descriptionText =
    'Aşağıdaki linklerden bağış yapmak istediğiniz platformlara ulaşabilirsiniz.';

  return (
    <div className="container w-screen h-screen -tracking-4">
      <FormHeader title="Bağış Platformları" description={descriptionText} />
      <div className="flex flex-wrap justify-center items-center gap-12 my-16">
        <DonationPlatform
          image={ahbab}
          platform="https://ahbap.org/bagisci-ol"
        />
        <DonationPlatform
          image={darussafaka}
          platform="https://www.darussafaka.org/bagislariniz"
        />
        <DonationPlatform
          image={kizilay}
          platform="https://www.kizilay.org.tr/bagis"
        />
      </div>
    </div>
  );
};

export const DonationPlatform = ({ image, platform }) => {
  return (
    <Link
      className="w-[311px] h-[311px] border rounded-5 border-[#CBD5E1] px-20 py-32 flex items-center justify-center hover:bg-gray-200 transition"
      to={platform}
      target="_blank"
    >
      <img src={image} alt="" />
    </Link>
  );
};

export default Donation;
