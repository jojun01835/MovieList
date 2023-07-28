import React, { useEffect, useState } from "react";
import { firestore, collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore"; // deleteDoc 메서드 import 추가
import { firestore as db } from "../firebase";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 실시간으로 데이터 감시하기
    const unsubscribe = onSnapshot(collection(db, "User"), (querySnapshot) => {
      const postData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postData);
    });

    // 컴포넌트가 언마운트될 때 감시 중단
    return () => unsubscribe();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "User", postId));
    } catch (error) {
      console.log("Error deleting document:", error);
    }
  };

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
