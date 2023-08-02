import mongoose, { Schema, Model } from 'mongoose';

interface IExpense {
    title: string;
    amount: number;
    type: string;
    date: string;
    category: string;
    description: string;
  }

export const ExpenseSchema = mongoose.model("Expense", new Schema<IExpense,  Model<IExpense>>({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default:"expense"
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    },
}, {timestamps: true}));