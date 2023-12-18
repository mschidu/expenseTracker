import expenses from '../../expenses.json'

async function getAllExpenses(){
    const res = await fetch('/expenses.json')
    const data = await res.json()
    return data
}

console.log(getAllExpenses())