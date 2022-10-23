import { Schema, model } from "mongoose";

export default model('Travel', new Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    image: {
        type: String,
        required: true
    },
    descr: {
        type: String,
        required: true
    }
}))