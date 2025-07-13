import React, { useState } from "react";
import { db, storage, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RecordForm({ selectedType, selectedPart }) {
  const [memo, setMemo] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return alert("로그인 필요!");

      let photoURL = "";
      if (file) {
        const storageRef = ref(storage, `photos/${user.uid}/${file.name}`);
        await uploadBytes(storageRef, file);
        photoURL = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "community"), {
        userId: user.uid,
        type: selectedType,
        part: selectedPart,
        memo,
        photo: photoURL,
        createdAt: serverTimestamp()
      });

      alert("기록 완료!");
      setMemo("");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("업로드 실패");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-2">오늘 기록 남기기</h2>
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="오늘 어땠나요?"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        기록 올리기
      </button>
    </div>
  );
}