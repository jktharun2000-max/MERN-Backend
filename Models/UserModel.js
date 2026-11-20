const Mngoose = require("mongoose");

const UserSchema = new Mngoose.Schema({
username:{type: String, required: true},
password:{type: String, required: true},
show:{type: String, required: true},
error:{type: String, required: true},
setUser:{type: String, required: true},
})

module.exports = Mngoose.model("User", UserSchema);