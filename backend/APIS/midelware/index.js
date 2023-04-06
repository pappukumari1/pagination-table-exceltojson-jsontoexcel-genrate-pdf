const { json } = require("express");
const XLSX = require("xlsx");
const multer = require("multer");
const convertJsonToExal = (students) => {
  console.log("students==", students);
  const workSheet = XLSX.utils.json_to_sheet(
    JSON.parse(JSON.stringify(students))
  );
  const workBook = XLSX.utils.book_new();
  console.log("workSheet==", workSheet);
  console.log("workBook", workBook);
  const book = XLSX.utils.book_append_sheet(workBook, workSheet, "");
  console.log("book==", book);

  XLSX.writeFile(workBook, "storage/studentData.xlsx");
};
const excelStorage = multer.diskStorage({
  destination: (req, file, callback) =>
  {
    callback(null, "./storage");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadExcel = multer({
  storage: excelStorage,
 
});
const converExcelToJson = (req, res, next) => {
  // console.log("req.file=========", req.file.path);
  const workbook = XLSX.readFile(req.file.path);
  // console.log("workbook===", workbook);
  const sheetName = workbook.SheetNames[0];
  // console.log("sheetName===", sheetName);
  const sheetData=XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  // console.log("sheetData====",sheetData);
  const jsonData=JSON.stringify(sheetData);
  // console.log("jsonData===",jsonData);
  const jsonObj=JSON.parse(jsonData);
 
req.data=jsonObj;
  next();
};
module.exports = { convertJsonToExal, uploadExcel, converExcelToJson };
