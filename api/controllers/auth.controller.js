import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try{
        // //blackbox.ai solution test for rslt not use final
        // // Check if the email already exists
        // const existingUser  = await prisma.user.findUnique({
        //     where: {
        //         email: email,
        //     },
        // });

        // if (existingUser ) {
        //     return res.status(400).json({ message: "Email already exists!" });
        // }

        // // Check if the username already exists
        // const existingUsername = await prisma.user.findUnique({
        //     where: {
        //         username: username,
        //     },
        // });

        // if (existingUsername) {
        //     return res.status(400).json({ message: "Username already exists!" });
        // }
        // //blackbox.ai solution test for rslt not use final

        //HASH THE PASSWORD

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        
        //create a new user an save to DB
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        
        console.log(newUser);
        res.status(201).json({ message: "User created sucessfully" });
    }catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user!" });
    }
};
export const login = async (req,res)=>{
    const { username, password } = req.body;

    try{
      //check if the user exists

      const user = await prisma.user.findUnique({
        where:{username}
      })
    
      if(!user) return res.status(401).json({message:"Invalid Credentials !"});

      //check if the password is correct

      const isPasswordVaid = await bcrypt.compare(password, user.password);
      if(!isPasswordVaid) return res.status(401).json({message: "Invalid Credentails!"})

      //generate cookie token and send to user 

    //   res.setHeader("Set-Cookie", "test=" + "myValue").json("succ ess")
    const age = 1000 * 60 * 60 * 24 * 7
    
    const token = jwt.sign({
        id:user.id
    }, process.env.JWT_SECRET_KEY,
    { expiresIn: age }
    );


    res.cookie("token", token, {
        httpOnly:true,
        // secure:true
        maxAge: age,
    }) 
    .status(200)
    .json({ message: "Login Sucessful" });
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to login!"})        
    }
};
export const logout = (req, res)=>{
    res.clearCookie("token").status(200).json({ message: "Logout Sucessful" });
};   