const mongoose = require('mongoose');
require('dotenv').config( { path: ".env" }); //calling the ENV

const connectDataBase = async () => {
  try{
    await mongoose.connect(process.env.BBDD,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connection success')
  } catch (error) {
    console.log('Connection error')
  }
};

connectDataBase();
