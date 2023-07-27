import PostList from "./PostList";
import PostForm from "./PostForm";

function UserView() {
  return (
    <div style={{ background: "#fff" }}>
      <h1>My Firebase & React Board</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default UserView;
