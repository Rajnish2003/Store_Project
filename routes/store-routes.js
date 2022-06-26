const express = require("express");
const router = express.Router();
const store = require("../model/store")
const storescontroller = require("../controllers/stores-controller")

router.get("/",storescontroller.getAllstores);
router.post("/",storescontroller.addstores);
router.get("/:id",storescontroller.getById);
router.put("/:id",storescontroller.updateproduct);
router.delete("/:id",storescontroller.deleteproduct);

module.exports = router;