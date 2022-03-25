import axios from "axios";
import { CREATE_BENEFICIARY } from ".";

export const createBeneficiary = (beneficiaryDetails) => async (dispatch) => {
  const response = await axios.post(`https://reqres.in/api/users`, {
    name: "User name",
    job: "Engineer",
    benAcctNum: beneficiaryDetails.accountNumber,
    benBankIfsc: beneficiaryDetails.ifscCode,
    benBank: beneficiaryDetails.bankName,
    benName: beneficiaryDetails.beneficiaryName,
    benNickName: beneficiaryDetails.beneficiaryNickname,
    benType: beneficiaryDetails.transactionType,
    ownerId: 0,
  });
  const newBeneficiary = {
    status: "y",
    message: "success",
  };
  dispatch({
    type: CREATE_BENEFICIARY,
    newBeneficiary,
  });
};
