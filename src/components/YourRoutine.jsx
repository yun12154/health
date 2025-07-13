import React from "react";
import workouts from "../workouts.json";

export default function YourRoutine({ selectedType, selectedPart }) {
  const routine = workouts[selectedType]?.[selectedPart];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {selectedType} + {selectedPart} 루틴 (1주)
      </h1>

      {routine ? (
        <ul className="space-y-4">
          {routine.map((day, index) => (
            <li key={index} className="border-b pb-2">
              <h2 className="font-semibold">{day.day}</h2>
              <ul className="list-disc list-inside">
                {day.workouts.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>루틴 정보가 없습니다.</p>
      )}
    </div>
  );
}