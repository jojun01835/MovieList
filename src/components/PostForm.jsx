import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; // Firebase 9버전에서 변경된 import 방식 사용
import { firestore } from "../firebase";

const PostForm = () => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "User"), {
        title: title,
        // 여기에 필요한 다른 게시물 정보를 추가할 수 있습니다.
      });

      setTitle(""); // 작성 완료 후 폼 초기화
    } catch (error) {
      console.log("Error adding document:", error);
    }
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;
