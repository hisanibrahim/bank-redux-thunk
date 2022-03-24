import axios from "axios";
import { CREATE_BENEFICIARY } from ".";

export const createBeneficiary = () => {
  return (dispatch) => {
    axios.get(`https://reqres.in/api/users`).then((res) => {
      const newBeneficiary = {
        status: "y",
        message: "success",
      };
      dispatch({
        type: CREATE_BENEFICIARY,
        newBeneficiary,
      });
    });
  };
};
