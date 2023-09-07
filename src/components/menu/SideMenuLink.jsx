import { Link } from 'react-router-dom';

const SideMenuLink = ({ icon, title }) => {
  return (
    <Link className="flex flex-col justify-center items-center gap-2">
      <div className="bg-grey-1 w-[55px] h-[55px] rounded-full flex justify-center items-center">
        <img src={icon} alt="" />
      </div>
      <p className="text-white text-base font-light">{title}</p>
    </Link>
  );
};

export default SideMenuLink;
