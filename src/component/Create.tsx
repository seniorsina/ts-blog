import { useState } from "react";

const Create = () => {
  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");
  const [userId, SetUserID] = useState(1);
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form action="">
        <label>Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
          required
          name=""
          id=""
        />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            SetBody(e.target.value);
          }}
        ></textarea>
        <label htmlFor="">blog Autor:</label>
        <select
          value={userId}
          onChange={(e) => {
            console.log("change");

            SetUserID(parseInt(e.target.value));
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{userId}</p>
      </form>
    </div>
  );
};

export default Create;
