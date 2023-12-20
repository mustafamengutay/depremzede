const Footer = () => {
  return (
    <footer className='text-base bg-white md:min-w-[1140px] min-w-[880px] text-black md:h-60 h-96 mt-60 flex  items-center justify-center '>
      <div className='flex flex-col md:flex-row md:items-end items-center justify-between md:w-[1160px] '>
        <div className='flex flex-col items-start mb-8'>
          <div className='flex flex-col gap-6 mb-8'>
            <h2 className='font-bold text-3xl'>Depremzede</h2>
            <p>
              Depremzede, deprem anında hızlıca yardımlaşmayı amaçlayan bir
              platformdur.
            </p>
          </div>
          <nav className='-ml-4'>
            <ul className='flex gap-14'>
              <li>
                <a
                  className='hover:cursor-pointer hover:bg-black hover:text-white rounded-base py-2 px-4 transition duration-500 ease-in-out'
                  href='#'
                >
                  Yardım Al
                </a>
              </li>
              <li>
                <a
                  className='hover:cursor-pointer hover:bg-black hover:text-white rounded-base py-2 px-4 transition duration-500 ease-in-out'
                  href='#'
                >
                  Yardım Sağla
                </a>
              </li>
              <li>
                <a
                  className='hover:cursor-pointer hover:bg-black hover:text-white rounded-base py-2 px-4 transition duration-500 ease-in-out'
                  href='#'
                >
                  Yardım Listesi
                </a>
              </li>
              <li>
                <a
                  className='hover:cursor-pointer hover:bg-black hover:text-white rounded-base py-2 px-4 transition duration-500 ease-in-out'
                  href='#'
                >
                  Gizlilik
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-col md:items-end items-center gap-10'>
          <a
            href='mailto:depremzede@iletisim.com'
            className='text-white text-center px-8 py-2 rounded-full bg-grey-1 hover:bg-black transition duration-300 ease-in-out'
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
