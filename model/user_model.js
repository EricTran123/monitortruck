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
    password:{
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

userSchema.pre('save', function(next){
    var user = this,
    if (this.isModified('password')|| this.new){
        x.bcrypt.genSalt(10, function(err, salt){
            if (err){
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if (err){
                    return next(err);
                } else{
                    user.password = hash;
                    next();
                }
            })
        })
    } else{
        return next();
    }
});

userSchema.methods.comparePassword = function(passw, cb){
    x.bcrypt.compare(passw, this.password, function(err, isMatch){
        if (err){
            return cb(err);
        } else {
            cb(null, isMatch);
        }
    });
};
module.exports = x.mongoose.model('User', userSchema);