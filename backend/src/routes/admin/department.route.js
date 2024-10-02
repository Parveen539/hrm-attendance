import { Router } from "express";
import { saveUpdateDepartment, deleteDepartment, retrieveALlDepartment, retrieveALlDepartmentById } from "../../controllers/admin/department.controller.js";

const departmentRoute = Router();
// Save or update department
departmentRoute.route('/retrieve-all-department').get(retrieveALlDepartment);
departmentRoute.route('/retrieve-all-department-by-id/:dbId').get(retrieveALlDepartmentById);
departmentRoute.route("/save-update-department").post(saveUpdateDepartment);
departmentRoute.route('/delete-department/:dbId').delete(deleteDepartment);
export default departmentRoute;