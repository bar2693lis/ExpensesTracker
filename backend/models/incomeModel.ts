import mongoose, { Schema, Model } from 'mongoose';

interface IIncome {
    title: string;
    amount: number;
    type: string;
    date: string;
    category: string;
    description: string;
  }

export const IncomeSchema = mongoose.model("Income", new Schema<IIncome,  Model<IIncome>>({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    },
    type: {
        type: String,
        default: "income",
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20
    },
}, {timestamps: true}));