const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title:{
        type:String
    },
    note:{
        type:String
    }


    
})

const noteModel = mongoose.model("Note", NoteSchema)

module.exports = noteModel