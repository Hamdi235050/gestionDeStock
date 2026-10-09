import {
  Product,
  ProductPayload,
  ProductUpdatePayload,
} from "@/services/types";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const getErrorMessage = async (response: Response) => {
  try {
    const body = await response.json();
    const message = body.detail ?? body.message;
    return Array.isArray(message) ? message.join(" ") : message;
  } catch {
    return undefined;
  }
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${apiUrl}/products`);

  if (!response.ok) {
    throw new Error("Impossible de charger les produits.");
  }

  return response.json();
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`${apiUrl}/products/${id}`);

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return response.json();
};

export const createProduct = async (
  payload: ProductPayload,
): Promise<Product> => {
  const response = await fetch(`${apiUrl}/products`, {
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return response.json();
};

export const updateProduct = async (
  id: number,
  payload: ProductUpdatePayload,
): Promise<Product> => {
  const response = await fetch(`${apiUrl}/products/${id}`, {
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    method: "PATCH",
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return response.json();
};
