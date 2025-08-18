import apiClient from '@/repositories/apiClient';
import { UNIT_PER_PAGE } from '@/constants/units.constants';
import type { getPostParam } from './postRepository.param';

export const getPosts = async () => {
  return await apiClient({
    method: 'get',
    url: `/posts`,
  });
};


