export interface IBlog {
  _id: string;
  title: string;
  content: string;
  images?: string[];
  tags?: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
