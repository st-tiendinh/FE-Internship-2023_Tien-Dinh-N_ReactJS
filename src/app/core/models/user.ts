export enum UserRole {
  USER,
  ADMIN,
}

export interface UserProps {
  id: string;
  email: string;
  password: string;
}
