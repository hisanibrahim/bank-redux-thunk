import React from "react";
import Loading from "../components/Loading";
import { connect } from "react-redux";
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
