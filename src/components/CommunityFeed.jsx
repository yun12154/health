import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function CommunityFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "community"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const temp = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(temp);
    });
    return () => unsub();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">커뮤니티 피드</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <p className="font-semibold">{post.type} + {post.part}</p>
            <p>{post.memo}</p>
            {post.photo && (
              <img src={post.photo} alt="인증사진" className="w-64 h-auto mt-2" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
