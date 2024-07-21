interface IAuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}

interface IReview {
  author: string;
  author_details: IAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface IReviews {
  id: number;
  page: number;
  results: IReview[];
  total_pages: number;
  total_results: number;
}