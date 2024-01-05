import PropTypes from 'prop-types';
import CloseButton from '../layouts/CloseButton';

const FormHeader = ({ title, description }) => {
  return (
    <div className='mt-10 mb-10 mx-2 md:mx-0'>
      <div className='flex justify-between items-center mb-3'>
        <h1 className='text-xl font-medium'>{title}</h1>
        <CloseButton />
      </div>
      <div className='text-base text-gray-500 font-light mb-10'>
        {description}
      </div>
      <hr />
    </div>
  );
};

FormHeader.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
};

FormHeader.defaultProps = {
  description:
    'Form bilgileri sistem yöneticileri tarafından onaylandıktan sonra sizinle iletişime geçilecektir.',
};

export default FormHeader;
