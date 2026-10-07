import { useProduct } from "@/hooks";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
import { formReducer } from "@/screens/CreateProduct/Reducer/reducer";
import { FormState } from "@/screens/CreateProduct/types";
import { initialFormState } from "@/screens/ModifyProduct/constants";
import { Product } from "@/services/types";
import { router, useLocalSearchParams } from "expo-router";
import { useReducer } from "react";

const initForm = (product?: Product): FormState => {
  if (!product) return initialFormState;
  return {
    category: product.category,
    description: product.description ?? "",
    name: product.name,
    quantity: String(product.quantity),
    reference: product.reference,
    alert_threshold: String(product.alert_threshold),
  };
};

export const useModifyProductForm = () => {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const id = Number(productId);

  const { data: product } = useProduct(id);
  const updateMutation = useUpdateProduct();

  const [form, dispatch] = useReducer(formReducer, product, initForm);

  const handleSubmit = () => {
    updateMutation.mutate(
      {
        id: product?.id!,
        payload: {
          alert_threshold: Number(form.alert_threshold),
          category: form.category,
          description: form.description.trim() || null,
          name: form.name.trim(),
          quantity: Number(form.quantity),
          reference: form.reference.trim(),
        },
      },
      { onSuccess: () => router.back() },
    );
  };

  return {
    product,
    form,
    dispatch,
    handleSubmit,
    isSubmitting: updateMutation.isPending,
  };
};
