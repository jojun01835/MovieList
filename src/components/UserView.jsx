import PostList from "./PostList";
import PostForm from "./PostForm";

function UserView() {
  return (
    <div style={{ background: "#ffffff" }}>
      <h1>영화 리뷰</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default UserView;
