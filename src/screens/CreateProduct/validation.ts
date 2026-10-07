import { FormState } from "./types";

export type FormErrors = Partial<Record<keyof FormState, string>>;

const isNonNegativeInteger = (value: string) => /^\d+$/.test(value.trim());

export const validateProductForm = (form: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Le nom du produit est obligatoire.";
  }
  if (form.reference.trim().length < 2) {
    errors.reference = "La référence est obligatoire.";
  }
  if (!form.category) {
    errors.category = "Choisissez une catégorie.";
  }
  if (!isNonNegativeInteger(form.quantity)) {
    errors.quantity = "La quantité doit être un entier positif ou nul.";
  }
  if (!isNonNegativeInteger(form.alert_threshold)) {
    errors.alert_threshold = "Le seuil doit être un entier positif ou nul.";
  }

  return errors;
};
