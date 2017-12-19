var config = require('../config');
var x = require('../x')(config);
var Schema = x.mongoose.Schema;
var truckSchema = new Schema({
    plateNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
});
module.exports = x.mongoose.model('Truck', truckSchema);