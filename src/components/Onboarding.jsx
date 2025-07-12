import { useState } from 'react';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedBody, setSelectedBody] = useState('');
  const [selectedPart, setSelectedPart] = useState('');

  const handleBodyClick = (type) => {
    setSelectedBody(type);
    setStep(2);
  };

  const handlePartClick = (part) => {
    setSelectedPart(part);
    setStep(3);
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-6 text-center">
      {step === 1 && (
        <>
          <h1 className="text-2xl font-bold mb-4">당신은 어떤 몸을 원하십니까?</h1>
          <div className="grid grid-cols-2 gap-4">
            {['파워리프팅', '맨몸운동', '크로스핏', '복싱'].map((type) => (
              <div
                key={type}
                onClick={() => handleBodyClick(type)}
                className="border p-4 cursor-pointer hover:bg-gray-100"
              >
                {/* 여기에 이미지 대신 텍스트 */}
                <div className="mb-2 h-32 bg-gray-200 flex items-center justify-center">{type} 이미지</div>
                <p>{type}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="text-2xl font-bold mb-4">특별히 키우고 싶은 부위는 어디입니까?</h1>
          <div className="grid grid-cols-2 gap-4">
            {['가슴', '어깨', '등', '하체'].map((part) => (
              <div
                key={part}
                onClick={() => handlePartClick(part)}
                className="border p-4 cursor-pointer hover:bg-gray-100"
              >
                <div className="mb-2 h-32 bg-gray-200 flex items-center justify-center">{part} 이미지</div>
                <p>{part}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h1 className="text-2xl font-bold mb-4">🎉 환영합니다!</h1>
          <p className="mb-2">당신의 90일 루틴이 정해졌습니다.</p>
          <p>선택한 몸 타입: <strong>{selectedBody}</strong></p>
          <p>보완할 부위: <strong>{selectedPart}</strong></p>
        </>
      )}
    </div>
  );
}