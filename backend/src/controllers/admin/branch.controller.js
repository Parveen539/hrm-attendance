import connectDB from "../../config/db.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/AsyncHandler.js";
import { create } from "../../utils/CrudHelper.js";

export const branchAdd=asyncHandler(async(req,res)=>{
    const {branch_name,branch_address,branch_latitude,branch_longitude}=req.body;
    if(!branch_name) return res.status(400).json(new ApiResponse(400, null, "Branch_name is required."));
    if(!branch_address) return res.status(400).json(new ApiResponse(400, null, "Branch_address is required."));
    if(!branch_latitude) return res.status(400).json(new ApiResponse(400, null, "Branch_latitude is required."));
    if(!branch_longitude) return res.status(400).json(new ApiResponse(400, null, "Branch_longitude is required."));
    try {
        const connection=connectDB();
        const response= await create('branch',{
            branch_name:branch_name,
            branch_address:branch_address,
            branch_latitude:branch_latitude,
            branch_longitude:branch_longitude,
        },connection)
        return res.status(201).json(new ApiResponse(201, null, "Branch created successfully."));
    } catch (error) {
        
    }
    
}) 