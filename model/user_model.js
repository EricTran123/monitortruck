var config = require('../config');
var x = require('../x')(config);
var Schema = x.mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    register_Date: {
        type: Date,
        default: Date.now
    }
});
module.exports = x.mongoose.model('User', userSchema);