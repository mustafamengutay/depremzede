import TextArea from './TextArea';

const ExtraInformationSection = ({ title, altTitle }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">{title}</p>
      <TextArea title="Ek Bilgiler" altTitle={altTitle} />
    </div>
  );
};

export default ExtraInformationSection;
