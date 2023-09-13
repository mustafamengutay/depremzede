const EmployeeAvatar = ({ image, name, jobType }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={image} alt="officer profile photo" />
      <p className="text-white text-xl">{name}</p>
      <EmployeeTitle jobType={jobType} />
    </div>
  );
};

const EmployeeTitle = ({ jobType }) => {
  return (
    <div className="flex flex-col justify-center items-center w-16 h-6 py-1 px-4 border rounded-lg border-grey-3 text-white text-xs -tracking-2">
      {jobType}
    </div>
  );
};

export default EmployeeAvatar;
