import axios from "axios";
import { GET_ACCOUNT_BALANCE } from ".";

export const getAccountBalance = () => {
  return (dispatch) => {
    axios.get(`https://reqres.in/api/users`).then((res) => {
      const accounts = [
        { accountId: 1, accountType: "Savings Account", accountBalance: 20173 },
        { accountId: 2, accountType: "Term Deposit", accountBalance: 12173 },
      ];
      dispatch({
        type: GET_ACCOUNT_BALANCE,
        accounts: accounts,
      });
    });
  };
};