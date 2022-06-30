const mongoose = require('mongoose')

const connectDB = (url) =>{
return mongoose
.connect(url)
.then(()=>console.log("Connected to CB"))
.catch((err)=>console.log(err))
}
module.exports = connectDB