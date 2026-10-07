import { createProduct } from "@/services/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { productKeys } from "./useProducts";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onError: (error) =>
      Toast.show({
        text1: "Création impossible",
        text2: error.message,
        type: "error",
      }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: productKeys.all });
      Toast.show({
        text1: "Le produit a été ajouté avec succès.",
        type: "success",
      });
    },
  });
};
