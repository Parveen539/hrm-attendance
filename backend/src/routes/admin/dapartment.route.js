import { Router } from "express";
import { saveUpdateDepartment } from "../../controllers/admin/department.controller.js";

const department = Router();
// Save Employee
department.route("/save-update-department/").get(saveUpdateDepartment);

export default department;