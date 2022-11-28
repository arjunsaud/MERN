import { ACTIONS } from "../action/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SIGNUP:
      return [...state,action.payload];
  }
};
