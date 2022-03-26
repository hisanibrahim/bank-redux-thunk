import { combineReducers } from "redux";
import accounts from "./accounts";
import beneficiaries from "./beneficiaries";
import transactions from "./transactions";
import chequeBooks from "./chequeBooks";

export default combineReducers({
  accounts,
  beneficiaries,
  transactions,
  chequeBooks,
});
