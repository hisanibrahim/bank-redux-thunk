import { GET_ACCOUNT_BALANCE } from "../actions";

const INITIAL_STATE = {
  accounts: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ACCOUNT_BALANCE: {
      return {
        ...state,
        accounts: action.accounts,
        loading: false,
      };
    }
    default:
      return state;
  }
};
