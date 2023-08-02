import { Router, Request, Response } from 'express';
import {IncomeSchema} from "../../models/incomeModel"

export const getIncomes = Router();

getIncomes.get('/get-incomes', async (req: Request, res: Response) =>  {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
})
