const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController")

router.get("/",controller.getAll);
router.put("/:id", controller.putTarefa);
router.get("/:id", controller.getById); 
router.post("/",controller.postTarefa);
router.delete("/", controller.deleteTarefa)
router.delete("/", controller.deleteTarefaConcluida)


module.exports = router;
