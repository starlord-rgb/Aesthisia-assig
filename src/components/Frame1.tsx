import React, { useState } from 'react';

// Pricing Options Interface
interface PricingOption {
  label: string;
  cpu: string;
  ram: string;
  price: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

// Pricing Options Data
const pricingOptions: PricingOption[] = [
  {
    label: 'Micro',
    cpu: '1 vCPU',
    ram: '1 GB RAM',
    price: '$0.027777',
    backgroundColor: '#3c1403',
    borderColor: '#962d00',
    textColor: '#fc9c66',
  },
  {
    label: 'Small',
    cpu: '2 vCPU',
    ram: '2 GB RAM',
    price: '$0.055555',
    backgroundColor: '#853bce26',
    borderColor: '#853bce',
    textColor: '#853bce',
  },
  {
    label: 'Large',
    cpu: '4 vCPU',
    ram: '4 GB RAM',
    price: '$0.111111',
    backgroundColor: '#1a73e826',
    borderColor: '#1a73e8',
    textColor: '#1a73e8',
  },
];

// Frame1 Component
export const Frame1 = ({ close }: { close: () => void }): JSX.Element => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <>
    {/* <div className="relative w-[756px] h-[155px] bg-white p-4 rounded-lg shadow-lg">
      <button className="absolute top-2 right-2 text-gray-500" onClick={close}>✖</button> */}
      <div className="relative w-full h-[77px]">
        <div className="font-normal text-[#c4c4c4a8] text-sm leading-6">Pricing Configuration</div>
        <div className="inline-flex items-start gap-2.5 mt-4">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative w-[245.32px] h-[128.2px] rounded-md border border-solid cursor-pointer ${selected === index ? 'border-[#27b648]' : 'border-[#bbbbbb1f]'}`}
              onClick={() => setSelected(index)}
            >
              <div
                className={`inline-flex items-center justify-center gap-2.5 px-2 py-[3px] absolute top-0 left-0 rounded-md border border-solid ${selected === index ? `bg-[${option.backgroundColor}]` : 'bg-transparent'} ${selected === index ? `border-[${option.borderColor}]` : 'border-[#bbbbbb1f]'}`}
              >
                <div className="relative w-fit mt-[-1.00px] font-medium text-xs tracking-[0] leading-[18px]" style={{ color: selected === index ? option.textColor : '#a1a1a1' }}>
                  {option.label}
                </div>
              </div>
              <div className="absolute w-[82px] h-[42px] top-[27px] left-0">
                <div className="absolute w-[82px] h-[21px] top-0 left-0 font-normal text-sm tracking-[0] leading-[21px] text-[#a1a1a1]">
                  {option.cpu}
                </div>
                <div className="absolute w-[82px] h-[21px] top-[21px] left-0 font-normal text-sm tracking-[0] leading-[21px] text-[#a1a1a1]">
                  {option.ram}
                </div>
              </div>
              <p className="absolute w-[168px] h-[21px] top-[89px] left-[17px] font-semibold text-sm tracking-[0] leading-[21px]">
                <span className="font-semibold text-[#27b648]">{option.price} </span>
                <span className="text-neutral-50">/ hour</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    {/* </div> */}
    </>
  );
};
