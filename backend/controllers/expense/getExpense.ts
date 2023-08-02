import { Router, Request, Response } from 'express';
import {ExpenseSchema} from "../../models/expenseModel"

export const getExpense = Router();

getExpense.get('/get-expenses', async (req: Request, res: Response) =>  {
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
})
