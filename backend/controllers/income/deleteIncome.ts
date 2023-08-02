import { Router, Request, Response } from 'express';
import {IncomeSchema} from "../../models/incomeModel"

export const deleteIncome = Router();

deleteIncome.delete('/delete-income/:id', async (req: Request, res: Response) =>  {
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
})
