import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PostList from "./Post/PostList";
import Users from "./ui/Users";

const Home: FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <PostList />
      <Users />
    </div>
  );
};

export default Home;
