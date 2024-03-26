// // UserList.tsx
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState, useAppDispatch } from "./store/store";
// import { createUser, fetchUsers } from "./store/auth/userSlice";

// const UserList: React.FC = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useAppDispatch(); // используйте useAppDispatch вместо useDispatch
//   const users = useSelector((state: RootState) => state.user.users);
//   const status = useSelector((state: RootState) => state.user.status);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   const handleAddUser = () => {
//     if (name.trim() !== "" && password.trim() !== "") {
//       dispatch(createUser({ id: Date.now(), name, password }));
//       setName("");
//       setPassword("");
//     }
//   };

//   return (
//     <div>
//       <h2>User List</h2>
//       {status === "loading" && <div>Loading...</div>}
//       {status === "failed" && <div>Failed to load users.</div>}
//       {status === "idle" && (
//         <div>
//           <ul>
//             {users.map((user) => (
//               <li key={user.id}>
//                 Name: {user.name}, Password: {user.password}
//               </li>
//             ))}
//           </ul>
//           <h3>Add New User</h3>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleAddUser}>Add User</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserList;

import { FC } from "react";

const UserList: FC = () => {
  return <div>UserList</div>;
};

export default UserList;
