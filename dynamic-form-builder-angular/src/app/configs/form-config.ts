import { FormField } from "@app/interfaces/formField";

// Define the JSON structure for the form
export const formConfig: FormField[] = [
  {
    type: "text",
    label: "Full Name",
    name: "fullName",
    placeholder: "Enter your full name",
    validations: { required: true },
  },
  {
    type: "number",
    label: "Age",
    name: "age",
    placeholder: "Enter your age",
    validations: { required: true, min: 18, max: 100 },
  },
  {
    type: "checkbox",
    label: "Agree to Terms",
    name: "agreeTerms",
    validations: { required: true },
  },
  {
    type: "select",
    label: "Country",
    name: "country",
    options: ["USA", "Canada", "UK", "Australia"],
    validations: { required: true },
  },
];
