import axios from "axios";
import { REQUEST_CHEQUE_BOOK } from ".";

export const requestChequeBook = (chequeBookDetails) => async (dispatch) => {
  const response = await axios.post(`https://reqres.in/api/users`, {
    name: "User name",
    job: "Engineer",
    amount: chequeBookDetails.amount,
    description: chequeBookDetails.description,
    ownerId: 0,
  });
  const newRequest = {
    status: "y",
    message: "success",
  };
  dispatch({
    type: REQUEST_CHEQUE_BOOK,
    newRequest,
  });
};
