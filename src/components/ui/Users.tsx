import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { User, fetchUsers } from "../../store/auth/userSlice";
import { Link } from "react-router-dom";

const Users: FC = () => {
  const dispatch = useAppDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const status = useSelector((state: RootState) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1> Users</h1>
      {status && <div>Loading...</div>}
      {status && <div>Failed to load users.</div>}

      {!status && (
        <ul>
          {users.map((user: User) => (
            <li key={user.id} style={{ display: "flex", alignItems: "center" }}>
              <Link to={`/users/${user.id}`}>name: {user.name}</Link>
              <img
                src={user.image}
                alt=""
                style={{
                  width: "33%",
                  border: "none",
                  borderRadius: "50%",
                  height: "50px",
                }}
              />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
