import React from "react";
import { useNavigate } from "react-router-dom";

function BlogItems({ item }) {
  const navigate = useNavigate();
  const onBlockclick = (id) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="blogitems" onClick={() => onBlockclick(item.id)}>
      <h2>{item.title}</h2>
    </div>
  );
}

export default BlogItems;
