import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Loading from "../components/Loading";
import { createBeneficiary } from "../actions/beneficiaries";

class BalancePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      accountNumber: null,
      ifscCode: null,
      bankName: null,
      beneficiaryName: null,
      beneficiaryNickname: null,
      transactionType: null,
      submitSuccess: false,
    };
  }

  onAccountNumberChange = (e) => {
    this.setState({ accountNumber: e.target.value });
  };
  onIfscCodeChange = (e) => {
    this.setState({ ifscCode: e.target.value });
  };
  onBankNameChange = (e) => {
    this.setState({ bankName: e.target.value });
  };
  onBeneficiaryNameChange = (e) => {
    this.setState({ beneficiaryName: e.target.value });
  };
  onBeneficiaryNicknameChange = (e) => {
    this.setState({ beneficiaryNickname: e.target.value });
  };
  onTransactionTypeChange = (e) => {
    this.setState({ transactionType: e.target.value });
  };

  onSubmit = (e) => {
    try {
      e.preventDefault();
      const {
        accountNumber,
        ifscCode,
        bankName,
        beneficiaryName,
        beneficiaryNickname,
        transactionType,
      } = this.state;
      // this.setState({ errorMessage: "Something went wrong" });
      // throw new Error("Name required");
      this.props.createBeneficiary({
        accountNumber,
        ifscCode,
        bankName,
        beneficiaryName,
        beneficiaryNickname,
        transactionType,
      });

      this.setState({ submitSuccess: true });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    return (
      <>
        <h1>Add Beneficiary</h1>
        {this.state.submitSuccess && <Navigate to="/" replace={true} />}
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Account Number"
              type="number"
              value={this.state.accountNumber}
              onChange={this.onAccountNumberChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="IFSC Code"
              type="text"
              value={this.state.ifscCode}
              onChange={this.onIfscCodeChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Bank Name"
              type="text"
              value={this.state.bankName}
              onChange={this.onBankNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Beneficiary Name"
              type="text"
              value={this.state.beneficiaryName}
              onChange={this.onBeneficiaryNameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Nickname"
              type="text"
              value={this.state.beneficiaryNickname}
              onChange={this.onBeneficiaryNicknameChange}
            />
          </Form.Group>
          <>
            <Form.Group className="mb-3">
              <Form.Select
                onChange={this.onTransactionTypeChange}
                value={this.state.transactionType}
              >
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
          {this.state.errorMessage ? <p>{this.state.errorMessage} </p> : null}
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = {
  createBeneficiary: createBeneficiary,
};
const mapStateToProps = (state) => ({
  lastCreated: state.lastCreated,
});

export default connect(mapStateToProps, mapDispatchToProps)(BalancePage);
