
import { QUERY_POST_KEY } from '@/constants/query.constant';
import { getPosts } from '@/repositories/posts/postRepository';
import { useQuery } from '@tanstack/react-query';

export const useGetPostsQuery = () => {
  return useQuery(
      {
        queryKey: [QUERY_POST_KEY],
        queryFn: () => getPosts().then((res) => res.data),
        staleTime: 20000,
      }
  );
};

