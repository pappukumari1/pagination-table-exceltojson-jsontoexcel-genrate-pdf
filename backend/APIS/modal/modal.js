const mongoose = require("mongoose");
const { convertJsonToExal } = require("../midelware");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  city: String,
 
});
const userData = mongoose.model("user", userSchema);

const postData = async (obj) => {
  try {
    console.log("obj", obj);
    const data = await userData.create(obj);
    return { data, status: 200, messase: "data added succesfully" };
  } catch (error) {
    return { message: error.message, status: 400 };
  }
};
const getData = async (page, size) => {
  try {
    const data = await userData.find().skip(page).limit(size);
    let length = await userData.count();
    return { data, page, length, message: "data get succesfullt", status: 200 };
  } catch (error) {
    return { message: error.message, status: 400 };
  }
};

const jsonToExalGetData = async (page, size) => {
  try {
    const temp = await userData.find().skip(page).limit(size);
    console.log("json data==", temp);
    const data = await convertJsonToExal(temp);
    console.log("data==convert", data);
    return { data, page, message: "data converted succesfullt", status: 200 };
  } catch (error) {
    return { message: error.message, status: 400 };
  }
};
const postFileAndData = async (body) => {
  console.log("body==", body);
  try {
    const data = await userData.create(body);
    console.log("modal data==", data);
    return { data, message: "file uploaded succesfully", status: 200 };
  } catch (error) {
    return { message: error.message, status: 400 };
  }
};
module.exports = { postData, getData, jsonToExalGetData,postFileAndData };
