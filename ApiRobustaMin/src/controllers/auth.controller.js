import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from "../config";
import Role from '../models/Role';

export const signUp = async (req, res) => {

    const { UserName, Password, Email, FirsName, LastName, roles } = req.body;

    const newUser = new User({
        UserName,
        Password: await User.encryptPassword(Password),
        FirsName,
        LastName,
        Email
    });

    if (roles){
        const foundRoles = await Role.find({name: {$in: roles}});
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const role = await Role.findOne({name: "User"});
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser);
    
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 Hours
    });

    res.status(200).json({token})
};
export const signIn = async (req, res) => {
    //populated pobla los roles en formato String 
    const userFound = await User.findOne({Email: req.body.Email}).populate("roles");

    if(!userFound) return res.status(400).json({message: "User not found"});

    const matchPassword = await User.comparePassword(req.body.Password, userFound.Password);
   
    if(!matchPassword) return res.status(401).json({token: null, message: "Invalid Password"});

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    });

    res.json({token})
};