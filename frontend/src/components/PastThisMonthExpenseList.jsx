import ExpenseItem from "./ExpenseItem";

function PastThisMonthExpenseList(props) {
    const {expenses} = props;

    const todayDate = new Date().getDate()
    const getByDate = expenses.filter((expense)=>{
        const checkDate = new Date(expense.createdAt).getDate()
        if(checkDate < todayDate){
            return expense
        }
      })

  return (
    <>
      <section className="container mx-auto w-[450px] h-auto">
        <p className="text-sm text-gray-500 font-bold my-2">PAST THIS MONTH</p>
        <div className="flex flex-col gap-2">
          {getByDate.map((expense) => {
            return (
              <ExpenseItem
                id = {expense.id}
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

export default PastThisMonthExpenseList;
