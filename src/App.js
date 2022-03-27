import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import BalancePage from "./containers/BalancePage";
import AddBeneficiaryPage from "./containers/AddBeneficiaryPage";
import CreateTransactionPage from "./containers/CreateTransactionPage";
import RequestChequeBookPage from "./containers/RequestChequeBookPage";
import MonthlyTransactionsPage from "./containers/MonthlyTransactionsPage";

const App = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Swiss Bank
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<BalancePage />} />
      <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
      <Route path="/create-transaction" element={<CreateTransactionPage />} />
      <Route path="/request-cheque-book" element={<RequestChequeBookPage />} />
      <Route
        path="/monthly-transactions"
        element={<MonthlyTransactionsPage />}
      />
    </Routes>
  </>
);

export default App;
