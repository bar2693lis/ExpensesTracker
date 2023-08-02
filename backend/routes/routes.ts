import express from 'express';
import { addIncome } from '../controllers/income/addIncome';
import { getIncomes } from '../controllers/income/getIncomes';
import { deleteIncome } from '../controllers/income/deleteIncome';
import { addExpense } from '../controllers/expense/addExpense';
import { getExpense } from '../controllers/expense/getExpense';
import { deleteExpense } from '../controllers/expense/deleteExpense';

export const routes = express.Router();

routes.use(addIncome);
routes.use(getIncomes);
routes.use(deleteIncome);
routes.use(addExpense);
routes.use(getExpense);
routes.use(deleteExpense);