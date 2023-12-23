import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import AddNewExpensePage from "./pages/AddNewExpense";
import EditExpensePage from "./pages/EditExpensePage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={1500}/>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/addexpense" element={<AddNewExpensePage />} />
          <Route path="/editexpense/:id" element={<EditExpensePage />} />
        </Routes>
    </>
  );
}

export default App;
