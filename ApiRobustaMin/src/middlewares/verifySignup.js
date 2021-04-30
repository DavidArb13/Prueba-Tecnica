//si ya existe   validator
import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkDuplicateUserNameOrEmail = async (req, res, next) => {
    const user = await User.findOne({UserName: req.body.UserName});

    if(user) return res.status(400).json({message: 'The user already exists'});

    const email = await User.findOne({Email: req.body.Email});

    if(email) return res.status(400).json({message: 'The email already exists'});

    next();
}

export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for(let i = 0; i< req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({message: `Role ${req.body.roles[i]} does not exists`});
            }
        }
    }
    next();
}