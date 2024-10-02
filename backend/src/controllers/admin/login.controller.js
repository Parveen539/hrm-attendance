import connectDB from "../../config/db.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/AsyncHandler.js";
import bcrypt from "bcrypt"
import { executeCustomQuery, readTable } from "../../utils/CrudHelper2.js";
import jwt from "jsonwebtoken";


const loginCheck = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).json(new ApiResponse(400, null, "Email is required"));
        }
        if (!password) {
            return res.status(400).json(new ApiResponse(400, null, "Password is required"));
        }
        const connection = connectDB()
        const sql = `SELECT EmployeeID, EmailAddress, password FROM employee where EmailAddress = '${email}'`;

        const result = await executeCustomQuery(sql, connection)
        if (result.length === 0) {
            return res.status(400).json(new ApiResponse(400, null, "Please Login with valid ceredentials"));
        }

        const passCompare = await bcrypt.compare(password, result[0].password);
        if (!passCompare) {
            return res.status(400).json(new ApiResponse(400, null, "Please Login with valid ceredentials"));
        }
        const payload = {
            user: {
                id: result[0].EmployeeID
            }
        }
        const authToken = jwt.sign(payload, process.env.ACCESS_TOKEN)

        return res.status(500).json(new ApiResponse(500, authToken, "Login Succesfull"));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
})
const changePassword =asyncHandler(async(req,res)=>{
const {EmployeeID,password,newPassword}=req.body;
   try {
    const sql = `SELECT password FROM employee where EmployeeID = '${EmployeeID}'`;
    const connection=connectDB();
    const result = await executeCustomQuery(sql, connection)
    if (result.length === 0) {
        return res.status(404).json(new ApiResponse(404, null, "Error Record Not found"));
    }

    const passCompare = await bcrypt.compare(password, result[0].password);
    if (!passCompare) {
        return res.status(400).json(new ApiResponse(400, null, "Old password does not match"));
    }
    const salt = await bcrypt.genSalt(10); //generating salt
        const secPass = await bcrypt.hash(newPassword, salt);
        const updatedSql=`UPDATE employee SET password='${secPass}' WHERE EmployeeID = '${EmployeeID}'`
        const updateStatus=await executeCustomQuery(updatedSql,connection)
        return res.status(201).json(new ApiResponse(201, updateStatus, "Password Changed Succesfully"));
   } catch (error) {
    return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
   }
})
const forgetPassword =asyncHandler(async(req,res)=>{
const {EmployeeID,newPassword}=req.body;
   try {
    const sql = `SELECT password FROM employee where EmployeeID = '${EmployeeID}'`;
    const connection=connectDB();
    const result = await executeCustomQuery(sql, connection)
    if (result.length === 0) {
        return res.status(404).json(new ApiResponse(404, null, "Error Record Not found"));
    }

    const passCompare = await bcrypt.compare(password, result[0].password);
    if (!passCompare) {
        return res.status(400).json(new ApiResponse(400, null, "Old password does not match"));
    }
    const salt = await bcrypt.genSalt(10); //generating salt
        const secPass = await bcrypt.hash(newPassword, salt);
        const updatedSql=`UPDATE employee SET password='${secPass}' WHERE EmployeeID = '${EmployeeID}'`
        const updateStatus=await executeCustomQuery(updatedSql,connection)
        return res.status(201).json(new ApiResponse(201, updateStatus, "Password Changed Succesfully"));
   } catch (error) {
    return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
   }
})
export { loginCheck, changePassword };