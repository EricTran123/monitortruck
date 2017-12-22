var config = require('../config');
var x = require('../x')(config);
var Schema = x.mongoose.Schema;
var driverSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    plateNumber: {
        type: String,
        trim: true,
        required: true,
    }
});
module.exports = x.mongoose.model('Driver', driverSchema);