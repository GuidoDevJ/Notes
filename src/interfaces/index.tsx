import { ReactNode } from "react";
interface ILayout {
  pageInfo?: { name: string; description: string };
  children: ReactNode;
}
interface User {
  email: string;
  password: string;
  id: number;
  notes: [];
  token: string;
}

export type { ILayout, User };
