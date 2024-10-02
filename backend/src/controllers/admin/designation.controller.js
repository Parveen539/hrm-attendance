import { asyncHandler } from "../../utils/AsyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { create, read, update, remove } from "../../utils/CrudHelper.js";
import connectDB from "../../config/db.js";

const saveUpdateDesignation = asyncHandler(async (req, res) => {
    const { departmentId, designationName, dbId } = req.body;
    if (!designationName) return res.status(400).json(new ApiResponse(400, null, "Designation name is required."));
    if (!departmentId) return res.status(400).json(new ApiResponse(400, null, "Department is required."));
    // Validate if dbId is a valid integer when provided
    if (dbId && !Number.isInteger(dbId)) {
        return res.status(400).json(new ApiResponse(400, null, "Invalid designation ID."));
    }
    try {
        const connection = connectDB();
        // check duplicate exist
        const existingDesignation = await read('designation', {department_id: departmentId, title: designationName}, connection);
        if(existingDesignation.length > 0 && (!dbId || existingDesignation[0].id !== dbId)){
            return res.status(400).json(new ApiResponse(400, null, "Designation already exists."));
        }
        const response = dbId
        ? await update('designation', {department_id: departmentId,title: designationName}, {id: dbId}, connection)
        : await create('designation', {department_id: departmentId, title: designationName}, connection);
        if(!response.affectedRows){
            return res.status(400).json(new ApiResponse(400, null, "Operation failed. Please try again."));
        }
        return res.status(200).json(new ApiResponse(dbId ? 200 : 201, null, dbId ? "Designation created successfully." : "Designation updated successfully."));
    } catch (error) {
        console.error("Error occurred savingUpdateDesignation:", error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const deleteDesignation = asyncHandler(async (req, res) => {
    const {dbId} = req.params;
    if(!dbId || (dbId && !Number.isInteger(dbId))) return res.status(400).json(new ApiResponse(400, null, "Invalid designation id."));
    try{
        const connection  = connectDB();
        const response = await remove('designation', {id: dbId}, connection);
        if(!response.affectedRows) return res.status(400).json(new ApiResponse(400, null, "Failed to delete designation."));
        return res.status(200).json(new ApiResponse(200, null, "Designation deleted successfully."));
    }catch(error){
        console.log("Error in delete designation: ", error);
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const retrieveAllDesignation = asyncHandler(async (req, res) => {

});

const retrieveDesignationById = asyncHandler(async (req, res) => {

});

export { saveUpdateDesignation, deleteDesignation, retrieveAllDesignation, retrieveDesignationById }