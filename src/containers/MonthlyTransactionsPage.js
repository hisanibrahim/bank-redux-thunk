import React from "react";
import { connect } from "react-redux";
import { Form, Button, Table, Container } from "react-bootstrap";

import Loading from "../components/Loading";
import { getTransactions } from "../actions/transactions";

class MonthlyTransactionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      monthYear: "2022-03",
    };
  }

  onMonthYearChange = (e) => {
    this.setState({
      monthYear: e.target.value,
    });
  };

  onSubmit = (e) => {
    try {
      e.preventDefault();
      const { monthYear } = this.state;

      this.props.getTransactions({
        year: monthYear.split("-")[0],
        month: monthYear.split("-")[1],
      });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    return (
      <Container>
        <br />
        <h3>Monthly Transactions</h3>
        <p>
          Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
          mollis mi nec, fermentum quam.
        </p>
        <br />
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Select month"
              type="month"
              value={this.state.monthYear}
              onChange={this.onMonthYearChange}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form.Group>
          <br />
          {this.props.transactions.loading ? (
            <Loading />
          ) : this.props.transactions.data.length > 0 ? (
            <Form.Group>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Transaction Type</th>
                    <th>Transaction ID</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.transactions.data.map((t) => {
                    return (
                      <tr>
                        <td>{t.trnDtTime}</td>
                        <td>{t.trnDesc}</td>
                        <td>{t.trnAmt}</td>
                        <td>{t.trnType}</td>
                        <td>{t.trnId}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Form.Group>
          ) : (
            <Form.Group>
              <p>No transactions found. Select another month and try again.</p>
            </Form.Group>
          )}
          <Form.Group>
            {this.state.errorMessage ? <p>{this.state.errorMessage} </p> : null}
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  getTransactions: getTransactions,
};

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthlyTransactionsPage);
