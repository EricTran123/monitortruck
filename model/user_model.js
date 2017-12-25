var config = require('../config');
var x = require('../x')(config);
var Schema = x.mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
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

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

//http://doppiaeast.com/article/mean-angular2-jwt-setup/
module.exports = x.mongoose.model('User', userSchema);