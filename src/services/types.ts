import { Category } from "@/screens/CreateProduct/types";

export type Product = {
  id: number;
  name: string;
  reference: string;
  category: Category;
  quantity: number;
  alert_threshold: number;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ProductPayload = Pick<
  Product,
  | "name"
  | "reference"
  | "category"
  | "quantity"
  | "alert_threshold"
  | "description"
>;

export type ProductUpdatePayload = Partial<ProductPayload>;
