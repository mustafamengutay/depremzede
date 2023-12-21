import React from "react";
import { Link } from "react-router-dom";
import { scrollDownByPercentage } from "../../utils/ScrollUtils";

const Header = () => {
  return (
    <header className='text-white md:min-w-[1000px]  font-light -tracking-4 flex items-center justify-between mt-10'>
      <p className='font-semibold text-7 w-max'>Depremzede</p>
      <div className='flex items-center gap-35 text-base'>
        <nav>
          <ul className='md:flex hidden gap-4'>
            <li>
              <p
                className='hover:cursor-pointer hover:bg-white hover:text-black rounded-base py-2 px-4 transition duration-500 ease-in-out'
                onClick={() => scrollDownByPercentage(5)}
              >
                Yardım Al
              </p>
            </li>
            <li>
              <p
                className='hover:cursor-pointer hover:bg-white hover:text-black rounded-base py-2 px-4 transition duration-500 ease-in-out'
                onClick={() => scrollDownByPercentage(50)}
              >
                Yardım Sağla
              </p>
            </li>
            <li>
              <p
                className='hover:cursor-pointer hover:bg-white hover:text-black rounded-base py-2  px-4 transition duration-500 ease-in-out'
                onClick={() => scrollDownByPercentage(80)}
              >
                Yardım Listesi
              </p>
            </li>
          </ul>
        </nav>
        <div className='flex items-center gap-8'>
          <a
            href='/'
            onClick={() => alert("English translation will be active soon!")}
          >
            En
          </a>
          <Link
            className='bg-grey-1 px-8 rounded-full py-2  inline-block border-2 border-black  transition-all duration-300 hover:bg-white hover:text-black'
            to={"/giris-yap"}
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
