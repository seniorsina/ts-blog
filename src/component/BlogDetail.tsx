import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

interface ABlog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  blogs: ABlog[];
  title: string;
  HandleDelete: (id: number) => void;
}

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>
            {data[0].title}
            {/* {data.map((item) => (
              <p>{item.id}</p>
            ))} */}
          </h2>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
