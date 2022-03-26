import { CREATE_TRANSACTION, GET_TRANSACTIONS } from "../actions";

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
    case GET_TRANSACTIONS: {
      return {
        ...state,
        data: action.transactions,
        loading: false,
      };
    }
    default:
      return state;
  }
};
