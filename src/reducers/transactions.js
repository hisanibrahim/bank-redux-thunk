import {
  CREATE_TRANSACTION,
  GET_TRANSACTIONS,
  TRANSACTIONS_RECEIVED,
} from "../actions";

const INITIAL_STATE = {
  data: [],
  lastCreated: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_TRANSACTION: {
      return {
        ...state,
        lastCreated: action.newTransaction,
        loading: false,
      };
    }
    case TRANSACTIONS_RECEIVED: {
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
