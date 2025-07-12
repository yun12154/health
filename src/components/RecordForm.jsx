export default function RecordForm() {
  return (
    <div className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-2xl font-bold mb-4">오늘의 운동 기록</h1>
      <form>
        <input type="text" placeholder="운동명" className="border p-2 w-full mb-4" />
        <input type="number" placeholder="세트 수" className="border p-2 w-full mb-4" />
        <input type="number" placeholder="무게(kg)" className="border p-2 w-full mb-4" />
        <textarea placeholder="코멘트" className="border p-2 w-full mb-4"></textarea>
        <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded">저장하기</button>
      </form>
    </div>
  );
}
