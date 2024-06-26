import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Post } from "../../types/interface";

const PostList= () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData= await res.json();
      setPosts(jsonData.slice(0, 10));
    };
    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);
  return (
    <div className="PostList">
      <header
        style={{ fontSize: "50px", fontWeight: "bold", textAlign: "center" }}
      >
        Post List
      </header>
      {posts.length > 0 ? (
        posts.map((post: Post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default PostList;
