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
      beneficiaryType: null,
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
  onBeneficiaryTypeChange = (e) => {
    this.setState({ beneficiaryType: e.target.value });
  };

  onSubmit = async (e) => {
    try {
      e.preventDefault();
      const {
        accountNumber,
        ifscCode,
        bankName,
        beneficiaryName,
        beneficiaryNickname,
        beneficiaryType,
      } = this.state;

      // if (accountNumber != 12) {
      //   return this.setState({
      //     errorMessage: "Account number must be 12 numbers",
      //   });
      // }
      const response = await this.props.createBeneficiary({
        accountNumber,
        ifscCode,
        bankName,
        beneficiaryName,
        beneficiaryNickname,
        beneficiaryType,
      });

      console.log(response);
      if (response && response.status === "y") {
        this.setState({ submitSuccess: true });
      }
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
                onChange={this.onBeneficiaryTypeChange}
                value={this.state.beneficiaryType}
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
