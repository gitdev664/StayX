require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(url);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6aa3a70b8a4fa626bad04402",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
