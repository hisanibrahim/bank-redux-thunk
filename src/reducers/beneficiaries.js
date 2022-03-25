import { CREATE_BENEFICIARY, GET_BENEFICIARIES } from "../actions";

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
    case GET_BENEFICIARIES: {
      return {
        ...state,
        data: action.beneficiaries,
        loading: false,
      };
    }
    default:
      return state;
  }
};
