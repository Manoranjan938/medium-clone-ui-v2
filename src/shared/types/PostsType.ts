export interface LatestBlogApiResp {
  blogs: LatestBlogResponse[];
}

export interface TrendingBlogApiResp {
  blogs: TrendingBlogsResponse[];
}

export interface LatestBlogResponse {
  activity: ActivityType;
  blog_id: string;
  title: string;
  banner: string;
  des: string;
  tags: string[];
  author: AuthorType;
  publishedAt: string;
}

interface ActivityType {
  total_likes: number;
  total_comments: number;
  total_reads: number;
  total_parent_comments: number;
}

interface AuthorType {
  personal_info: UserInfo;
}

interface UserInfo {
  fullname: string;
  username: string;
  profile_img: string;
}

export interface TrendingBlogsResponse {
  author: AuthorType;
  blog_id: string;
  publishedAt: string;
  title: string;
}

export interface FetchCountRequest {
  countRoute: string;
  data_to_send: LatestBlogResponse[];
}
