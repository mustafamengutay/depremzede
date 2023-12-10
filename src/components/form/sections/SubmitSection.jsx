import SubmitButton from "./../elements/SubmitButton";

const SubmitSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-8 sm:my-12 self-end">
      {/* margin ve flex ekledim*/}
      <p className="text-base -tracking-2 font-light">
        *Bu alanlar zorunludur.
      </p>
      <SubmitButton />
    </div>
  );
};

export default SubmitSection;
