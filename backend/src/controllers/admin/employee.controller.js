import { asyncHandler } from "../../utils/AsyncHandler.js";
import { ApiResponse } from '../../utils/ApiResponse.js';
import bcrypt from "bcrypt";
import { create, executeCustomQuery, executeCustomQueryWithoutData } from '../../utils/CrudHelper.js';
import connectDB from "../../config/db.js"; // Ensure connectDB handles the connection properly
import {sendEmail} from "../../utils/Helper.js"


const employeeRegister = asyncHandler(async (req, res) => {
    const { 
        FirstName,
        LastName,
        DateOfBirth,
        Gender,
        ContactNumber,
        EmailAddress,
        Address,
        City,
        District,
        State,
        PostalCode,
        MaritalStatus,
        EmergencyContactNo,
        AlternateContactNo,
        Department,
        Designation,
        DateOfJoining,
        EmployeeStatus,
        BloodGroup,
        Aadhaar,
        Pan,
        BankName,
        IFSCCode,
        UPIDid,
        AccountNo,
        ProfilePic
    } = req.body;

    // Input validation
    if (!FirstName) return res.status(400).json(new ApiResponse(400, null, "Name is required."));
    if (!DateOfJoining) return res.status(400).json(new ApiResponse(400, null, "Join Date is required."));


    try {
           
        const salt = await bcrypt.genSalt(10); //generating salt     
        const secPass = await bcrypt.hash(process.env.DEFAULT_PASSWORD, salt);
        
        const connection = connectDB(); 

        const result = await create(
            'employee',
            { 
                FirstName : FirstName,
                LastName : LastName,
                DateOfBirth : DateOfBirth,
                Gender : Gender,
                ContactNumber : ContactNumber,
                EmailAddress : EmailAddress,
                Address : Address,
                City : City,
                District : District,
                State : State,
                PostalCode : PostalCode,
                MaritalStatus : MaritalStatus,
                EmergencyContactNo : EmergencyContactNo,
                AlternateContactNo : AlternateContactNo,
                Department : Department,
                Designation : Designation,
                DateOfJoining : DateOfJoining,
                EmployeeStatus : EmployeeStatus,
                BloodGroup : BloodGroup,
                Aadhaar : Aadhaar,
                Pan : Pan,
                BankName : BankName,
                IFSCCode : IFSCCode,
                UPIDid : UPIDid,
                AccountNo : AccountNo,
                ProfilePic : ProfilePic,
                password : secPass         
            }, 
            connection
        );
        
        // Check if employee was created
        if (!result.affectedRows) return res.status(400).json(new ApiResponse(400, null, "Failed to register employee."));
        //*********Commented for testing only */
        //const htmlTemptale=`<h1> Your Login details</h1><p>Email: ${email}</p><p>Password: ${process.env.DEFAULT_PASSWORD}</p><h4>Please Change Your Password upon login</h4>`
        //const mailRes=await sendEmail(email,"Welcome On Board",htmlTemptale)
        
        res.status(201).json({
            message: 'Employee registered successfully',
            employee: { id: result.insertId, FirstName, LastName },
            //************Commented for testing */
            //emailStatus:mailRes
        });
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const employeeRetrieveAll = asyncHandler(async (req, res) => {
    try {
        const connection = connectDB(); 
        const sql = "SELECT * FROM employee;";
        const result = await executeCustomQueryWithoutData(sql, connection);
                
        // Check if employee existed
        if (Object.keys(result).length === 0) return res.status(404).json(new ApiResponse(404, null, "No Employee Exist in Table."));

        res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const employeeRetrieveFilteredRecords = asyncHandler(async (req, res) => {
    const cols = Object.keys(req.body);
    const vals = Object.values(req.body);
    let conditionClauses = ``;
    for (var keys in cols){
        conditionClauses += `${cols[keys]} = '${vals[keys]}' AND `;
    }
    conditionClauses = conditionClauses.slice(0, -5);

    try {
        const connection = connectDB();
        
        const sql = `SELECT * FROM employee WHERE ${conditionClauses};`;

        const result = await executeCustomQueryWithoutData(sql, connection);
        
        // //console.log(result.length());        
        // // Check if employee existed
        if (Object.keys(result).length === 0) return res.status(404).json(new ApiResponse(404, null, `Employee with Employee ID ${EmployeeId} does not exist.`));

        return res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
    
});

const employeeDeleteByID = asyncHandler(async (req, res) => {
    const { EmployeeId } = req.body;
    try {
        const connection = connectDB(); 
        const sql = `DELETE * FROM employee WHERE EmployeeId = ${EmployeeId}`;
        const result = await executeCustomQuery(sql, connection);
        
        // Check if employee existed
        if (Object.keys(result).length === 0) return res.status(404).json(new ApiResponse(404, null, `Employee with Employee ID ${EmployeeId} does not exist.`));

        res.status(204).json(new ApiResponse(204, null, `Employee ID ${EmployeeId} deleted successfully.`));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const employeeUpdateByID = asyncHandler(async (req, res) => {
    const { 
        EmployeeId,
        FirstName,
        LastName,
        DateOfBirth,
        Gender,
        ContactNumber,
        EmailAddress,
        Address,
        City,
        District,
        State,
        PostalCode,
        MaritalStatus,
        EmergencyContactNo,
        AlternateContactNo,
        Department,
        Designation,
        DateOfJoining,
        EmployeeStatus,
        BloodGroup,
        Aadhaar,
        Pan,
        BankName,
        IFSCCode,
        UPIDid,
        AccountNo,
        ProfilePic,
    } = req.body;


    try {
          const connection = connectDB(); 
        
        let updatefields = `FirstName = '${FirstName}', `;
        updatefields += `LastName = '${LastName}', `;
        updatefields += `DateOfBirth = '${DateOfBirth}', `;
        updatefields += `Gender = '${Gender}', `;
        updatefields += `ContactNumber = '${ContactNumber}', `;
        updatefields += `EmailAddress = '${EmailAddress}', `;
        updatefields += `Address = '${Address}', `;
        updatefields += `City = '${City}', `;
        updatefields += `District = '${District}', `;
        updatefields += `State = '${State}', `;
        updatefields += `PostalCode = '${PostalCode}', `;
        updatefields += `MaritalStatus = '${MaritalStatus}', `;
        updatefields += `EmergencyContactNo = '${EmergencyContactNo}', `;
        updatefields += `AlternateContactNo = '${AlternateContactNo}', `;
        updatefields += `Department = '${Department}', `;
        updatefields += `Designation = '${Designation}', `;
        updatefields += `DateOfJoining = '${DateOfJoining}', `;
        updatefields += `EmployeeStatus = '${EmployeeStatus}', `;
        updatefields += `BloodGroup = '${BloodGroup}', `;
        updatefields += `Aadhaar = '${Aadhaar}', `;
        updatefields += `Pan = '${Pan}', `;
        updatefields += `BankName = '${BankName}', `;
        updatefields += `IFSCCode = '${IFSCCode}', `;
        updatefields += `UPIDid = '${UPIDid}', `;
        updatefields += `AccountNo = '${AccountNo}', `;
        updatefields += `ProfilePic = '${ProfilePic}' `;
        
        

        const sql = `UPDATE employee SET ${updatefields} WHERE EmployeeId = ${EmployeeId}; `;
        const result = await executeCustomQueryWithoutData(sql, connection);
        
    //     // Check if employee existed
        //if (!result.affectedRows) return res.status(404).json(new ApiResponse(404, null, `Employee with Employee ID ${EmployeeId} does not exist.`));

        res.status(204).json(new ApiResponse(204, null, `Employee ID ${EmployeeId} updated successfully.`));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
    
});

export { employeeRegister, employeeRetrieveAll, employeeRetrieveFilteredRecords, employeeUpdateByID };