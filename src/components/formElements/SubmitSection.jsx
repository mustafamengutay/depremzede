import SubmitButton from './SubmitButton';

const SubmitSection = () => {
  return (
    <div className="flex items-center gap-72 my-12 self-end">
      <p className="text-base -tracking-2 font-light">
        *Bu alanlar zorunludur.
      </p>
      <SubmitButton />
    </div>
  );
};

export default SubmitSection;
