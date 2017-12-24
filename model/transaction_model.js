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
    transportationFee: {
        type: Number,
        required: true
    },
    driver: [{
        type: Schema.Types.ObjectId,
        ref: 'Driver'
    }],
    status:{
        type:[{
            type: String,
            enum:['Pending','On-going','Completed']
        }],
        default: ['Pending']
    },
    description: {
        type: String,
        default: ''
    },
    create_date:{
        type: Date,
        default: Date.now
    },
    update_date:{
        type: Date,
        default: Date.now
    }
});
module.exports = x.mongoose.model('Transaction', transactionSchema);