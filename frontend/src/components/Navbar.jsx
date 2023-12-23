import { Link } from "react-router-dom";
import Button from "./ui/Button";

function Navbar() {
  function handlesignOut() {}
  return (
    <>
      <nav className="bg-[#42224A] p-4">
        <div className="w-[100%] flex items-center justify-between">
          <Link to="/dashboard">
            <p className="text-white font-bold text-lg">ExpenseTracker</p>
          </Link>
          <ul className="flex gap-4 items-center">
            <Link to="/addexpense">
            <li>
              <Button className="border rounded-md p-2 text-sm text-white">
                Add Expense
              </Button>
            </li>
            </Link>
            <li>
              <Button
                onClick={handlesignOut}
                className="hover:underline text-sm text-white">
                Sign out
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


