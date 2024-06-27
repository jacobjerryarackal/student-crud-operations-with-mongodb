import express from  "express";
import { create, deleteStudent, fetch, update } from "../controller/studentController.js";

const route = express.Router();

route.get("/fetch", fetch)
route.post("/create",create)
route.put("/update/:id", update)
route.delete("/delete/:id", deleteStudent)

export default route;