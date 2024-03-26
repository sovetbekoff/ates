import React, { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import {
  loginUser,
  getUsers,
  getCurrentUser,
} from "../../store/auth/userSlice";
import { Link, useNavigate } from "react-router-dom";

const LoginForm: FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleLogin = () => {
    const user = users.find((user) => user.name === name);

    if (!user || user.password !== password) {
      alert("Invalid credentials");
      return;
    }

    dispatch(loginUser(user));
    navigate("/");
    dispatch(getCurrentUser(user.id));
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      <Link to="/register">Don't have an account? Register</Link>
    </div>
  );
};

export default LoginForm;
