import { UpdateProductVariables } from "@/hooks/types";
import { productKeys } from "@/hooks/useProducts";
import { updateProduct } from "@/services/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: UpdateProductVariables) => {
      console.log("Updating product with ID:", id, "and payload:", payload);
      return updateProduct(id, payload);
    },
    onSuccess: (product) => {
      queryClient.setQueryData(productKeys.detail(product.id), product);
      void queryClient.invalidateQueries({ queryKey: productKeys.all });
      Toast.show({
        text1: "Les modifications ont été enregistrées.",
        type: "success",
      });
    },
    onError: (error) =>
      Toast.show({
        text1: "Modification impossible",
        text2: error.message,
        type: "error",
      }),
  });
};
