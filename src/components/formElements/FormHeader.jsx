import CloseButton from '../layouts/CloseButton';

const FormHeader = ({ title, description }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-medium">{title}</h1>
        <CloseButton />
      </div>
      <p className="text-base text-grey-2 font-light mb-10">{description}</p>
      <hr />
    </div>
  );
};

export default FormHeader;
