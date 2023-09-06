import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="text-white font-light -tracking-4 flex items-center justify-between mt-10">
      <p className="font-semibold text-7">Depremzede</p>
      <div className="flex items-center gap-36 text-base">
        <nav>
          <ul className="flex gap-8">
            <li>
              <a href="#">Yardım Al</a>
            </li>
            <li>
              <a href="#">Yardım Sağla</a>
            </li>
            <li>
              <a href="#">Yardım Listesi</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-8">
          <p>En</p>
          <Link className="bg-grey-1 px-8 rounded-full py-2">Giriş Yap</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
