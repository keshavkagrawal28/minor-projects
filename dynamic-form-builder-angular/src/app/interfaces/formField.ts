import { ValidationRules } from "./validationRules";

export interface FormField {
  type: 'text' | 'number' | 'checkbox' | 'select';
  label: string;
  name: string;
  placeholder?: string;
  validations: ValidationRules;
  options?: string[];
}
