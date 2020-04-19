import { createActions, handleActions } from "redux-actions";

export const UPDATE_NAME = "users/UPDATE_NAME";
export const UPDATE_NAME_SUCCESS = "users/UPDATE_NAME_SUCCESS";

export const {
  users: { updateName, updateNameSuccess },
} = createActions({
  [UPDATE_NAME]: undefined,
  [UPDATE_NAME_SUCCESS]: undefined,
});

const initialState = {
  name: "",
};

export default handleActions(
  {
    [UPDATE_NAME]: (state) => state,
    [UPDATE_NAME_SUCCESS]: ({ payload }) => ({
      name: payload,
    }),
  },

  initialState
);
