import { useState,useEffect } from "react";

import Navbar from "../components/Navbar";
import TodayExpenseList from "../components/TodayExpenseList";
import TotalSpentCard from "../components/TotalSpentCard";
import PastThisMonthExpenseList from "../components/PastThisMonthExpenseList";

function DashboardPage() {
    const [ expenseData,setExpenseData ] = useState([])
    useEffect(()=>{
        async function getAllExpenses(){
            const res = await fetch('/expenses.json')
            const data = await res.json()
            setExpenseData(data.expenses)
        }
        getAllExpenses()
    },[])
  return (
    <>
      <div className="flex flex-col gap-5">
        <Navbar />
        <TotalSpentCard expenses = {expenseData}/>
        <TodayExpenseList expenses = {expenseData}/>
        <PastThisMonthExpenseList expenses = {expenseData}/>
      </div>
    </>
  );
}

export default DashboardPage;
