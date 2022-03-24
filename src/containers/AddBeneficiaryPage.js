import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Loading from "../components/Loading";
import { getAccountBalance } from "../actions/accounts";

class BalancePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };
  }

  onSubmit = (e) => {
    try {
      e.preventDefault();
      // this.setState({ errorMessage: "Something went wrong" });
      // throw new Error("Name required");
      this.props.getAccountBalance("1");
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    return (
      <>
        <h1>Add Beneficiary</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Account Number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="IFSC Code" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Bank Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Nickname" />
          </Form.Group>
          <>
            <Form.Group className="mb-3">
              <Form.Select>
                <option selected disabled>
                  Type
                </option>
                <option value="I">Internal</option>
                <option value="E">External</option>
              </Form.Select>
            </Form.Group>
          </>
          <br />
          <Button variant="primary" type="submit" onClick={this.onSubmit}>
            Submit
          </Button>
          {this.state.errorMessage ? null : <p>{this.state.errorMessage}</p>}
        </Form>
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
