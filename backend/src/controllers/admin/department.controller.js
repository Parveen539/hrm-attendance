import { asyncHandler } from "../../utils/AsyncHandler.js";
import { ApiResponse } from '../../utils/ApiResponse.js';
import { create, read, remove, update } from '../../utils/CrudHelper.js'; 
import connectDB from "../../config/db.js"; 

// Save or update department
const saveUpdateDepartment = asyncHandler(async (req, res) => {
    const { departmentName, dbId } = req.body;

    // Validate department name
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

        // Update if dbId exists, otherwise create a new department
        const response = dbId 
            ? await update('department', { name: departmentName }, { id: dbId }, connection)
            : await create('department', { name: departmentName }, connection);

        // Check response for affected rows
        if (!response.affectedRows) {
            return res.status(400).json(new ApiResponse(400, null, "Operation failed. Please try again."));
        }

        return res.status(dbId ? 200 : 201).json(new ApiResponse(dbId ? 200 : 201, null, dbId ? "Department updated successfully." : "Department created successfully."));
    } catch (error) {
        console.error('Error in saveUpdateDepartment:', error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

// Delete department
const deleteDepartment = asyncHandler(async (req, res) => {
    const { dbId } = req.params;

    // Validate department ID
    if (!dbId) {
        return res.status(400).json(new ApiResponse(400, null, 'Invalid department id.'));
    }

    try {
        const connection = connectDB();
        const response = await remove('department', { id: dbId }, connection);

        // Check response for affected rows
        if (!response.affectedRows) {
            return res.status(400).json(new ApiResponse(400, null, "Failed to delete department."));
        }

        return res.status(200).json(new ApiResponse(200, null, "Department deleted successfully."));
    } catch (error) {
        console.error('Error in deleteDepartment:', error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const retrieveALlDepartment = asyncHandler(async(req, res) => {
    const {dbId} = req.params;
    try {
        const connection = connectDB();
        const response = await read('department', [], connection);
        return res.status(200).json(new ApiResponse(200, response, "Department retrieved successfully."))
    } catch (error) {
        console.error("Error in retrieving all department.");
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});
const retrieveALlDepartmentById = asyncHandler(async(req, res) => {
    const {dbId} = req.params;
    if(!dbId) return res.status(400).json(new ApiResponse(200, [], "Department id is required."));
    try {
        const connection = connectDB();
        const data = dbId ? {id: dbId} : null;
        const response = await read('department', data, connection);
        return res.status(200).json(new ApiResponse(200, response, "Department retrieved successfully."))
    } catch (error) {
        console.error("Error in retrieving all department.");
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

export { saveUpdateDepartment, deleteDepartment, retrieveALlDepartment, retrieveALlDepartmentById };