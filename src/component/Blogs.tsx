import { Link } from "react-router-dom";
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

const BlogList = ({ blogs, title, HandleDelete }: BlogProps) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/posts/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p> written by {blog.userId}</p>
          </Link>

          <button onClick={() => HandleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
