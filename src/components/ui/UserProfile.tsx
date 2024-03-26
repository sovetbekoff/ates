// import { FC, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState, useAppDispatch } from "../../store/store";
// import { User } from "../../store/auth/userSlice";
// import { useParams } from "react-router-dom";
// import { fetchPosts } from "../../store/post/postSlice";

// interface UserProfileProps {
//   user: User | null;
// }

// const UserProfile: FC<UserProfileProps> = ({ user }) => {
//   const { userId } = useParams()!;

//   const dispatch = useAppDispatch();
//   const { posts } = useSelector((state: RootState) => state.posts);
//   //   const selectedUser = useSelector((state: RootState) =>
//   //     state.users.users.find((user) => user.id === Number(userId))
//   //   );

//   const selectedUser = useSelector((state: RootState) =>
//     state.users.users.find((user) => user.id === parseInt(userId))
//   );

//   if (!selectedUser) {
//     return <div>User not found.</div>;
//   }

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const userPosts = posts.filter((post) => post.author === selectedUser.name);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <div>ID: {selectedUser.id}</div>
//       <div>Password: {selectedUser.password}</div>

//       <img src={selectedUser.image} alt={selectedUser.name} />
//       <h1>Posts</h1>

//   {userPosts.length === 0 && <div>I don't have posts</div>}

//   {userPosts.map((post) => (
//     <div key={post.id}>
//       <h2>{post.description}</h2>
//       <p>
//         <strong>Author: {post.author}</strong>
//       </p>
//       <p>
//         <strong>Time:</strong> {post.time}
//       </p>
//       <p>
//         <strong>Location:</strong> {post.location}
//       </p>
//       <img src={post.image} alt="Post image" />
//       <hr />
//     </div>
//   ))}
//     </div>
//   );
// };

// export default UserProfile;

// In UserProfile.js
import { FC } from "react";

const UserProfile: FC = () => {
  return <div>UserProfile</div>;
};

export default UserProfile;
