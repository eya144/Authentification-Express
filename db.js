const Mongoose = require("mongoose");

const DBLINK = `mongodb+srv://eya:lwsNCKZ2iTRWqW68@cluster0.tivps.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;