import Profil from "./profil.model"
import User from "../users/user.model"

export default {

        async findLogedUser(req, res){
                try{
                  const profil = await Profil.findOne({user: req.user.id})
                  .populate("user", ["firstName", "lastName"])
                    if(!profil){
                        return res.status(404).json({err:'Pas la peine de créer un profil'})
                    }
                  return res.json(profil)
                }catch (err){
                  console.error(err)
                  return res.status(500).send(err)
                }
        },

        async create(req, res){

                try{
                  const profileFields = {}
                  profileFields.user = req.user.id

                    if (req.body.phone) profileFields.phone = req.body.phone
                        
                      Profil.findOne({ user: req.user.id })
                        .then(profil => {

                          if (profil) {
                            Profil.findOneAndUpdate(
                            { user: req.user.id },
                            { $set: profileFields },
                            { new: true }
                            )
                              .then(profil => res.json(profil));

                          } else {
                            Profil.findOne({ nom: profileFields.email }).then(profil => {
                              if (profil) { errors.email = 'Ce profil avec ces informations existe déjà';
                              res.status(400).json(errors);
                              }
                                    
                              new Profil(profileFields).save().then(profil => res.json(profil));
                            });
                          }
                        })

                } catch (err){
                  console.error(err)
                  return res.status(500).send(err)
                }
        },

        async delete(req, res){
                try{
                  Profil.findOneAndRemove({user: req.user.id})
                    .then(() => {
                      User.findOneAndRemove({_id: req.user.id})
                        .then(() => {
                          res.json({success: true})
                        })
                    })
                } catch (err){
                    console.error(err)
                    return res.status(500).send(err)
                }
          }
}