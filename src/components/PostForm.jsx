// PostForm.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import Rating from "react-rating-stars-component";
import "./PostForm.css"; // PostForm 컴포넌트의 스타일 파일 임포트

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "User"), {
        title: title,
        content: content,
        rating: rating, // 별점도 함께 저장
        timestamp: new Date(),
      });

      setTitle("");
      setContent("");
      setRating(0);
    } catch (error) {
      console.log("Error adding document:", error);
    }
  };

  return (
    <div className="post-form">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />
        <label>
          Rating:
          <Rating
            count={5}
            size={24}
            activeColor="#ffd700"
            value={rating}
            onChange={handleRatingChange} // 별점 입력을 처리하는 함수
          />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;
