import { FormAction, FormState } from "@/screens/CreateProduct/types";
export const initialFormState: FormState = {
  name: "",
  reference: "",
  quantity: "0",
  threshold: "10",
  description: "",
};
export const formReducer = (
  state: FormState,
  action: FormAction,
): FormState => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.value };
    case "setReference":
      return { ...state, reference: action.value };
    case "setCategory":
      return { ...state, category: action.value };
    case "setQuantity":
      return { ...state, quantity: action.value };
    case "setThreshold":
      return { ...state, threshold: action.value };
    case "setDescription":
      return { ...state, description: action.value };
  }
};
