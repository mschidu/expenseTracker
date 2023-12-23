import { useState } from "react";
import Navbar from "../components/Navbar";
import BackArrow from "../components/ui/BackArrow";
import { Link,useNavigate } from "react-router-dom";

import {toast} from 'react-toastify'

function AddExpensePage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    amount: 0,
  });
  const navigate = useNavigate()

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleForm(e) {
    e.preventDefault()
    try {
        const res = await toast.promise(fetch('http://192.168.1.6:8000/api/expenses',{
            method : "POST",
            headers : {
                "content-type":"application/json"
            },
            body : JSON.stringify(formData)
        }),{
          pending : 'Trying to add a new Expense!',
          success : ' Added a new Expense',
          error : 'Oh-No! Error while adding, try again later'
        })
        await res.json()
        navigate('/dashboard')
        
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <Navbar />
      <Link to="/dashboard">
        <div className=" flex mx-5 my-5">
          <BackArrow />
          <p>Back</p>
        </div>
      </Link>
      <p className="p-4 text-center font-bold text-lg">Add a new Expense</p>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-md">
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Expense Name
                </label>
                <input
                  onChange={onChange}
                  value={formData.name}
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Type Expense name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="amount"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Amount
                </label>
                <input
                  onChange={onChange}
                  value={formData.amount}
                  type="number"
                  name="amount"
                  id="price"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="₹299"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <select
                  onChange={onChange}
                  name="category"
                  value={formData.category}
                  id="category"
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400">
                  <option value="">Select category</option>
                  <option value="Housing">Housing</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Food & Drinks">Food & Drinks</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Debt Payments">Debt Payments</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Personal Care">Personal Care</option>
                  <option value="Education">Education</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              onClick={handleForm}
              className="bg-[#42224A] hover:bg-[#622b70] mt-4 items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white sm:mt-6">
              Add Expense
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default AddExpensePage;
