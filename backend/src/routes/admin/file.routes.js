import { Router } from "express";
import { dbDownload } from "../../controllers/download.controller";
const fileRouter=Router();

fileRouter.route("/database/").post(dbDownload)

