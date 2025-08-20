import { useGetInfinitePostsQuery } from "@/queries/posts.query";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const GetInfinitePosts = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = useGetInfinitePostsQuery();
 
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (status === "error") return <p>Error loading posts</p>;
  return (
    <div>
      <h2>Danh sách posts</h2>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.data.map((post) => (
            <div key={post.id} className="border p-2 mb-2">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ))}

      {/* {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )} */}
      <div ref={ref} style={{ height: "40px", textAlign: "center" }}>
        {isFetchingNextPage
          ? "Đang tải thêm..."
          : hasNextPage
          ? "Kéo xuống để load thêm"
          : "Hết dữ liệu"}
      </div>
    </div>
  );
};
