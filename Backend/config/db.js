import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect(`mongodb+srv://greatstack:147258369@greatstack.tpm7oye.mongodb.net/food-del`).then(()=>console.log("DB connected"));
}