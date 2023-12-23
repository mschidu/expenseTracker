function TotalSpentCard(props) {
  const { expenses } = props;

  const currentMonth = new Date().toLocaleString('en-US',{month : 'long'})

  const totalSpent = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);
  return (
    <>
      <section className="container mx-auto bg-[#42224A] w-[450px] h-[200px] rounded-2xl flex flex-col items-center justify-center gap-3">
        <p className="text-white text-lg">Total Expense in {currentMonth} Month</p>
        <p className="text-white font-bold text-3xl">
          ₹ {totalSpent.toLocaleString()}
        </p>
      </section>
    </>
  );
}

export default TotalSpentCard;
