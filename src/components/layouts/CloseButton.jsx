import { Link } from 'react-router-dom';
import cross from '../../assets/cross.svg';

const CloseButton = () => {
  return (
    <Link
      className='h-8 w-8 flex items-center justify-center border border-grey-2 rounded-lg
      hover:bg-gray-200 transition'
      to='/'
      onClick={() => window.history.back()}
    >
      <img src={cross} alt='A cross' />
    </Link>
  );
};

export default CloseButton;
