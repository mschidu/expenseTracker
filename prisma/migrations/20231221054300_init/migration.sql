-- CreateTable
CREATE TABLE "Expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "amount" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL
);
