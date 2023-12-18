import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard"
import AddNewExpensePage from "./pages/AddNewExpense";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/addexpense" element={<AddNewExpensePage />} />
      </Routes>
    </>
  );
}

export default App;
