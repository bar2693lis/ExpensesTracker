import { Router, Request, Response } from 'express';
import {ExpenseSchema} from "../../models/expenseModel";

export const deleteExpense = Router();

deleteExpense.delete('/delete-expense/:id', async (req: Request, res: Response) =>  {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
})
