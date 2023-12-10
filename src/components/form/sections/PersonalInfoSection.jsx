import { useContext } from "react";
import FormContext from "../../../context/form/FormContext";
import Input from "../elements/Input";

const PersonalInfoSection = () => {
  const { dispatch } = useContext(FormContext);

  return (
    <div className="flex justify-between items-center flex-col sm:flex-row">
      {/* responsive için flex eklendi*/}
      <p className="font-medium text-xl -tracking-2 mb-4 sm:mb-0">
        Kişisel Bilgiler
      </p>
      <div className="flex flex-wrap gap-7 justify-center sm:justify-end">
        {/* responsive için flex eklendi */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* responsive için flex eklendi */}
          <Input
            title="İsim"
            altTitle="İsminizi giriniz"
            inputType="nameInput"
            dispatch={dispatch}
          />
          <Input
            title="Soyisim"
            altTitle="Soyisminizi giriniz"
            inputType="surnameInput"
            dispatch={dispatch}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          {/* responsive için flex eklendi */}
          <Input
            title="Telefon Numarası*"
            altTitle="Telefon numaranızı giriniz"
            inputType="phoneNumberInput"
            dispatch={dispatch}
          />
          <Input
            title="E-posta Adresi"
            altTitle="E-posta adresinizi giriniz"
            inputType="emailInput"
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
