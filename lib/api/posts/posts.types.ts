export interface GetPostsParam {
  page?: number;
  limit?: number;
}
export type GetPostsResponse = Post[];

export interface GetPostParam {
  id: number;
}
export type GetPostResponse = Post;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
