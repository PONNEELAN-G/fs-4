import { model, Schema } from "mongoose";

const schema=new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
})

const Student=model('Student',schema)

export default Student