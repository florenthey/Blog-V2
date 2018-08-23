import mongoose from 'mongoose'

const { Schema } = mongoose

const articleSchema = new Schema({
    title: { type: String },
    text: { type: String },
    date: { type: Date, default: Date.now }
})

export default mongoose.model("Article", articleSchema)
