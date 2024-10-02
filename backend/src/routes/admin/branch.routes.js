import { Router } from "express";
import { branchAdd } from "../../controllers/admin/branch.controller.js";

const batchRoute=Router();

batchRoute.route("/add/").post(branchAdd)
export default batchRoute;