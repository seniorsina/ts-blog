import { setegid } from "process";
import { MouseEvent, useEffect, useState } from "react";
import BlogList from "./Blogs";
import useFetch from "./useFetch";
const Home = () => {
  const HandlDelete = (id: number) => {};
  const { data: blogs, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blog"
          HandleDelete={HandlDelete}
        ></BlogList>
      )}
    </div>
  );
};

export default Home;
