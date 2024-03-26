// RegisterForm.tsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { createUser, getUsers } from "../../store/auth/userSlice";
import { Link, useNavigate } from "react-router-dom";
import "./registerForm.scss";
const RegisterForm: React.FC = () => {
  const [account, setAccount] = useState({ name: "", password: "", image: "" });

  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getUsers();
  }, [dispatch]);

  const navigate = useNavigate();
  const handleAddUser = () => {
    const existingUser = users.find((user) => user.name === account.name);
    if (existingUser) {
      alert("User with this name already exists");
      return;
    }
    if (
      !account.name.trim() ||
      !account.password.trim() ||
      !account.image.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }
    const newUser = {
      id: Date.now(),
      name: account.name,
      password: account.password,
      image: account.image,
    };
    dispatch(createUser(newUser));

    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={account.name}
        onChange={(e) => setAccount({ ...account, name: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={account.password}
        onChange={(e) => setAccount({ ...account, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="image"
        value={account.image}
        onChange={(e) => setAccount({ ...account, image: e.target.value })}
      />
      <button onClick={handleAddUser}>Sign Up</button>
      <Link to="/login">Already have an account? Log In</Link>
    </div>
  );
};

export default RegisterForm;
