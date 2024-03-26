// import { FC } from "react";
// import Button from "./Button";
// import { Link } from "react-router-dom";
// import { useAppDispatch } from "../../store/store";
// const Navbar: FC = () => {
//   const user = JSON.parse(localStorage.getItem("user") || "{}");

//   const dispatch = useAppDispatch();
//   const logOut = () => {
//     localStorage.removeItem("user");
//   };

//   return (
//     <div
//       className="navbar"
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//       }}
//     >
//       <Link to="/">
//         <Button>home</Button>
//       </Link>

//       {!user.name && (
//         <>
//           <Link to="/register">
//             <Button>sign up</Button>
//           </Link>

//           <Link to="/login">
//             <Button>sign in</Button>
//           </Link>
//         </>
//       )}

//       <Link to="/addPost">
//         <Button>add</Button>
//       </Link>

//       {user.name && (
//         <>
//           <Link to="/">
//             <Button onClick={() => dispatch(logOut)}>log out</Button>
//           </Link>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <Link to={`/users/${user.id}`}>
//               <p>name: {user.name}</p>
//               <img
//                 src={user.image}
//                 alt="User Avatar"
//                 style={{
//                   width: "56%",
//                   height: "56px",
//                   border: "none",
//                   borderRadius: "50%",
//                 }}
//               />
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );

  const logOut = () => {
    localStorage.removeItem("user");
    setUser({});
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(userData);
  }, []); //
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <Button>home</Button>
      </Link>
      {!user.name ? (
        <>
          <Link to="/register">
            <Button>sign up</Button>
          </Link>
          <Link to="/login">
            <Button>sign in</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/addPost">
            <Button>add</Button>
          </Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button onClick={logOut}>log out</Button>
            <Link to={`/users/${user.id}`} style={{ display: "flex" }}>
              <p>name: {user.name}</p>
              <img
                src={user.image}
                alt="User Avatar"
                style={{
                  width: "56%",
                  height: "56px",
                  border: "none",
                  borderRadius: "50%",
                }}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
