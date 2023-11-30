import React, { useEffect } from 'react';
import { setBackgroundColorWhite } from '../utils/BackgroundColorUtils';
import { resetLocation } from '../utils/ScrollUtils';
import Input from '../components/form/elements/Input';
import CloseButton from '../components/layouts/CloseButton';

const Login = () => {
  useEffect(() => {
    // Page Settings
    setBackgroundColorWhite();
    resetLocation();
  }, []);
  return (
    <div className="h-screen mx-35 my-[50px]">
      <div className="mt-10 flex justify-end items-start">
        <CloseButton />
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="border py-14 px-14 rounded-5 flex flex-col items-center">
          <div className="flex flex-col gap-2 mb-12">
            <h1 className="font-medium text-2xl">Depremzede Giriş Paneli</h1>
            <p className="text-xs text-center text-grey-1">
              Lütfen hesap bilgilerinizi giriniz.
            </p>
          </div>
          <div className="flex flex-col gap-6 mb-12">
            <Input title="E-posta Adresi" />
            <Input title="Şifre" />
            <a className="text-xs text-right underline" href="#">
              Șifremi unuttum
            </a>
          </div>
          <button className="w-48.5 h-10 text-base text-white rounded-xl bg-black px-4 py-2">
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
