import React from "react";

import useFetchData from "../useFetchData";
import "./styles.css";

export default function App() {
  //"https://jsonplaceholder.typicode.com/posts"
  const { data, loading, error } = useFetchData();

  return (
    <div>
      <div>
        <h1>Fetched Data:</h1>
        {loading && <h3> ...Loading</h3>}
        {data.length > 0
          ? data.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
          : "no data available"}

        {/* <h3>Error: {error ? error : ""}</h3> */}
      </div>
      {error || <h3>Error: {error}</h3>}
    </div>
  );
}
