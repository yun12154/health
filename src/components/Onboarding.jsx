export default function Onboarding() {
  return (
    <div className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-2xl font-bold mb-4">당신은 어떤 몸을 원하십니까?</h1>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="border p-4 text-center">파워리프팅</div>
        <div className="border p-4 text-center">맨몸운동</div>
        <div className="border p-4 text-center">크로스핏</div>
        <div className="border p-4 text-center">복싱</div>
      </div>
      <h2 className="text-xl font-semibold mb-2">특별히 보완하고 싶은 부위는?</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <button className="px-4 py-2 bg-gray-200 rounded">가슴</button>
        <button className="px-4 py-2 bg-gray-200 rounded">어깨</button>
        <button className="px-4 py-2 bg-gray-200 rounded">하체</button>
        <button className="px-4 py-2 bg-gray-200 rounded">등</button>
      </div>
      <button className="px-6 py-3 bg-blue-600 text-white rounded">90일 루틴 완성하기</button>
    </div>
  );
}
