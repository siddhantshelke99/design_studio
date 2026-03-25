export type MediaType = 'image' | 'video';

export interface ProjectMedia {
  type: MediaType;
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  cover: string;
  summary: string;
  description: string;
  media: ProjectMedia[];
}

export interface Service {
  title: string;
  description: string;
  image: string;
}
