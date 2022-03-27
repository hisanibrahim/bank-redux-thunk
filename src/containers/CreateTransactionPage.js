import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";

import { getBeneficiaries } from "../actions/beneficiaries";
import { createTransaction } from "../actions/transactions";

class CreateTransactionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      submitSuccess: false,
      beneficiaryTypes: {
        I: "Internal",
        E: "External",
      },
      beneficiary: "",
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

  onSubmit = async (e) => {
    try {
      e.preventDefault();
      const {
        selectedBeneficiary: {
          accountNumber,
          beneficiaryName,
          beneficiaryType,
        },
        amount,
        description,
      } = this.state;

      const response = await this.props.createTransaction({
        accountNumber,
        beneficiaryName,
        beneficiaryType,
        amount,
        description,
      });

      if (response && response.status === "y") {
        this.setState({ submitSuccess: true });
      }
      if (response && response.status === "n") {
        this.setState({ submitSuccess: false, errorMessage: response.message });
      }
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    return (
      <Container>
        {this.state.submitSuccess && <Navigate to="/" replace={true} />}
        <br />
        <h3>Create Transaction</h3>
        <p>
          Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
          mollis mi nec, fermentum quam.
        </p>
        <br />
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
                <option key={b.accountNumber} value={b.accountNumber}>
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
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Amount"
              type="number"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Description"
              type="text"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form.Group>
          <Form.Group>
            {this.state.errorMessage ? (
              <>
                <br />
                <Alert variant="danger">
                  <h5>{this.state.errorMessage}</h5>
                  <p>
                    Morbi dictum ullamcorper urna in aliquet. Nulla at massa
                    mattis, mollis mi nec, fermentum quam.
                  </p>
                </Alert>
              </>
            ) : null}
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  createTransaction: createTransaction,
  getBeneficiaries: getBeneficiaries,
};

const mapStateToProps = (state) => ({
  beneficiaries: state.beneficiaries,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTransactionPage);
