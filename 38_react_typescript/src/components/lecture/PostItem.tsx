import { Post } from "../../types/interface";


interface PostItemProps {
  post: Post;
}
const postContainerStyle = {
  width: "80%",
  height: "100px",
  backgroundColor: "skyblue",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};
const idStyle = {
  fontWeight: "bold",
};
const PostItem = ({ post }:PostItemProps) => {
  return (
    <div className="PostItem" style={postContainerStyle}>
      <div>
        <span className="id" style={idStyle}>
          No. {post.id}
        </span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};
export default PostItem;