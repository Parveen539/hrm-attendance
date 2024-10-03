import { asyncHandler } from "../../utils/AsyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { create, read, update } from "../../utils/CrudHelper.js";
import connectDB from "../../config/db.js";

const saveUpdateDesignation = asyncHandler(async (req, res) => {
    const { departmentId, designationName, dbId } = req.body;

    // Input validation
    if (!designationName) return res.status(400).json(new ApiResponse(400, null, "Designation name is required."));
    if (!departmentId) return res.status(400).json(new ApiResponse(400, null, "Department is required."));
    if (dbId && !Number.isInteger(dbId)) return res.status(400).json(new ApiResponse(400, null, "Invalid designation ID."));

    try {
        const connection = connectDB();

        // Check for existing designation to prevent duplicates
        const filter = { department_id: departmentId, title: designationName };
        const existingDesignation = await read('designation', filter, connection);

        if (existingDesignation.length > 0 && (!dbId || existingDesignation[0].id !== dbId)) {
            return res.status(400).json(new ApiResponse(400, null, "Designation already exists."));
        }
        const checkDepartmentExistOrNot = await read('department', {id: departmentId, deleteStatus: 0}, connection);
        if(checkDepartmentExistOrNot.length === 0){
            return res.status(400).json(new ApiResponse(400, null, "Department does not exist."));
        }
        // Update or create designation
        const payload = { department_id: departmentId, title: designationName };
        const response = dbId 
            ? await update('designation', payload, { id: dbId }, connection)
            : await create('designation', payload, connection);

        if (!response.affectedRows) {
            return res.status(400).json(new ApiResponse(400, null, "Operation failed. Please try again."));
        }

        return res.status(dbId ? 200 : 201).json(new ApiResponse(dbId ? 200 : 201, null, dbId ? "Designation updated successfully." : "Designation created successfully."));
    } catch (error) {
        console.error("Error in saveUpdateDesignation:", error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const deleteDesignation = asyncHandler(async (req, res) => {
    const { dbId } = req.params;
    if (!dbId || !Number.isInteger(parseInt(dbId))) return res.status(400).json(new ApiResponse(400, null, "Invalid designation ID."));

    try {
        const connection = connectDB();
        const response = await update('designation', { deleteStatus: 1 }, { id: dbId }, connection);

        if (!response.affectedRows) {
            return res.status(400).json(new ApiResponse(400, null, "Failed to delete designation."));
        }

        return res.status(200).json(new ApiResponse(200, null, "Designation deleted successfully."));
    } catch (error) {
        console.error("Error in deleteDesignation:", error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const retrieveAllDesignation = asyncHandler(async (req, res) => {
    try {
        const connection = connectDB();
        const response = await read('designation', { deleteStatus: 0 }, connection);
        return res.status(200).json(new ApiResponse(200, response, "Designations retrieved successfully."));
    } catch (error) {
        console.error("Error in retrieveAllDesignation:", error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const retrieveDesignationById = asyncHandler(async (req, res) => {
    const { dbId } = req.params;
    if (!dbId || !Number.isInteger(parseInt(dbId))) return res.status(400).json(new ApiResponse(400, [], "Valid designation ID is required."));

    try {
        const connection = connectDB();
        const response = await read('designation', { deleteStatus: 0, id: dbId }, connection);
        return res.status(200).json(new ApiResponse(200, response, "Designation retrieved successfully."));
    } catch (error) {
        console.error("Error in retrieveDesignationById:", error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

export { saveUpdateDesignation, deleteDesignation, retrieveAllDesignation, retrieveDesignationById };
