import React from "react";
import { Routes, Route } from "react-router-dom";

import BalancePage from "./containers/BalancePage";

const App = () => (
  <Routes>
    <Route path="/" element={<BalancePage />} />
  </Routes>
);

export default App;
