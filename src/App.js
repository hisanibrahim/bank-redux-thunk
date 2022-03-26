import React from "react";
import { Routes, Route } from "react-router-dom";

import BalancePage from "./containers/BalancePage";
import AddBeneficiaryPage from "./containers/AddBeneficiaryPage";
import CreateTransactionPage from "./containers/CreateTransactionPage";
import RequestChequeBookPage from "./containers/RequestChequeBookPage";
import MonthlyTransactionsPage from "./containers/MonthlyTransactionsPage";

const App = () => (
  <Routes>
    <Route path="/" element={<BalancePage />} />
    <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
    <Route path="/create-transaction" element={<CreateTransactionPage />} />
    <Route path="/request-cheque-book" element={<RequestChequeBookPage />} />
    <Route path="/monthly-transactions" element={<MonthlyTransactionsPage />} />
  </Routes>
);

export default App;
