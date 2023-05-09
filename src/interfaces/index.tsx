import { ReactNode } from "react";
export default interface ILayout {
  pageInfo?: { name: string; description: string };
  children: ReactNode;
}
