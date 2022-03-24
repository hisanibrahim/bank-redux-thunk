import React from "react";
import { Routes, Route } from "react-router-dom";

import BalancePage from "./containers/BalancePage";
import AddBeneficiaryPage from "./containers/AddBeneficiaryPage";

const App = () => (
  <Routes>
    <Route path="/" element={<BalancePage />} />
    <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
  </Routes>
);

export default App;
