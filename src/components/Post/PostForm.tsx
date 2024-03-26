// import React, { useState } from "react";
// import { useAppDispatch } from "../../store/store";
// import { createPost } from "../../store/post/postSlice";
// import { Link } from "react-router-dom";

// const PostForm: React.FC = () => {
//   const postAuthor = JSON.parse(localStorage.getItem("user") || "{}");
//   const name = postAuthor?.name;

//   const [post, setPost] = useState({
//     author: name,
//     image: "",
//     description: "",
//     time: Date.now(),
//     location: "",
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("user") !== null
//   );

//   const dispatch = useAppDispatch();

//   const handleCreatePost = () => {
//     const currentDate = new Date(post.time);
//     const day = currentDate.getDate();
//     const month = currentDate.getMonth() + 1;

//     const newPost = {
//       author: post.author,
//       image: post.image,
//       description: post.description,
//       time: `${day}.${month}`,
//       location: post.location,
//     };

//     dispatch(createPost(newPost));
//     setPost({ author: "", image: "", description: "", time: 0, location: "" });
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <input
//             type="text"
//             placeholder="image source"
//             value={post.image}
//             onChange={(e) => setPost({ ...post, image: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="description"
//             value={post.description}
//             onChange={(e) => setPost({ ...post, description: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="location"
//             value={post.location}
//             onChange={(e) => setPost({ ...post, location: e.target.value })}
//           />
//           <button onClick={handleCreatePost}>Create Post</button>
//         </div>
//       ) : (
//         <div>
//           <h2>вы не вошли в систему</h2>
//           <Link to="/login">войти</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PostForm;

import React, { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { createPost } from "../../store/post/postSlice";
import { Link } from "react-router-dom";

const PostForm: React.FC = () => {
  const postAuthor = JSON.parse(localStorage.getItem("user") || "{}");
  const name = postAuthor?.name;

  const [post, setPost] = useState({
    author: name,
    image: "",
    description: "",
    time: Date.now(),
    location: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") !== null
  );

  const dispatch = useAppDispatch();

  const handleCreatePost = () => {
    const currentDate = new Date(post.time);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;

    const newPost = {
      author: post.author,
      image: post.image,
      description: post.description,
      time: `${day}.${month}`,
      location: post.location,
    };

    dispatch(createPost(newPost));
    setPost({ author: "", image: "", description: "", time: 0, location: "" });
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPost({ ...post, location: event.target.value });
  };

  const centralAsianCities = {
    bs: "Bishkek",
    kk: "Karakol",
    at: "Almaty",
    tj: "Dushanbe",
    tb: "Tashkent",
    tm: "Ashgabat",
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="image source"
            value={post.image}
            onChange={(e) => setPost({ ...post, image: e.target.value })}
          />
          <input
            type="text"
            placeholder="description"
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          />
          <select value={post.location} onChange={handleLocationChange}>
            <option value="">Select location</option>
            {Object.entries(centralAsianCities).map(([code, city]) => (
              <option key={code} value={city}>
                {city}
              </option>
            ))}
          </select>
          <button onClick={handleCreatePost}>Create Post</button>
        </div>
      ) : (
        <div>
          <h2>вы не вошли в систему</h2>
          <Link to="/login">войти</Link>
        </div>
      )}
    </div>
  );
};

export default PostForm;
