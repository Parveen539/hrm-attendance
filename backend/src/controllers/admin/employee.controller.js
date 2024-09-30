import { asyncHandler } from "../../utils/AsyncHandler.js";
import { ApiResponse } from '../../utils/ApiResponse.js';
import { create } from '../../utils/CrudHelper.js';
import connectDB from "../../config/db.js"; // Ensure connectDB handles the connection properly

const employeeRegister = asyncHandler(async (req, res) => {
    const { name } = req.body;

    // Input validation
    if (!name) return res.status(400).json(new ApiResponse(400, null, "Name is required."));

    try {
        const connection = connectDB(); 
        const result = await create('zarud_employee', { name }, connection);
        
        // Check if employee was created
        if (!result.affectedRows) return res.status(400).json(new ApiResponse(400, null, "Failed to register employee."));

        res.status(201).json({
            message: 'Employee registered successfully',
            employee: { id: result.insertId, name }
        });
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

export { employeeRegister };