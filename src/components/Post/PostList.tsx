import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { fetchPosts } from "../../store/post/postSlice";
import { Link } from "react-router-dom";

const PostList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="postList">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div>
            <img src={post.image} alt="Post image" />
            <h2>desc: {post.description}</h2>
            <p>
              <strong>Author: {post.author}</strong>
            </p>

            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
