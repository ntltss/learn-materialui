import React from "react";
import { useParams } from "react-router-dom";

function PostContent() {
  const { id } = useParams();
  return (
    <div>
      <h1>個別記事 {id}</h1>
    </div>
  );
}

export default PostContent;