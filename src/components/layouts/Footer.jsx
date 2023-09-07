const Footer = () => {
  return (
    <footer className="bg-white text-black px-32 h-60 w-screen mt-60 flex items-center justify-center">
      <div className="w-full flex items-end justify-between">
        <div className="flex flex-col items-start">
          <div className="flex flex-col gap-6 mb-8">
            <h2 className="font-bold text-3xl">Depremzede</h2>
            <p>
              Depremzede, deprem anında hızlıca yardımlaşmayı amaçlayan bir
              platformdur.
            </p>
          </div>
          <nav>
            <ul className="flex gap-14">
              <li>
                <a href="#">Yardım Al</a>
              </li>
              <li>
                <a href="#">Yardım Sağla</a>
              </li>
              <li>
                <a href="#">Yardım Listesi</a>
              </li>
              <li>
                <a href="#">Gizlilik</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-end gap-10">
          <a
            href="#"
            className="bg-black text-white text-center px-8 py-2 rounded-full"
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