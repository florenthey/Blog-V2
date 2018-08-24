import User from "./user.model"
import userService from "./user.services"
import jwt from "../../helpers/jwt"

export default {

    async signup(req, res){

        try {
          
            const { errors, isValid } = userService.validateSignup( req.body )
              if(!isValid){
                  return res.status(400).json(errors)
              }
            const encryptedPass = userService.encryptPassword(req.body.password);
            const user = await User.findOne({email: req.body.email})
              if(user) {
                return res.json({email : "L'email existe deja"})
              } else {
                const userRegister = await User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: encryptedPass
                })
            return res.json(userRegister)
          }
        }catch (err){
            console.error(err)
            return res.status(500).send(err)
        }
        return res.json(req.body)
    }
}