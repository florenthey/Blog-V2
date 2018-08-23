import Article from "./article.model"


export default{

    async create(req, res){

        try{
            
            const {value, error} = (req.body, Article)
              if(error && error.details){
                  return res.status(400).json(error)
              }
              const article = await Article.create({
                  title: req.body.title,
                  text: req.body.text,
                 // date: req.body.date
              })
              return res.json(article)
        } catch(err){
            console.error(err)
            return res.status(500).send(err)
        }
    },

    async findAll(req, res){

        try{
       
            const articles = await Article.find({})
              if(!articles){
                  return res.status(404).json({err:"Les articles sont introuvables, petit scarabée..."})
              }
              return res.json(articles)

        } catch(err){
            console.error(err)
            return res.status(500).send(err)
        }
    },

    async findOne(req, res){

        try{
            const { id } = req.params
            const article = await Article.findById(id)
              if(!article){
                return res.status(404).json({err:"Cet article est introuvable, petit scarabée..."}) 
              }
              return res.json(article)
        } catch(err){
            console.error(err)
            return res.status(500).send(err)
        }
    },

    async update(req, res){

        try{
            
            const { id } = req.params
            const article = await Article.findOneAndUpdate({_id:id}, req.body, { new: true })
             if(!article){
                 return res.status(404).json({err: "article introuvable, petit scarabée..."})
             }    
              return res.json(article)
        } catch(err){
            console.error(err)
            return res.status(500).send(err)
        }
    },

    async delete(req, res){

        try{

            const { id } = req.params
            const article = await Article.findOneAndRemove({_id:id})
              if(!article){
                  return res.status(404).json({err: "article introuvable, petit scarabée..."})
              }
              return res.json(article)
        } catch(err){
            console.error(err)
            return res.status(500).send(err)
        }
    }
}
