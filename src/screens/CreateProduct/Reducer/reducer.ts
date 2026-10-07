import { FormAction, FormState } from "@/screens/CreateProduct/types";
export const initialFormState: FormState = {
  name: "",
  reference: "",
  quantity: "0",
  category: "all",
  alert_threshold: "",
  description: "",
};
export const formReducer = (
  state: FormState,
  action: FormAction,
): FormState => {
  switch (action.type) {
    case "setForm":
      return action.value;
    case "setName":
      return { ...state, name: action.value };
    case "setReference":
      return { ...state, reference: action.value };
    case "setCategory":
      return { ...state, category: action.value };
    case "setQuantity":
      return { ...state, quantity: action.value };
    case "setThreshold":
      return { ...state, alert_threshold: action.value };
    case "setDescription":
      return { ...state, description: action.value };
  }
};
