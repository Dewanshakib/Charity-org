import mongoose, { Schema } from "mongoose";


const registerMembers = new Schema({
  name:{
    type:String,
    required:true
  },
  fatherName:{
    type:String,
    required:true
  },
  motherName:{
    type:String,
    required:true
  },
  birthDate:{
    type:String,
    required:true
  },
  number:{
    type:Number,
    required:true
  },
  className:{
    type:String,
    required:true
  },
  studying:{
    type:String,
    required:true
  }
})

export const registerData = mongoose.models.registeredUser || mongoose.model("registeredUser", registerMembers);