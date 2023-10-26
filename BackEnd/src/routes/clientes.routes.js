import { Router } from "express";
import { metod as clientesControler } from "../controller/clientes.controler";

const router = Router();

router.get("/", clientesControler.getClientes); //select * from
router.post("/buscarCli", clientesControler.buscarClientes); //select where
router.post("/insert", clientesControler.addClientes); // inster into  tbl
router.put("/update", clientesControler.updateClientes);// update tbl 
router.put("/delete", clientesControler.deleteClientes);// update estado 0

export default router;
