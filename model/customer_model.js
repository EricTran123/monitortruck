var config = require('../config');
var x = require('../x')(config);
var Schema = x.mongoose.Schema;
var customerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true

    }
});
module.exports = x.mongoose.model('Customer', customerSchema);