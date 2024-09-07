import React, { useState } from 'react';

interface PricingOption {
  label: string;
  cpu: string;
  ram: string;
  price: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

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

export const ServiceNew = ({ close }: { close: () => void }): JSX.Element => {
  const [formData, setFormData] = useState({
    port: '',
    arguments: '',
    command: '',
    environment: '',
  });
  const [selected, setSelected] = useState<number>(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDeploy = () => {
    if (Object.values(formData).every(Boolean)) {
      setShowPopup(true);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    close();
  };

  return (
    <div className="bg-[#0c1015] p-4 rounded-lg space-y-6">
      {['port', 'arguments', 'command', 'environment'].map((field) => (
        <div key={field} className="space-y-2">
          <label className="block text-[#c4c4c4a8] text-sm">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <div className="w-[809px]"> {/* Maintain original width */}
            <input
              type={field === 'port' ? 'number' : 'text'}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleInputChange}
              placeholder={field === 'port' ? '8088' : `Enter ${field}`}
              className="w-full bg-[#0d0f13] text-white text-sm border border-[#bbbbbb1f] rounded-md p-3 focus:outline-none focus:border-[#1a73e8]"
            />
          </div>
        </div>
      ))}

      <div className="space-y-2">
        <h3 className="text-[#c4c4c4a8] text-sm">Pricing Configuration</h3>
        <div className="flex gap-4">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`flex-1 p-4 rounded-md border cursor-pointer transition-all duration-200 ${
                selected === index ? 'bg-[#0d0f13]' : 'bg-[#0d0f13]'
              }`}
              style={{
                borderColor: selected === index ? option.borderColor : '#bbbbbb1f',
              }}
            >
              <span
                className={`inline-block px-2 py-1 rounded-md text-xs font-medium mb-2`}
                style={{
                  backgroundColor: selected === index ? option.backgroundColor : 'transparent',
                  color: selected === index ? option.textColor : '#a1a1a1',
                  borderColor: selected === index ? option.borderColor : '#bbbbbb1f',
                }}
              >
                {option.label}
              </span>
              <p className="text-sm text-[#a1a1a1]">{option.cpu}</p>
              <p className="text-sm text-[#a1a1a1] mb-2">{option.ram}</p>
              <p className="text-sm">
                <span className="font-semibold text-[#27b648]">{option.price}</span>
                <span className="text-neutral-50"> / hour</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleDeploy}
        className="w-full py-3 rounded-md bg-gradient-to-b from-[#1a73e8] to-[#853bce] text-white font-medium hover:opacity-90 transition-opacity"
      >
        Deploy
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#0c1015] p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-white mb-4">Deployed Successfully</h2>
            {Object.entries(formData).map(([key, value]) => (
              <p key={key} className="text-[#c4c4c4a8] mb-2">
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </p>
            ))}
            <button
              onClick={handleClosePopup}
              className="w-full py-3 mt-4 rounded-md bg-gradient-to-b from-[#1a73e8] to-[#853bce] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
