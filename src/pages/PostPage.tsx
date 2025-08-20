import { AddPostModal } from "@/components/posts/AddPostModal";
import { GetAllPosts } from "@/components/posts/GetAllPosts";
import { GetInfinitePosts } from "@/components/posts/GetInfinitePosts";
import { GetPaginationPost } from "@/components/posts/GetPaginationPost";
import { useAddPostMutation } from "@/queries/posts.query";
import type { AddPost } from "@/types/post.types";
import { Button, Tabs } from "antd";
import { useState } from "react";
import { QUERY_POST_KEY } from "@/constants/query.constant";
import queryClient from "@/queries/queryClient";

const PostPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const addPostMutation = useAddPostMutation();
  const onClickAdd = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onSave = (post: AddPost) => {
    addPostMutation.mutate(
      post,
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [QUERY_POST_KEY], exact: false})
        }
      }

    )
  };
  const tabItems = [
    {
      key: "1",
      label: "Get All Posts",
      children: <GetAllPosts />,
    },
    {
      key: "2",
      label: "Get Infinite Posts",
      children: <GetInfinitePosts />,
    },
    {
      key: "3",
      label: "Get Pagination Posts",
      children: <GetPaginationPost />,
    },
  ];
  return (
    <>
      <Button onClick={onClickAdd}>Thêm mới</Button>
      <AddPostModal
        isOpen={isOpen}
        onClose={onClose}
        onSave={onSave}
      ></AddPostModal>
      <Tabs defaultActiveKey="1" items={tabItems}>
      </Tabs>
    </>
  );
};
export default PostPage;
