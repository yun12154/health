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
          <h1 className="text-2xl font-bold mb-6">당신은 어떤 몸을 원하십니까?</h1>
          <div className="grid grid-cols-2 gap-4">
            <div onClick={() => handleBodyClick('파워리프팅')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/powerlifting.jpg" alt="파워리프팅" className="w-full h-32 object-cover mb-2" />
              <p>파워리프팅</p>
            </div>
            <div onClick={() => handleBodyClick('맨몸운동')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/bodyweight.jpg" alt="맨몸운동" className="w-full h-32 object-cover mb-2" />
              <p>맨몸운동</p>
            </div>
            <div onClick={() => handleBodyClick('크로스핏')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/crossfit.jpg" alt="크로스핏" className="w-full h-32 object-cover mb-2" />
              <p>크로스핏</p>
            </div>
            <div onClick={() => handleBodyClick('복싱')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/boxing.jpg" alt="복싱" className="w-full h-32 object-cover mb-2" />
              <p>복싱</p>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="text-2xl font-bold mb-6">특별히 키우고 싶은 부위는 어디입니까?</h1>
          <div className="grid grid-cols-2 gap-4">
            <div onClick={() => handlePartClick('가슴')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/chest.jpg" alt="가슴" className="w-full h-32 object-cover mb-2" />
              <p>가슴</p>
            </div>
            <div onClick={() => handlePartClick('어깨')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/shoulder.jpg" alt="어깨" className="w-full h-32 object-cover mb-2" />
              <p>어깨</p>
            </div>
            <div onClick={() => handlePartClick('등')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/back.jpg" alt="등" className="w-full h-32 object-cover mb-2" />
              <p>등</p>
            </div>
            <div onClick={() => handlePartClick('하체')} className="border p-4 cursor-pointer hover:bg-gray-100">
              <img src="/leg.jpg" alt="하체" className="w-full h-32 object-cover mb-2" />
              <p>하체</p>
            </div>
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