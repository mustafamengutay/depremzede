import React from 'react';

const Headline = () => {
  return (
    <div className='-tracking-4 flex flex-col items-start gap-4 mt-[122px]'>
      <p className='tracking-widest text-xs text-white font-medium'>
        2023 DEPREMZEDE
      </p>
      <div className='w-[315px] h-[216px]'>
        <h1 className='text-white font-bold leading-4 text-17.5'>
          KKTC Deprem Sistemi
        </h1>
      </div>
      <p className='text-grey-2 text-xs font-light w-[315px]'>
        Depremzede, deprem anında yardımlaşma için kurulmuş olan bir
        platformdur.
      </p>

      <p className='mt-[344px] font-bold text-grey-2 text-4xl'>Yardım Sağla</p>
      <p className='mt-[388px] font-bold text-grey-2 text-4xl'>
        Yardım Listesi
      </p>
    </div>
  );
};

export default Headline;
