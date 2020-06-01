const mongoose = require("mongoose");
//connection to mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("data base connected");
  })
  .catch((e) => {
    console.log(e.message);
  });
