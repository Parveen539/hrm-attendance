import { asyncHandler } from "../../utils/AsyncHandler.js";
import { ApiResponse } from '../../utils/ApiResponse.js';
import bcrypt from "bcrypt";
import { create, executeCustomQuery, executeCustomQueryWithoutData } from '../../utils/CrudHelper.js';
import connectDB from "../../config/db.js"; // Ensure connectDB handles the connection properly
import {sendEmail} from "../../utils/Helper.js"


const employeeRegister = asyncHandler(async (req, res) => {
    const { 
        firstname,
        lastname,
        dateofbirth,
        gender,
        contactnumber,
        emailaddress,
        address,
        city,
        district,
        state,
        postalcode,
        maritalstatus,
        emergencycontactno,
        alternatecontactno,
        department,
        designation,
        dateofjoining,
        employeestatus,
        bloodgroup,
        aadhaar,
        pan,
        bankname,
        ifsccode,
        upidid,
        accountno,
        profilepic
    } = req.body;

    // Input validation
    if (!firstname) return res.status(400).json(new ApiResponse(400, null, "Name is required."));
    if (!dateofjoining) return res.status(400).json(new ApiResponse(400, null, "Join Date is required."));


    try {
           
        const salt = await bcrypt.genSalt(10); //generating salt     
        const secPass = await bcrypt.hash(process.env.DEFAULT_PASSWORD, salt);
        
        const connection = connectDB(); 

        const result = await create(
            'employee',
            { 
                FirstName : firstname,
                LastName : lastname,
                DateOfBirth : dateofbirth,
                Gender : gender,
                ContactNumber : contactnumber,
                EmailAddress : emailaddress,
                Address : address,
                City : city,
                District : district,
                State : state,
                PostalCode : postalcode,
                MaritalStatus : maritalstatus,
                EmergencyContactNo : emergencycontactno,
                AlternateContactNo : alternatecontactno,
                Department : department,
                Designation : designation,
                DateOfJoining : dateofjoining,
                EmployeeStatus : employeestatus,
                BloodGroup : bloodgroup,
                Aadhaar : aadhaar,
                Pan : pan,
                BankName : bankname,
                IFSCCode : ifsccode,
                UPIDid : upidid,
                AccountNo : accountno,
                ProfilePic : profilepic,
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
            employee: { id: result.insertId, firstname, lastname },
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

const employeeRetrieveByID = asyncHandler(async (req, res) => {
    const { employeeid } = req.body;
    try {
        const connection = connectDB(); 
        const sql = `SELECT * FROM employee WHERE EmployeeID = ${employeeid}`;
        const result = await executeCustomQueryWithoutData(sql, connection);
        
        //console.log(result.length());        
        // Check if employee existed
        if (Object.keys(result).length === 0) return res.status(404).json(new ApiResponse(404, null, `Employee with Employee ID ${employeeid} does not exist.`));

        res.status(200).json({
            result
        });
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const employeeDeleteByID = asyncHandler(async (req, res) => {
    const { employeeid } = req.body;
    try {
        const connection = connectDB(); 
        const sql = `DELETE * FROM employee WHERE EmployeeID = ${employeeid}`;
        const result = await executeCustomQuery(sql, connection);
        
        // Check if employee existed
        if (Object.keys(result).length === 0) return res.status(404).json(new ApiResponse(404, null, `Employee with Employee ID ${employeeid} does not exist.`));

        res.status(204).json(new ApiResponse(204, null, `Employee ID ${employeeid} deleted successfully.`));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
});

const employeeUpdateByID = asyncHandler(async (req, res) => {
    const { 
        employeeid,
        firstname,
        lastname,
        dateofbirth,
        gender,
        contactnumber,
        emailaddress,
        address,
        city,
        district,
        state,
        postalcode,
        maritalstatus,
        emergencycontactno,
        alternatecontactno,
        department,
        designation,
        dateofjoining,
        employeestatus,
        bloodgroup,
        aadhaar,
        pan,
        bankname,
        ifsccode,
        upidid,
        accountno,
        profilepic,
    } = req.body;


    try {
          const connection = connectDB(); 
        
        let updatefields = `FirstName = '${firstname}', `;
        updatefields += `LastName = '${lastname}', `;
        updatefields += `DateOfBirth = '${dateofbirth}', `;
        updatefields += `Gender = '${gender}', `;
        updatefields += `ContactNumber = '${contactnumber}', `;
        updatefields += `EmailAddress = '${emailaddress}', `;
        updatefields += `Address = '${address}', `;
        updatefields += `City = '${city}', `;
        updatefields += `District = '${district}', `;
        updatefields += `State = '${state}', `;
        updatefields += `PostalCode = '${postalcode}', `;
        updatefields += `MaritalStatus = '${maritalstatus}', `;
        updatefields += `EmergencyContactNo = '${emergencycontactno}', `;
        updatefields += `AlternateContactNo = '${alternatecontactno}', `;
        updatefields += `Department = '${department}', `;
        updatefields += `Designation = '${designation}', `;
        updatefields += `DateOfJoining = '${dateofjoining}', `;
        updatefields += `EmployeeStatus = '${employeestatus}', `;
        updatefields += `BloodGroup = '${bloodgroup}', `;
        updatefields += `Aadhaar = '${aadhaar}', `;
        updatefields += `Pan = '${pan}', `;
        updatefields += `BankName = '${bankname}', `;
        updatefields += `IFSCCode = '${ifsccode}', `;
        updatefields += `UPIDid = '${upidid}', `;
        updatefields += `AccountNo = '${accountno}', `;
        updatefields += `ProfilePic = '${profilepic}' `;
        
        

        const sql = `UPDATE employee SET ${updatefields} WHERE EmployeeId = ${employeeid}; `;
        const result = await executeCustomQueryWithoutData(sql, connection);
        
    //     // Check if employee existed
        //if (!result.affectedRows) return res.status(404).json(new ApiResponse(404, null, `Employee with Employee ID ${employeeid} does not exist.`));

        res.status(204).json(new ApiResponse(204, null, `Employee ID ${employeeid} updated successfully.`));
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error."));
    }
    
});

export { employeeRegister, employeeRetrieveAll, employeeRetrieveByID, employeeUpdateByID };