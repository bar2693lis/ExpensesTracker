import { Router, Request, Response } from 'express';
import {IncomeSchema} from "../../models/incomeModel"

export const addIncome = Router();

addIncome.post('/add-income', async (req: Request, res: Response) =>  {
    const {title, amount, category, description, date}  = req.body
    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!income.title || !income.category || !income.description || !income.date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(income.amount <= 0 || typeof income.amount !== 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch(err) {
        res.status(500).json({message: 'Server Error'})
    }  
    
})
