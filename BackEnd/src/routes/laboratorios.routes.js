import { Router } from "express";
import { metod as laboratoriosControler } from "../controller/laboratorios.controler";

const router = Router();

router.get("/", laboratoriosControler.getLaboratorios); //select * from
router.post("/insert", laboratoriosControler.addLaboratorios); // inster into  tbl
router.put("/update", laboratoriosControler.updateLaboratorios);// update tbl 
router.put("/delete", laboratoriosControler.deleteLaboratorios);// update estado 0




export default router;
