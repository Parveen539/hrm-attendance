import { Router } from "express";
import { saveUpdateDepartment } from "../../controllers/admin/department.controller.js";

const department = Router();
// Save or update department
department.route("/save-update-department").post(saveUpdateDepartment);

export default department;
