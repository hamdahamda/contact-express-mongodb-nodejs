const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // menambah 1 data
// const contact1 = new Contact({
//   nama: "intannn",
//   nohp: "081231233123",
//   email: "intaaaa@gmail.com",
// });

// // simpan ke collection
// contact1.save().then((contact) => console.log(contact));
