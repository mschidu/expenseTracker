const { PrismaClient } = require('@prisma/client') 
const  { PrismaLibSQL } = require('@prisma/adapter-libsql')
const { createClient } = require('@libsql/client')

const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })


async function newExpenseQuery(){
    const newExpense = await prisma.expenses.create({
        data : {
            name : 'Coffee + cigg',
            category : 'Food & Drinks',
            amount : 30,
            createdAt: new Date().toISOString(),
            month: new Date().toLocaleString("en-US", { month: "long" }),
            year: parseInt(new Date().getFullYear())
        }
    })
    console.log(newExpense)
}



newExpenseQuery()
.then( async () => {
    await prisma.$disconnect()
}).catch( async (err)=> {
    console.log(err)
    await prisma.$disconnect()
    process.exit(1)
})
