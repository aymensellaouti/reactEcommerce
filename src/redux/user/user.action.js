import {UserActionTypes} from "./user.-actions.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setCurrentUser2 = user => ({
  type: UserActionTypes.SET_CURRENT_USER2,
  payload: user
});
