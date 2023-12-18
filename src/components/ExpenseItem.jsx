import RupeeIcon from "./RupeeIcon";

function ExpenseItem(props) {
  const { name, category, amount } = props;
  return (
    <>
      <div className="flex gap-2">
        <div className="bg-slate-50 w-16 h-16 flex justify-center items-center rounded-md drop-shadow-sm">
          <RupeeIcon />
        </div>
        <div className="bg-slate-50 w-full h-16 flex items-center justify-between rounded-md drop-shadow-sm px-4">
          <div className="flex flex-col">
            <p className="font-bold">{name}</p>
            <p className="font-medium text-sm text-gray-500">{category}</p>
          </div>
          <div>
            <p className="font-extrabold">₹ {amount.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
