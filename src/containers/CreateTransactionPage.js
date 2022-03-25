import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import Loading from "../components/Loading";
import { createBeneficiary, getBeneficiaries } from "../actions/beneficiaries";

class CreateTransactionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      submitSuccess: "",
      beneficiary: "",
      beneficiaryTypes: {
        I: "Internal",
        E: "External",
      },
      selectedBeneficiary: {
        accountNumber: "",
        ifscCode: "",
        bankName: "",
        beneficiaryName: "",
        beneficiaryNickname: "",
        beneficiaryType: "",
      },
      amount: "",
      description: "",
    };
  }

  componentDidMount() {
    this.props.getBeneficiaries();
  }

  onBeneficiaryChange = (e) => {
    const beneficiary = this.props.beneficiaries.data.find(
      (b) => b.accountNumber == e.target.value
    );
    this.setState({
      beneficiary: e.target.value,
      selectedBeneficiary: beneficiary,
    });
  };

  onAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };
  onDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
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
        beneficiaryType,
      } = this.state;
      // this.setState({ errorMessage: "Something went wrong" });
      // throw new Error("Name required");
      this.props.createBeneficiary({
        accountNumber,
        ifscCode,
        bankName,
        beneficiaryName,
        beneficiaryNickname,
        beneficiaryType,
      });

      this.setState({ submitSuccess: true });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    return (
      <>
        <h1>Create Transaction</h1>
        {this.state.submitSuccess && <Navigate to="/" replace={true} />}
        <Form>
          <Form.Group className="mb-3">
            <Form.Select
              value={this.state.beneficiaryType}
              onChange={this.onBeneficiaryChange}
            >
              <option value="" selected disabled>
                Select beneficiary
              </option>
              {this.props.beneficiaries.data.map((b) => (
                <option key={toString(b.accountNumber)} value={b.accountNumber}>
                  {b.beneficiaryName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Account Number"
              type="text"
              disabled
              value={this.state.selectedBeneficiary.accountNumber}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="IFSC Code"
              type="text"
              disabled
              value={this.state.selectedBeneficiary.ifscCode}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Bank Name"
              type="text"
              disabled
              value={this.state.selectedBeneficiary.bankName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Beneficiary Name"
              type="text"
              disabled
              value={this.state.selectedBeneficiary.beneficiaryName}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Beneficiary Nickname"
              type="text"
              disabled
              value={this.state.selectedBeneficiary.beneficiaryNickname}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Beneficiary Type"
              type="text"
              disabled
              value={
                this.state.beneficiaryTypes[
                  this.state.selectedBeneficiary.beneficiaryType
                ]
              }
            />
          </Form.Group>
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
  getBeneficiaries: getBeneficiaries,
};

const mapStateToProps = (state) => ({
  beneficiaries: state.beneficiaries,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTransactionPage);
