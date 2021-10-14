const NoteModel = require('../models/NoteModel')

const getSingleNote = async(req, res)=>{
    
    try {
        const {id} = req.params;
        const singleNote = await NoteModel.findById(id)
        res.status(200).render('single', {singleNote})
    } catch (error) {
        res.status(500).json({message: `Fail ${error}`, })
    }
    
}

const postSingleNote = (req,res)=>{
    res.status(200).render('new')
}

const createSingleNote = async(req, res)=>{

    try{
        const {title, note} = req.body
        const newNote = new NoteModel({
            title, note
        })
        await newNote.save()
        res.status(201).redirect(`/${newNote._id}`)

    } catch(err){
        res.status(500).json({message: `Fail ${err}`, })
    }
}
const deleteSingleNote = async(req, res)=>{

    try{
        const {id} = req.params;
        const newNote = await NoteModel.findByIdAndDelete(id)
        res.status(201).json({message : "Success"})

    } catch(err){
        res.status(500).redirect('/')
    }
}



module.exports = {getSingleNote, createSingleNote,deleteSingleNote,postSingleNote}