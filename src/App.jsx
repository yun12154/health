import React from "react";
import YourRoutine from "./components/YourRoutine";

export default function App() {
  // 👉 여기 선택값은 나중에 유저 선택값으로 연결!
  const selectedType = "파워리프팅";
  const selectedPart = "가슴";

  return (
    <div className="max-w-2xl mx-auto">
      <YourRoutine selectedType={selectedType} selectedPart={selectedPart} />
    </div>
  );
}