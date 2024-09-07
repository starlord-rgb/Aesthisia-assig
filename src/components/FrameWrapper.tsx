import { useState } from 'react';

export const FrameWrapper = (): JSX.Element => {
  const [port, setPort] = useState('');

  const handlePortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPort(e.target.value);
  };

  return (
    <div className="relative self-stretch w-full h-[77px]">
      <div className="absolute w-[132px] h-6 -top-px left-0 font-normal text-[#c4c4c4a8] text-sm leading-6 whitespace-nowrap">
        Port
      </div>
      <div className="flex flex-col w-[809px] items-start justify-center gap-2.5 px-3 py-4 absolute top-[27px] left-0 bg-[#0d0f13] rounded-md overflow-hidden border border-solid border-[#bbbbbb1f]">
        <input
          type="number"
          placeholder="8088"
          value={port}
          onChange={handlePortChange}
          required
          className="w-full h-[17.6px] bg-transparent text-white text-sm border-none focus:outline-none appearance-none"
          onKeyDown={(e) => (e.key === 'e' || e.key === '-' || e.key === '+') && e.preventDefault()}
        />
      </div>
    </div>
  );
};
