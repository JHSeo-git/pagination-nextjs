import { sleep } from '@/lib/utils';

import client from '../client';
import type { GetPostParam, GetPostResponse, GetPostsParam, GetPostsResponse } from './posts.types';

export async function getPosts({ limit = 10, page = 1 }: GetPostsParam) {
  const data = await client.get<GetPostsResponse>('/posts');

  // force delay
  await sleep(1000);

  const paged = data.slice((page - 1) * limit, page * limit);

  return {
    posts: paged,
    pageInfo: {
      total: data.length,
      prevPage: page <= 1 ? undefined : page - 1,
      nextPage: data.length > (page + 1) * limit ? page + 1 : undefined,
    },
  };
}

export async function getPost({ id }: GetPostParam) {
  const data = await client.get<GetPostResponse>(`/posts/${id}`);

  return data;
}
