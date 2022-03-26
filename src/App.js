import React from "react";
import { Routes, Route } from "react-router-dom";

import BalancePage from "./containers/BalancePage";
import AddBeneficiaryPage from "./containers/AddBeneficiaryPage";
import CreateTransactionPage from "./containers/CreateTransactionPage";
import RequestChequeBookPage from "./containers/RequestChequeBookPage";

const App = () => (
  <Routes>
    <Route path="/" element={<BalancePage />} />
    <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
    <Route path="/create-transaction" element={<CreateTransactionPage />} />
    <Route path="/request-cheque-book" element={<RequestChequeBookPage />} />
  </Routes>
);

export default App;
