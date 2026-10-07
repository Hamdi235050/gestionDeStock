import { useQuery } from "@tanstack/react-query";
import { getProduct, getProducts } from "../services/products";

export const productKeys = {
  all: ["products"] as const,
  detail: (id: number) => ["products", id] as const,
};

export const useProducts = () =>
  useQuery({
    queryFn: getProducts,
    queryKey: productKeys.all,
  });

export const useProduct = (id?: number) => {
  const isValidId = Number.isInteger(id) && Number(id) > 0;

  return useQuery({
    enabled: isValidId,
    queryFn: () => getProduct(id as number),
    queryKey: productKeys.detail(isValidId ? (id as number) : 0),
  });
};
