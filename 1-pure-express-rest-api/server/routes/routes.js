var router = require("express").Router();
var empCtrl = require("../controllers/empCtrl");

router.get("/",empCtrl.getAllEmployees);
router.post("/",empCtrl.insertEmployee);
router.get("/:id",empCtrl.getEmployeeByID);
router.put("/:id",empCtrl.updateEmployee);
router.delete("/:id",empCtrl.deleteEmployee);

module.exports = router;