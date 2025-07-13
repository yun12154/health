import React, { useState } from "react";
import YourRoutine from "./YourRoutine";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedPart, setSelectedPart] = useState("");

  const types = ["파워리프팅", "맨몸운동", "크로스핏", "복싱"];
  const parts = ["가슴", "어깨", "등", "하체"];

  // ✅ public 폴더에 맞게 실제 파일 이름 매핑
  const typeImageMap = {
    "파워리프팅": "powerlifting.jpg",
    "맨몸운동": "bodyweight.jpg",
    "크로스핏": "crossfit.jpg",
    "복싱": "boxing.jpg"
  };

  const partImageMap = {
    "가슴": "chest.jpg",
    "어깨": "shoulder.jpg",
    "등": "back.jpg",
    "하체": "leg.jpg"
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setStep(2);
  };

  const handlePartClick = (part) => {
    setSelectedPart(part);
    setStep(3);
  };

  return (
    <div className="p-8">
      {step === 1 && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            당신은 어떤 몸을 원하십니까?
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {types.map((type) => (
              <button
                key={type}
                className="border p-4 hover:shadow"
                onClick={() => handleTypeClick(type)}
              >
                <img
                  src={`/${typeImageMap[type]}`}
                  alt={type}
                  className="w-full h-32 object-cover mb-2"
                />
                <p className="text-center">{type}</p>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            {selectedType} 선택됨 — 어떤 부위를 키우시겠습니까?
          </h1>
          <div className="grid grid-cols-2 gap-4">
            {parts.map((part) => (
              <button
                key={part}
                className="border p-4 hover:shadow"
                onClick={() => handlePartClick(part)}
              >
                <img
                  src={`/${partImageMap[part]}`}
                  alt={part}
                  className="w-full h-32 object-cover mb-2"
                />
                <p className="text-center">{part}</p>
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <YourRoutine selectedType={selectedType} selectedPart={selectedPart} />
      )}
    </div>
  );
}