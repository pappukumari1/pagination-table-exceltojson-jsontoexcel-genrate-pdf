const express = require("express");
const {
  postController,
  getController,
  getJsonToExalController,
  postFileAndDataController,
} = require("../controller/controller");
const { uploadExcel, converExcelToJson } = require("../midelware");
const router = express.Router();
router.use("/exal", express.static("storage"));
router.post("/post", postController);
router.get("/get", getController);
router.get("/jsonToExal", getJsonToExalController);
router.post(
  "/postFileAndData",
  uploadExcel.single("excel"),
  converExcelToJson,
  postFileAndDataController
);
module.exports = router;
