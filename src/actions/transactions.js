import axios from "axios";
import { CREATE_TRANSACTION, GET_TRANSACTIONS, TRANSACTIONS_RECEIVED } from ".";

export const createTransaction = (transactionDetails) => async (dispatch) => {
  const response = await axios.post(`https://reqres.in/api/users`, {
    name: "User name",
    job: "Engineer",
    benAcctNum: transactionDetails.accountNumber,
    benName: transactionDetails.beneficiaryName,
    benType: transactionDetails.beneficiaryType,
    amount: transactionDetails.amount,
    description: transactionDetails.description,
    ownerId: 0,
  });
  const newTransaction = {
    status: "y",
    message: "success",
  };
  dispatch({
    type: CREATE_TRANSACTION,
    newTransaction,
  });
};

export const getTransactions = (filters) => async (dispatch) => {
  dispatch({
    type: GET_TRANSACTIONS,
    loading: true,
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await axios.get(
    `https://reqres.in/api/users?month=${filters.month}&year=${filters.year}&userId=1`
  );
  const transactions = [
    {
      trnId: 12,
      trnType: "DEBIT",
      trnDesc: "TO TRANSFER :- Scholarship Amount/ Minnu Josy, A/c - 2",
      trnAmt: 3000,
      trnDtTime: "2022-03-17T01:47:58.283",
    },
    {
      trnId: 10,
      trnType: "DEBIT",
      trnDesc: "TO TRANSFER :- Scholarship Amount/ Minnu Josy, A/c - 2",
      trnAmt: 3000,
      trnDtTime: "2022-03-17T01:46:54.983",
    },
  ];
  dispatch({
    type: TRANSACTIONS_RECEIVED,
    transactions: transactions,
  });
};
