import axios from "axios";
import { REQUEST_CHEQUE_BOOK } from ".";

export const requestChequeBook = (chequeBookDetails) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    let response = await axios.post(`https://reqres.in/api/users`, {
      name: "User name",
      job: "Engineer",
      amount: chequeBookDetails.amount,
      description: chequeBookDetails.description,
      ownerId: 0,
    });
    response = {
      status: "n",
      message: "error while requesting new cheque book",
    };
    if (response && response.status === "y") {
      dispatch({
        type: REQUEST_CHEQUE_BOOK,
        newRequest: response,
      });
      resolve(response);
    }
    if (response && response.status === "n") {
      reject(response);
    }
  });
};
