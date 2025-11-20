import mongoose from "mongoose";
import User from '../model/UserModel.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const TOKEN_EXPIRY = '24h';
const JWT_SECRET = 'your_jwt_secret_here';

//REGISTER USER
export async function register(req,res){
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({success: false,
                message: "Please fill all the fields"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false,
                message: "Please enter a valid email address"
            })
        }

        const exists = await User.findOne({email}).lean();
        if(exists) return res.status(409).json({success: false,
            message: "user already exists"
        })

        const newId = new mongoose.Types.ObjectId();
        const hashedpassword = await bcrypt.hash(password, 10);

        const user = new User({
            _id: newId,
            name,
            email,
            password: hashedpassword
        });
        await user.save();

        if(!JWT_SECRET) throw new Error("JWT_SECRET is not defined on server");

    const token = jwt.sign({id: newId.toString(), name: user.name, email: user.email}, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });

        return res.status(201).json({success: true,
            message: "account created successfully",
            token,
            user:{id: user._id.toString(), name: user.name, email: user.email}
        });
    }catch(error){
        console.error("Registration error:", error);
        return res.status(500).json({success: false,
            message: "Server Error"
        });
    }
}

//LOGIN USER
export async function login(req,res){
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({success: false,
                message: "Please fill all the fields"
            });
        }

        const user = await User.findOne({email});
        if(!user) return res.status(401).json({success: false,
            message: "Invalid email or password"
        });

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(401).json({success: false,
            message: "Invalid email or password"
        });

    const token = jwt.sign({id: user._id.toString(), name: user.name, email: user.email}, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });

        return res.status(201).json({success: true,
            message: "Login successfully",
            token,
            user:{id: user._id.toString(), name: user.name, email: user.email}
        });

    }catch(error){
        console.error("Login error:", error);
        return res.status(500).json({success: false,
            message: "Server Error"
        });
    }
}