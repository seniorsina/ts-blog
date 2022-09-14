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
  const test = [
    {
      userId: 0,
      id: 0,
      title: "",
      body: "",
    },
  ];
  const { data = test, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>
            {data.map((post, idx) => (
              <article>
                <h2>{post.title}</h2>
                <p>written by {post.userId}</p>
                <div>{post.body}</div>
              </article>
            ))}
          </h2>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
