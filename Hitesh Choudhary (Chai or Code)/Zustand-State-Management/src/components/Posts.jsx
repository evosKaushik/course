import { useEffect } from "react";
import usePostStore from "../store/postsStore";

const Posts = () => {
  const { posts, loading, error, fetchPosts } = usePostStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading......😴😴</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
