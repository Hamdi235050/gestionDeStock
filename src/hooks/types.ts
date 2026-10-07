import { ProductUpdatePayload } from "@/services/types";

export type UpdateProductVariables = {
  id: number;
  payload: Partial<ProductUpdatePayload>;
};
