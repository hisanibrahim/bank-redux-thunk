import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Container, Card, Button, Row, Col } from "react-bootstrap";

import Loading from "../components/Loading";
import { getAccountBalance } from "../actions/accounts";
import { getBeneficiaries } from "../actions/beneficiaries";

const BalancePage = (props) => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(getAccountBalance("1"));
    dispatch(getBeneficiaries("1"));
  }, []);
  return (
    <Container>
      <br />
      <Table striped bordered>
        <thead>
          <tr>
            <th>Accounts</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.loading ? (
            <Loading />
          ) : (
            accounts.accounts.map((account) => {
              return (
                <tr key={account.accountType}>
                  <td>{account.accountType}</td>
                  <td>{account.accountBalance}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Add Beneficiary</Card.Title>
              <Card.Text>
                Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
                mollis mi nec, fermentum quam.
              </Card.Text>
              <Link to="/add-beneficiary">
                <Button variant="primary">Add Beneficiary</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Create Transaction</Card.Title>
              <Card.Text>
                Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
                mollis mi nec, fermentum quam.
              </Card.Text>
              <Link to="/create-transaction">
                <Button variant="primary">Create Transaction</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Request Cheque Book</Card.Title>
              <Card.Text>
                Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
                mollis mi nec, fermentum quam.
              </Card.Text>
              <Link to="/request-cheque-book">
                <Button variant="primary">Request Cheque Book</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Monthly Transactions</Card.Title>
              <Card.Text>
                Morbi dictum ullamcorper urna in aliquet. Nulla at massa mattis,
                mollis mi nec, fermentum quam.
              </Card.Text>
              <Link to="/monthly-transactions">
                <Button variant="primary">Monthly Transactions</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BalancePage;
