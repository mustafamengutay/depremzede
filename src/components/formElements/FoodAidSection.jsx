import TextArea from '../../components/formElements/TextArea';

const FoodAidSection = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-xl -tracking-2">
        Gıda Yardımı Hakkında Bilgiler
      </p>
      <TextArea
        title="Ek Bilgiler"
        altTitle="Gıda hakkında ek bilgiler ekleyebilirsiniz"
      />
    </div>
  );
};

export default FoodAidSection;
