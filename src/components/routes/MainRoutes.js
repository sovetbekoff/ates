import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm";
import PostForm from "../Post/PostForm";
import UsersProfile from "../ui/UsersProfile";
import PostDetails from "../Post/PostDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/addPost" element={<PostForm />} />
      <Route path="/post/:postId" element={<PostDetails />} />
      <Route path="/users/:userId" element={<UsersProfile />} />
    </Routes>
  );
};

export default MainRoutes;
