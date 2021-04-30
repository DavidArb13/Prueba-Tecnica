//confirmar que el usuario envia el token  Autorization
import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
    try {
        //recive token
    const token = req.headers["x-access-token"];

    //comprueba no existe
    if(!token) return res.status(403).json({message: "No token Provided"});

    //si existe extrae lo que esta dentro
    const decoded = jwt.verify(token,config.SECRET);
    req.userId = decoded.id;

    //extrae el Id del usuario
    const user = await User.findById(req.userId, {Password: 0});
    
    //se busca al usuario 
    if(!user) return res.status(404).json({message: 'no user found'});

    //continuar si existe
    next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
};

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});

    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === "moderator"){
            next();
            return;
        } 
    }
    return res.status(403).json({message: "Require Moderator Role"});
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});

    for(let i = 0; i < roles.length; i++){
        if(roles[i].name === "admin"){
            next();
            return;
        } 
    }
    return res.status(403).json({message: "Require Admin Role"});
}