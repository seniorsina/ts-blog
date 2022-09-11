import { MouseEvent, useState } from "react";
import BlogList from "./Blogs";
const Home = () => {
  const [blogs, SetBlogs] = useState([
    { title: "new blog site", body: "post one", author: "mario", id: 1 },
    { title: "role of house", body: "post two", author: "youshi", id: 2 },
    { title: "dev option", body: "post three", author: "mario", id: 3 },
  ]);
  const HanadleClick = (name: string) => {
    console.log(name);
  };

  return (
    <div className="Home">
      <BlogList blogs={blogs}></BlogList>
    </div>
  );
};

export default Home;
