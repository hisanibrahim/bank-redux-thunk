import React from "react";
import { Routes, Route } from "react-router-dom";

import BalancePage from "./containers/BalancePage";
import AddBeneficiaryPage from "./containers/AddBeneficiaryPage";
import CreateTransactionPage from "./containers/CreateTransactionPage";

const App = () => (
  <Routes>
    <Route path="/" element={<BalancePage />} />
    <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
    <Route path="/create-transaction" element={<CreateTransactionPage />} />
  </Routes>
);

export default App;
