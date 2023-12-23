import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import RupeeIcon from "./ui/RupeeIcon";
import { CiMenuKebab } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

function ExpenseItem(props) {
  const { id, name, category, amount } = props;

  const [toggle, setToggle] = useState(false);

  window.addEventListener("click", (e) => {
    setToggle(false);
  });

  function onToggle(e) {
    e.stopPropagation();
    setToggle(!toggle);
  }
  async function handleDelete(){
    try {
      const res = await fetch(`http://192.168.1.6:8000/api/expenses/${id}`,{
      method : "DELETE"
    })
    await res.json()
    window.location.reload()
  } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="flex gap-2 relative">
        <div className="bg-slate-50 w-16 h-16 flex justify-center items-center rounded-md">
          <RupeeIcon />
        </div>
        <div className="bg-slate-50 w-full h-16 flex items-center justify-between rounded-md px-4">
          <div className="flex flex-col">
            <p className="font-bold">{name}</p>
            <p className="font-medium text-sm text-gray-500">{category}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-extrabold">₹ {amount.toLocaleString()}</p>
            <button onClick={onToggle}>
              <CiMenuKebab />
            </button>
          </div>
        </div>
        {toggle && (
          <div className="z-50 absolute right-8 top-8 bg-[#42224A] text-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul
              className="py-2 text-sm"
              aria-labelledby="dropdownMenuIconButton">
              <Link to={`/editexpense/${id}`} className="block px-4 py-2 hover:bg-[#622b70]">
                <li className="flex items-center justify-center">
                  <div>
                    <CiEdit />
                  </div>
                  <div className="block px-4 py-2 hover:bg-[#622b70]">Edit</div>
                </li>
              </Link>
              <button onClick={handleDelete} className="w-full px-4 py-2 hover:bg-[#622b70]">
                <li className="flex items-center justify-center">
                  <div>
                    <AiOutlineDelete />
                  </div>
                  <div className="block px-4 py-2 hover:bg-[#622b70]">
                    Delete
                  </div>
                </li>
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default ExpenseItem;
