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
    }
}