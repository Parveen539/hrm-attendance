import { Router } from "express";
import mysql2 from 'mysql2';

//import { asyncHandler } from "../../utils/AsyncHandler.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const defineRoute = Router();

const tempTablesDefinition = defineRoute.post('/', (req, res) => { 
    try {
        let sql = `ALTER TABLE employee ADD BranchId INT, ShiftId INT, DeleteStatus INT, FOREIGN KEY (BranchId) REFERENCES branch(id), FOREIGN KEY (ShiftId) REFERENCES zarud_shift(shift_id)`;
        const connection = connectDB();
        const result = executeCustomQueryWithoutData(sql, connection);
        return res.status(200).json({ "message" : "Done"});
        
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});


export { tempTablesDefinition };