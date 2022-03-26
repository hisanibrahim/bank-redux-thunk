import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import { getAccountBalance } from "../actions/accounts";
import { getBeneficiaries } from "../actions/beneficiaries";

const BalancePage = (props) => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(getAccountBalance("1"));
    dispatch(getBeneficiaries("1"));
  }, []);
  return (
    <>
      {accounts.loading ? (
        <Loading />
      ) : (
        accounts.accounts.map((account) => {
          return (
            <h1
              key={account.accountType}
            >{`${account.accountType}: ${account.accountBalance}`}</h1>
          );
        })
      )}
      <Link to="/add-beneficiary">Add Beneficiary</Link>
      <br />
      <Link to="/create-transaction">Create Transaction</Link>
    </>
  );
};

export default BalancePage;
