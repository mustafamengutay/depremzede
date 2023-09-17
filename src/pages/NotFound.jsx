import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="container h-screen w-screen flex items-center justify-center">
      <div className="max-w-fit flex flex-col items-center justify-center gap-20 -tracking-2 animate-fade-down animate-ease-out">
        <div className="flex flex-col items-center justify-center text-white gap-2">
          <p className="text-[196px] font-bold text-grey-1">Oops</p>
          <p className="text-3xl text-grey-1">404 - Sayfa bulunamadı</p>
        </div>
        <div>
          <button
            className="w-60 h-14 text-white rounded-xl bg-black px-4 py-2"
            onClick={handleClick}
          >
            Anasayfaya dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
