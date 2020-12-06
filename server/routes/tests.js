const express = require("express");

const Tests = require("../controllers/tests");

const router = express.Router();

router.post("/", Tests.Create);
router.get("/:id", Tests.Get);
router.patch("/:id", Tests.Update);
router.delete("/:id", Tests.Delete);
router.get("/:id/start", Tests.Generate);

module.exports = router;
 