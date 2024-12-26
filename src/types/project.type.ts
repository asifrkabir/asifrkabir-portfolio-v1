export interface IProject {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  images?: string[];
  repositoryUrls?: string[];
  liveDemoUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
