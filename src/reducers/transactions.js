import { CREATE_TRANSACTION } from "../actions";

const INITIAL_STATE = {
  data: [],
  lastCreated: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION: {
      return {
        ...state,
        lastCreated: action.newTransaction,
        loading: false,
      };
    }
    default:
      return state;
  }
};
