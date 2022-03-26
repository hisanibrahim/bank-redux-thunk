import axios from "axios";
import { CREATE_TRANSACTION } from ".";

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
