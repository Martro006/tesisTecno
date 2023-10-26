import { Router } from "express";
import { metod as reservasControler } from "../controller/reservas.controler";

const router = Router();

router.post("/", reservasControler.getReservas); //select * from
router.post("/insert", reservasControler.addReservas); // inster into  tbl
router.put("/update", reservasControler.updateReservas);// update tbl 
router.put("/delete", reservasControler.deleteReservas);// update estado 0




export default router;
