const User = require("../models/user-model");
const bcrypt = require("bcryptjs")

// *-------
// Home 
// *-------

const home = async (req, res) =>{
    try{
        res.status(200).send("Welcome Everyone! Controller Used!");
    } catch(error){
        // console.log(error);
        next(error);
    }
}; 


// *------------------
//  Registration Logic
// *------------------

const register = async (req, res) =>{
    try{
        console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExists = await User.findOne({ email });

        if(userExists){
            return res.status(400).json({msg: "Email already Exists"});
        }

        // hash the Password
        //One of the ways- but we will do something in user schema: stay tuned!
        // const saltRound = 10;
        // const hashPassword = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ 
            username, 
            email, 
            phone, 
            password, 
        });

        res.status(201).json({ 
            msg: "Registration Successful", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString(), 
        });

    } catch (error){
        next(error);
    }
}

// *------------------
//  login Logic
// *------------------

const login = async (req, res) =>{
    try {
        const { email, password } = req.body;
        
        const userExists = await User.findOne({ email });

        if(!userExists){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        // const user = await bcrypt.compare(password, userExists.password);
        const user = await userExists.comparePassword(password);

        if(user) {
            res.status(201).json({ 
                msg: "Login Successful", 
                token: await userExists.generateToken(), 
                userId: userExists._id.toString(), 
            });
        }else {
            res.status(401).json({msg: "Invalid email or password"});
        }

    } catch (error) {
        // res.status(500).json({msg:"Page not found"});
        next(error);
    }
}


module.exports = { home, register, login }; 