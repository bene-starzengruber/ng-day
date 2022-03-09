export interface Thumbnail {
  lqip: string;
  width?: number;
  height?: number;
  alt_text: string;
}

export interface ArtPieceResponse {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles?: any;
  thumbnail: Thumbnail;
  image_id: string;
  image: string;
  artist_title: string;
}

export interface ArtPiece {
  id: number;
  title: string;
  imageUrl: string;
  artist: string;
}

export interface ArtResponse {
  pagination: { total: number, limit: number, offset: number };
  data: ArtPieceResponse[]
}
