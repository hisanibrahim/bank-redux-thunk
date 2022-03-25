import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import { getAccountBalance } from "../actions/accounts";
import { getBeneficiaries } from "../actions/beneficiaries";

class BalancePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAccountBalance("1");
    this.props.getBeneficiaries("1");
  }

  render() {
    return (
      <>
        {this.props.accounts.loading ? (
          <Loading />
        ) : (
          this.props.accounts.accounts.map((account) => {
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
  }
}

const mapDispatchToProps = {
  getAccountBalance: getAccountBalance,
  getBeneficiaries: getBeneficiaries,
};
const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps, mapDispatchToProps)(BalancePage);
