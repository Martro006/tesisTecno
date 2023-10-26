import { Router } from "express";
import { metod as usuarioControler } from "../controller/usuarios.controler";

const router = Router();

router.post('/auth', usuarioControler.autenticacion);// inicio de secion select
router.get("/", usuarioControler.getUsuarios); //select * from
router.post("/insert", usuarioControler.addUsuarios); // inster into  tbl
router.put("/update", usuarioControler.updateUsuarios);// update tbl 
router.put("/delete", usuarioControler.deleteUsuarios);// update estado 0



export default router;
