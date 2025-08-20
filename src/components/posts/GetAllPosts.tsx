import { useGetPostsQuery } from "@/queries/posts.query";
import type { Post } from "@/types/post.types";
import React from "react";

export const GetAllPosts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <p>Error: {(error as Error).message}</p>;
  return (
    <div>
      <h2>danh sách posts</h2>
      <ul>
        {posts?.data.map((data: Post) => (
          <li key={data.id}>
            <span className="bg-red-500">{data.title}</span> -{data.body}
          </li>
        ))}
      </ul>
    </div>
  );
};
