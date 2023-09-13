import { useEffect } from 'react';
import successIcon from '../assets/success.svg';
import { useNavigate } from 'react-router-dom';

const FormSubmitted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Page Settings
    document.body.style.backgroundColor = '#F8F9FA';
    window.scrollTo(0, 0);

    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);

  return (
    <div className="container w-screen h-screen -tracking-4 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-12 items-center animate-fade-down animate-ease-out">
        <div>
          <img
            className="animate-jump-in animate-ease-out animate-duration-[1500ms]"
            src={successIcon}
            alt="Form is sent successfully"
          />
        </div>
        <div className="flex flex-col gap-2 items-center text-black">
          <p className="font-medium text-4xl">
            Bilgileriniz başarılı bir şekilde sisteme gönderildi!
          </p>
          <p className="tracking-normal font-sans">
            Bilgileriniz görevliler tarafından onaylandıktan sonra sistemde
            görünür hale gelecektir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSubmitted;
