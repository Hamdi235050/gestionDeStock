export type Category = "grocery" | "drinks" | "hygiene";

export type FormState = {
  name: string;
  reference: string;
  category?: Category;
  quantity: string;
  threshold: string;
  description: string;
};

export type FormAction =
  | { type: "setName"; value: string }
  | { type: "setReference"; value: string }
  | { type: "setCategory"; value: Category }
  | { type: "setQuantity"; value: string }
  | { type: "setThreshold"; value: string }
  | { type: "setDescription"; value: string };
