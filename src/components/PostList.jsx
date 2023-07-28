import React, { useEffect, useState } from "react";
import { firestore, collection, getDocs, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { firestore as db } from "../firebase";
import Rating from "react-rating-stars-component";
import "./PostList.css"; // CSS 파일 경로를 적절하게 수정해주세요

const formatDate = (timestamp) => {
  if (!timestamp) return "";

  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hour}:${minute}`;
};

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [rating, setRating] = useState(0); // 추가: 별점 상태

  useEffect(() => {
    // Firestore의 데이터를 실시간으로 감시하여 변경되면 화면을 다시 렌더링
    const unsubscribe = onSnapshot(collection(db, "User"), (querySnapshot) => {
      const postData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postData);
    });

    // 컴포넌트가 언마운트될 때 감시 중단
    return () => unsubscribe();
  }, []); // 빈 배열을 두 번째 인자로 전달하여 한 번만 실행하도록 설정

  // 수정 중인 게시물 ID 설정 함수
  const handleEdit = (postId, title, content, rating) => {
    setEditingPostId(postId);
    setRating(rating); // 수정 중인 게시물의 별점을 설정
  };

  // 게시물 업데이트 함수
  const handleUpdate = async (postId, title, content) => {
    try {
      // 게시물 업데이트
      await updateDoc(doc(db, "User", postId), {
        title: title,
        content: content,
        timestamp: new Date(),
        isEdited: true,
        rating: rating, // 업데이트 시 기존 별점을 유지
      });

      setEditingPostId(null); // 수정 완료 후 수정 중인 게시물 ID 초기화
      setRating(0); // 별점 초기화
    } catch (error) {
      console.log("Error updating document:", error);
    }
  };

  // 게시물 삭제 함수
  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "User", postId));
    } catch (error) {
      console.log("Error deleting document:", error);
    }
  };

  return (
    <div className="post-list">
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li className="post-item" key={post.id}>
            {editingPostId === post.id ? (
              <div>
                <input type="text" value={post.title} onChange={(e) => setPosts(posts.map((p) => (p.id === post.id ? { ...p, title: e.target.value } : p)))} />
                <textarea value={post.content} onChange={(e) => setPosts(posts.map((p) => (p.id === post.id ? { ...p, content: e.target.value } : p)))} />
                <Rating
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={rating} // 수정 중인 게시물의 별점을 표시
                  onChange={(newRating) => setRating(newRating)} // 별점이 변경되면 상태 업데이트
                />
                <button className="update-btn" onClick={() => handleUpdate(post.id, post.title, post.content)}>
                  수정 완료
                </button>
                <button className="cancel-btn" onClick={() => setEditingPostId(null)}>
                  취소
                </button>
              </div>
            ) : (
              <>
                <div className="post-info">
                  <strong>{post.title}</strong> ({formatDate(post.timestamp)}){post.isEdited && <span className="edited"> - 수정됨</span>}
                </div>
                <Rating count={5} size={24} activeColor="#ffd700" value={post.rating} edit={false} />
                <div>
                  <button className="edit-btn" onClick={() => handleEdit(post.id, post.title, post.content, post.rating)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(post.id)}>
                    Delete
                  </button>
                </div>
                <p>{post.content}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
