const { postData, getData, jsonToExalGetData, postFileAndData } = require("../modal/modal");

const postController = async (req, res) => {
  const temp = req.body;
  console.log("temp==", temp);
  const data = await postData(temp);
  res.send(data);
};
const getController = async (req, res) => {
  const getDat = req.query;
  const { page, size } = req.query;
  console.log("getData==", getDat);
  if (!page) {
    page = 1;
  }
  if (!size) {
    size = 2;
  }
  console.log("size", size);
  console.log("page", page);

  const data = await getData(page, size);
  console.log("data==", data);
  res.send(data);
};
const getJsonToExalController = async (req, res) => {
  const getDat = req.query;
  const { page, size } = req.query;
  console.log("getData==", getDat);
  if (!page) {
    page = 1;
  }
  if (!size) {
    size = 2;
  }
  console.log("size", size);
  console.log("page", page);

  const data = await jsonToExalGetData(page, size);
  res.send(data);
};
const postFileAndDataController = async(req, res) => {
  
  const data=await postFileAndData(req.data);
  
  res.send(data);
};
module.exports = {
  postController,
  getController,
  getJsonToExalController,
  postFileAndDataController,
};
