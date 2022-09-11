import { MouseEvent, useEffect, useState } from "react";
import BlogList from "./Blogs";

const Home = () => {
  const [blogs, SetBlogs] = useState([]);

  const HandlDelete = (id: number) => {};

  useEffect(() => {
    console.log("use ");
  }, []);
  return (
    <div className="Home">
      <BlogList
        blogs={blogs}
        title="All Blog"
        HandleDelete={HandlDelete}
      ></BlogList>
    </div>
  );
};

export default Home;
