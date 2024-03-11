/* model schema to store slaes along with user id in database */
const mongoose = require('mongoose');
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    sales: { 
        type: [{ 
            type: mongoose.Schema.Types.ObjectId, ref: 'Entrydata'
         }],
        default: [] 
    },
});

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
  
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  });

const User = mongoose.model('User',userSchema);
module.exports=User;