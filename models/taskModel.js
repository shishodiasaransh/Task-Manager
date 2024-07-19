import mongoose from "mongoose"
const taskSchema = mongoose.Schema ({
    name:{
        type:String,
        required:[true,"Please Enter your full Name"],
        trim : true,
        maxLength:[20,"name cannot be more than 20 char"],
    },
    completed:{
        type:Boolean,
        default: false,
    },
    
},
{timestamps:true}
);

export const Task=mongoose.model('task',taskSchema);