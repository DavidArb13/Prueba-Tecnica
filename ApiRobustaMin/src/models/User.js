import { Schema, model } from 'mongoose';
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    UserName:{
        type: String,
        unique: true,
        require: [true, "User Name is required"]
    },
    Password: {
        type: String,
        required: [true, "Password is required"]
    },
    FirsName: {
        type: String,
        required: [false, "Firs Name is required"]
    },
    LastName:{
        type: String,
        required: [false, "LastName is required"]
    },
    Email:{
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},  {
    timestamps: true,
    versionKey: false
});
//crear metodos estaticos llamar un metodo sin instanciar un objeto.
userSchema.statics.encryptPassword = async (Password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(Password, salt);
}

userSchema.statics.comparePassword = async (Password, revicedPassword) => {
    return await bcrypt.compare(Password, revicedPassword);
}

export default model('User', userSchema);