import { REQUEST_CHEQUE_BOOK } from "../actions";

const INITIAL_STATE = {
  data: [],
  lastCreated: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHEQUE_BOOK: {
      return {
        ...state,
        lastCreated: action.newRequest,
        loading: false,
      };
    }
    default:
      return state;
  }
};
