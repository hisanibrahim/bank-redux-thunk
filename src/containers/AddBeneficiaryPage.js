import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Button, Container, Alert, Toast } from "react-bootstrap";

import Loading from "../components/Loading";
import { createBeneficiary } from "../actions/beneficiaries";

class AddBeneficiaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      accountNumber: "",
      ifscCode: "",
      bankName: "",
      beneficiaryName: "",
      beneficiaryNickname: "",
      beneficiaryType: "",
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

      if (
        !accountNumber ||
        !ifscCode ||
        !bankName ||
        !beneficiaryName ||
        !beneficiaryNickname ||
        !beneficiaryType
      ) {
        return this.setState({
          errorMessage: "All fields are required",
        });
      }

      if (accountNumber.length != 13) {
        return this.setState({
          errorMessage: "Account number must be 13 numbers",
        });
      }
      const response = await this.props.createBeneficiary({
        accountNumber,
        ifscCode,
        bankName,
        beneficiaryName,
        beneficiaryNickname,
        beneficiaryType,
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
        <br />
        <h3>Add Beneficiary</h3>
        <p>
          Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
          mollis mi nec, fermentum quam.
        </p>
        {this.state.submitSuccess ? (
          <>
            {/* <Toast show={this.state.submitSuccess}>
              <Toast.Header>
                <strong className="me-auto">Success</strong>
              </Toast.Header>
              <Toast.Body>Hey, Beneficiary added successfully.</Toast.Body>
            </Toast> */}
            <Navigate to="/" replace={true} />
          </>
        ) : null}
        <br />
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
              required
              type="text"
              value={this.state.beneficiaryNickname}
              onChange={this.onBeneficiaryNicknameChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select
              onChange={this.onBeneficiaryTypeChange}
              value={this.state.beneficiaryType}
            >
              <option value="" selected disabled>
                Beneficiary Type
              </option>
              <option value="I">Internal</option>
              <option value="E">External</option>
            </Form.Select>
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
  createBeneficiary: createBeneficiary,
};
const mapStateToProps = (state) => ({
  beneficiaries: state.beneficiaries,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBeneficiaryPage);
