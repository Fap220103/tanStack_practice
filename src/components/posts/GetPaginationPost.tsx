import { useGetPaginationPostsQuery } from "@/queries/posts.query";
import type { Post } from "@/types/post.types";
import { Pagination } from "antd";
import { useState } from "react";

export const GetPaginationPost = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
  
  const {
    data: posts
  } = useGetPaginationPostsQuery(page, limit);

  return (
    <div>
      <h2>Danh sách posts</h2>
      <ul>
        {posts?.data.map((data: Post) => (
          <li key={data.id}>
            <span className="bg-red-500">{data.title}</span> -{data.body}
          </li>
        ))}
      </ul>

     <Pagination
        current={page}
        pageSize={limit}
        total={posts?.total ?? 0}
        showSizeChanger
        onChange={(p, pageSize) => {
            setPage(p);
            setLimit(pageSize); // ✅ cập nhật limit khi user đổi pageSize
          }}
      />
    </div>
  );
};
