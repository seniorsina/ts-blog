interface ABlog {
  title: string;
  body: string;
  author: string;
  id: number;
}

interface BlogProps {
  blogs: ABlog[];
}

const BlogList = ({ blogs }: BlogProps) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
