import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import TodayExpenseList from "../components/TodayExpenseList";
import TotalSpentCard from "../components/TotalSpentCard";
import PastThisMonthExpenseList from "../components/PastThisMonthExpenseList";

import Loader from "../components/ui/Loader";
import Error from "../components/ui/Error";

function DashboardPage() {
  const [expenseData, setExpenseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    async function getAllExpenses() {
      const res = await fetch("http://192.168.1.6:8000/api/expenses/monthly");
      const data = await res.json();
      setExpenseData(data);
      setIsLoading(false);
    }
    getAllExpenses().catch((err) => setHasError(err));
  }, []);

  if (hasError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {!isLoading && (
        <div className="flex flex-col gap-5">
          <Navbar />
          <TotalSpentCard expenses={expenseData} />
          <TodayExpenseList expenses={expenseData.reverse()} />
        </div>
      )}
    </>
  );
}

export default DashboardPage;
