import mongoose from 'mongoose';

export const connectDb = async () => {
    const mongo_url:string | undefined = process.env.MONGO_URL;
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(mongo_url!)
        console.log("DB Connected");
        
    } catch (err) {
        console.log('DB Connection Error');
        
    }
}
