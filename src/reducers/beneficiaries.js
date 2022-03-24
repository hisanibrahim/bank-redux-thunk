import { CREATE_BENEFICIARY } from "../actions";

const INITIAL_STATE = {
  data: [],
  lastCreated: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BENEFICIARY: {
      return {
        ...state,
        lastCreated: action.newBeneficiary,
        loading: false,
      };
    }
    default:
      return state;
  }
};
