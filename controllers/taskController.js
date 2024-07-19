import asyncWrapper from "../middleware/asyncWrapper.js";
import { Task } from "../models/taskModel.js";


export const addTask= asyncWrapper( async (req,res)=>{
    await Task.create(req.body);
    res.status(201).json({msg:"Task added"});
})

export const getTask= async (req,res)=>{
    res.send("get Task");
}

export const updateTask= async (req,res)=>{
    res.send("update Task");
}

export const removeTask= async (req,res)=>{
    res.send("remove Task");
}

export const showAllTask= async (req,res)=>{
    res.send("show Task");
}