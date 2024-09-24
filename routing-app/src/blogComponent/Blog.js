import { useContext } from "react";
import BlogItems from "./BlogItems";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";

function Blog() {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <ul className="list">
          {blogs.length > 0 && blogs.map((item) => <BlogItems item={item} />)}
        </ul>
      </div>

      <button onClick={() => navigate("/")}>Home🏠</button>
    </>
  );
}

export default Blog;
