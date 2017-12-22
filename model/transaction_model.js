var config = require('../config');
var x = require('../x')(config);
var Schema = x.mongoose.Schema;
var transactionSchema = new Schema({
    customer: [{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }],
    meterial: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        required: true,
    },
    driver: [{
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    }],
    description: {
        type: String,
        default: ''
    }
});
module.exports = x.mongoose.model('Customer', transactionSchema);