import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Button, Table, Container, Alert } from "react-bootstrap";

import { requestChequeBook } from "../actions/chequeBooks";

class RequestChequeBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      submitSuccess: false,
      beneficiary: "",
      chequeLeavesList: [
        {
          leaves: 20,
          charges: 100,
        },
        {
          leaves: 50,
          charges: 200,
        },
        {
          leaves: 100,
          charges: 300,
        },
      ],
      amount: 0,
    };
  }

  onChequeLeavesChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  onSubmit = async (e) => {
    try {
      e.preventDefault();
      const { amount } = this.state;

      const response = await this.props.requestChequeBook({
        amount,
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
        <h3>Request Cheque Book</h3>
        <p>
          Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
          mollis mi nec, fermentum quam.
        </p>
        <br />
        <Form>
          <Table striped bordered>
            <thead>
              <tr>
                <th>No. of cheque leaves</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20</td>
                <td>100</td>
              </tr>
              <tr>
                <td>50</td>
                <td>200</td>
              </tr>
              <tr>
                <td>100</td>
                <td>300</td>
              </tr>
            </tbody>
          </Table>
          <Form.Group className="mb-3">
            <Form.Select
              value={this.state.amount}
              onChange={this.onChequeLeavesChange}
              defaultValue="Select no. of cheque leaves"
            >
              <option value={0} selected disabled>
                Select no. of cheque leaves
              </option>
              {this.state.chequeLeavesList.map((item) => (
                <option key={toString(item.leaves)} value={item.charges}>
                  {item.leaves}
                </option>
              ))}
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
  requestChequeBook: requestChequeBook,
};

const mapStateToProps = (state) => ({
  chequeBooks: state.chequeBooks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestChequeBookPage);
