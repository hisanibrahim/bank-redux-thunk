import { combineReducers } from "redux";
import accounts from "./accounts";
import beneficiaries from "./beneficiaries";
import transactions from "./transactions";

export default combineReducers({
  accounts,
  beneficiaries,
  transactions,
});
