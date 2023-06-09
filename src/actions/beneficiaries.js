import axios from "axios";
import { CREATE_BENEFICIARY, GET_BENEFICIARIES } from ".";

export const createBeneficiary = (beneficiaryDetails) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    let response = await axios.post(`https://reqres.in/api/users`, {
      name: "User name",
      job: "Engineer",
      benAcctNum: beneficiaryDetails.accountNumber,
      benBankIfsc: beneficiaryDetails.ifscCode,
      benBank: beneficiaryDetails.bankName,
      benName: beneficiaryDetails.beneficiaryName,
      benNickName: beneficiaryDetails.beneficiaryNickname,
      benType: beneficiaryDetails.beneficiaryType,
      ownerId: 0,
    });
    response = {
      status: "y",
      message: "error message",
    };
    if (response && response.status === "y") {
      dispatch({
        type: CREATE_BENEFICIARY,
        newBeneficiary: response,
      });
      resolve(response);
    }
    if (response && response.status === "n") {
      reject(response);
    }
  });
};

export const getBeneficiaries = (userId) => async (dispatch) => {
  const response = await axios.get(`https://reqres.in/api/users`);
  const beneficiaries = [
    {
      accountNumber: 1,
      ifscCode: "IFSC001",
      bankName: "Bank 1 Ltd",
      beneficiaryName: "User 1",
      beneficiaryNickname: "User 1 nickname",
      beneficiaryType: "I",
    },
    {
      accountNumber: 2,
      ifscCode: "IFSC002",
      bankName: "Bank 2 Ltd",
      beneficiaryName: "User 2",
      beneficiaryNickname: "User 2 nickname",
      beneficiaryType: "E",
    },
  ];
  dispatch({
    type: GET_BENEFICIARIES,
    beneficiaries,
  });
};
