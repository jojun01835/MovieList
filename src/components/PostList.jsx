import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore"; // Firebase 9버전에서 변경된 import 방식 사용
import { firestore } from "../firebase";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, "User"), (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postData);
    });

    // Cleanup function to unsubscribe from snapshot changes
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
