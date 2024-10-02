import { asyncHandler } from "../../utils/AsyncHandler.js";
import { ApiResponse } from '../../utils/ApiResponse.js';
import { create, read, update } from '../../utils/CrudHelper.js'; // Ensure you have the right import
import connectDB from "../../config/db.js"; 

const saveUpdateDepartment = asyncHandler(async (req, res) => {
    const { departmentName, dbId } = req.body;

    // Check if department name is provided
    if (!departmentName) {
        return res.status(400).json(new ApiResponse(400, null, "Department name is required."));
    }

    try {
        const connection = connectDB();

        // Check for duplicate department name
        const existingDepartment = await read('department', { name: departmentName }, connection);
        if (existingDepartment.length > 0 && (!dbId || existingDepartment[0].id !== dbId)) {
            return res.status(400).json(new ApiResponse(400, null, "Department name already exists."));
        }

        // If dbId exists, update the department
        if (dbId) {
            const response = await update('department', { name: departmentName }, { id: dbId }, connection);
            if (!response.affectedRows) {
                return res.status(400).json(new ApiResponse(400, null, "Something went wrong while updating."));
            }
            return res.status(200).json(new ApiResponse(200, null, "Department updated successfully."));
        } else {
            // If no dbId, create a new department
            const response = await create('department', { name: departmentName }, connection);
            return res.status(201).json(new ApiResponse(201, null, "Department created successfully."));
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});
export {saveUpdateDepartment}