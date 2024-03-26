import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/store";
import { getCurrentUser, User } from "../../store/auth/userSlice";
import { selectAllPosts } from "../../store/post/postSlice";

const UsersProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.users.currentUser);
  console.log(user);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    if (userId) {
      dispatch(getCurrentUser(userId));
    }
  }, [dispatch, userId]);

  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>User Profile</h1>
          <img src={(user as User).image} alt="name" />
          <p>Name: {(user as User).name}</p>
          <p>ID: {(user as User).id}</p>
          <ul>
            {posts
              .filter((post) => post.author === (user as User).name)
              .map((post) => (
                <li key={post.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "30%",
                    }}
                  >
                    <p>desc:{post.description}</p>
                    <p>author:{post.author}</p>
                    <p>location:{post.location}</p>
                    <p>when{post.time}</p>
                  </div>
                  <img src={post.image} alt="" />
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UsersProfile;
