import ExpenseItem from "./ExpenseItem";

function TodayExpenseList(props) {
  const { expenses } = props;

  const todayDate = new Date().getDate();

  const getTodayExpenses = expenses.filter((expense) => {
    const checkDate = new Date(expense.createdAt).getDate();
    if (checkDate === todayDate) {
      return expense;
    }
  });

  
  return (
    <>
      <section className="container mx-auto w-[450px] h-auto">
        <p className="text-sm text-gray-500 font-bold my-2">TODAY</p>
        <div className="flex flex-col gap-2">
          {getTodayExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                name={expense.name}
                category={expense.category}
                amount={expense.amount}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default TodayExpenseList;
