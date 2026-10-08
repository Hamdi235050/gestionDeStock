export type Product = {
  id: number;
  name: string;
  reference: string;
  category: string;
  quantity: number;
  alert_threshold: number;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ProductInput = Omit<Product, "id" | "createdAt" | "updatedAt">;

export type ProductUpdate = Partial<ProductInput>;
