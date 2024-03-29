const User = require("../models/User");
const bcrypt = require("bcrypt");


async function getAllUsers(){
  try {
    return await User.find({});
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function getUserById(id){
  try {
    return await User.findById(id);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function createUser(data){
  const hash = await bcrypt.hash(data.password, 10)
  const userData = {...data, password: hash}
  try {
    return await User.create(userData);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function updateUserById(id, data){
  try {
    return await User.findByIdAndUpdate(id, data, { new: true });
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function deleteUserById(id){
  try {
    return await User.findByIdAndDelete(id);
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


async function handleLogin(email, pw){
  let foundUser 

  foundUser = await User.findOne({ email: email })
  if( !foundUser ){
    console.log("couldn't validate email address")
    throw new Error("No user found")
  }

  let isVerified = false
  isVerified = await bcrypt.compare(pw, foundUser.password)
  if( !isVerified ){
    console.log("couldn't validate password")
    throw new Error("Password failed")
  }

  const { password, ...modifiedUser } = foundUser
  return modifiedUser
}

async function getUserByEmail(email){
  try {
    return await User.findOne({email: email});
  } catch(err){
    console.log(err.message)
    throw new Error(err)
  }
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  handleLogin,
  getUserByEmail
}