import { combineReducers } from "redux";
import accounts from "./accounts";
import beneficiaries from "./beneficiaries";

export default combineReducers({
  accounts,
  beneficiaries,
});
