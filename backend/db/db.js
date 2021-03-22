const mongoose = require('mongoose');

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log(`MongoDB connect: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = ConnectDB;
