import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import { getAccountBalance } from "../actions/accounts";

class BalancePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAccountBalance("1");
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
      </>
    );
  }
}

const mapDispatchToProps = {
  getAccountBalance: getAccountBalance,
};
const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

export default connect(mapStateToProps, mapDispatchToProps)(BalancePage);
