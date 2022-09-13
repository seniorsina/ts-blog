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
      id: 0,
      title: "",
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
            {data.map((item, idx) => (
              <div key={idx}>
                <p>{item.id}</p>
                <p>{item.title}</p>
              </div>
            ))}
          </h2>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
