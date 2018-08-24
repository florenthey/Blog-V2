import validator from "validator"
import isEmpty from "../../validation/is-empty"
import bcrypt from "bcryptjs"


export default {
    
    encryptPassword(plainText) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainText, salt);
    },
    comparePassword(plainText, encryptedPassword) {
        return bcrypt.compareSync(plainText, encryptedPassword);
    },

    validateSignup(body){

        let errors = {}

        body.firstName = !isEmpty(body.firstName) ? body.firstName : "";
        body.lastName = !isEmpty(body.lastName) ? body.lastName : "";
        body.email = !isEmpty(body.email) ? body.email : "";
        body.password = !isEmpty(body.password) ? body.password : "";
        body.password2 = !isEmpty(body.password2) ? body.password2 : "";

            if(validator.isEmpty(body.firstName)) {
                errors.firstName = "Ton prénom est requis";
            }
            if(validator.isEmpty(body.lastName)) {
                errors.lastName = "Ton nom de famille est requis";
            }
            if(!validator.isEmail(body.email)) {
                errors.email = "Ton adresse mail est requise";
            }
            if(validator.isEmpty(body.email)) {
                errors.email = "Ton email est requis.";
            }
            if(validator.isEmpty(body.password)) {
                errors.password = "Un mot de passe est requis";
            }
            if(validator.isEmpty(body.password2)) {
                errors.password2 = "Confirme ton mot de passe";
            }
            if(!validator.equals(body.password, body.password2)) {
                errors.password2 = "Tes mots ne passe de sont pas identiques.";
            }

                return {
                    errors,
                    isValid: isEmpty(errors)
                }
    },
}
