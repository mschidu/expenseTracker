import ExpenseItem from "./ExpenseItem";

function TodayExpenseList(props) {
  const { expenses } = props;

  const currentTime = new Date()

  console.log()
  

  return (
    <>
      <section className="container mx-auto w-[450px] h-auto">
        {/* <p className="text-sm text-gray-500 font-bold my-2">TODAY</p> */}
        <div className="flex flex-col gap-2">
          {expenses.length > 0 ? (
            expenses.map((expense) => {
              return (
                <ExpenseItem
                  id = {expense.id}
                  key={expense.id}
                  name={expense.name}
                  category={expense.category}
                  amount={expense.amount}
                />
              );
            })
          ) : (
            <p className="text-center">Add a new Expense for today!</p>
          )}
        </div>
      </section>
    </>
  );
}

export default TodayExpenseList;

// {getTodayExpenses.map((expense) => {
//   return (
//     <ExpenseItem
//       key={expense.id}
//       name={expense.name}
//       category={expense.category}
//       amount={expense.amount}
//     />
//   );
// })}
