const OfficerAvatar = ({ image, name, jobType }) => {
  return (
    <div className='flex md:flex-col flex-row items-center gap-2'>
      <h1 className='font-bold text-7 text-white items-center md:hidden block mr-64'>
        Depremzede
      </h1>
      <img
        className='hidden md:block'
        src={image}
        alt='officer profile photo'
      />
      <p className='text-white text-xl'>{name}</p>
      <OfficerTitle jobType={jobType} />
    </div>
  );
};

export const OfficerTitle = ({ jobType }) => {
  return (
    <div className='flex flex-col justify-center items-center w-16 h-6 py-1 px-4 border rounded-lg border-grey-3 text-white text-xs -tracking-2'>
      {jobType}
    </div>
  );
};

export default OfficerAvatar;
