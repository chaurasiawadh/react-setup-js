import { USER_FORM_DETAILS } from "../constants/form";

export const formDetailsAction = (registration) => {
  return {
    type: USER_FORM_DETAILS,
    registration
  };
};
