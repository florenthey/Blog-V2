import mongoose from "mongoose"

const { Schema } = mongoose

const profilSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref:"users"
    },
    phone: {
        type: String,
        required: true,
    },
})

export default mongoose.model("Profil", profilSchema)