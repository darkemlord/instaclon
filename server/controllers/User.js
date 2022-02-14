const User = require('../models/user')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const awsUploadImage = require('../utils/aws-upload-image')

const createToken = (user, SECRET_KEY, expiresIn) => {
  const {id, name, email, username} = user
  const payload = {
    id,
    name,
    email,
    username
  }
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

const register = async (input) => {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();
  const {email, username, password } = newUser;

  const foundEmail = await User.findOne({ email });
  if(foundEmail) throw new Error('Email already in use');

  const foundUsername = await User.findOne({username });
  if(foundUsername) throw Error('Username already in use');
  //encrypt password

  const salt = await bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);
  try{
    const user = new User(newUser);
    user.save();
    console.log('user saved!')
    return user;
  }catch(err){
    console.log(err)
  }
};
const login = async (input) => {
  const { email, password } = input;
  const userFound = await User.findOne({ email: email.toLowerCase() });
  if(!userFound) throw new Error("Email or password error");
  const passwordSucces = await bcryptjs.compare(password, userFound.password);
  if(!passwordSucces) throw Error("Email or password error");
  return {
    token: createToken(userFound, process.env.SECRET_KEY, "24h"),
  }

}
const getUser = async (id, username) => {
  let user = null;
  if(id) user = await User.findById(id);
  if(username) user = await User.findOne({ username });
  if(!user) throw new Error('the user does not exist');
  return user
}

const updateAvatar = async (file, ctx) => {
  // const { createReadStream, mimetype } = await file;
  // const extension = mimetype.split('/')[1];
  // const imageName = `avatar/avt.${extension}`
  // const fileData = createReadStream();

  // try {
  //   const result = await awsUploadImage(fileData, imageName);
  //   console.log(result)
  // } catch(err) {
  //   return {
  //     status: false,
  //     urlAvatar: null
  //   }
  // }
  console.log(ctx)
  return null
}
module.exports = {
  register, getUser, login, updateAvatar
};
