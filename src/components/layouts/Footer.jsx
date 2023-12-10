const Footer = () => {
  return (
    <footer className="text-base bg-white min-w-[1140px] text-black h-60 mt-60 flex items-center justify-center">
      <div className="w-full px-35 flex items-end justify-between">
        <div className="flex flex-col items-start">
          <div className="flex flex-col gap-6 mb-8">
            <h2 className="font-bold text-3xl">Depremzede</h2>
            <p>
              Depremzede, deprem anında hızlıca yardımlaşmayı amaçlayan bir
              platformdur.
            </p>
          </div>
          <nav>
            <ul className="flex gap-14 ">
              <li className="hover:cursor-pointer hover:bg-black hover:text-white rounded-md p-2 transition duration-500 ease-in-out">
                <a href="#">Yardım Al</a>
              </li>
              <li className="hover:cursor-pointer hover:bg-black hover:text-white rounded-md p-2 transition duration-500 ease-in-out">
                <a href="#">Yardım Sağla</a>
              </li>
              <li className="hover:cursor-pointer hover:bg-black hover:text-white rounded-md p-2 transition duration-500 ease-in-out">
                <a href="#">Yardım Listesi</a>
              </li>
              <li className="hover:cursor-pointer hover:bg-black hover:text-white rounded-md p-2 transition duration-500 ease-in-out">
                <a href="#">Gizlilik</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-end gap-10">
          <a
            href="mailto:depremzede@iletisim.com"
            className="bg-black text-white text-center px-8 py-2 rounded-full  hover:bg-stone-700	 transition duration-300 ease-in-out"
          >
            İletişim
          </a>
          <p>© 2023 Depremzede. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
