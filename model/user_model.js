var config = require('../config');
var x = require('../x')(config);
var Schema = x.mongoose.Schema;
var userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    register_Date: {
        type: Date,
        default: Date.now
    }
});

userSchema.methods.generateHash = function(password) {
    return x.bcrypt.hashSync(password, x.bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
    return x.bcrypt.compareSync(password, this.password);
};

//http://doppiaeast.com/article/mean-angular2-jwt-setup/
module.exports = x.mongoose.model('User', userSchema);