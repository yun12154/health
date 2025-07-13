
import React from "react";
import { baseRoutine, partBonus } from "../baseRoutine";

export default function YourRoutine({ selectedType, selectedPart }) {
  const base = baseRoutine[selectedType];
  const bonus = partBonus[selectedPart];

  if (!base || !bonus) {
    return <p>루틴 정보가 없습니다.</p>;
  }

  // 동적 조합
  const combined = base.map((day) => ({
    day: day.day,
    workouts: [...day.workouts, ...bonus]
  }));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {selectedType} + {selectedPart} 루틴 (1주)
      </h1>
      <ul className="space-y-4">
        {combined.map((day, idx) => (
          <li key={idx} className="border-b pb-2">
            <h2 className="font-semibold">{day.day}</h2>
            <ul className="list-disc list-inside">
              {day.workouts.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}