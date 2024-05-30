import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email:{type: String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false}) // minimize false Is add for provide cartData 

const userModel = mongoose.models.user || mongoose.model("user",userSchema);
//  if modeluser create will use , ifnot create ^^^^^^^
export default userModel;