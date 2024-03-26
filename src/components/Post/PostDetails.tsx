import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { useParams } from "react-router-dom";
import { getCurrentPost } from "../../store/post/postSlice";
import { addComment } from "../../store/comment/commentsSlice";

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [newComment, setNewComment] = useState("");
  //   const comments = useSelector(selectCommentsByPostId(Number(postId)));

  const dispatch = useAppDispatch();
  const currentPost = useSelector(
    (state: RootState) => state.posts.currentPost
  );

  useEffect(() => {
    if (postId) {
      dispatch(getCurrentPost(postId));
    }
  }, [dispatch, postId]);

  if (currentPost === null) {
    <div>loading</div>;
  }

  useEffect(() => {
    if (postId) {
      dispatch(getCurrentPost(postId));
    }
  }, [dispatch, postId]);

  const handleAddComment = () => {
    const commentAuthor = currentPost?.author || "Anonymous"; // Default to "Anonymous" if currentPost?.author is undefined
    dispatch(
      addComment({
        postId: Number(postId),
        comment: { commentAuthor: commentAuthor, comment: newComment },
      })
    );
    setNewComment("");
  };
  return (
    <div>
      {currentPost ? (
        <div>
          <div>
            <div>{currentPost.author}</div>
            <div>{currentPost.description}</div>
            <div>{currentPost.location}</div>
            <div>{currentPost.time}</div>
            <img src={currentPost.image} alt="" />
          </div>
          <div>
            {/* {comments.map((comment) => (
          <div key={comment.id}>
            <div>{comment.commentAuthor}</div>
            <div>{comment.comment}</div>
          </div>
        ))} */}

            {/* Форма для добавления нового комментария */}
            <div>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button onClick={handleAddComment}>Add Comment</button>
            </div>
          </div>
        </div>
      ) : (
        <div>loading..</div>
      )}
    </div>
  );
};

export default PostDetails;
