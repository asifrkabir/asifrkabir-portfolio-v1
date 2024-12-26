export interface IInquiry {
  name: string;
  email: string;
  subject: string;
  message: string;
  isResolved: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateInquiry {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
