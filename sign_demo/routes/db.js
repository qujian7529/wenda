const mongoose require('mongoose');
const url = '';

mongoose.connect(url);
let db = mongoose.connection;

db.once('open',function(){
	console.log('connection db ok !');

})

let Schema  = mongoose.Schema;



let userSchema = Schema({
	name:String,
	password:String,

})

module.exports.user = mongoose.model('login',userSchema);